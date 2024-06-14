import ShowView from "@/views/operations/show";
import db from "@/modules/db";
import {getUserIdFromToken} from "@/modules/auth";
import {getUserById} from "@/modules/user";
import {toast} from "react-toastify";
import Link from "next/link";
import {signout} from "@/modules/actions";
import Button from "@/components/Primitives/Button";
import React from "react";

export default async function Controller() {
    const userId = await getUserIdFromToken();
    const user = await getUserById(userId);

    if (user.role !== 'admin') {
        return (
            <div className='text-center'>
                Vous n&apos;êtes pas administrateur.
                <Link className='block m-20' href="/menu">
                    <Button className="">Menu</Button>
                </Link>
                <form className="m-20" action={signout}>
                    <Button className="border-2 border-red-500">Deconnecter</Button>
                </form>
            </div>
        )
    }
    const operations = await db.operation.findMany({
        include: {
            item: {
                include: {
                    article: {
                        include: {
                            type: true,
                        }
                    },
                }
            },
            user: {
                include: {
                    service: true,
                }
            },
            manager: true,
            bcoulage: true,
        }
    });

    const data = operations.map((operation) => ({
        id: operation.id,
        date: operation.createdAt.toLocaleDateString('fr-FR'),
        code: operation.item.code,
        article: operation.item.article.label,
        type: operation.item.article.type.label,
        user: operation.user.fullName,
        service: operation.user.service.label,
        matricule: operation.matricule,
        manager: operation.manager.label,
        shift: operation.shift,
        ncoulee: operation.ncoulee,
        bcoulage: operation.bcoulage?.label,
        error: operation.error,
    }))

    return <ShowView data={data}/>
}
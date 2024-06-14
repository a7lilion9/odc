import ShowView from "@/views/operations/show";
import db from "@/modules/db";
import {getUserIdFromToken} from "@/modules/auth";
import {getUserById} from "@/modules/user";
import {toast} from "react-toastify";

export default async function Controller() {
    const userId = await getUserIdFromToken();
    const user = await getUserById(userId);

    if (user.role !== 'admin') {
        return <div>Vous n$apos;êtes pas administrateur.</div>
    }
    const operations = await db.operation.findMany({
        include: {
            item: true,
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
        user: operation.user.fullName,
        service: operation.user.service.label,
        matricule: operation.matricule,
        manager: operation.manager.label,
        shift: operation.shift,
        ncoulee: operation.ncoulee,
        bcoulage: operation.bcoulage?.label,
        error: operation.error,
    }))

    return <ShowView data={data} />
}
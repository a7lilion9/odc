'use client'
import React from "react";
import {black} from "next/dist/lib/picocolors";
import {signout} from "@/modules/actions";
import Button from "@/components/Primitives/Button";

function incl($a: string, $b: string) {
    return $a?.toLowerCase().includes($b?.toLowerCase());
}

export default function ShowView({data}) {
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        console.log(data.length);
    }, [data.length]);

    function handleChange(e: any) {
        setSearch(e.target.value);
    }

    return (
        <>
            <div className="flex justify-around mt-8">
                <input placeholder='Rechercher' style={{color: "black", padding: "4px 8px", borderRadius: "4px"}}
                       type='text' name='search' id='search' onChange={handleChange}
                       value={search}/>
                <form action={signout}>
                    <button className="border-2 p-2 border-red-500">Deconnecter</button>
                </form>
            </div>
            <table className="table-auto mt-8 ml-0">
                <thead>
                <tr className="border border-white">
                    <th>Date</th>
                    <th>Code</th>
                    <th>Article</th>
                    <th>Famille</th>
                    <th>Utilisateur</th>
                    <th>Service</th>
                    <th>Matricule</th>
                    <th>Chef de Secteur</th>
                    <th>Shift</th>
                    <th>NCoulee</th>
                    <th>Banc Coulage</th>
                    <th>Etat</th>
                </tr>
                </thead>
                <tbody>
                {data.filter(e =>
                    incl(e.code, search) ||
                    incl(e.date, search) ||
                    incl(e.article, search) ||
                    incl(e.type, search) ||
                    incl(e.user, search) ||
                    incl(e.service, search) ||
                    incl(e.matricule, search) ||
                    incl(e.manager, search) ||
                    incl(e.shift, search) ||
                    incl(e.ncoulee, search) ||
                    incl(e.bcoulage, search) ||
                    incl(e.error, search))
                    .map(e => (
                        <tr key={e.id}>
                            <td>{e.date}</td>
                            <td>{e.code}</td>
                            <td>{e.article}</td>
                            <td>{e.type}</td>
                            <td>{e.user}</td>
                            <td>{e.service}</td>
                            <td>{e.matricule}</td>
                            <td>{e.manager}</td>
                            <td>{e.shift}</td>
                            <td>{e.ncoulee}</td>
                            <td>{e.bcoulage}</td>
                            <td>{e.error ?? 'Bon'}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
'use client'
export default function ShowView({data}) {
    return (
        <table className="table-auto mt-8 ml-0">
            <thead>
            <tr className="border border-white">
                <th>Date</th>
                <th>Code</th>
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
            {data.map(e => (
                <tr key={e.id}>
                    <td>{e.date}</td>
                    <td>{e.code}</td>
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
    )
}
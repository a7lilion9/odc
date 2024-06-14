import Select from "@/components/Primitives/Select";
import Container from "@/components/Primitives/Container";
import RebutCoulage from "@/views/rebut/RebutCoulage";

export default function Page({searchParams}) {

    const urlParams = new URLSearchParams(searchParams).toString();

    console.log(urlParams);

    const data = [
        {id: '1', label: 'Gerce'},
        {id: '2', label: 'Deformation'},
        {id: '3', label: 'Mal Faite'},
        {id: '4', label: 'Coup Coulage'},
        {id: '5', label: 'Mal Vide'},
        {id: '6', label: 'Probleme Moule'},
        {id: '7', label: 'Autre'},
    ]

    return (
        <RebutCoulage data={data} title={searchParams.error} urlParams={urlParams} />
    )
}
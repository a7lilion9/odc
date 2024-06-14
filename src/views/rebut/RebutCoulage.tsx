'use client'

import Select from "@/components/Primitives/Select";
import Container from "@/components/Primitives/Container";
import Button from "@/components/Primitives/Button";
import Link from "next/link";
import React from "react";

export default function RebutCoulage({data, title, urlParams}) {
    const [error, setError] = React.useState('');
    return (
        <Container>
            <form className='flex flex-col items-center'>
                <select
                    onChange={(e) => setError(e.target.value)}
                    value={error}
                    className="bg-[#016db5] border-b-2 py-2 w-80 outline-none uppercase my-2 text-[1rem]"
                >
                    {data?.map((e) => (
                        <option className="bg-[#016db5]" key={e.id} value={e.id}>
                            {e.id} - {e.label}
                        </option>
                    ))}
                </select>
                <Link className='mt-8' href={`/scan?${urlParams}-${error}`}><Button>Scanner</Button></Link>
            </form>
            <Button className="mt-8" onClick={() => window.history.back()}>
                Retour
            </Button>
        </Container>
    )
}
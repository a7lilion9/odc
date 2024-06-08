"use client";

import Link from "next/link";
import Container from "../Primitives/Container";
import Button from "../Primitives/Button";
import Select from "../Primitives/Select";
import React from "react";
import { preScanAction } from "@/modules/actions";

const CoulagePreScan = ({ data }) => {
  const [type, setType] = React.useState("");
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    setArticles(data.articleTypes.find((v) => v.id === type)?.articles);
  }, [type]);

  return (
    <Container>
      <form
        action={preScanAction}
        className="flex flex-col items-center justify-center"
      >
        <Link href="/coulage">
          <Button>Coulage</Button>
        </Link>
        <Select
          required={true}
          name="matricule"
          data={data.matricules}
          title="Matricule"
        />
        <Select required={true} name="shift" data={data.nposts} title="Shift" />
        <Select
          required={true}
          name="ncoulee"
          data={data.ncoulees}
          title="N-Coulee"
        />
        <Select
          required={true}
          name="type"
          data={data.articleTypes}
          title="Famille"
          onChange={(e) => {
            setType(e.target.value);
            console.log("here");
          }}
        />
        <Select
          required={true}
          name="article"
          data={articles}
          title="Article"
        />
        <Select
          required={true}
          name="bcoulage"
          data={data.bcoulage}
          title="Banc de Coulage"
        />

        {/* /coulage/scan?matricule=x&shift=x&ncoulee=x&type=x&famille=x&article=x&bcoulage=x */}
        <Button className="mt-4">Scanner</Button>
      </form>
    </Container>
  );
};

export default CoulagePreScan;

"use client";

import Link from "next/link";
import Container from "../Primitives/Container";
import Button from "../Primitives/Button";
import Select from "../Primitives/Select";
import React from "react";

const CoulagePreScan = ({ data }) => {
  const [type, setType] = React.useState("");
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    setArticles(data.articleTypes.find((v) => v.id === type)?.articles);
  }, [type]);

  return (
    <Container>
      <Link href="/coulage">
        <Button>Coulage</Button>
      </Link>
      <Select name="matricule" title="Matricule" />
      <Select name="shift" data={data.nposts} title="Shift" />
      <Select name="ncoulee" data={data.ncoulees} title="N-Coulee" />
      <Select
        name="type"
        data={data.articleTypes}
        title="Famille"
        onChange={(e) => {
          setType(e.target.value);
          console.log("here");
        }}
      />
      <Select name="article" data={articles} title="Article" />
      <Select name="bcoulage" data={data.bcoulage} title="Banc de Coulage" />

      {/* /coulage/scan?matricule=x&shift=x&ncoulee=x&type=x&famille=x&article=x&bcoulage=x */}
      <Link href="/coulage/scan">
        <Button className="mt-4">Scanner</Button>
      </Link>
    </Container>
  );
};

export default CoulagePreScan;

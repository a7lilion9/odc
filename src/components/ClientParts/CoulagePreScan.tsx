"use client";

import Link from "next/link";
import Container from "../Primitives/Container";
import Button from "../Primitives/Button";
import Select from "../Primitives/Select";

const CoulagePreScan = () => {
  return (
    <Container>
      <Link href="/coulage">
        <Button>Coulage</Button>
      </Link>
      <Select title="Matricule" />
      <Select title="Poste de travail" />
      <Select title="N-Coulee" />
      <Select title="Code Article" />
      <Select title="Banc de Coulage" />

      <Link href="/coulage/scan">
        <Button className="mt-4">Scanner</Button>
      </Link>
    </Container>
  );
};

export default CoulagePreScan;

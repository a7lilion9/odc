"use client";

import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import Link from "next/link";
import React from "react";

const CoulageScan = () => {
  const [code, setCode] = React.useState("");
  const [codes, setCodes] = React.useState([]);

  React.useEffect(() => {
    document.addEventListener("keypress", (e) => {
      setCode((key) => key + e.key);
    });
  }, []);

  React.useEffect(() => {
    if (code.length === 8) {
      setCodes([...codes, code]);
      setCode("");
    }
  }, [code]);

  return (
    <Container>
      <p>code: {code}</p>
      <Link className="mt-8" href="/coulage/pre-scan">
        <Button>Retour</Button>
      </Link>
      <div>
        {codes.map((code) => (
          <p key={code}>{code}</p>
        ))}
      </div>
    </Container>
  );
};

export default CoulageScan;

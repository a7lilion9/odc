"use client";

import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import { sendOperation } from "@/modules/actions";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const CoulageScan = ({ searchParams }) => {
  const [code, setCode] = React.useState("");
  const [codes, setCodes] = React.useState([]);

  const notify = () =>
    toast(`Code ${code} has been sent successfully`, {
      type: "success",
    });

  React.useEffect(() => {
    document.addEventListener("keypress", (e) => {
      setCode((key) => key + e.key);
    });
  }, []);

  React.useEffect(() => {
    console.log(searchParams);
    if (code.length === 8) {
      setCodes([...codes, code]);
      sendOperation(code);
      notify();
      setCode("");
    }
  }, [code]);

  return (
    <Container>
      <Link className="mt-8" href="/coulage/pre-scan">
        <Button>Retour</Button>
      </Link>
    </Container>
  );
};

export default CoulageScan;

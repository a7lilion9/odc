"use client";

import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const CoulageScan = () => {
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
    if (code.length === 8) {
      setCodes([...codes, code]);
      notify();
      setCode("");
    }
  }, [code]);

  return (
    <Container>
      <p className="py-4 px-8 border-2 border-white">Scan Ici</p>
      <Link className="mt-8" href="/coulage/pre-scan">
        <Button>Retour</Button>
      </Link>
    </Container>
  );
};

export default CoulageScan;

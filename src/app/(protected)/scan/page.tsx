"use client";

import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import { sendOperation } from "@/modules/actions";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import {revalidatePath} from "next/cache";

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
      sendOperation(code, searchParams);
      notify();
      setCode("");
    }
  }, [code]);

  return (
    <Container>
      <Button className="mt-8" onClick={() => window.history.back()}>
        Retour
      </Button>
    </Container>
  );
};

export default CoulageScan;

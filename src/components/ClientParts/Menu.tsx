"use client";

import Link from "next/link";
import Container from "../Primitives/Container";
import Button from "../Primitives/Button";
import { signout } from "@/modules/actions";
import React from "react";

const Menu = ({ user }) => {
  React.useEffect(() => {
    console.log("hello", user.role);
  }, []);
  return (
    <Container>
      <Link href="/coulage">
        <Button disabled={user?.role !== "coulage-user"}>Coulage</Button>
      </Link>
      <Button disabled={user?.role !== "emaillage-user"}>Emaillage</Button>
      <Button disabled={user?.role !== "cuisson-user"}>Cuisson</Button>
      <Button disabled={user?.role !== "triage-user"}>Triage</Button>
      <Button disabled={user?.role !== "inspection-user"}>Inspection</Button>
      <form className="absolute bottom-2" action={signout}>
        <Button className="border-2 border-red-500">Deconnecter</Button>
      </form>
      <div className="mt-8"></div>
    </Container>
  );
};

export default Menu;

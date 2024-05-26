"use client";

import React from "react";
import Button from "../primitives/Button";
import Input from "../primitives/Input";

export default function Scan() {
  const [code, setCode] = React.useState("");

  return (
    <form className="flex flex-col">
      <Input
        onChange={(e) => {
          setCode(e.target.value);
        }}
        type="text"
        id="code"
        label="scanner le code"
        className=""
      />
      <div className="m-8"></div>
      {code.length > 5 && (
        <div className="flex justify-center gap-2">
          <Button href="" className="w-1/2 flex justify-center bg-green-300">
            Bon
          </Button>
          <Button href="" className="w-1/2 flex justify-center bg-red-600">
            Rebut
          </Button>
        </div>
      )}
    </form>
  );
}

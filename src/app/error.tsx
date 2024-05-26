"use client";

import Button from "@/components/primitives/Button";

export default function error({ error }) {
  return (
    <div>
      <form className="w-screen h-screen p-2 flex flex-col gap-10 justify-center bg-red-500 text-white">
        <div className="shadow-lg p-4 border">{error.message}</div>
        <Button className="border-2 border-white flex justify-center" href="">
          Accueil
        </Button>
      </form>
    </div>
  );
}

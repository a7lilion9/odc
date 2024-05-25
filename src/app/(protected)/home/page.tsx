import Button from "@/components/primitives/Button";
import Header from "@/components/primitives/Header";
import Main from "@/components/primitives/Main";

import { CiBarcode } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { FaUserPlus } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <div className="flex gap-2 flex-col">
        <Button href="" className="">
          <VscGraph />
          <span className="mx-auto">Statistique</span>
        </Button>
        <Button
          href="/select-article"
          className="bg-sky-300 flex gap-2 items-center"
        >
          <CiBarcode className="text-2xl" />
          <span className="mx-auto">Scan</span>
        </Button>
      </div>
      <Button href="" className="bg-gray-700 text-white">
        <FaUserPlus />
        <span className="mx-auto">Créer un Utilisateur</span>
      </Button>
    </>
  );
}

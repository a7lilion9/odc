import Button from "@/components/primitives/Button";
import Combobox from "@/components/primitives/Combobox";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <form className="flex flex-col">
        <Combobox required={true} title="Famille" />
        <Combobox required={true} title="Article" />
        <div className="m-12"></div>
        <div className="flex justify-center gap-2">
          <Button href="/home" className="bg-gray-300 w-1/2">
            <FaArrowAltCircleLeft />
            <span className="mx-auto">Retour</span>
          </Button>
          <Button href="" className="bg-sky-300 w-1/2 flex justify-center">
            <span className="">Suivant</span>
            <FaArrowAltCircleRight />
          </Button>
        </div>
      </form>
      <footer></footer>
    </>
  );
}

import { selectError } from "@/modules/actions";
import Button from "../primitives/Button";
import Combobox from "../primitives/Combobox";

export default function ErrorSelection({ errors }) {
  return (
    <form action={selectError}>
      <Combobox id="error" data={errors} title="Erreur" required={true} />
      <div className="my-6"></div>
      <div className="flex gap-2">
        <Button href="/scan" className="bg-gray-300 w-1/2 flex justify-center">
          Quitter
        </Button>
        <Button href="" className="bg-sky-300 w-1/2 flex justify-center">
          Sélectionner
        </Button>
      </div>
    </form>
  );
}

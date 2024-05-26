import Button from "@/components/primitives/Button";
import { confirmError } from "@/modules/actions";

export default function Page() {
  return (
    <>
      <form action={confirmError}>
        <p className="p-4 text-center font-bold underline text-xl">
          Voulez-vous continuer ?
        </p>
        <div className="m-6"></div>
        <div className="flex gap-2">
          <Button href="" className="w-1/2 bg-green-300 flex justify-center">
            Oui
          </Button>
          <Button
            href="/error-selection"
            className="w-1/2 bg-red-600 justify-center"
          >
            Non
          </Button>
        </div>
      </form>
      <footer></footer>
    </>
  );
}

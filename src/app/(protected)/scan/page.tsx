import Form from "@/components/Forms/Scan";
import Button from "@/components/primitives/Button";
import { protect } from "@/modules/auth";
import { getErrorByServiceId } from "@/modules/error";
import { getUserById } from "@/modules/user";

export default async function Page() {
  return (
    <>
      <Form />
      <footer className="flex justify-end gap-2">
        <Button href="/select-article" className="bg-gray-300 text-sm w-1/2">
          Retour
        </Button>
        <Button href="/home" className="bg-sky-300 text-sm w-1/2">
          Acceuil
        </Button>
      </footer>
    </>
  );
}

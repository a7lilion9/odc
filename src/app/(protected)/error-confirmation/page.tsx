import Button from "@/components/primitives/Button";

export default function Page() {
  return (
    <>
      <div>
        <p className="p-4 text-center bg-gray-300 border-2 border-gray-800 rounded-lg">
          Voulez-vous continuer ?
        </p>
        <div className="m-6"></div>
        <div className="flex gap-2">
          <Button href="" className="w-1/2 bg-green-300 flex justify-center">
            Oui
          </Button>
          <Button href="" className="w-1/2 bg-red-600 justify-center">
            Non
          </Button>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

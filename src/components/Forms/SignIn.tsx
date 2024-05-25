import { signin } from "@/modules/actions";

export default function Form({ children }) {
  return (
    <form action={signin} className="w-full flex flex-col justify-center gap-2">
      {children}
    </form>
  );
}

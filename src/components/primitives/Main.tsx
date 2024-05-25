import { cn } from "@/modules/utils";

export default async function Main({ children, className }) {
  return (
    <main
      className={cn(
        "text-lg bg-sky-200 w-screen h-screen items-stretch flex flex-col gap-2 p-2",
        className
      )}
    >
      {children}
    </main>
  );
}

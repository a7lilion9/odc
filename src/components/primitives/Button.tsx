import { cn } from "@/modules/utils";
import Link from "next/link";

export default function Button({ children, className, href }) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "border-2 py-2 border-black font-bold flex gap-2 justify-center  items-center",
          className
        )}
      >
        <button className="flex justify-center items-center gap-2">
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={cn(
        "border-2 py-2 border-black font-bold flex gap-2 justify-start pl-1 items-center",
        className
      )}
    >
      {children}
    </button>
  );
}

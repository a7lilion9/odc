import { cn } from "@/modules/utils";
import Link from "next/link";

export default function Button({
  children,
  className,
  href,
  onClick,
}: {
  children;
  className;
  href;
  onClick?: any;
}) {
  if (href) {
    return (
      <Link href={href} className={cn("", className)}>
        <button
          onClick={onClick}
          className={cn(
            "border-2 py-2 border-black font-bold w-full flex justify-center items-center gap-2 pl-1",
            className
          )}
        >
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

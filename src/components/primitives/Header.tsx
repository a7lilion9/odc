import { cn } from "@/modules/utils";
import { Dancing_Script } from "next/font/google";
import Block from "./Block";

const font = Dancing_Script({ weight: "700", subsets: ["latin"] });

export default function Header({ type }) {
  if (type === "sign-in") {
    return (
      <div className="w-full h-1/4 bg-sky-50 flex flex-col justify-between items-center p-1">
        <h1 className={cn("text-5xl font-bold text-sky-500", font.className)}>
          Odyssée
        </h1>
        <p className="text-sm text-sky-800/90">Sanitaire, Cuisine & Dressing</p>
        <Block>Bienvenue</Block>
      </div>
    );
  } else {
    return (
      <div className="w-1/3 h-full bg-sky-50 flex flex-col justify-around items-center p-1">
        <h1 className={cn("text-3xl font-bold text-sky-500", font.className)}>
          Odyssée
        </h1>
      </div>
    );
  }
}

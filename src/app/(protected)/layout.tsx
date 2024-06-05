import { Pinyon_Script, Roboto_Condensed } from "next/font/google";
import { cn } from "@/modules/utils";

const title = Pinyon_Script({ weight: ["400"], subsets: ["latin"] });
const subtitle = Roboto_Condensed({ weight: ["400"], subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <div>
      <header className="flex justify-end pr-12 pt-4">
        <div>
          <h1 className={cn(title.className, "text-4xl")}>Odyssée</h1>
          <h2
            className={cn(
              subtitle.className,
              "relative left-11 bottom-2 text-[8px]"
            )}
          >
            Sanitaire, Cuisine & Dressing
          </h2>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

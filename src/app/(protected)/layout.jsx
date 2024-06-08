import { Pinyon_Script, Roboto_Condensed } from "next/font/google";
import { cn } from "@/modules/utils";
import { protect } from "@/modules/auth";
import Container from "@/components/Primitives/Container";
import Link from "next/link";
import Button from "@/components/Primitives/Button";

const title = Pinyon_Script({ weight: ["400"], subsets: ["latin"] });
const subtitle = Roboto_Condensed({ weight: ["400"], subsets: ["latin"] });

const Layout = async ({ children }) => {
  const data = await protect();
  if (data.status === "error") {
    return (
      <Container>
        <p>{data.message}</p>
        <Link href="/">
          <Button>Sign In</Button>
        </Link>
      </Container>
    );
  }

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

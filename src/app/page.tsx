import { CgProfile } from "react-icons/cg";
import { Pinyon_Script, Roboto_Condensed } from "next/font/google";
import { cn } from "@/modules/utils";

const title = Pinyon_Script({ weight: ["400"], subsets: ["latin"] });
const subtitle = Roboto_Condensed({ weight: ["400"], subsets: ["latin"] });

export default async function Page() {
  return (
    <div>
      <header className="flex justify-center mt-4">
        <div>
          <h1 className={cn(title.className, "text-8xl")}>Odyssée</h1>
          <h2 className={cn(subtitle.className, "relative left-28 bottom-4")}>
            Sanitaire, Cuisine & Dressing
          </h2>
        </div>
      </header>
      <section className="flex flex-col items-center mt-20">
        <CgProfile className="text-9xl" />
        <h1 className="my-10 text-4xl">Welcome !</h1>
        <form>
          <input
            type="text"
            required={true}
            placeholder="Username"
            className="outline-none border-b-2 placeholder:text-white bg-[#016db5] p-2"
          />
          <div className="my-4"></div>
          <input
            type="text"
            required={true}
            placeholder="Password"
            className="outline-none border-b-2 placeholder:text-white bg-[#016db5] p-2"
          />
          <button className="block bg-white text-[#016db5] py-2 px-14 rounded-full mx-auto my-14">
            Log in
          </button>
        </form>
      </section>
    </div>
  );
}

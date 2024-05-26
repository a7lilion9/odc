// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Header from "@/components/primitives/Header";
import Main from "@/components/primitives/Main";
import { protect } from "@/modules/auth";
import { getUserById } from "@/modules/user";

export default async function Layout({ children }) {
  const payload = await protect();

  if (!payload) {
    throw Error(
      "Vous n'êtes pas connecté, veuillez essayer de vous connecter."
    );
  }

  return (
    <Main className="bg-sky-50 justify-between">
      <div className="flex h-[50px] flex-row-reverse w-full gap-2 border-b-2 border-sky-500 items-center">
        <Header type="home" />
        <div className="text-sm p-2 flex-1 flex justify-around items-center">
          <p className="h-[40px] text-md bg-sky-200 p-1 rounded-lg flex items-center justify-center font-bold">
            {payload.username}
          </p>
        </div>
        <p className="h-[40px] text-[13px] p-1 rounded-lg underline font-bold">
          Se déconnecter
        </p>
      </div>
      {children}
    </Main>
  );
}

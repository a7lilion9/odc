import Header from "@/components/primitives/Header";
import Main from "@/components/primitives/Main";

export default function Layout({ children }) {
  return (
    <Main className="bg-sky-50 justify-between">
      <div className="flex h-[50px] flex-row-reverse w-full gap-2 border-b-2 border-sky-500">
        <Header type="home" />
        <div className="text-sm p-2 flex-1 flex justify-between items-center">
          <p className="text-md bg-sky-200 p-1 rounded-lg font-bold underline">
            Ahmed
          </p>
        </div>
      </div>
      {children}
    </Main>
  );
}

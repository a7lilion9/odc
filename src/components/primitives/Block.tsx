export default function Block({ children }) {
  return (
    <div className="w-full bg-sky-50 text-sky-900 text-xl flex justify-center items-center h-[50px]">
      {children}
    </div>
  );
}

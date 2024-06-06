import { cn } from "@/modules/utils";

const Button = ({
  children,
  className,
}: {
  children: any;
  className?: any;
}) => {
  return (
    <button
      className={cn(
        "bg-white text-[#016db5] w-56 py-4 rounded-full uppercase hover:bg-gray-300 active:bg-gray-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

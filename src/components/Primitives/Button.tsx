import { cn } from "@/modules/utils";

const Button = ({
  children,
  className,
  onClick,
  disabled,
}: {
  children: any;
  className?: any;
  onClick?: any;
  disabled?: boolean;
}) => {
  if (disabled) {
    return (
      <button
        className={cn(
          "bg-gray-600 text-[#aaa] w-56 py-4 rounded-full uppercase hover:bg-gray-600 active:bg-gray-600",
          className
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={cn(
        "bg-white text-[#016db5] w-56 py-4 rounded-full uppercase hover:bg-gray-300 active:bg-gray-300",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

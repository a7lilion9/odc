import { cn } from "@/modules/utils";

export default function Input({
  id,
  type,
  className,
  label,
  onChange,
  required,
}: {
  id: any;
  type: any;
  className: any;
  label: any;
  onChange?: any;
  required?: any;
}) {
  return (
    <>
      <label htmlFor="id">{label}</label>
      <input
        required={required}
        onChange={onChange}
        id={id}
        name={id}
        className={cn(
          "border-2 px-4 py-2 border-black outline-none",
          className
        )}
        type={type}
      />
    </>
  );
}

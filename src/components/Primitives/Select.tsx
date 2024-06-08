const Select = ({
  name,
  data,
  title,
  onChange,
  value,
}: {
  name: string;
  data?: any;
  title: any;
  onChange?: any;
  value?: any;
}) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className="bg-[#016db5] border-b-2 py-2 w-80 outline-none uppercase my-2 text-xl"
    >
      <option value="">{title}</option>
      {data?.map((e) => (
        <option className="bg-[#016db5]" key={e.id} value={e.id}>
          {e.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

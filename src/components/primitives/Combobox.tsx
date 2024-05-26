export default function Combobox({
  title,
  required,
  data,
  onChange,
  id,
}: {
  title;
  required;
  data;
  onChange?;
  id;
}) {
  return (
    <>
      <select
        id={id}
        required={required}
        onChange={onChange}
        className="bg-sky-50 outline-none w-full border-2 border-black py-2 my-2"
      >
        <option value="">- {title} -</option>
        {data?.map((e) => (
          <option key={e.id} value={e.id}>
            {e.label}
          </option>
        ))}
      </select>
    </>
  );
}

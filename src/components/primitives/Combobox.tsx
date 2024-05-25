export default function Combobox({ title, required }) {
  return (
    <>
      <select
        required={required}
        className="bg-sky-50 outline-none w-full border-2 border-black py-2 my-2"
      >
        <option value="">- {title} -</option>
        <option value="1">Value 1</option>
        <option value="1">Value 1</option>
        <option value="1">Value 1</option>
        <option value="1">Value 1</option>
      </select>
    </>
  );
}

const Select = ({data, title}: {data?: any, title: any}) => {
  return (
    <select className="bg-[#016db5] border-b-2 py-2 w-80 outline-none uppercase my-2 text-xl">
    <option value="">{title}</option>
  </select>
  )
}

export default Select;
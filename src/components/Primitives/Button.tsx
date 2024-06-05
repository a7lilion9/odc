const Button = ({ children }) => {
  return (
    <button className="bg-white text-[#016db5] w-56 py-4 rounded-full mb-14 uppercase hover:bg-gray-300 active:bg-gray-300">
      {children}
    </button>
  );
};

export default Button;

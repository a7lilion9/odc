const Container = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-around py-4 mt-10 h-[calc(100vh-200px)]">
      {children}
    </div>
  );
};

export default Container;

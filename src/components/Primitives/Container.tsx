const Container = ({children}) => {
  return (
    <div className="flex flex-col items-center mt-20 h-[calc(100vh-100px)]">
      {children}
    </div>
  )
}

export default Container;
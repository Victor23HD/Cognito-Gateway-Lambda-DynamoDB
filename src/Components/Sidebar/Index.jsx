function Sidebar({ children }) {
  return (
    <>
      <div className="flex flex-row h-screen w-screen bg-[#000000]">
        <div className="flex flex-col bg-[#121212] h-screen">
          <div className="font-medium text-lg p-4 text-green-500">CRUD > FrutaControl</div>
        </div>
        <div className="text-red-500"> {children} </div>
      </div>
    </>
  );
}

export default Sidebar;

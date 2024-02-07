function Sidebar({ children }) {
  let currentPage = window.location.pathname.split("/").pop();

  return (
    <>
      <div className="flex flex-row h-screen w-screen bg-[#000000]">
        <div className="flex flex-col bg-[#121212] w-1/6 rounded-xl m-2">
          <div className="text-2xl text-center font-medium  p-4 text-green-500">
            - FrutaControl -
          </div>
          <div className="flex flex-col text-lg text-white p-4 w-full space-y-3">
            <button
              className={`p-1 transition duration-300 text-left rounded-lg pl-2 ${
                currentPage === "Create" ? " font-medium ring-2 ring-white" : ""
              }`}
            >
              {" "}
              | Criar 
            </button>
            <button
              className={`p-1 transition duration-300 text-left rounded-lg pl-2  ${
                currentPage === "Read" ? "font-medium ring-2 ring-white" : " hover:ring-2 ring-slate-300"
              }`}
            >
              {" "}
              | Listar 
            </button>
            <button
              className={`p-1 transition duration-300 text-left rounded-lg pl-2  ${
                currentPage === "Update" ? "font-medium ring-2 ring-white" : "hover:ring-2 ring-slate-300"
              }`}
            >
              {" "}
              | Atualizar 
            </button>
            <button
              className={`p-1 transition duration-300 text-left rounded-lg pl-2  ${
                currentPage === "Delete" ? "font-medium ring-2 ring-white" : "hover:ring-2 ring-slate-300"
              }`}
            >
              {" "}
              | Deletar 
            </button>
          </div>
        </div>
        <div className="w-screen h-screen p-2"> {children} </div>
      </div>
    </>
  );
}

export default Sidebar;

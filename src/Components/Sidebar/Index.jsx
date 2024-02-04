function Sidebar({ children }) {
  let currentPage = window.location.pathname.split("/").pop();

  return (
    <>
      <div className="flex flex-row h-screen w-screen bg-[#000000]">
        <div className="flex flex-col bg-[#121212] w-1/6 rounded-xl m-2">
          <div className="text-2xl text-center font-medium  p-4 text-green-500">
            - FrutaControl -
          </div>
          <div className="flex flex-col text-lg text-white p-4 w-full space-y-2">
            <button
              className={`p-1 text-left pl-4 ${
                currentPage === "Create" ? " font-medium border-l-2" : ""
              }`}
            >
              {" "}
              [ Criar ]
            </button>
            <button
              className={` p-1 text-left pl-4${
                currentPage === "Read" ? "font-medium border-l-2" : " "
              }`}
            >
              {" "}
              [ Listar ]
            </button>
            <button
              className={` p-1 text-left pl-4 transition duration-300 hover:border-l-2 ${
                currentPage === "Update" ? "font-medium border-l-2" : ""
              }`}
            >
              {" "}
              [ Atualizar ]
            </button>
            <button
              className={` p-1 text-left pl-4  ${
                currentPage === "Delete" ? "font-medium border-l-2" : ""
              }`}
            >
              {" "}
              [ Deletar ]
            </button>
          </div>
        </div>
        <div className="w-screen h-screen p-2"> {children} </div>
      </div>
    </>
  );
}

export default Sidebar;

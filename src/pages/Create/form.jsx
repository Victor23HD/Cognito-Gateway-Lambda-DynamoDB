function Form() {
  return (
    <div className="text-white m-6">
      <div className="grid grid-cols-2 divide-x-2 divide-white">
        {/* COL 1 */}
        <div className="flex flex-col items-end pr-8 space-y-3">
          <label className=" text-xl text-left w-1/2">Nome</label>
          <input className="text-[#121212] w-1/2 rounded-xl p-1 outline-none" />

          <label className=" text-xl  text-left w-1/2">Tipo</label>
          <input className="text-[#121212] w-1/2 rounded-xl p-1 outline-none" />

          <label className="text-xl  text-left w-1/2">Quantidade</label>
          <input className="text-[#121212] w-1/2 rounded-xl p-1 outline-none" />

          <label className="text-xl  text-left w-1/2">Preço</label>
          <input className="text-[#121212] w-1/2 rounded-xl p-1 outline-none" />
        </div>

        {/* COL 2 */}
        <div className="flex flex-col items-start pl-8 space-y-3">
          <label className=" text-xl  text-left w-1/2">Código</label>
          <input className="text-[#121212] w-1/2 rounded-xl p-1 outline-none" />

          <label className=" text-xl  text-left w-1/2">Vencimento</label>
          <input className="text-[#121212] w-1/2 rounded-xl p-1 outline-none" />

          <label className=" text-xl  text-left w-1/2">Peso por unidade</label>
          <input className="text-[#121212] w-1/2 rounded-xl p-1 outline-none" />

          <label className=" text-xl  text-left w-1/2">Categoria</label>
          <input className="text-[#121212] w-1/2 rounded-xl p-1 outline-none" />
        </div>
       
      </div>
      <div className="items-center text-center m-6">
          <button className="p-1 w-1/2 bg-green-500  rounded-xl font-medium text-md">
            Enviar
          </button>
        </div>
    </div>
  );
}

export default Form;

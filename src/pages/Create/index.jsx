import Fruit from "../../image/frutas-sortidas-e-mistas.jpg";

function Create() {
  return (
    <div className="h-full w-full bg-[#121212] rounded-xl">
      <div className="flex w-full h-2/5  bg-green-600 bg-opacity-90 inset-0 backdrop-blur-2xl rounded-b-xl">
        
        <div className="flex w-full m-8">
          <div
            className="w-1/5 h-[90%] bg-cover rounded-lg mt-auto shadow-2xl"
            style={{
              backgroundImage: `url(${Fruit})`,
            }}
          ></div>
          <div className="flex flex-col text-white mt-auto">
            <div className="text-lg font-serif pl-7">Criar</div>
            <div className="text-7xl font-bold pl-6">Frutas</div>
            <div className="text-base font-medium pl-7">Victor Caporici - 60 Frutas</div>
          </div>
        </div>
      </div>
      <div>aaa</div>
    </div>
  );
}

export default Create;

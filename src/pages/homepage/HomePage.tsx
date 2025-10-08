import Header from "../../components/homepage/header/Header";
import RenderZone from "../../components/homepage/renderZone/RenderZone";

function HomePage() {




  return (
    <div className="flex flex-col h-full p-2 gap-1">
      
      <div className=" h-[8%] flex items-center justify-center">
       <Header/>
      </div>

      {/* Fila 2 - Selectores de tags */}
      <div className="border border-gray-400 h-[8%] overflow-x-auto flex items-center">
        Tags
      </div>

      {/* Fila 3 - Barra de búsqueda */}
      <div className="border border-gray-400 h-[8%] flex items-center justify-center">
        Search
      </div>

      {/* Fila 4 - Zona de Pokémon */}
      <div className="border border-gray-400 flex-1 overflow-auto">
       <RenderZone/>
      </div>
    </div>
  );
}

export default HomePage;

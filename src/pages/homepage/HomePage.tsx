import { useNavigate } from "react-router-dom";
import Header from "../../components/homepage/header/Header";

function HomePage() {
 const navigate = useNavigate(); 
function goo(){
 
  navigate("/details");
}


  return (
    <div className="flex flex-col h-full p-2 gap-2">
      
      <div className=" h-[10%] flex items-center justify-center">
       <Header/>
      </div>

      {/* Fila 2 - Selectores de tags */}
      <div className="border border-gray-400 h-[10%] overflow-x-auto flex items-center">
        Tags
      </div>

      {/* Fila 3 - Barra de búsqueda */}
      <div className="border border-gray-400 h-[10%] flex items-center justify-center">
        Search
      </div>

      {/* Fila 4 - Zona de Pokémon */}
      <div className="border border-gray-400 flex-1 overflow-auto">
        Zona Pokémon
        <button onClick={goo}>go</button>
      </div>
    </div>
  );
}

export default HomePage;

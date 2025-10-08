import { useState } from "react";

import Header from "../../components/homepage/header/Header";
import RenderZone from "../../components/homepage/renderZone/RenderZone";
import SearchBar from "../../components/homepage/searchBar/SearchBar";
import TypeLabels from "../../components/homepage/labels/TypeLabels";

function HomePage() {

const [searchTerm, setSearchTerm] = useState("");
const [selectedType, setSelectedType] = useState<string | null>("all");


  return (
    <div className="flex flex-col h-full p-2 gap-1">
      
      <div className=" h-[8%] flex items-center justify-center">
       <Header/>
      </div>

      {/* Fila 2 - Selectores de tags */}
      <div className=" h-[17%] overflow-x-auto flex items-center">
      
     <TypeLabels onSelectType={setSelectedType} />
       
      </div>

      {/* Fila 3 - Barra de búsqueda */}
      <div className=" h-[10%] flex items-center ">
     <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      {/* Fila 4 - Zona de Pokémon */}
      <div className=" flex-1 overflow-auto">
     <RenderZone searchTerm={searchTerm} selectedType={selectedType} />
      </div>
      
    </div>
  );
}

export default HomePage;

import { useState } from "react";

function Header() {
  const [selected, setSelected] = useState<"All" | "Favorites">("All");

  return (
    <div className="flex justify-between items-center w-full px-2">
      {/* Columna izquierda: título */}
      <p className="font-bold text-sm">Mini Pokédex</p>

      {/* Columna derecha: selector */}
      <div className="flex gap-2">
        <button
          onClick={() => setSelected("All")}
          className={`px-2 py-1 rounded ${
            selected === "All"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-blue-700"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setSelected("Favorites")}
          className={`px-2 py-1 rounded ${
            selected === "Favorites"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-blue-700"
          }`}
        >
          Favorites
        </button>
      </div>
    </div>
  );
}

export default Header;

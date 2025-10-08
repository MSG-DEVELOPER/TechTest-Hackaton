export function getTypeColor(type: string): string {
  switch (type.toLowerCase()) {
    case "fire":
      return "bg-red-500 text-white";
    case "water":
      return "bg-blue-500 text-white";
    case "grass":
      return "bg-green-500 text-white";
    case "electric":
      return "bg-yellow-400 text-black";
    case "bug":
      return "bg-lime-600 text-white";
    case "poison":
      return "bg-purple-500 text-white";
    case "flying":
      return "bg-sky-400 text-white";
    case "ground":
      return "bg-amber-700 text-white";

    case "rock":
      return "bg-yellow-700 text-white";
    case "fairy":
      return "bg-pink-400 text-white";
    case "all": // <--- añadimos aquí
      return "bg-gray-300 text-black";

    default:
      return "bg-gray-200 text-gray-800";
  }
}

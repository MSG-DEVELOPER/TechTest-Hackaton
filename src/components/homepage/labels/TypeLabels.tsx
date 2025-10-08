import { getTypeColor } from "../../../utils/getTypeColor";

function TypeLabels() {
  const allTypes = [
    "fire",
    "water",
    "grass",
    "electric",
    "bug",
    "poison",
    "flying",
    "ground",
    "rock",
    "fairy",
  ];

  return (
    <div className="flex gap-2 p-2">
      {allTypes.map((type) => (
        <span
          key={type}
          onClick={() => alert(`Tipo clicado: ${type}`)}
          className={`cursor-pointer px-2 py-0.5 rounded-full text-xs ${getTypeColor(
            type
          )}`}
        >
          {type.toUpperCase()}
        </span>
      ))}
    </div>
  );
}

export default TypeLabels;

import { getTypeColor } from "../../../utils/getTypeColor";

interface TypeLabelsProps {
  
  onSelectType: (type: string) => void;
}

function TypeLabels({ onSelectType }: TypeLabelsProps) {
  const allTypes = [
    "all",
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
          onClick={() => onSelectType(type)}
          className={`cursor-pointer px-2 py-0.5 rounded-full text-xs font-semibold ${
            getTypeColor(type)
          }`}
        >
          {type.toUpperCase()}
        </span>
      ))}
    </div>
  );
}

export default TypeLabels;

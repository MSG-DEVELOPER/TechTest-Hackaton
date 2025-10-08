


interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className=" p-1 mb-2 w-full"
    />
  );
}

export default SearchBar;

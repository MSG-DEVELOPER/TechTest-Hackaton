// BarraProgreso.jsx
type ProgressBarProps = {
  valor: number;
};


function ProgressBar({ valor }:ProgressBarProps) {
  const ancho = Math.min(valor, 110); // límite de 100px por si el valor es muy alto

  return (
    <div className="w-[110px] h-2 bg-red-300 rounded">
      <div
        className="h-full bg-blue-500 rounded"
        style={{ width: `${ancho}px` }}
      ></div>
    </div>
  );
}

export default ProgressBar;

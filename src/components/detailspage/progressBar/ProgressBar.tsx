
interface ProgressBarProps {
  valor: number;
}

export default function ProgressBar({ valor }: ProgressBarProps) {
  const ancho = Math.min(valor, 110);
  return (
    <div role="progressbar" className="w-[110px] h-2 bg-red-300 rounded">
      <div
        data-testid="progress-inner"
        className="h-full bg-blue-500 rounded"
        style={{ width: `${ancho}px` }}
      />
    </div>
  );
}

function Spinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div data-testid="spinner" className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;

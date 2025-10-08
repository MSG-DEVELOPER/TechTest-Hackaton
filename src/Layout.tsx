import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="relative w-[500px] mx-auto mt-10">
      <img src="/img/layout.jpg" alt="pokedex frame " />

      <div className="absolute top-[105px] left-[30px] w-[332px] h-[320px] overflow-hidden bg-grey-800">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

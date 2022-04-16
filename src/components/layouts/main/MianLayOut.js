import { Outlet } from "react-router-dom";
import Header from "./Header";

// components
import AddModalBox from "components/Add-ModalBox";

const MianLayOut = () => {
  return (
    <>
      <Header />
      <AddModalBox />

      <main className="mt-4">
        <Outlet />
      </main>
    </>
  );
};

export default MianLayOut;

import "./App.scss";
import { Modal } from "./components/modal";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./components/footer/footer.tsx";
import { setSidebarOpen } from "./store/appSlice.ts";
import { Navbar } from "./components/navbar/navbar.tsx";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((state) => state.app.isSidebarOpen);

  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
      <Modal
        onModalClose={() => dispatch(setSidebarOpen(false))}
        isVisible={isSideBarOpen}
      />
    </div>
  );
}

export default App;

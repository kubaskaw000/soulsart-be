import "./App.scss";
import { Modal } from "./components/modal";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./components/footer/footer.tsx";
import { setSidebarOpen } from "./store/appSlice.ts";
import { Navbar } from "./components/navbar/navbar.tsx";
import { DefaultLayout } from "./layouts/default-layout/default-layout.tsx";

function App() {
  const dispatch = useDispatch();
  const isSideBarOpen = useSelector((state) => state.app.isSidebarOpen);

  return (
    <div className="app">
      <Navbar />
      <DefaultLayout />
      <Footer />
      <Modal
        onModalClose={() => dispatch(setSidebarOpen(false))}
        isVisible={isSideBarOpen}
      />
    </div>
  );
}

export default App;

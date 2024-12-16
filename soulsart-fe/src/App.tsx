import "./App.scss";
import { Modal } from "./components/modal";
import { Footer } from "./components/footer/footer.tsx";
import { isSidebarOpen, setSidebarOpen } from "./store/app-slice.ts";
import { Navbar } from "./components/navbar/navbar.tsx";
import { useAppDispatch, useAppSelector } from "./store/store.ts";
import { useLayoutEffect } from "react";
import { ProtectedRouter } from "./core/protected-routes";
import { PublicRouter } from "./core/public-routes";
import { getUser } from "./store/user/user-actions.ts";
import { CircularProgress } from "@mui/material";
import { isUserLoading, isUserLoggedIn } from "./store/user/user-slice";

function App() {
  const isSideBarOpen = useAppSelector(isSidebarOpen);
  const isLoading = useAppSelector(isUserLoading);
  const isLogged = useAppSelector(isUserLoggedIn);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(isLogged);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="app">
      <Navbar />
      {isLogged ? <ProtectedRouter /> : <PublicRouter />}
      <Footer />
      <Modal
        onModalClose={() => dispatch(setSidebarOpen(false))}
        isVisible={isSideBarOpen}
      />
    </div>
  );
}

export default App;

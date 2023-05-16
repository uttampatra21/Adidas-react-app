import "./App.css";
import Header from "./components/Header";
import Lookbook from "./components/Lookbook";
import Main from "./components/Main";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Item from "./components/Item";
import Outlet from "./components/Outlet";
import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist";
import { BrowserRouter, link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/*MAIN*/}
      <Route
        path="/"
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />
      {/* MEN */}
      <Route
        path="/Men"
        element={
          <>
            <Header />
            <Men />
            <Footer />
          </>
        }
      />
      {/* WOMEN */}
      <Route
        path="/Women"
        element={
          <>
            <Header />
            <Women />
          </>
        }
      />
      {/* KIDS */}
      <Route
        path="/Kids"
        element={
          <>
            <Header />
            <Kids />
          </>
        }
      />
      {/* OUTLET */}
      <Route
        path="/Outlet"
        element={
          <>
            <Header />
            <Outlet />
          </>
        }
      />

      {/* WISHLIST */}
      <Route
        path="/Wishlist"
        element={
          <>
            <Header />
            <Wishlist />
            <Footer />
          </>
        }
      />

      {/* LOOKBOOK */}
      <Route
        path="/Lookbook"
        element={
          <>
            <Header />
            <Lookbook />
          </>
        }
      />
      {/* ITEM*/}
      <Route
        path="/Item"
        element={
          <>
            <Header />
            <Item />
          </>
        }
      />
    </Routes>
  );
}

export default App;

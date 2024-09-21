import { Outlet } from "react-router-dom";
import Header from "./components//Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./style.css"

export default function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}


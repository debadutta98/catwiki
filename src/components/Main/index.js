import { Outlet,NavLink } from "react-router-dom";
import Footer from "../Footer";
export default function Main() {
  return (
    <>
      <nav style={{ margin: "1rem 3rem" }}>
        <NavLink to="/">
          <img src={"/images/CatwikiLogo.svg"} alt="brand name" />
        </NavLink>
      </nav>
      <div style={{ margin: "0rem 3rem 2rem" }}>
        <Outlet />
        <Footer />
      </div>{" "}
    </>
  );
}

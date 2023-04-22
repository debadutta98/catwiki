import { Outlet,NavLink } from "react-router-dom";
import Footer from "../Footer";
export default function Layout() {
  return (
    <>
      <nav style={{ margin: "1rem 3rem" }}>
        <NavLink to="/">
          <img src={"/images/CatwikiLogo.svg"} alt="brand name" />
        </NavLink>
      </nav>
      <div style={{ marginInline: "3rem" }}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

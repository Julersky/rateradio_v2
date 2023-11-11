import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Livestream from "../../components/LiveStream/Livestream";

function Layout() {
  return (
    <div>
      <Livestream />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

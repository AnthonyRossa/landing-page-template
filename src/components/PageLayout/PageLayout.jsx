import "./PageLayout.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

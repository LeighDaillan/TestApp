import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="w-10/12 mx-auto mb-10">{children}</main>
      <Footer />
    </>
  );
}

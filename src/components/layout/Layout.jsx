import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-bg-blue w-full h-full font-work-sans">
      <Navbar />
      <main className="p-6 h-screen">{children}</main>
    </div>
  );
};

export default Layout;

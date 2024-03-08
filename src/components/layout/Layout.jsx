import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-bg-blue w-screen min-h-screen font-work-sans">
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;

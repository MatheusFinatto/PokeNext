import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className={`flex flex-col items-center`}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

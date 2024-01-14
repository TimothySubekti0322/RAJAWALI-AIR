import { ReactNode } from "react";
import Sidebar from "../sidebar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import Header from "../header";
import Footer from "../footer";
import PrivateProvider from "../../../providers/PrivateProvider";
import styles from "./css/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PrivateProvider>
      <div
        className={styles.outerDiv}
        // style={{ fontFamily: "Roboto", width: "calc(100vw - 17px)" }}
      >
        <Sidebar />
        <div className="w-full min-h-screen sm:pl-64">
          <div className="w-full px-4 pt-20 pb-4 sm:pt-0">
            <div className="hidden mt-4 sm:block">
              <div className="relative flex items-center justify-between w-full h-16 px-6 py-2 bg-white rounded-xl">
                <Header />
              </div>
            </div>

            <div className="mt-8 mb-2 bg-white rounded-xl">{children}</div>

            <div className="mt-8" style={{ width: "-webkit-fill-available" }}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </PrivateProvider>
  );
};

export default Layout;

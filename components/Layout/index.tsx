import Header from "@components/Layout/Header";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;

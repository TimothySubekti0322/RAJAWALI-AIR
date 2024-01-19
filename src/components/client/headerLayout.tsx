import { ReactNode } from "react";


interface LayoutProps {
  children: ReactNode;
}

const HeaderLayout = ({ children }: LayoutProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-[3.75rem] bg-[#1E90FF] z-10 shadow-md">
      <div className="py-0 px-2 w-full h-full sm:w-[360px] mx-auto flex items-center">
        {children}
      </div>
    </div>
  );
};

export default HeaderLayout;

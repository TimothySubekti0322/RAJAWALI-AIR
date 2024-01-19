import React, { ReactNode } from "react";

interface BodyLayout {
  paddingBottomSize: string;
  children: ReactNode;
}

const BodyLayout: React.FC<BodyLayout> = ({ paddingBottomSize, children }) => {
  const style = {
    paddingBottom: paddingBottomSize,
  };
  return (
    <div
      className={`w-full sm:w-[360px] mx-auto min-h-screen bg-[#E3EEFF] pt-[3.75rem]`}
      style={style}
    >
      {children}
    </div>
  );
};

export default BodyLayout;

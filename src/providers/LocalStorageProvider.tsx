import React, { ReactNode } from "react";

interface LocalStorageProviderProps {
  requiredItem: string[];
  children: ReactNode;
}

const ErrorPage = (
  <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
    <img
      src="/images/something-went-wrong.jpg"
      className="w-1/2 sm:w-1/3"
      alt="something went wrong"
    />
    <p className="md:-mt-6 xl:-mt-12 font-bold text-black text-[1.5rem] md:text-[2rem] 2xl:text-[3rem]">
      Something Went Wrong
    </p>
    <button
      className="bg-[#1E90FF] mt-4 md:mt-6 xl:mt-8 2xl:mt-12 sm:w-1/3 py-4 rounded-xl hover:bg-[#0C70DD] font-bold text-sm sm:text-base sm:px-0 px-6"
      onClick={() => (window.location.href = "/")}
    >
      Go To Home Page
    </button>
  </div>
);

const LocalStorageProvider: React.FC<LocalStorageProviderProps> = ({
  requiredItem,
  children,
}) => {
  for (const item of requiredItem) {
    const itemValue = localStorage.getItem(item);
    if (!itemValue) {
      return ErrorPage;
    }
  }
  return children;
};

export default LocalStorageProvider;

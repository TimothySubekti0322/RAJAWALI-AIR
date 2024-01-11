import React from "react";

interface addButtonProps {
  page: string;
  url: string; // url example = "/airport/add"
}
const AddButton: React.FC<addButtonProps> = ({ page, url }) => {
  const onClick = () => {
    window.location.href = url;
  };
  return (
    <button
      className="flex bg-[#553285] text-white gap-x-4 items-center hover:bg-[#331063]"
      onClick={onClick}
    >
      <p className="sm:text-2xl">+</p>
      <p className="text-xs sm:text-base">
        Add {page.charAt(0).toUpperCase() + page.slice(1)}
      </p>
    </button>
  );
};

export default AddButton;

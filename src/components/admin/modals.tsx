import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box px-0 py-4">
          <div className="flex pl-5">
            <RiDeleteBinLine className="text-lg font-bold text-black mt-1" />
            <h3 className="pb-[12px] font-semibold text-lg text-black pl-1">
              Delete!
            </h3>
          </div>
          <hr className="border-[#D2F1FF]" />
          <p className="py-[14px] text-black pl-5">
            Are you sure you want to delete ?
          </p>
          <hr className="border-[#D2F1FF]" />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="text-white font-medium text-[16px] -mt-2">
                <button
                  className=" mr-5 bg-[#C2C2C2] py-2 w-[119px] font-normal"
                  onClick={() => document.getElementById("my_modal_1").close()}
                >
                  Cancel
                </button>
                <button
                  className=" bg-[#CB3A31] mr-5 py-2 w-[119px] font-normal"
                  onClick={() => document.getElementById("my_modal_1").close()}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import API_URL from "../../../../../assets/static/API";

type DashboardName = "airport" | "airplane" | "flight" | "user";

interface modalProps {
  dashboardName: DashboardName;
  id: string;
}

const ModalAproved: React.FC<modalProps> = ({ dashboardName, id }) => {
  const deleteHandler = async () => {
    try {
      const res = await axios.delete(`${API_URL}/v1/${dashboardName}s/${id}`);
      if (res.data.success) {
        toast.success("Data deleted successfully");
        setTimeout(() => {
          window.location.href = `/dashboard/${dashboardName}`;
        }, 1000); // Delayed by 1000 milliseconds (1 seconds)
      }
      console.log(res);
    } catch (error) {
      setTimeout(toast.error("Something when wrong"), 100);
      console.log(error);
    }
  };

  return (
    <div>
      <Toaster />
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={`my_modal_${id}`} className="modal">
        <div className="px-0 py-4 modal-box">
          <div className="flex pl-5">
            <h3 className="pb-[12px] font-semibold text-lg text-black pl-1">
              Confirmation
            </h3>
          </div>
          <hr className="border-[#D2F1FF]" />
          <p className="py-[14px] text-black pl-5">
            Are you sure you want to approve this booking order?
          </p>
          <hr className="border-[#D2F1FF]" />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="text-white font-medium text-[16px] -mt-2">
                <button
                  className=" mr-5 bg-[#C2C2C2] py-2 w-[119px] font-normal"
                  onClick={() =>
                    (
                      document.getElementById("my_modal_1") as HTMLFormElement
                    )?.close()
                  }
                >
                  Cancel
                </button>
                <button
                  className=" bg-[#CB3A31] mr-5 py-2 w-[119px] font-normal"
                  onClick={deleteHandler}
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

export default ModalAproved;

import { useEffect, useState } from "react";
import BodyLayout from "../../components/client/bodyLayout";
import HeaderLayout from "../../components/client/headerLayout";
import { FaArrowLeft } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import BodyComponentHistory from "../../components/client/history/bodyComponentHistory";
import { History, HistoryGroup } from "../../utils/history/history.interface";
import { arrayMonthYear } from "../../utils/history/history.utils";
import axios from "axios";
import API_URL from "../../assets/static/API";
import LocalStorageProvider from "../../providers/LocalStorageProvider";

// const arrayDate: History[] = [
//   {
//     id: "314ffda7-0f35-40de-87c0-b933e452e391",
//     promo: null,
//     user: {
//       id: "b5338161-25e7-4b91-b1b9-30866aec9ca3",
//       fullName: "Timothy Subekti",
//       email: "velmothy14@gmail.com",
//     },
//     payment: {
//       id: "e8db20c6-08d8-4975-a646-4c4da58f779a",
//     },
//     paymentStatus: "Purchase Canceled",
//     classType: "FIRST",
//     genderType: "MAN",
//     fullname: "Timothy Subekti",
//     email: "velmothy14@gmail.com",
//     phoneNumber: "087780623955",
//     totalPrice: 4833500.0,
//     expiredAt: "2024-02-18T07:57:57.709303",
//     createdAt: "2024-02-18T07:52:57.686045",
//   },
//   {
//     id: "314ffda7-0f35-40de-87c0-b933e452e391",
//     promo: null,
//     user: {
//       id: "b5338161-25e7-4b91-b1b9-30866aec9ca3",
//       fullName: "Timothy Subekti",
//       email: "velmothy14@gmail.com",
//     },
//     payment: {
//       id: "e8db20c6-08d8-4975-a646-4c4da58f779a",
//     },
//     paymentStatus: "Waiting For Payment",
//     classType: "FIRST",
//     genderType: "MAN",
//     fullname: "Timothy Subekti",
//     email: "velmothy14@gmail.com",
//     phoneNumber: "087780623955",
//     totalPrice: 4833555.0,
//     expiredAt: "2024-02-18T07:57:57.709303",
//     createdAt: "2024-03-18T07:52:57.686045",
//   },
//   {
//     id: "314ffda7-0f35-40de-87c0-b933e452e391",
//     promo: null,
//     user: {
//       id: "b5338161-25e7-4b91-b1b9-30866aec9ca3",
//       fullName: "Timothy Subekti",
//       email: "velmothy14@gmail.com",
//     },
//     payment: {
//       id: "e8db20c6-08d8-4975-a646-4c4da58f779a",
//     },
//     paymentStatus: "Purchase Successful",
//     classType: "FIRST",
//     genderType: "MAN",
//     fullname: "Timothy Subekti",
//     email: "velmothy14@gmail.com",
//     phoneNumber: "087780623955",
//     totalPrice: 6000000.0,
//     expiredAt: "2025-11-18T07:57:57.709303",
//     createdAt: "2025-11-18T09:11:57.686045",
//   },
//   {
//     id: "314ffda7-0f35-40de-87c0-b933e452e391",
//     promo: null,
//     user: {
//       id: "b5338161-25e7-4b91-b1b9-30866aec9ca3",
//       fullName: "Timothy Subekti",
//       email: "velmothy14@gmail.com",
//     },
//     payment: {
//       id: "e8db20c6-08d8-4975-a646-4c4da58f779a",
//     },
//     paymentStatus: "Purchase Pending",
//     classType: "FIRST",
//     genderType: "MAN",
//     fullname: "Timothy Subekti",
//     email: "velmothy14@gmail.com",
//     phoneNumber: "087780623955",
//     totalPrice: 6000000.0,
//     expiredAt: "2025-11-18T07:57:57.709303",
//     createdAt: "2025-11-18T09:11:57.686045",
//   },
// ];

const History = () => {
  const [historyGroup, setHistoryGroup] = useState<HistoryGroup[]>([]);

  // fetchData
  useEffect(() => {
    const fetchData = async () => {
      const userId = (localStorage.getItem("userId") as string) || "";
      const response = await axios.get(
        `${API_URL}/v1/reservations/user/${userId}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          }
        }
      );
      const data: History[] = response.data.data.content;
      console.log(data);
      setHistoryGroup(arrayMonthYear(data));
    };
    fetchData();
  }, []);

  return (
    <LocalStorageProvider requiredItem={["userId"]}>
      <section className="w-full min-h-screen bg-[#f7f7f7] relative">
        <HeaderLayout>
          <div className="relative flex items-center justify-center w-full h-full">
            <button
              className="absolute left-0"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <FaArrowLeft className="text-xl text-white" />
            </button>
            <div>History</div>
          </div>
        </HeaderLayout>

        <BodyLayout paddingBottomSize="5rem">
          <BodyComponentHistory historyGroup={historyGroup} />
        </BodyLayout>

        {/* Bottom Navbar */}
        <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[3.8rem] bg-[#1E90FF] rounded-t-xl flex justify-center items-center gap-x-12">
          {/* Filter */}
          <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
            <FiFilter className="w-4 h-4 " />
            <p className="text-sm ">Filter</p>
          </button>
          {/* Sort */}
          <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
            <MdOutlineSort className="w-4 h-4" />
            <p className="text-sm">Sort</p>
          </button>
        </div>
      </section>
    </LocalStorageProvider>
  );
};
export default History;

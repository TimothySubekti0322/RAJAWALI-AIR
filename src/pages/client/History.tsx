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

const History = () => {
  const [historyGroup, setHistoryGroup] = useState<HistoryGroup[]>([]);

  // loading
  const [loading, setLoading] = useState<boolean>(true);

  // fetchData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = (localStorage.getItem("userId") as string) || "";
        const response = await axios.get(
          `${API_URL}/v1/reservations/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data: History[] = response.data.data.content;
        console.log(data);
        setHistoryGroup(arrayMonthYear(data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
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
          <BodyComponentHistory loading={loading} historyGroup={historyGroup} />
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

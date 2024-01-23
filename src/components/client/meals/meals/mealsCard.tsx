import { useEffect, useState } from "react";
import { MealsData } from "../../../../assets/static/TableDataTypes";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
// import Checkbox from '@mui/material/Checkbox';

interface TableProps {
  api: string;
}

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MealsCard: React.FC<TableProps> = ({ api }) => {
  const [data, setData] = useState<MealsData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(api);
        const response: MealsData[] = res.data.data.content;
        console.log(res.data.data.content);
        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    {loading && (
          <div className="flex flex-col items-center justify-center w-full min-h-[36.75rem] font-bold text-2xl rounded-xl bg-[#F5F5F5]">
            <CircularProgress />
            <p className="mt-6">Loading</p>
          </div>
        )}
      {!loading && data.length === 0 && (
        <div className="flex flex-col items-center justify-center w-[20.5rem] min-h-[36.75rem] font-bold text-2xl rounded-xl bg-[#F5F5F5] text-black">
          <img
            src="/images/no-results-found.png"
            alt="No Data Found"
            className="w-52"
          />
          <p>Data Not Found</p>
        </div>
      )}
      {!loading && data.map((item) => (
        <div className=" w-[20.5rem] h-20 justify-between items-center inline-flex bg-white rounded-md mt-3 px-2">
          <div className=" justify-start items-center gap-2 flex">
            <img
              className="Rectangle208 w-20 h-14 rounded-lg"
              src={item.thumbnailUrl}
            />
            <div className=" flex-col justify-start items-start gap-1 inline-flex">
              <div className=" flex-col justify-start items-start flex">
                <div className=" text-zinc-900 text-xs font-semibold font-['Roboto'] leading-snug">
                  {item.name}
                </div>
                <div className=" w-44 text-neutral-500 text-xs font-normal font-['Roboto'] leading-none pt-1">
                  {item.description}
                </div>
              </div>
              <div className=" w-36">
                <span className="text-zinc-900 text-xs font-medium font-['Roboto'] leading-none">
                  IDR {item.price}
                </span>
                <span className="text-neutral-500 text-xs font-normal font-['Roboto'] leading-none">
                  {" "}
                  /portion
                </span>
              </div>
            </div>
          </div>
          <div className=" w-[1.25rem] h-[1.25rem] relative bg-red-500">
          {/* <Checkbox {...label} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} /> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default MealsCard;

import { useEffect, useState } from "react";
import { MealsData } from "../../../../assets/static/TableDataTypes";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { numberToCurrency } from "../../../../utils/NumberFormater";

interface TableProps {
  api: string;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>
}

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MealsCard: React.FC<TableProps> = ({ api, setPrice }) => {
  const [data, setData] = useState<MealsData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});
  // const [currentPrice, setCurrentPrice] = React.useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked: isChecked } = event.target;
    const itemPrice = Number(event.target.value);
    console.log('event', event.target)
    setChecked((prevState) => ({
      ...prevState,
      [id]: isChecked,
    }));

    setPrice((price) => {
      if (isChecked) {
        return price + itemPrice;
      } else {
        return price - itemPrice;
      }
    });
  };
  
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
      {!loading &&
        data.map((item) => (
          <div
            key={item.id}
            className=" w-[20.5rem] h-27 justify-between items-center inline-flex bg-white rounded-md mt-3 px-2 shadow-lg py-2"
          >
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
                  {numberToCurrency("IDR", item.price, true, false)}
                  </span>
                  <span className="text-neutral-500 text-xs font-normal font-['Roboto'] leading-none">
                    {" "}
                    /portion
                  </span>
                </div>
              </div>
            </div>
            <div className=" w-[1.25rem] h-[1.25rem] relative">
              <Checkbox
                id={item.id}
                checked={checked[item.id] || false}
                value={item.price}
                onChange={handleChange}
                sx={{
                  position: "relative", // Set posisi elemen Checkbox menjadi absolute
                  top: "-12px", // Atur posisi top sesuai kebutuhan
                  left: "-12px", // Atur posisi left sesuai kebutuhan
                  "& .MuiSvgIcon-root": {
                    fontSize: 25,
                  },
                }}
                // onChange={handleCheckBox}
              />
            </div>
          </div>
        ))}
        <div className="text-black">
        </div>
      <div className="text-black">
      </div>
    </>
  );
};

export default MealsCard;

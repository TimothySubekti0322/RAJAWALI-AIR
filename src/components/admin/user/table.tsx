import React, { useEffect, useState } from "react";
// import { FaRegEdit } from "react-icons/fa";
// import { RiDeleteBinLine } from "react-icons/ri";
import type { UserDataTable } from "../../../assets/static/TableDataTypes";
import Pagination from "@mui/material/Pagination";
// import Modal from "../modals";
import { makeStyles, createStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

// Pagination Styling
const paginationItemStyles = makeStyles(() =>
  createStyles({
    root: {
      "& .Mui-selected": {
        backgroundColor: "#1E90FF !important",
        borderColor: "#1E90FF !important",
        color: "#FFFFFF",
      },
      "& ul > li > button:not(.Mui-selected)": {
        backgroundColor: "#FFFFFF",
        border: "2px solid #1E90FF",
        color: "#000000",
        "&:hover": {
          backgroundColor: "#1E90FF !important",
          color: "#FFFFFF",
        },
      },
    },
  })
);

interface TableProps {
  tableColumns: string[];
  api: string;
}

const dataPerPage = 10;

const Table: React.FC<TableProps> = ({ tableColumns, api }) => {
  const classes = paginationItemStyles();
  // Fetching Data State
  const [loading, setLoading] = useState<boolean>(false);

  // Raw Data
  const [rawData, setRawData] = useState<UserDataTable[]>([]);

  // Data
  const [data, setData] = useState<UserDataTable[]>([]);

  // Current Page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Total Page
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(api, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const response: UserDataTable[] = res.data.data.content;
        console.log(res.data.data.content);
        // const response: UserDataTable[] = [];
        // const response: UserDataTable[] = tableData;
        const dataLength = response.length;
        setTotalPage(Math.ceil(dataLength / dataPerPage));
        setRawData(response);
        setData(response.slice(0, dataPerPage));
        setCurrentPage(1);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const changeData = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * dataPerPage;
    const endIndex = page * dataPerPage;
    const newData = rawData.slice(startIndex, endIndex);
    setData(newData);
  };

  const handleChangeData = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    console.log(event);
    changeData(page);
  };

  return (
    <div className="w-full mt-8">
      <div className="overflow-x-auto min-h-[36.75rem]">
        {/* Fetching Data */}
        {loading && (
          <div className="flex flex-col items-center justify-center w-full min-h-[36.75rem] font-bold text-2xl rounded-xl bg-[#F5F5F5]">
            <CircularProgress />
            <p className="mt-6">Loading</p>
          </div>
        )}

        {/* No Data Found */}
        {!loading && rawData.length === 0 && (
          <div className="flex flex-col items-center justify-center w-full min-h-[36.75rem] font-bold text-2xl rounded-xl bg-[#F5F5F5]">
            <img
              src="/images/no-results-found.png"
              alt="No Data Found"
              className="w-52"
            />
            <p>Data Not Found</p>
          </div>
        )}

        {/* Data Found */}
        {!loading && rawData.length > 0 && (
          <table className="w-full table-auto ">
            <thead>
              <tr className="bg-[#D2F1FF]">
                {tableColumns.map((column) => (
                  <th key={column} className="px-4 py-3">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b-2">
                  <td className="px-4 py-3 text-center">{item.id}</td>
                  <td className="px-4 py-3 text-center">{item.fullName}</td>
                  <td className="px-4 py-3 text-center">{item.email}</td>
                  <td className="px-4 py-3 text-center">{item.phoneNumber}</td>
                  <td className="px-4 py-3 text-center">
                    {item.reservationsMade}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {item.roles[0].name.slice(5)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {!loading && rawData.length > 0 && (
        <div className="flex items-center justify-center mt-8">
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={handleChangeData}
            className={classes.root}
          />
        </div>
      )}
    </div>
  );
};

export default Table;

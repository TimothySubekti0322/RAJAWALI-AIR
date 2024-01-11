import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import tableData from "../../../pages/admin/airport/dummyData";
import type { AirportData } from "../../../assets/static/TableDataTypes";
import Pagination from "@mui/material/Pagination";
// import axios from "axios";

interface TableProps {
  tableColumns: string[];
  api: string;
}

const dataPerPage = 10;

const Table: React.FC<TableProps> = ({ tableColumns, api }) => {
  // Fetching Data State
  const [loading, setLoading] = useState<boolean>(false);

  // Raw Data
  const [rawData, setRawData] = useState<AirportData[]>([]);

  // Data
  const [data, setData] = useState<AirportData[]>([]);

  // Current Page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Total Page
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    console.log(api);
  }, []);

  // Uncomment this code below if you want to fetch data from API

  useEffect(() => {
    // const fetchData = async () => {
    //   const result = await axios.get(api);
    //   console.log(result.data);
    // };
    //   fetchData();

    const dummyFetchData = async () => {
      try {
        setLoading(true);
        const response = tableData;
        const dataLength = tableData.length;
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
    dummyFetchData();
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
        {loading && <p>Loading</p>}

        {/* No Data Found */}
        {!loading && rawData.length === 0 && <p>Data Not Found</p>}

        {/* Data Found */}
        {!loading && rawData.length > 0 && (
          <>
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
                {data.map((item, index) => (
                  <tr key={index} className="border-b-2">
                    <td className="px-4 py-3 text-center">{item.id}</td>
                    <td className="px-4 py-3 text-center">{item.name}</td>
                    <td className="px-4 py-3 text-center">{item.city}</td>
                    <td className="px-4 py-3 text-center">{item.country}</td>
                    <td className="px-4 py-3 text-center">{item.cityCode}</td>
                    <td className="flex items-center justify-center px-4 py-3 text-center gap-x-4">
                      {/* Edit */}
                      <button
                        className="bg-[#F1A025] py-1"
                        onClick={() => {
                          window.location.href = `/dashboard/airport/edit/${index}`;
                        }}
                      >
                        <FaRegEdit className="text-lg text-white" />
                      </button>

                      {/* Delete */}
                      <button className="bg-[#CB3A31] py-1">
                        <RiDeleteBinLine className="text-lg text-white" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
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
          />
        </div>
      )}
    </div>
  );
};

export default Table;

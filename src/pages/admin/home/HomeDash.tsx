import CardHome from "../../../components/admin/home/CardHome";
import Diagram from "../../../components/admin/home/Diagram";
import Table from "../../../components/admin/home/Table";
import Layout from "../../../components/admin/layout/Layout";

const tableColumns = [
  "Booking ID",
  "Flight ID",
  "Status",
  "Date",
  "Action",
];

const HomeDash = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full px-5 pt-5 mb-4">
        <h1 className="text-2xl font-bold font-['Roboto'] text-[#1E90FF]">
          Welcome Back
        </h1>
        <p className="text-black font-['Roboto'] ">Rajawali Air Report</p>
      </div>
      <div className="flex mb-5 px-5 gap-2">
        <div className="w-1/2">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-7 pb-2">
            <div className="">
              <CardHome
                title="Number of Sales"
                img="/images/home-dash/sales.svg"
                value="320"
              />
            </div>
            <div className="">
              <CardHome
                title="Booked Ticket"
                img="/images/home-dash/bookmark.svg"
                value="20"
              />
            </div>
            <div className="">
              <CardHome
                title="Sales Today"
                img="/images/home-dash/sales-today.svg"
                value="13"
              />
            </div>
            <div className="">
              <CardHome
                title="Watiting Aproved"
                img="/images/home-dash/watiting.svg"
                value="7"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Diagram />
        </div>
      </div>
      <div className="w-full px-5">
        <Table
          tableColumns={tableColumns}
          api="https://rajawali-production.up.railway.app/api/v1/reservations?pageSize=100"
        />
      </div>
    </Layout>
  );
};

export default HomeDash;

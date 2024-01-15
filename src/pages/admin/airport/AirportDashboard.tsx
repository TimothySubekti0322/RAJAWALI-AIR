import Layout from "../../../components/admin/layout/Layout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Table from "../../../components/admin/airport/table";
import AddButton from "../../../components/admin/addButton";

const tableColumns = ["Id", "Name", "City", "Country", "City Code", "Action"];

const breadcrumbs = [
  <Typography key="1" color="text.primary">
    Dashboard
  </Typography>,
  <Typography key="2" color="text.primary">
    Airport
  </Typography>,
];

const AirportDashboard = () => {
  return (
    <Layout>
      <div className="w-full px-4 py-6 xl:px-8 xl:py-10 2xl:px-10">
        <p className="text-[#1E90FF] font-semibold text-xl">Airport</p>
        <div className="flex items-center justify-between mt-2 ">
          {/* BreadCrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>

          {/* Add Button */}
          <AddButton page="Airport" url="/dashboard/airport/add" />
        </div>

        {/* Table */}

        <Table
          tableColumns={tableColumns}
          api="https://rajawali-production.up.railway.app/api/v1/airports"
        />
      </div>
    </Layout>
  );
};

export default AirportDashboard;

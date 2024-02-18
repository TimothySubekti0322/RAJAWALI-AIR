import Layout from "../../../components/admin/layout/Layout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Table from "../../../components/admin/user/table";
import API_URL from "../../../assets/static/API";
// import AddButton from "../../../components/admin/addButton";

const tableColumns = [
  "Id",
  "Full Name",
  "Email",
  "Phone Number",
  "Reservation",
  "Roles",
];

const breadcrumbs = [
  <Typography key="1" color="text.primary">
    Dashboard
  </Typography>,
  <Typography key="2" color="text.primary">
    User
  </Typography>,
];

const UserDashboard = () => {
  return (
    <Layout>
      <div className="w-full px-4 py-6 xl:px-8 xl:py-10 2xl:px-10">
        <p className="text-[#1E90FF] font-semibold text-xl">User</p>
        <div className="flex items-center justify-between mt-2 ">
          {/* BreadCrumbs */}
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>

          {/* Add Button */}
          <p></p>
        </div>

        {/* Table */}

        <Table
          tableColumns={tableColumns}
          api={`${API_URL}/v1/users?pageSize=100`}
        />
      </div>
    </Layout>
  );
};

export default UserDashboard;

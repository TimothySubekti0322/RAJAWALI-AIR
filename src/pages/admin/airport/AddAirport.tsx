import Layout from "../../../components/admin/layout/Layout";
import InputText from '../../../components/admin/airport/inputText';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const breadcrumbs = [
    <Typography key="1" color="text.primary">
      Dashboard
    </Typography>,
    <Typography key="2" color="text.primary">
      Airport
    </Typography>,
    <Typography key="2" color="text.primary">
      Add Airport
    </Typography>,
  ];

const AddAirport =() => {
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
            </div>

            <div className="mt-6">
            {/* Inputan*/}
                <InputText
                    title=" Name "
                    inputID=""
                    placeholder="Airport Name"
                    // onChange={handleInputChange}
                    value={undefined}
                    description=""
                />

                <InputText
                    title=" City "
                    inputID=""
                    placeholder="Airport City"
                    // onChange={handleInputChange}
                    value={undefined}
                    description=""
                />

                <InputText
                    title=" Country "
                    inputID=""
                    placeholder="Airport Country"
                    // onChange={handleInputChange}
                    value={undefined}
                    description=""
                />

                <InputText
                    title=" City Code "
                    inputID=""
                    placeholder="City Code"
                    // onChange={handleInputChange}
                    value={undefined}
                    description=""
                />
            </div>
            </div> 
        </Layout>
    )
}

  export default AddAirport;
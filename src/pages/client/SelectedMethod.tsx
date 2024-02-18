import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/selectedMethod/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import BodyComponent from "../../components/client/selectedMethod/bodyComponent";
import {useParams} from "react-router-dom";

const SelectedMethod = () => {
    const paymentMethod = localStorage.getItem("paymentMethod") as string;
    const {id} = useParams();

  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
      <HeaderFill
         bank={paymentMethod}
         orderID={id ?? "12345678"}
        />
      </HeaderLayout>

      <BodyLayout paddingBottomSize="1rem">
        <BodyComponent />
      </BodyLayout>
    </section>
  )
}

export default SelectedMethod

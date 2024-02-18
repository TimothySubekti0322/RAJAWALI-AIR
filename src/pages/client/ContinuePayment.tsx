import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/continuePayment/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import BodyComponent from "../../components/client/continuePayment/bodyComponent";
import {useParams} from "react-router-dom";

const ContinuePayment = () => {
    const {id} = useParams();
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
      <HeaderFill
         method="Continue Payment"
         orderID={id ?? "12345678"}
        />
      </HeaderLayout>
      <BodyLayout paddingBottomSize="1rem">
        <BodyComponent />
      </BodyLayout>
    </section>
  )
}

export default ContinuePayment

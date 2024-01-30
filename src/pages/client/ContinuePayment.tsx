import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/continuePayment/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import BodyComponent from "../../components/client/continuePayment/bodyComponent";

const ContinuePayment = () => {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
      <HeaderFill
         method="Continue Payment"
         orderID="123456789"
        />
      </HeaderLayout>
      <BodyLayout paddingBottomSize="1rem">
        <BodyComponent />
      </BodyLayout>
    </section>
  )
}

export default ContinuePayment

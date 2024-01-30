import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/selectedMethod/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import BodyComponent from "../../components/client/selectedMethod/bodyComponent";

const SelectedMethod = () => {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
      <HeaderFill
         bank="Mandiri Virtual Account"
         orderID="123456789"
        />
      </HeaderLayout>

      <BodyLayout paddingBottomSize="1rem">
        <BodyComponent />
      </BodyLayout>
    </section>
  )
}

export default SelectedMethod

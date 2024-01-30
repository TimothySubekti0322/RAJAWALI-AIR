import HeroWrapper from "../../components/client/hero/Wrapper/HeroWrapper";
import Carousel from "../../components/client/carousel/Carousel";
import TheBest from "../../components/client/thebest/TheBest";
import SubscribeSection from "../../components/client/subscribe/subscribeSection";
import Footer from "../../components/client/footer/FooterSection";
function Home() {
  return (
    <>
      <HeroWrapper />
      <Carousel />
      <TheBest />
      <SubscribeSection />
      <Footer/>
    </>
  );
}

export default Home;

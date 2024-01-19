import HeroWrapper from "../../components/client/hero/Wrapper/HeroWrapper";
import Carousel from "../../components/client/carousel/Carousel";
import TheBest from "../../components/client/thebest/TheBest";
import SubscribeSection from "../../components/client/subscribe/subscribeSection";
function Home() {
  return (
    <>
      <HeroWrapper />
      <Carousel />
      <TheBest />
      <SubscribeSection />
    </>
  );
}

export default Home;

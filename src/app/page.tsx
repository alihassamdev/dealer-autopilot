import Benifits from "@/components/Home/Benefits";
import Hero from "@/components/Home/Hero";
import PainPoints from "@/components/Home/PainPoints";
import ResultsTransformationScroll from "@/components/Home/ResultsTransformationScroll";

// import GoBacktoHost from "@/components/Go-to-host";

const Home = () => {
  return (
    <>
      {/* <GoBacktoHost /> */}
      <Hero />
      <PainPoints />
      <Benifits />
      <ResultsTransformationScroll />
    </>
  );
};

export default Home;

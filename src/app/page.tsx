import Benifits from "@/components/Home/Benefits";
import Hero from "@/components/Home/Hero";
import PainPoints from "@/components/Home/PainPoints";
import Results from "@/components/Home/Results";
import Transformation from "@/components/Home/Transformation";
// import ResultsTransformationScroll from "@/components/Home/ResultsTransformationScroll";

const Home = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Benifits />
      <Results />
      <Transformation />
      {/* <ResultsTransformationScroll /> */}
    </>
  );
};

export default Home;

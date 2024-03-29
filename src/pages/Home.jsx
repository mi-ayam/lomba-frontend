import CompetitionCard from "../components/ui/CompetitionCard";
import Jumbotron from "../components/ui/Jumbotron";

const Home = () => {
  return (
    <>
      <section className="mt-20 flex justify-center items-center">
        <Jumbotron />
      </section>
      <CompetitionCard />
    </>
  );
};

export default Home;

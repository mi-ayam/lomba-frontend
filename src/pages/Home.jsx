import CompetitionCard from "../components/ui/CompetitionCard";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-auto md:grid-cols-6 xl:grid-cols-10 gap-4 w-full">
        <CompetitionCard />
      </div>
    </>
  );
};

export default Home;

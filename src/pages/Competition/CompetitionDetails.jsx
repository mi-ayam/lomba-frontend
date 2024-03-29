import { useParams, useNavigate, Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useState, useEffect } from "react";
import competitionService from "../../service/competitions.service";

const CompetitionDetails = () => {
  const { id } = useParams();
  // state for storing competition data
  const [competition, setCompetition] = useState([]);
  let navigate = useNavigate();

  const ngrok = "https://concrete-pika-noticeably.ngrok-free.app";

  // fetch competition data by id
  useEffect(() => {
    const fetchCompetition = async () => {
      const response = await competitionService.get(id);
      setCompetition(response.data.data);
    };

    fetchCompetition();
  }, [id]);

  // effects to change document title
  useEffect(() => {
    document.title = competition.title;

    // cleanup
    return () => {
      document.title = "Ayo Lomba";
    };
  });

  const deleteCompetition = async () => {
    try {
      await competitionService.remove(id);
      navigate("/");
    } catch (error) {
      console.log("Failed to delete competition");
    }
  };

  return (
    <div className="">
      <Button
        value={competition.category}
        textColor="text-white"
        backgroundColor="bg-secondary-blue"
      />
      <h1 className="mt-4 mb-5 text-white font-semibold text-4xl">{competition.title}</h1>
      <p className="text-sm text-[#696A75] mb-9">{competition.createdAt}</p>
      <img className="max-w-sm mb-8" src={ngrok + competition.image} alt="" />
      <p className="text-white text-xl mb-3">{competition.description}</p>
      <div className="text-white space-y-0">
        <p>Dengan total hadiah sebesar {competition.prize}</p>
        <p>Biaya pendaftaran: {competition.registration_fee}</p>
        <p>Deadline registrasi: {competition.registration_deadline}</p>
      </div>
      <div className="space-x-3">
        <Button
          backgroundColor="bg-red-800"
          value="Delete"
          textColor="text-white"
          onClick={deleteCompetition}
        />
        <Link to={"/editCompetition/" + competition.id}>
          <Button value="Edit" backgroundColor="bg-secondary-blue" textColor="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default CompetitionDetails;

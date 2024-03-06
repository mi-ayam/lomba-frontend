import { useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { useState, useEffect } from "react";
import competitionService from "../service/competitions.service";
import image from "../assets/poster1.jpeg";

const CompetitionDetails = () => {
  const { id } = useParams();
  const [competition, setCompetition] = useState([]);

  useEffect(() => {
    const fetchCompetition = async () => {
      const response = await competitionService.get(id);
      setCompetition(response.data.data);
      console.log(response.data.data);
    };

    fetchCompetition();
  }, [id]);
  return (
    <div className="">
      <Button value={competition.category} textColor="text-white" />
      <h1 className="mt-4 mb-5 text-white font-semibold text-4xl">{competition.title}</h1>
      <p className="text-sm text-[#696A75] mb-9">{competition.createdAt}</p>
      <img className="max-w-sm mb-8" src={image} alt="" />
      <p className="text-white text-xl mb-3">{competition.description}</p>
      <div className="text-white space-y-0">
        <p>Dengan total hadiah sebesar {competition.prize}</p>
        <p>Biaya pendaftaran: {competition.registration_fee}</p>
        <p>Deadline registrasi: {competition.registration_deadline}</p>
      </div>
    </div>
  );
};

export default CompetitionDetails;

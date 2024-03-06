import React, { useEffect, useState } from "react";
import image from "../../assets/poster1.jpeg";
import { Link, useNavigate } from "react-router-dom";
import competitionService from "../../service/competitions.service";

const CompetitionCard = () => {
  const [competitions, setCompetitions] = useState([]);

  const ngrok = "https://concrete-pika-noticeably.ngrok-free.app";

  useEffect(() => {
    const fetchResponse = competitionService.getAll();
    fetchResponse.then((response) => {
      setCompetitions(response.data.data);
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {competitions.map((competition) => {
          return (
            <div key={competition.id} className="max-w-xs border border-fg-gray rounded-lg shadow ">
              <Link to={"/competitions/" + competition.id}>
                {console.log(competition.image)}
                <img
                  className="w-full text-white flex justify-center items-center"
                  src={ngrok + competition.image}
                  alt="an image"
                />
              </Link>
              <div className="p-5">
                <Link
                  to={"/competitions/" + competition.id}
                  className="inline-flex items-center px-2 py-1 my-2 text-sm font-medium text-center
          bg-secondary-blue bg-opacity-5 text-secondary-blue rounded-lg "
                >
                  {competition.category}
                </Link>
                <Link to={"/competitions/" + competition.id}>
                  {/* title */}
                  <h5 className="text-2xl font-semibold tracking-tight text-white">
                    {competition.title}
                  </h5>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CompetitionCard;

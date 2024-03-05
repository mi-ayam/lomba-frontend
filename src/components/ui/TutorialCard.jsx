import Reat from "react";
import image from "../../assets/poster1.jpeg";

const TutorialCard = () => {
  return (
    <div className="max-w-xs border border-fg-gray rounded-lg shadow ">
      <a href="#">
        <img className="w-full" src={image} alt="an image" />
      </a>
      <div className="p-5">
        <a
          href="#"
          className="inline-flex items-center px-2 py-1 my-2 text-sm font-medium text-center bg-secondary-blue bg-opacity-5 text-secondary-blue rounded-lg "
        >
          Technology
        </a>
        <a href="#">
          {/* title */}
          <h5 className="text-2xl font-semibold tracking-tight text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
      </div>
    </div>
  );
};

export default TutorialCard;

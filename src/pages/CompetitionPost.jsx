import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import competitionService from "../service/competitions.service";
import { useNavigate } from "react-router-dom";

const CompetitionPost = () => {
  // Datepicker configs
  const options = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    defaultDate: false,
    inputDateFormatProp: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
    theme: {
      background: "",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
  };

  const [show, setShow] = useState(false);

  // POST request to the server
  const intialState = {
    title: "",
    category: "",
    description: "",
    registration_fee: "",
    prize: "",
    registration_deadline: "",
    image: "",
  };

  const [competition, setCompetition] = useState(intialState);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCompetition({ ...competition, [name]: value });
  };

  const addCompetition = (e) => {
    e.preventDefault();
    let data = {
      title: competition.title,
      category: competition.category,
      description: competition.description,
      registration_fee: competition.registration_fee,
      prize: competition.prize,
      registration_deadline: competition.registration_deadline,
    };

    const formData = new FormData();
    formData.append("title", competition.title);
    formData.append("category", competition.category);
    formData.append("description", competition.description);
    formData.append("registration_fee", competition.registration_fee);
    formData.append("prize", competition.prize);
    formData.append("registration_deadline", competition.registration_deadline);
    formData.append("image", competition.image);

    let headers = {
      "Content-Type": "multipart/form-data",
    };

    const fetchResponse = competitionService.create(formData, headers);
    fetchResponse
      .then((res) => {
        setCompetition({
          id: res.data.id,
          title: res.data.title,
          category: res.data.category,
          description: res.data.description,
          registration_fee: res.data.registration_fee,
          prize: res.data.prize,
          registration_deadline: res.data.registration_deadline,
        });
        setSubmitted(true);
        console.log(res.data);
        navigate("/");
      })
      .catch((e) => {
        console.log(competition);
        console.log(e);
      });
  };

  const newCompetition = () => {
    setCompetition(intialState);
    setSubmitted(false);
  };

  return (
    <>
      {submitted ? (
        <div>
          <h1>Horray!</h1>
          <button
            type="submit"
            onclick={newCompetition}
            false
            className="relative mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Post competition
          </button>
        </div>
      ) : (
        <div className="max-w-sm ">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Lomba Web Design AI ++++"
              onChange={handleInputChange}
              value={competition.title}
              name="title"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Technology"
              value={competition.category}
              onChange={handleInputChange}
              name="category"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Describe your competition here..."
              value={competition.description}
              onChange={handleInputChange}
              name="description"
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              htmlFor="registration_fee"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Registration fee
            </label>
            <input
              type="text"
              id="registration_fee"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="50000"
              value={competition.registration_fee}
              onChange={handleInputChange}
              name="registration_fee"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="prize"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Prize
            </label>
            <input
              type="text"
              id="prize"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="5000000"
              value={competition.prize}
              onChange={handleInputChange}
              name="prize"
              required
            />
          </div>
          <div className="flex flex-col ">
            <div className="relative ">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Registration Deadline
              </label>
              <Datepicker
                show={show}
                setShow={(state) => setShow(state)}
                options={options}
                classNames="absolute"
                value={competition.registration_deadline}
                onChange={(e) => {
                  setCompetition({ ...competition, registration_deadline: e });
                }}
              />
            </div>
          </div>
          <div className="mt-16">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file:border-0 file:text-gray-300 file:bg-gray-900 file:p-2"
              aria-describedby="file_input_help"
              id="image"
              type="file"
              onChange={(e) => {
                setCompetition({ ...competition, image: e.target.files[0] });
              }}
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
              PNG, JPG.
            </p>
          </div>
          <button
            type="submit"
            onClick={addCompetition}
            className="relative mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Post new competition
          </button>
        </div>
      )}
    </>
  );
};

export default CompetitionPost;

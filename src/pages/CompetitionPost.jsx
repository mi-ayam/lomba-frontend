import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const CompetitionPost = () => {
  const options = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    defaultDate: new Date(),
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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (date) => {
    setSelectedDate(date);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <form className="max-w-sm ">
      <div className="mb-5">
        <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Lomba Web Design AI ++++"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Technology"
          required
        />
      </div>
      <div className="mb-5">
        <label
          for="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Describe your competition here..."
        ></textarea>
      </div>
      <div className="mb-5">
        <label
          for="registration_fee"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Registration fee
        </label>
        <input
          type="text"
          id="registration_fee"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="50000"
          required
        />
      </div>
      <div className="mb-5">
        <label for="prize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Prize
        </label>
        <input
          type="text"
          id="prize"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="5000000"
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
          />
        </div>
      </div>
      <div className="mt-16">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="image">
          Upload file
        </label>
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file:border-0 file:text-gray-300 file:bg-gray-900 file:p-2"
          aria-describedby="file_input_help"
          id="image"
          type="file"
        />
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
          PNG, JPG.
        </p>
      </div>
      <button
        type="submit"
        className="relative mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Post new competition
      </button>
    </form>
  );
};

export default CompetitionPost;

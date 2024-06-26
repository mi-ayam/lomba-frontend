const FormAreaInput = ({ name, placeholder, onChange, value }) => {
  return (
    <>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <textarea
        id={name}
        rows="4"
        className="block p-2.5 w-full text-sm text-white placeholder-gray-500 bg-bg-blue rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      ></textarea>
    </>
  );
};

export default FormAreaInput;

const FormInput = ({ name, type, placeholder, onChange, value }) => {
  return (
    <>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">
        {/* capitalize first letter of name and change underscores to space */}
        {name.charAt(0).toUpperCase() + name.replace(/([A-Z])|(_)/g, " $1").slice(1)}
      </label>
      <input
        type={type}
        id={name}
        className="shadow-sm bg-bg-blue border border-gray-500 text-white placeholder-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        required
      />
    </>
  );
};

export default FormInput;

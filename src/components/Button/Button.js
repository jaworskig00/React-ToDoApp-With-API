import classNames from "classnames";

export const Button = ({ text, style, type, click }) => {
  const btnClass = classNames({
    "px-3 py-1 m-2 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600":
      style === "submit",
    "px-3 py-1 m-2 text-sm text-red-500 font-semibold border rounded-full border-red-200 hover:text-white hover:bg-red-500":
      style === "cancel",
    "px-3 py-1 m-2 text-sm text-blue-600 font-semibold border rounded-full border-blue-200 hover:text-white hover:bg-blue-600":
      style === "secondary",
    "px-3 py-1 mr-4 text-sm text-purple-600 font-semibold border rounded-full border-purple-200 hover:text-white hover:bg-purple-600 w-3/12 max-w-min absolute top-0 right-0":
      style === "logout",
    underline: style === "primary",
  });
  return (
    <button className={btnClass} type={type} onClick={click}>
      {text}
    </button>
  );
};

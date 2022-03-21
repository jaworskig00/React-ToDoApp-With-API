export const Wrapper = ({ children }) => {
  return (
    <div className="relative flex flex-col p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4">
      {children}
    </div>
  );
};

export const Wrapper = ({ children }) => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg items-center space-y-4">
      {children}
    </div>
  );
};

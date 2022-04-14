import { useSelector } from "react-redux";

const useRole = () => {
  const user = useSelector((state) => state.user);

  if (!user || user.role !== "Admin") return false;

  return true;
};

export default useRole;

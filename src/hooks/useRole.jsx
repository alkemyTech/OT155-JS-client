import { useSelector } from "react-redux";

const useRole = () => {
  const user = useSelector((state) => state.user);

  if (!user || user.user.roleId !== 1) return false;

  return true;
};

export default useRole;

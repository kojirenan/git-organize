import useUserList from './useUserList';

const useHasUser = () => {
  const users = useUserList();
  const hasUsers = users.length !== 0;
  return hasUsers;
};

export default useHasUser;

import useUserList from './useUserList';

const useHasUserInTheTeam = team => {
  const users = useUserList();
  const hasUserInTheTeam = users.find(user => user.team === team);
  return hasUserInTheTeam;
};

export default useHasUserInTheTeam;

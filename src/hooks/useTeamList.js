import { useRecoilValue } from 'recoil';
import { listTeam } from 'utils/atom';

const useTeamList = () => {
  const teams = useRecoilValue(listTeam);
  return teams;
};

export default useTeamList;

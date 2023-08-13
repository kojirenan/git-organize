import { useRecoilState } from 'recoil';
import { listTeam } from 'utils/atom';

const useDeleteTeamToList = () => {
  const [teams, setDeleteTeamList] = useRecoilState(listTeam);
  return id => {
    setDeleteTeamList(teams.filter(team => team.id !== id));
  };
};

export default useDeleteTeamToList;

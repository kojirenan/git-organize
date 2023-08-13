import { useSetRecoilState } from 'recoil';
import { listTeam } from 'utils/atom';

const useAddTeamToList = () => {
  const setAddTeamList = useSetRecoilState(listTeam);
  return team => {
    setAddTeamList(prevList => [...prevList, team]);
  };
};

export default useAddTeamToList;

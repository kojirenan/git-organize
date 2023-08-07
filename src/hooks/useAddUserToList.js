import { useSetRecoilState } from 'recoil';
import { listUsers } from 'utils/atom';

const useAddUserToList = () => {
  const setAddUserList = useSetRecoilState(listUsers);
  return (user, team, office) => {
    setAddUserList(prevState => [...prevState, { ...user, team, office }]);
  };
};

export default useAddUserToList;

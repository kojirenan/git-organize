import { useRecoilValue } from 'recoil';
import { listUsers } from 'utils/atom';

const useUserList = () => {
  const users = useRecoilValue(listUsers);
  return users;
};

export default useUserList;

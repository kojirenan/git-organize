import { useRecoilState } from 'recoil';
import { listUsers } from 'utils/atom';

const useDeleteUserToList = () => {
  const [users, setAddUserList] = useRecoilState(listUsers);
  return id => {
    setAddUserList(users.filter(user => user.id !== id));
  };
};

export default useDeleteUserToList;

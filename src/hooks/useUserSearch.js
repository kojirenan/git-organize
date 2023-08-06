import { v4 as uuidv4 } from 'uuid';

const useUserSearch = () => {
  return async user => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const userData = await response.json();
    const { login, name = 0, public_repos, followers, avatar_url } = await userData;
    if (name !== 0) {
      return {
        login,
        id: uuidv4(),
        name,
        public_repos,
        followers,
        avatar_url,
      };
    }
    return name;
  };
};

export default useUserSearch;

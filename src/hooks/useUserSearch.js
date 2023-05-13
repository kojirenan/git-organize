async function UseUserSearch(user) {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const userData = await response.json();
  const { login, name, public_repos, followers } = await userData;
  return {
    login,
    name,
    public_repos,
    followers,
  };
}

export default UseUserSearch;

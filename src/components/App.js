import Banner from 'components/Banner';
import Form from 'components/Form';
import Team from 'components/Team';
import Footer from 'components/Footer';
import useTeamList from 'hooks/useTeamList';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import useHasUser from 'hooks/useHasUsers';
import AddButton from './AddButton';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const teams = useTeamList();
  const hasUsers = useHasUser();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [renderForm, setRenderForm] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (!hasUsers) {
      setRenderForm(true);
    } else if (windowWidth <= 767 && hasUsers) {
      setRenderForm(false);
    } else {
      setRenderForm(true);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, hasUsers]);

  const teste = () => {
    renderForm === false ? setRenderForm(true) : setRenderForm(false);
  };

  return (
    <>
      <div className={styles.app} style={{ display: hasUsers ? 'grid' : 'flex', flexDirection: 'column' }}>
        <div className={styles.aside}>
          <Banner />
          {renderForm && <Form />}
          {hasUsers && (
            <div className={styles.btnMenu}>
              <AddButton toggle={teste}>
                {renderForm === false ? <MdMenu size={30} color="white" /> : <MdMenuOpen size={30} color="white" />}
              </AddButton>
            </div>
          )}
        </div>
        {hasUsers && (
          <div className={styles.teams}>
            {teams.map(team => (
              <Team key={team.id} teamName={team.name} color={team.color} secundaryColor={team.secundaryColor} />
            ))}
          </div>
        )}
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontSize: '4.6rem' }}
      />
    </>
  );
}

export default App;

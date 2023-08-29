import Banner from 'components/Banner';
import Form from 'components/Form';
import Team from 'components/Team';
import Footer from 'components/Footer';
import useTeamList from 'hooks/useTeamList';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import useHasUser from 'hooks/useHasUsers';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const teams = useTeamList();
  const hasUsers = useHasUser();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [renderForm, setRenderForm] = useState(true);
  const [slideIn, setSlideIn] = useState(true);

  //Observador de tamanho de tela
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (!hasUsers) {
      setRenderForm(true);
      setSlideIn(true);
    } else if (windowWidth <= 767 && hasUsers) {
      setRenderForm(false);
    } else {
      setRenderForm(true);
      setSlideIn(true);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth, hasUsers]);

  //Form deslizante para mobile
  const showForm = () => {
    if (renderForm === false) {
      setRenderForm(true);
      setSlideIn(true);
    } else {
      setSlideIn(false);
      setTimeout(() => {
        setRenderForm(false);
      }, 300);
    }
  };

  return (
    <>
      <div className={styles.app} style={{ display: hasUsers && windowWidth >= 767 ? 'grid' : 'flex', flexDirection: 'column' }}>
        <div className={styles.aside}>
          <Banner />
          {renderForm && <Form slideIn={slideIn} />}
          {hasUsers && (
            <div className={styles.btnMenu} onClick={showForm}>
              {renderForm === false ? <MdMenu size={30} color="white" /> : <MdMenuOpen size={30} color="white" />}
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
        position={windowWidth <= 767 ? 'bottom-center' : 'top-right'}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ fontSize: '4.6rem' }}
      />
    </>
  );
}

export default App;

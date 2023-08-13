import FormAddUser from 'components/FormAddUser';
import styles from './Form.module.css';
import FormAddTeam from 'components/FormAddTeam';
import { useState } from 'react';

const Form = () => {
  const [visibleForm, setVisibleForm] = useState('FormAddUser');
  const toggleForm = () => {
    visibleForm === 'FormAddUser' ? setVisibleForm('FormAddTeam') : setVisibleForm('FormAddUser');
  };

  return (
    <section className={styles.form}>
      {visibleForm === 'FormAddUser' ? <FormAddUser toggleForm={toggleForm} /> : <FormAddTeam toggleForm={toggleForm} />}
    </section>
  );
};

export default Form;

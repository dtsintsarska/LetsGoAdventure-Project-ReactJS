import React, { Fragment, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import styles from './deletePage.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import SubmitButton from '../../components/submit-button';
import getCookie from '../../helpers/cookie';
import UserContext from '../../Context';

const DeletePage = (props) => {
  const context = useContext(UserContext);
  const history = useHistory();

  console.log(props.match.params.id);

  const handleSubmit = async () => {
    const id = props.match.params.id;

    await fetch(`http://localhost:9999/api/offers/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('x-auth-token'),
      },
    });

    history.push(`/adventures`);
  };

  const handleNo = () => {
    history.push('/home');
  };

  if (!context.isAdmin) {
    return <Redirect to='/home' />;
  }
  return (
    <Fragment>
      <Header />
      <section className={styles.background}>
        <Title title='' />
        <h4>Do you really want to delete this adventure?</h4>
        <div onClick={handleSubmit}>
          <SubmitButton title='Yes' onClick={handleSubmit} />
        </div>
        <div onClick={handleNo}>
          <SubmitButton title='No' onClick={handleNo} />
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default DeletePage;

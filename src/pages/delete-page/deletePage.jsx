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

  const image = props.history.location.state.image;
  const title = props.history.location.state.destination;

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
      <section
        style={{ backgroundImage: `url(${image})` }}
        className={styles.background}
      >
        <Title title='' />
        <h4>Do you really want to delete "{title}"?</h4>
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

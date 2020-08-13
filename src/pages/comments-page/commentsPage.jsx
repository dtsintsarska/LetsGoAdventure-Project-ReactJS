import React, { useState, Fragment, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './commentsPage.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import SubmitButton from '../../components/submit-button';
import getCookie from '../../helpers/cookie';
import UserContext from '../../Context';

const CommentsPage = (props) => {
  const [comment, setComment] = useState('');
  const context = useContext(UserContext);
  const history = useHistory();

  const image = props.history.location.state.image;
  const title = props.history.location.state.destination;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = context.user.id;
    const username = context.user.username;
    const adventureId = props.match.params.id;

    await fetch(`http://localhost:9999/api/offers/comment/${adventureId}`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        author: id,
        comment,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('x-auth-token'),
      },
    });
    setComment('');
    toast.success('Successfully post comment!');
    history.push(`/adventures/${adventureId}`);
  };

  if (!context.user.loggedIn) {
    return <Redirect to='/login' />;
  }
  return (
    <Fragment>
      <Header />
      <section
        style={{ backgroundImage: `url(${image})` }}
        className={styles.background}
      >
        <Title title='Share your thoughts about our adventure' />
        <h4>
          Post your comment and let us know what you think about adventure "
          {title}"
        </h4>
      </section>
      <section>
        <div className={styles.divComment}>
          <div>
            <strong> Write your comment here:</strong>
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div onClick={handleSubmit}>
          <SubmitButton title='Post' onClick={handleSubmit} />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default CommentsPage;

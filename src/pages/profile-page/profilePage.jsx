import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../../components/loading';
import styles from './profilePage.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Title from '../../components/title';
import AsideProfile from '../../components/aside-profile';
import SingleOffer from '../../components/offerts/singleOffer';

const ProfilePage = () => {
  const [username, setUsername] = useState(null);
  const [adventures, setAdventures] = useState([]);
  const [adventureNum, setAdventureNum] = useState(null);
  const params = useParams();
  const history = useHistory();

  const getData = useCallback(async () => {
    const id = params.id;

    const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

    if (!response.ok) {
      history.push('/error');
    } else {
      const user = await response.json();

      setUsername(user.username);
      setAdventures(user.participations);
      setAdventureNum(user.participations.length);
    }
  }, [params.id, history]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (!username) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Header />
      <section className={styles.background}>
        <Title title='My personal adventure space' />
        <h4>Welcome {username}!</h4>
      </section>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <strong>List of your adventures:</strong>
          </div>
          <div className={styles.list}>
            {adventures.map((ad) => {
              return <SingleOffer {...ad} key={ad.destination} />;
            })}
          </div>
        </div>
        <AsideProfile username={username} number={adventureNum} />
      </section>
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;

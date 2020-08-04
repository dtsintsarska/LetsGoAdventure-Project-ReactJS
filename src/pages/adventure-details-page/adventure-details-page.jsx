import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import styles from './adventure-details.module.css';
import Title from '../../components/title';
import Paragraph from '../../components/paragraphs';
import Gallery from '../../components/galery';

class AdventureDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      category: null,
      country: null,
      date: null,
      days: null,
      description: null,
      destination: null,
      guide: null,
      image: null,
      participants: null,
      price: null,
      galery: null,
    };
  }

  //static contextType = UserContext

  componentDidMount() {
    this.getOffer(this.props.match.params.id);
  }

  getOffer = async (id) => {
    const response = await fetch(
      `http://localhost:9999/api/offers/details/${id}`
    );

    if (!response.ok) {
      this.props.history.push('/home');
    }

    const adventure = await response.json();

    this.setState({
      id: adventure._id,
      category: adventure.category,
      country: adventure.country,
      date: adventure.date,
      days: adventure.days,
      description: adventure.description,
      destination: adventure.destination,
      guide: adventure.guide,
      image: adventure.image,
      participants: adventure.participants.length,
      price: adventure.price,
      galery: adventure.galery,
    });
  };

  render() {
    const {
      id,
      category,
      country,
      date,
      days,
      description,
      destination,
      guide,
      image,
      participants,
      price,
      galery,
    } = this.state;

    if (!id) {
      return (
        <Fragment>
          <Header />
          <section className={styles.loading}>
            <div>Loading....</div>
          </section>
          <Footer />
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Header />
        <section
          style={{ backgroundImage: `url(${image})` }}
          className={styles.background}
        >
          <Title title={destination} />
          <h3>{description}</h3>
        </section>
        <section className={styles.container}>
          <div className={styles.content}>
            <p>
              <strong>{description}</strong>
            </p>
            <Paragraph days={days} />
          </div>
          <aside className={styles.aside}>
            <div className={styles.box}>
              <section>
                <h2>{destination}</h2>
                <div>
                  <strong>Country: </strong>
                  {country}
                </div>
                <div>
                  <strong>Date: </strong>
                  {date}
                </div>
                <div>
                  <strong>Category: </strong>
                  {category}
                </div>
                <div>
                  <strong>Days: </strong>
                  {days}
                </div>
                <div>
                  <strong>Price: </strong>
                  {price} BGN
                </div>
                <div>
                  <strong>Available seats: </strong>
                  Only {participants} left!
                </div>
                <div>
                  <strong>Guide: </strong>
                  {guide}
                </div>
                <div className={styles.infoButton}>
                  <strong>Do you want to become part of this adventure?</strong>
                  <div>
                    <Link to={`/adventures/enroll/${id}`}>
                      <button type='button' className={styles.button}>
                        Save your seat here!
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </aside>
          <section>
            <div className={styles.galery}>
              <h3>Adventure's Gallery</h3>
              {galery.map((image, index) => {
                return <Gallery image={image} alt='Pic' key={index} />;
              })}
            </div>
          </section>
        </section>

        <Footer />
      </Fragment>
    );
  }
}

export default AdventureDetailsPage;

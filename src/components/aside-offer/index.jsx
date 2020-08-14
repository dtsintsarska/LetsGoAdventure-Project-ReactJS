import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import UserContext from '../../Context';

class Aside extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      category: this.props.category,
      country: this.props.country,
      date: this.props.date,
      days: this.props.days,
      description: this.props.description,
      destination: this.props.destination,
      guide: this.props.guide,
      image: this.props.image,
      participants: this.props.participants,
      price: this.props.price,
      seats: this.props.seats,
      level: this.props.level,
      users: this.props.users,
      isEnrolled: this.props.isEnrolled,
      isAdmin: this.props.isAdmin,
      free: this.props.free,
    };
  }

  static contextType = UserContext;

  render() {
    const {
      id,
      category,
      country,
      date,
      days,
      destination,
      guide,
      price,
      seats,
      level,
      free,
      image,
    } = this.state;

    return (
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
              <strong>Level: </strong>
              {level}
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
              <strong>Max number of participants: </strong>
              {seats} persons
            </div>
            <div>
              <strong>Available seats: </strong>
              Only {free} left!
            </div>
            <div>
              <strong>Guide: </strong>
              {guide}
            </div>

            {!this.state.isEnrolled ? (
              <div className={styles.infoButton}>
                <strong>Do you want to become part of this adventure?</strong>
                <div>
                  <Link
                    to={{
                      pathname: `/adventures/enroll/${id}`,
                      state: { image, destination },
                    }}
                  >
                    <button type='button' className={styles.button}>
                      Save your seat here!
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className={styles.infoButton}>
                <strong>
                  You are already part of this adventure! Do you want to post a
                  comment?
                </strong>
                <div>
                  <Link
                    to={{
                      pathname: `/adventures/comments/${id}`,
                      state: { image, destination },
                    }}
                  >
                    <button type='button' className={styles.buttonComment}>
                      Write a comment about this adventure!
                    </button>
                  </Link>
                </div>
              </div>
            )}
            {this.state.isAdmin ? (
              <div className={styles.infoButton}>
                <Link
                  to={{
                    pathname: `/adventures/delete/${id}`,
                    state: { image, destination },
                  }}
                >
                  <button type='button' className={styles.buttonDelete}>
                    Delete this adventure?
                  </button>
                </Link>
              </div>
            ) : null}
          </section>
        </div>
      </aside>
    );
  }
}

export default Aside;

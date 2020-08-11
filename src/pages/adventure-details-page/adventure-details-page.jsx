import React, { Component, Fragment } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import styles from './adventure-details.module.css';
import Title from '../../components/title';
import Paragraph from '../../components/paragraphs';
import Gallery from '../../components/galery';
import Comment from '../../components/comment';
import UserContext from '../../Context';
import Loading from '../../components/loading';
import Aside from '../../components/aside-offer';

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
      seats: null,
      level: null,
      users: [],
      comments: [],
      isEnrolled: false,
      isAdmin: false,
      showComments: false,
    };
  }

  static contextType = UserContext;

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

    if (this.context.user.id) {
      adventure.participants.map((part) => {
        if (part.id.toString() === this.context.user.id.toString()) {
          this.setState({
            isEnrolled: true,
          });
        }
      });

      if (this.context.isAdmin) {
        this.setState({
          isAdmin: true,
        });
      }
    }

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
      price: adventure.price,
      galery: adventure.galery,
      seats: adventure.seats,
      level: adventure.level,
      participants: adventure.participants.length,
      users: adventure.participants,
      comments: adventure.comments,
    });
  };

  onClick = () => {
    return this.setState({
      showComments: true,
    });
  };

  getComments = (comments) => {
    let arrayComments = comments.reverse();
    if (arrayComments.length === 0) {
      return (
        <div className={styles.noComments}>
          No comments found! Save your seat and be the first who write comment
          about this adventure!
        </div>
      );
    } else {
      return arrayComments.map((comment) => {
        return (
          <Comment
            comment={comment.comment}
            username={comment.username}
            key={comment._id}
          />
        );
      });
    }
  };

  render() {
    let {
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
      seats,
      level,
      users,
      isAdmin,
      isEnrolled,
      comments,
      showComments,
    } = this.state;

    const free = seats - participants;

    if (!id) {
      return <Loading />;
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
          <Aside
            id={id}
            category={category}
            country={country}
            date={date}
            days={days}
            description={description}
            destination={destination}
            guide={guide}
            image={image}
            participants={participants}
            price={price}
            level={level}
            free={free}
            seats={seats}
            users={users}
            isAdmin={isAdmin}
            isEnrolled={isEnrolled}
          />
          <section>
            <div className={styles.galery}>
              <h3>Adventure's Gallery</h3>
              <div>
                {galery.map((image, index) => {
                  return <Gallery image={image} alt='Pic' key={index} />;
                })}
              </div>
            </div>
          </section>
          <section>
            <div className={styles.comments} onClick={this.onClick}>
              <div className={styles.seeMore}>
                <h3>See all comments about this adventure</h3>
                <i className={styles.arrow}></i>
              </div>
              {showComments ? this.getComments(comments) : null}
            </div>
          </section>
        </section>

        <Footer />
      </Fragment>
    );
  }
}

export default AdventureDetailsPage;

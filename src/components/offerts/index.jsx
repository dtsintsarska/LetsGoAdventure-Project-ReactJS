import React, { Component } from 'react';
import styles from './index.module.css';
import SingleOffer from './singleOffer/index';

class Offers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
      title: props.title.toUpperCase(),
      length: props.length,
      result: props.result,
    };
  }

  getOfferts = async () => {
    const promise = await fetch(`http://localhost:9999/api/offers`);
    const offers = await promise.json();

    this.setState({
      offers,
    });
  };

  renderOfferts() {
    let { result, offers, length } = this.state;
    offers = offers.slice(0, length);

    if (result) {
      return result.map((offer) => {
        return <SingleOffer key={offer._id} {...offer} />;
      });
    } else {
      return offers.map((offert) => {
        return <SingleOffer key={offert._id} {...offert} />;
      });
    }
  }

  componentDidMount() {
    if (!this.state.result) {
      this.getOfferts();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        result: this.props.result,
        title: this.props.title.toUpperCase(),
      });
    }
  }

  render() {
    return (
      <section className={styles.camps}>
        <h2>{this.state.title}</h2>

        <ul>{this.renderOfferts()}</ul>
      </section>
    );
  }
}

export default Offers;

import React, { Component } from 'react';
import styles from './index.module.css';
import SingleOffer from './singleOffer/index';

class Offers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offerts: [],
    };
  }

  getOfferts = async () => {
    const promise = await fetch(`http://localhost:9999/api/offers`);
    const offerts = await promise.json();

    this.setState({
      offerts,
    });
  };

  renderOfferts() {
    const { offerts } = this.state;

    return offerts.map((offert) => {
      return <SingleOffer key={offert._id} {...offert} />;
    });
  }

  componentDidMount() {
    this.getOfferts();
  }

  render() {
    return (
      <section className={styles.camps}>
        <h2>Upcoming Adventures</h2>

        <ul>{this.renderOfferts()}</ul>
      </section>
    );
  }
}

export default Offers;

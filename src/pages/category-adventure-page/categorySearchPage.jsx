import React, { Component, Fragment } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import styles from './category-search.module.css';
import Title from '../../components/title';
import UserContext from '../../Context';
import Loading from '../../components/loading';
import Search from '../../components/search';
import Offers from '../../components/offerts/index';

class CategorySearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      category: '',
    };
  }

  static contextType = UserContext;

  componentDidMount() {
    this.getResults(this.props.match.params.category);
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.match.params.category !== prevProps.match.params.category) {
      this.getResults(this.props.match.params.category);
    }
  }

  getResults = async (category) => {
    const response = await fetch(
      `http://localhost:9999/api/offers/search/${category}`
    );

    if (!response.ok) {
      this.props.history.push('/home');
    }

    const results = await response.json();

    this.setState({
      result: results,
      category: category,
    });
  };

  render() {
    const { category, result } = this.state;

    if (!result) {
      return <Loading />;
    }

    return (
      <Fragment>
        <Header />
        <section className={styles.background}>
          <Title title='Adventures' />
          <h4>Live your life by a compass, not a clock!</h4>
        </section>
        <section className={styles.search}>
          <Search />
        </section>
        <section className={styles.adventures}>
          <Offers title={category} result={result} />
        </section>

        <Footer />
      </Fragment>
    );
  }
}

export default CategorySearch;

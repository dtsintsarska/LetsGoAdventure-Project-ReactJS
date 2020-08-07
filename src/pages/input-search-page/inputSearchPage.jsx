import React, { Component, Fragment } from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import styles from './inputSearch.module.css';
import Title from '../../components/title';
import UserContext from '../../Context';
import Loading from '../../components/loading';
import Search from '../../components/search';
import Offers from '../../components/offerts/index';

class InputSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      name: '',
      hasResult: false,
    };
  }

  static contextType = UserContext;

  componentDidMount() {
    this.getResults(this.props.match.params.name);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.getResults(this.props.match.params.name);
    }
  }

  getResults = async (regex) => {
    const response = await fetch(
      `http://localhost:9999/api/offers/search/name/${regex}`
    );

    if (!response.ok) {
      this.props.history.push('/home');
    }

    const results = await response.json();

    if (results.length > 0) {
      this.setState({
        hasResult: true,
      });
    }

    this.setState({
      result: results,
      name: regex,
    });
  };

  render() {
    const { result, name, hasResult } = this.state;

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
          {hasResult ? (
            <Offers title={`Result for "${name}"`} result={result} />
          ) : (
            <div className={styles.noresult}>
              <h3>No results found. Try again!</h3>
            </div>
          )}
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default InputSearch;

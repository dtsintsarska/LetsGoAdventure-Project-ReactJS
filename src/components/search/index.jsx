import React, { Component } from 'react';
import styles from './index.module.css';
import Button from '../button-link';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  render() {
    const { name } = this.state;
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Search:</label>
          <input
            className={styles.input}
            value={name}
            onChange={(e) => this.onChange(e, 'name')}
            type='text'
            placeholder='Search for adventure or destination'
          />
          <Button
            title='Search'
            href={`/adventures/search/name/${name}`}
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Search;

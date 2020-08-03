import React, { Component } from 'react';
import styles from './index.module.css';
import Button from '../button-link';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  onChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;

    this.setState(newState);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { query } = this.state;
  };
  // state = {
  //     query: '',
  //     data: [],
  //     searchString:[]
  // }

  // handleInputChange = (event) => {
  //     this.setState({
  //         query: event.target.value
  //     },()=>{
  //   this.filterArray();
  // })

  // }

  // getData = () => {
  //     fetch(`http://localhost:9999/api/adventures`)
  //     .then(response => response.json())
  //     .then(responseData => {
  //         console.log(responseData)
  //         this.setState({
  //             data:responseData,
  //             searchString:responseData
  //         })
  //     })
  // }

  // filterArray = () => {
  //     let searchString = this.state.query;
  //     let responseData = this.state.data;

  //     if(searchString.length > 0){
  //         // console.log(responseData[i].name);
  //         responseData = responseData.filter(searchString);
  // this.setState({
  //    responseData
  // })
  //     }

  // }

  // componentWillMount() {
  //     this.getData();
  // }

  render() {
    const { query } = this.state;
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label htmlFor='query'>Search:</label>
          <input
            className={styles.input}
            value={query}
            onChange={(e) => this.onChange(e, 'query')}
            type='text'
            placeholder='Search for adventure or destination'
          />
          <Button title='Search' onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Search;

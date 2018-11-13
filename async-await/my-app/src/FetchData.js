import React, { Component } from 'react'
//import axios from 'axios'

class FetchData extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loading: true
    }
  }

  /*************************/
  /* Promisses
  /*************************/
  /*
  componentDidMount() {
    fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
      .then(res => res.json())
      .then(json => this.setState({ data: json, loading: false }));
  }
  */

  /*************************/
  /*  Async Await + Fetch
  /*************************/

  componentDidMount() {
    this.fetchAPI()
  }

  async fetchAPI() {
    try {
      const response = await fetch(
        `https://api.coinmarketcap.com/v1/ticker/?limit=10`
      )
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const json = await response.json()
      console.log(json)
      this.setState({
        data: json,
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  /*************************/
  /*  Async Await + Axios
  /*************************/

  /*
  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://api.coinmarketcap.com/v1/ticker/?limit=20`
      )
      // console.log(response)
      this.setState({ data: response.data, loading: false })
    } catch (error) {
      console.error(error)
    }
  }
  */

  render() {
    return (
      <div>
        <ul>
          {this.state.loading ? (
            <h6>Loading ...</h6>
          ) : (
            this.state.data.map(el => (
              <li key={el.id}>
                {el.name}: {el.price_usd}
              </li>
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default FetchData

import React, { Component } from "react";
import { Cards, CountryPicker, Charts, WorldTable } from "./Components/index";
import styles from "./app.module.css";
import { fetchData } from "./api/index";
import  coronaImage from '../src/images/corona.png'
class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={coronaImage} alt='Corona'/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <h3>Global Statistics</h3>
        <WorldTable />
      </div>
    );
  }
}

export default App;

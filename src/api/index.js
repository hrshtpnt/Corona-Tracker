import axios from "axios";
const url = "https://covid19.mathdro.id/api";
const tableAPI = "https://sharadcodes.github.io/c-data/data/world.json";
const IndianStates = "https://api.covid19india.org/state_district_wise.json";

export const fetchData = async (country = "") => {
  let tempUrl = url;
  if (country !== "") {
    tempUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(tempUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (e) {
    console.log("API fetch error");
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      reportDate: new Date(dailyData.reportDate)
        .toDateString()
        .split("2020")
        .join(""),
    }));
    return modifiedData;
  } catch (e) {
    console.log("API fetch error - fetch daily data");
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (e) {
    console.log("fetch countries failed with " + e);
  }
};

export const fetchTableData = async () => {
  try {
    const data = await axios.get(tableAPI);
    const modifiedData = data.data.map((index) => ({
      ...index,
      casesSummary:
        index.todayCases !== 0
          ? `${index.cases}+${index.todayCases} Today`
          : index.cases,
      deathSummary:
        index.todayDeaths !== 0
          ? `${index.deaths}+${index.todayDeaths} Today`
          : index.deaths,
    }));
    return modifiedData;
  } catch (e) {
    console.log("table API failed with " + e);
  }
};
  export const fetchIndiaData = async () => {
    try {
      const data = await axios.get(IndianStates);
      const modifiedData = Object.entries(data.data).map((e) => ( { [e[0]]: e[1] } ));
      const statesList = [];
      for (let statesData of modifiedData) {
        for (let stateName in statesData) {
          statesList.push(stateName);
        }
      }
      statesList.shift();
      return [modifiedData, statesList];
    }
    catch(e) {
      console.log('India API failed to fetch data')
    }
  };

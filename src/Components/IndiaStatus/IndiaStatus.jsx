import React, { useEffect, useState } from "react";
import { fetchIndiaData } from "../../api/index";
import { FormControl, NativeSelect, InputLabel } from "@material-ui/core";
import styles from "./IndiaStatus.module.css";
import classnames from "classname";
function IndiaStatus() {
  const [indiaData, setIndiaData] = useState();
  const [districtData, setDistrictData] = useState([]);
  const [stateData, setStateData] = useState({ name: "", position: 0 });
  const [selectedDistrict, setSeletedDistrict] = useState("");
  const [coronaInfo, setCoronaInfo] = useState({
    active: 0,
    recovered: 0,
    deaths: 0,
    confirmed: 0,
  });
  useEffect(() => {
    const fetchAPI = async () => {
      setIndiaData(await fetchIndiaData());
    };
    fetchAPI();
  }, []);

  const handleStateChange = (indianState, pos) => {
    //indiaData[0][2]['Andhra Pradesh'].districtData
    const names =
      indianState !== "" && indiaData[0][pos][indianState].districtData;
    const districtNames = [];
    for (let name in names) {
      districtNames.push(name);
    }
    setStateData({ name: indianState, position: pos });
    setDistrictData(districtNames);
  };

  const handleDistrictSelect = (district) => {
    const { name, position } = stateData;
    const covidInfo = indiaData[0][position][name].districtData[district];
    setSeletedDistrict(district);
    setCoronaInfo({
      active: covidInfo.active,
      recovered: covidInfo.recovered,
      confirmed: covidInfo.confirmed,
      deaths: covidInfo.deceased,
    });
  };

  if (indiaData === undefined) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div className={styles.indiaStatus}>
        <div className={classnames(styles.indiaStatus, styles.selectedDataHeading)}>
          <FormControl className={styles.formControl}>
            <InputLabel shrink id="state">
              State / UT
            </InputLabel>
            <NativeSelect
              onChange={(e) =>
                handleStateChange(e.target.value, e.target.selectedIndex)
              }
            >
              <option value={[]}>Select State</option>
              {indiaData[1].map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl
            className={styles.formControl}
            disabled={!districtData.length > 0}
          >
            <InputLabel shrink id="district">
              District
            </InputLabel>
            <NativeSelect
              onChange={(e) => handleDistrictSelect(e.target.value)}
            >
              <option value={[]}>Select District</option>
              {districtData.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>

        <div className={styles.indiaStatus}>
          <div className={classnames(styles.tiles, styles.active)}>
            <h6 className={styles.type}>Active</h6>
            <p>{coronaInfo.active}</p>
          </div>
          <div className={classnames(styles.tiles, styles.recovered)}>
            <h6 className={styles.type}>Recovered</h6>
            <p>{coronaInfo.recovered}</p>
          </div>
          <div className={classnames(styles.tiles, styles.deaths)}>
            <h6 className={styles.type}>Deaths</h6>
            <p>{coronaInfo.deaths}</p>
          </div>
          <div className={classnames(styles.tiles, styles.confirmed)}>
            <h6 className={styles.type}>Confirmed</h6>
            <p>{coronaInfo.confirmed}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IndiaStatus;

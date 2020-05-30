import React, { useEffect, useState } from "react";
import { fetchIndiaData, fetchIndianStatesReport } from "../../api/index";
import { FormControl, NativeSelect, InputLabel } from "@material-ui/core";
import styles from "./IndiaStatus.module.css";
import classnames from "classname";
import Divider from '@material-ui/core/Divider';
import MiniCard from '../MiniCard/MiniCard';
import IndianStatesTable from '../IndianStatesTable/IndianStatesTable';
import {Button} from "@material-ui/core";

function IndiaStatus() {
  const [indiaData, setIndiaData] = useState();
  const [districtData, setDistrictData] = useState([]);
  const [stateData, setStateData] = useState({ name: "", position: 0 });
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [coronaInfo, setCoronaInfo] = useState({
    active: 0,
    recovered: 0,
    deaths: 0,
    confirmed: 0,
  });

  const [stateTableData, setStateTableData] = useState([]);
  const [loadingText, setLoadingText] = useState(false);
  useEffect(() => {
    const fetchAPI = async () => {
      setIndiaData(await fetchIndiaData());
    };
    fetchAPI();
  }, []);

  const handleStateChange = (indianState, pos) => {
    //indiaData[0][2]['Andhra Pradesh'].districtData
    setSelectedDistrict('');
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
    setSelectedDistrict(district);
    if (district !== '' ) {
    const { name, position } = stateData;
    const covidInfo = indiaData[0][position][name].districtData[district];
      setCoronaInfo({
        active: covidInfo.active || 0,
        recovered: covidInfo.recovered || 0,
        confirmed: covidInfo.confirmed || 0,
        deaths: covidInfo.deceased || 0,
      });
    }
  };

  const handleShowStateData = () => {
    setLoadingText(true);
    const fetchAPI = async () => {
      setStateTableData(await fetchIndianStatesReport());
      setLoadingText(false);
    };
    fetchAPI();
  }

  if (indiaData === undefined) {
    return <p>Loading ...</p>;
  } else {
    return (
      <React.Fragment>
      <div className={styles.stateDataSection}>
        <Divider />
        <Button
          variant="outlined"
          color="secondary"
          className={styles.buttonShowStateData}
          onClick={handleShowStateData} >show State Data
        </Button>
        {loadingText && <p>Loading...</p>}
        {stateTableData.length>0 && <IndianStatesTable statesData={stateTableData}/>}
        <br/>
        <Divider />
      </div>
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
              <option value={''}>Select State</option>
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
              value={selectedDistrict}
            >
              <option value={''}>Select District</option>
              {districtData.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>

        {selectedDistrict !== '' && stateData.name !== '' && <div className={styles.indiaStatus}>
          <MiniCard count={coronaInfo.active} statusType={'active'} />
          <MiniCard count={coronaInfo.confirmed} statusType={'confirmed'} />
          <MiniCard count={coronaInfo.recovered} statusType={'recovered'} />
          <MiniCard count={coronaInfo.deaths} statusType={'deaths'} />
        </div>}
      </div>
      </React.Fragment>
    );
  }
}

export default IndiaStatus;

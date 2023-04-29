import React from 'react';
import '../styles/Details.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPeopleGroup,
  faSkull,
  faMaskFace,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';

function Details({ countriesId }) {
  const { countries } = useSelector((state) => state.countries);
  const country = countries.find((country) => country.Combined_Key === countriesId);

  return (
    <div className="detailsContainer">

      <div className="detailsContents">
        <div className="countryName">
          {country.Combined_Key}
          <p>{country.Last_Update}</p>
        </div>
        <div className="detailsData">
          <i className="icon-wrapper">
            <FontAwesomeIcon icon={faPeopleGroup} />
          </i>
          <p>Confirmed cases: </p>
          {country.Confirmed}
        </div>
        <div className="detailsData">
          <i className="icon-wrapper">
            <FontAwesomeIcon icon={faSkull} />
          </i>
          <p>Deaths: </p>
          {country.Deaths}
        </div>
        <div className="detailsData">
          <i className="icon-wrapper">
            <FontAwesomeIcon icon={faMaskFace} />
          </i>
          <p>Incident Rate: </p>
          {country.Incident_Rate}
        </div>
        <div className="detailsData">
          <i className="icon-wrapper">
            <FontAwesomeIcon icon={faChartSimple} />
          </i>
          <p>Case Ratio: </p>
          {country.Case_Fatality_Ratio}
        </div>
      </div>
    </div>
  );
}

export default Details;

Details.propTypes = {
  countriesId: PropTypes.string.isRequired,
};

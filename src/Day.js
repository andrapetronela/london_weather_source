import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
library.add(faCloud);



	const Day = ({time, humidity, max_temp, min_temp, weather_state_name, air_pressure}) => {
		
		return (
			
				<div className="day">
					<h3 className="date"> <i className="far fa-calendar-alt calendar"></i> {time} </h3>
					<h3 className="state"> <FontAwesomeIcon icon="cloud" className="cloud"/>{weather_state_name}</h3>
					<h3>Humidity: {humidity}</h3>
					<h3 className="max">Max: {max_temp}&#176;C</h3>
					<h3 className="min">Min: {min_temp}&#176;C </h3>
					<h3>Air pressure: {air_pressure}</h3>
				</div>

		)
	}
	


export default Day;


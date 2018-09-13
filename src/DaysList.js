import React from 'react';
import Day from './Day';

const DaysList = ({data}) => {
		return (
			<div className="day-wrapper">
			{ data.map((data, i) => {
				return (
					<Day key = { i } 
					time = {data.applicable_date}
					weather_state_name = {data.weather_state_name}
					humidity = {data.humidity}
					max_temp = {Math.trunc(data.max_temp)}
					min_temp = {Math.trunc(data.min_temp)}
					air_pressure = {data.air_pressure.toFixed(2)}/>
			)})}
			</div>
			);
} 
	
export default DaysList;
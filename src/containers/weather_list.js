import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		//we want to convert temperature from Kelvin to Celcius
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
//instead of writing two lines where a lot of words match
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;
//we use ES6 to clean our code
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="˚C" /></td>
				<td><Chart data={pressures} color="green" units="hPa" /></td>
				<td><Chart data={humidities} color="black" units="%" /></td>
			</tr>
		)
	}

				//to access to a JavaScript variable we use now curly braces {}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (˚C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// ES5 syntax
//function mapStateToProps(state) {
	//return { weather: state.weather }; //we use state.weather here because
	// we assigned our WeatherReducer in reducers/index.js to the weather key.
// ES6 syntax
function mapStateToProps({ weather }) {//here we create a variable weather
	//it would be same than: const weather = state.weather
	//return { weather: weather }
	return { weather };
}

//now we have to connect our Component to mapStateToProps

export default connect(mapStateToProps)(WeatherList)
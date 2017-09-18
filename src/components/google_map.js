import React, { Component } from 'react';



class GoogleMap extends Component {
	//we want to create a google.map
	componentDidMount() {
		//this is how we create an embedded Google map inside of our document
		//As a first argument "this.refs.map" Google Maps will take a reference to an HTML node =>this.refs.map ; so 
		//this here is the place where the map is being rendered to.
		//This is how we do interaction between third party libraries that dont really know how to work
		//in the type of a react ecosystem
		//As a second argument we pass an oprtions Object. WE first designate
		//the zoom level, center propertz where to center the map on. latitude and lontitude.

		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		//this.refs.map
		return <div ref="map" />
	}


}


export default GoogleMap;
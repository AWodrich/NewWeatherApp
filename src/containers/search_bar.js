import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


// I had to delete 'default' from export because
// I got an error message after I added in the bottom
//'export default connect'. Obviously it is only allowed
//once to use a default per module.
class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state= { term:''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value })
	}

	onFormSubmit(event){
				// console.log(props)

		event.preventDefault(); //this function tells the browser
		//not to submit the form. Because, when user types input and
		//presses submit, then the content is removed and the new 
		//empty form submitted. we dont want that.
		//now we need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<form onSubmit ={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
      	<span className="input-group-btn">
      		<button type="submit" className="btn btn-secondary">Submit</button>
      	</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

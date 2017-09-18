import { FETCH_WEATHER } from '../actions/index';

//redux promise.
//here we handle the fetchWeatherAction

//we default the state to null=> state=null
//but as we might want our weather data be stored into
//an array. so we default state to an empty array:
export default function(state = [], action) {
	//we need to set up a switch statement in here, to handle
	//only the fetchweather action tyoe.
	switch(action.type) {
		// instead of writing here
		// case 'FETCH_WEATHER' we import it above from ur file
		//we do this because it is less easy to get a bug.
		//if we i.e. forget the 'r' in FETCH_WEATHER. our app wouldnt work.
		case FETCH_WEATHER: //now we can make typos all along.
			
		// if we look at the object in the console. we see payload, and data. we want the data.
		//we need to take the state. the current state of cities. and add on the existing state. not replace it.
		//that is why we return state.push
		//BUT we cannot manipulate state outside the constructor function
		//and without using setState. so we have to create a new
		//array that includes all of the old weather data and the new piece of
		//weather data. so we concat the new array with the exisiting array of cities.
		//concat doesnt change the existing array. it creates a new one. so we
		//are returning a new instance of state!!!
// ES5 syntax: 
//return state.concat([ action.payload.data ]);
//BUT we want ES6 syntax because it cleans up the code!
			return [ action.payload.data, ...state ];
			
	}		
	return state;
}
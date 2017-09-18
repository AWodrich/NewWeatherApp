import axios from 'axios';

const API_KEY = '236b3de2b41474b5d25c2e71473ca9c0';
//this is the URL copied from the weather page sample
// http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b1b15e88fa797225412429c1c50c122a1
//now we delete/clean the URL by deleting the api inside of it and the search key London.
//see below:
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(city) {
	//we take the ROOT_URL and combine it with the city.
	//& => and
	//q= => comes from the website documentation on how to make an API request.
	//us => country code. so only cities within Germany will be searched.
	const url = `${ROOT_URL}&q=${city},de`;
	const request = axios.get(url); // this is the api request in form of a get.request!request will return a promise.
//this promise is passed in the actions payload property.

	console.log('Request:', request);
		//this is the ajax request
		//we return the promise as the payload. so request is the promise
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
//if the payload property is a promise then
//redux-promise stops the action intirely.
//and then once the request finishes it dispatches 
//a new action of the same type but with a payload of
//the resolved request. that means, it unwraps the promise
//for us. the reducers do not care about the promise, they
//only care about the data. so it stops the action, it
//waits until the promise resolves, that means until the ajax request,
// is finished, and the it says OK
//Ive got the resolved data.
//That is fantastic about middleware.  we use this middleware
//that stops the promise and it stops the action in its
//tracks until the promise is resolved.



//axios library behaves like the jquery ajax method


//promises do not contain any of our data
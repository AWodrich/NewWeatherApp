//no renderening data, no state necessary
//hence we need only a functional component
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';//check out the documentation!!

function average(data) {
	return _.round(_.sum(data)/data.length); //calculating the average and round it up/down
}
//Remember!!! Every time you see yourself in replicating
//markup in your file, you should do a refactor into
//a seperate reusable component.


//here we copy and paste the code from the weather_list.js as 
	//that code is a reusable one.
export default (props) => {
	
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />	
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	)
}

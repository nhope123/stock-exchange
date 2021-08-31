import React, { useContext } from 'react'
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr"
import { DateSelectionContext } from '../contexts/dateSelectionContext';

const options = {
	mode: 'range',
	enableTime: true,
	dateFormat: 'U'	
}

/**
	//maxDate: '',
	//minDate: '',
	
	//defaultDate: [],
	//onClose: ()=>{},
	//dateFormat: '',
*/

const DateTimePicker = () => {

	const {startPeriod,setStartPeriod,endPeriod,setEndPeriod} = useContext(DateSelectionContext)
	const getDates = (value)=>{
		console.log(value);
	}

	return (
		<section>
			<Flatpickr  options={{...options}} onClose={ getDates } />
		</section>
	)
}

export default DateTimePicker

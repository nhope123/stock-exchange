import React, {createContext, useState} from "react"

export const DateSelectionContext = createContext()

const DateSelectionProvider = (props) =>{
	const [startPeriod, setStartPeriod] = useState('')
	const [endPeriod, setEndPeriod] = useState('')

	return(
		<DateSelectionContext.Provider value={ {
																					startPeriod, setStartPeriod,
																					endPeriod, setEndPeriod
		 } } >
			{props.children}
		</DateSelectionContext.Provider >
	)
}

export default DateSelectionProvider
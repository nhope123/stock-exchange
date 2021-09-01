import React from 'react'
import {
	Charts,
	ChartContainer,
	ChartRow,
	YAxis,
	LineChart,
	Resizable
} from 'react-timeseries-charts'

const TimeSeriesChart = () => {
	return (
		<section >
			<Resizable >
				<ChartContainer timeRange={}  >
					<ChartRow  height={'350'}>
						<YAxis id={'goldAxis'} label={'Gold Cost ($)'} min={0} max={5000} type={'log'} format={'$,f'} />
						<Charts >
							<LineChart axis={'goldAxis'} series={} column={} />
						</Charts>
					</ChartRow>
				</ChartContainer>
			</Resizable>				
		</section >
	)
}

export default TimeSeriesChart

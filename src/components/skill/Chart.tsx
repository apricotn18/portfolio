"use client";

import React from "react";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
	ArcElement,
	Tooltip,
	Legend
);

const options = {
	events: [],
}

export const Chart = ({ number }: { number: number }) => {
	return <Doughnut data={{
		datasets: [
			{
				data: [number, 5 - number],
				backgroundColor: [
					'#ffcd43',
					'rgba(255, 205, 67, 0.3)',
				],
				borderWidth: 0,
			}
		],
	}} options={options} />
};

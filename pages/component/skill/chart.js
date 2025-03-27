import Chart from 'chart.js/auto';

export default function openChart (element) {
	new Chart(element, {
		type: 'radar',
		data: {
			labels: [
				['HTML', 'CSS', 'JavaScript'],
				'TypeScript',
				['React', 'Next.js'],
				'Node.js', 
				'Jest'
			],
			datasets: [{
				label: 'スキル',
				data: [4, 3, 2, 2, 2],
				backgroundColor: 'RGBA(145,53,95,.2)',
				borderColor: 'RGBA(145,53,95,1)',
				borderWidth: 1,
				pointBackgroundColor: 'RGBA(145,53,95,1)',
				pointRadius: 2,
				pointHitRadius: 15,
			}],
			borderWidth: 1
		},
		options: {
			legend: {
				display: false
			},
			scale:{
				ticks:{
					suggestedMin: 1,
					suggestedMax: 4,
					stepSize: 1,
					fontSize: 9
				}
			},
			tooltips:{
				bodyFontColor: '#ccc'
			},
			layout: {
				padding: {
					top: 10,
					right: 10,
					bottom: 10,
					left: 10
				}
			}
		}
	});
}

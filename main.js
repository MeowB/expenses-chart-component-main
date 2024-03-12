
fetch('data.json')
	.then(response => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	})
	.then(data => {
		// values for the chart
		let dataSpending = [];
		
		data.forEach(element => {
			dataSpending.push(element.amount)
		});

		
		// CHART
		const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
		const canvas = document.getElementById('myChart');
		canvas.width = 400;
		canvas.height = 400;

		const chartData = {
		labels: labels,
		datasets: [{
			label: 'Sample Data',
			backgroundColor: 'hsl(10, 79%, 65%)',
			borderColor: 'rgb(54, 162, 235)',
			hoverBackgroundColor: 'hsl(186, 34%, 60%)',
			data: [dataSpending[0], dataSpending[1], dataSpending[2], dataSpending[3], dataSpending[4], dataSpending[5], dataSpending[6]],
		}]
		};

		// Configuration options
		const config = {
		type: 'bar',
		data: chartData,
		options: {
			plugins: {
				legend: {
					display: false
				},
				
			},
			scales: {
			y: {
				beginAtZero: true,
				grid: {
					display: false
				},
				ticks: {
					display: false
				},
				border: {
					display: false
				}
			},
			x: {
				grid: {
					display: false
				},
				border: {
					display: false
				}
			}
			},
			elements: {
				bar: {
					borderRadius: 5,
					borderSkipped: false
				}
			},
			maintainAspectRatio: false
		}
		};


		// Create the chart
		var myChart = new Chart(
			document.getElementById('myChart'),
			config
		);



	})
	.catch(error => {
		console.error("There was a problem fetching the data:", error)
	})

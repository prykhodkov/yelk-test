const chartRLQ = document.getElementById('chartRLQ').getContext('2d');
const chartKI = document.getElementById('chartKI').getContext('2d');
const chartMZI = document.getElementById('chartMZI').getContext('2d');
const chartScores = document.getElementById('chartScores').getContext('2d');
const chartKPs = document.getElementById('chartKPs').getContext('2d');

const plugin = {
	id: 'customCanvasBackgroundColor',
	beforeDraw: (chart, args, options) => {
		const {ctx} = chart;
		ctx.save();
		ctx.globalCompositeOperation = 'destination-over';
		ctx.fillStyle = options.color || '#99ffff';
		ctx.fillRect(0, 0, chart.width, chart.height);
		ctx.restore();
	}
};

function getIcon(i) {
	let img = new Image();
	img.src = `dist/img/icon-${i}.png`;
	return img;
}

function getEmoji(i) {
	let img = new Image();
	img.src = `dist/img/emoji-${i}.png`;
	return img;
}

function getLiquidLineData(n, type) {
	if (type === 'main') {
		return [n, n - 5, n - 4, n, n - 1, n - 8, n - 10, n - 5];
	}
	return [n - 5, n - 1, n + 3, n + 5, n + 4, n + 3, n - 2, n - 5];
}

function getNumbers(n) {
	let array = [];
	for (i = 0; i < n; i++) array.push(n);
	return array;
}

let chartRLQConfig = {
	type: 'line',
	data: {
		labels: ['', '', '', '', '', '', '', ''],
		datasets: [
			{
				label: '1',
				data: getLiquidLineData(59.47, 'main'),
				backgroundColor: ['#f18c5c'],
				borderColor: '#f18c5c',
				fill: true,
				pointRadius: 0,
				barPercentage: 1,
				categoryPercentage: 1
			},
			{
				label: '2',
				data: getLiquidLineData(59.47, 'secondary'),
				backgroundColor: ['#f6b190'],
				borderColor: '#f6b190',
				fill: true,
				pointRadius: 0,
				barPercentage: 1,
				categoryPercentage: 1
			}
		]
	},
	options: {
		aspectRatio: 304/144,
		plugins: {
			legend: {
				display: false
			},
			customCanvasBackgroundColor: {
				color: '#fef6f3',
			},
			annotation: {
				clip: false,
				annotations: {
					label1: {
						type: 'label',
						content: ['59,47'],
						xValue: 2.5,
						yValue: 60,
						xAdjust: -50,
						yAdjust: 58,
						color: '#fff',
						font: {
							family: 'Inter',
							size: 24,
							weight: '700'
						}
					},
					label2: {
						type: 'label',
						content: ['%'],
						xValue: 2.5,
						yValue: 60,
						xAdjust: -8,
						yAdjust: 61,
						color: '#fff',
						font: {
							family: 'Inter',
							size: 14,
							weight: '700'
						}
					},
					label3: {
						type: 'label',
						content: getIcon(1),
						width: 16,
						height: 16,
						xValue: 2.5,
						yValue: 60,
						xAdjust: 110,
						yAdjust: 60,
					},
					label4: {
						type: 'label',
						content: ['56 884'],
						xValue: 2.5,
						yValue: 60,
						xAdjust: 150,
						yAdjust: 61,
						color: '#fff',
						font: {
							family: 'Inter',
							size: 14,
							weight: '400'
						}
					},
				}
			}
		},
		scales: {
			x: {
				display: false,
				grid: {
					display: false,
					drawTicks: false,
				},
				border: {
					display: false
				}
			},
			y: {
				min: 0,
				max: 100,
				ticks: {
					display: false,
					stepSize: 10,
				},
				grid: {
					drawTicks: false,
					color: ['#eff2f5', "#eff2f5", "#eff2f5", "#eff2f5", "#eff2f5", "#eff2f5", "#eff2f5", "#eff2f5", '#eff2f5', '#eff2f5', '#fff'],
				},
				border: {
					display: false
				},
			}
		},
		animations: {
			tension: {
				duration: 500,
				easing: 'linear',
				from: 0.8,
				to: 0.1,
				loop: true
			}
		},
	},
	plugins: [plugin],
};

let chartKIConfig = {
	type: 'doughnut',
	data: {
		datasets: [
			{
				data: getNumbers(39),
				backgroundColor: '#ededed',
				borderWidth: 3,
				borderColor: '#fff',
				weight: 0.8,
			},
			{
				data: getNumbers(39),
				backgroundColor: '#e3e3e3',
				borderWidth: 3,
				borderColor: '#fff',
				weight: 0.2,
				offset: -9
			},
		]
	},
	options: {
		aspectRatio: 304/144,
		rotation: -110,
		circumference: 220,
		cutout: 28,
		layout: {
			padding: {
				top: 0,
				left: 80,
				right: 80,
				bottom: 40
			}
		},
		plugins: {
			annotation: {
				clip: false,
				annotations: {
					label1: {
						type: 'label',
						content: ['0'],
						xValue: 2.5,
						yValue: 60,
						xAdjust: 27,
						yAdjust: 64,
						color: '#616e85',
						font: {
							family: 'Inter',
							size: 10,
							weight: '400'
						}
					},
					label2: {
						type: 'label',
						content: ['100'],
						xValue: 2.5,
						yValue: 60,
						xAdjust: 133,
						yAdjust: 64,
						color: '#616e85',
						font: {
							family: 'Inter',
							size: 10,
							weight: '400'
						}
					},
				}
			}
		}
	}
};

let chartMZIConfig = {
	type: 'doughnut',
	data: {
		datasets: [
			{
				data: [70, 30],
				backgroundColor: ['#4c57fb', '#d9d9d9'],
				borderWidth: 0,
			}
		]
	},
	options: {
		aspectRatio: 304/144,
		rotation: -110,
		circumference: 220,
		cutout: 37,
		layout: {
			padding: {
				top: 0,
				left: 80,
				right: 80,
				bottom: 40
			}
		},
		plugins: {
			annotation: {
				clip: false,
				annotations: {
					label1: {
						type: 'label',
						content: getEmoji(1),
						width: 30,
						height: 30,
						xValue: 10,
						yValue: 10,
						xAdjust: 21,
						yAdjust: 55,
					},
					label2: {
						type: 'label',
						content: getEmoji(2),
						width: 30,
						height: 30,
						xValue: 10,
						yValue: 10,
						xAdjust: 81,
						yAdjust: -29,
					},
					label3: {
						type: 'label',
						content: getEmoji(3),
						width: 30,
						height: 30,
						xValue: 10,
						yValue: 10,
						xAdjust: 140,
						yAdjust: 55,
					}
				}
			}
		},
	}
};

let chartScoresConfig = {
	type: 'bar',
	data: {
		labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
		datasets: [{
			data: [4.6, 1.9, 2.3, 4.6, 1.4, 4.6, 4.6, 1.9, 2.3, 4.6, 1.4, 4.6],
			barThickness: 15,
			backgroundColor: '#f18c5c',
			borderRadius: 6
		}]
	},
	options: {
		aspectRatio: 640/228,
		scales: {
			x: {
				grid: {
					display: false,
				},
				border: {
					display: false
				}
			},
			y: {
				min: 1,
				ticks: {
					maxTicksLimit: 5,
					padding: 8,
					crossAlign: 'far',
				},
				grid: {
					color: '#eff2f5',
				},
				border: {
					display: false
				},
			}
		},
		layout: {
			padding: {
				top: 0,
				left: 24,
				right: 24,
				bottom: 50
			}
		},
		plugins: {
			legend: {
				display: false
			}
		}
	}
};

let chartKPsConfig = {
	type: 'bar',
	data: {
		labels: ['KP 1', 'KP 2', 'KP 3', 'KP 4', 'KP 5'],
		datasets: [
		{
			label: 'KP 1',
			data: [90, 0, 0, 0, 0],
			barThickness: 76,
			backgroundColor: ['#5155c3', 'transparent', 'transparent', 'transparent', 'transparent'],
			borderRadius: 6
		},
		{
			label: 'KP 2',
			data: [-1, 73, 0, 0, 0],
			barThickness: 76,
			backgroundColor: ['#597dbe', '#597dbe', 'transparent', 'transparent', 'transparent'],
			borderRadius: 6
		},
		{
			label: 'KP 3',
			data: [-1, 0, 24, 0, 0],
			barThickness: 76,
			backgroundColor: ['#5f99bb', 'transparent', '#5f99bb', 'transparent', 'transparent'],
			borderRadius: 6
		},
		{
			label: 'KP 4',
			data: [-1, 0, 0, 62, 0],
			barThickness: 76,
			backgroundColor: ['#65b8b7', 'transparent', 'transparent', '#65b8b7', 'transparent'],
			borderRadius: 6
		},
		{
			label: 'KP 5',
			data: [-1, 0, 0, 0, 24],
			barThickness: 76,
			backgroundColor: ['#6cddb1', 'transparent', 'transparent', 'transparent', '#6cddb1'],
			borderRadius: 6
		},
	]
	},
	options: {
		aspectRatio: 640/228,
		scales: {
			x: {
				stacked: true,
				grid: {
					display: false,
				},
				border: {
					display: false
				}
			},
			y: {
				stacked: true,
				min: 0,
				max: 100,
				ticks: {
					stepSize: 25,
					padding: 8,
					crossAlign: 'far',
					callback: function(value) { return value + '%' }
				},
				grid: {
					color: '#eff2f5',
				},
				border: {
					display: false
				},
			}
		},
		layout: {
			padding: {
				top: 0,
				left: 24,
				right: 24,
				bottom: 18
			}
		},
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					boxHeight: 12,
					boxWidth: 12,
					padding: 16,
					useBorderRadius: true,
					borderRadius: 4,
					color: '#222531',
				}
			}
		}
	}
};

if (window.innerWidth > 500 && window.innerWidth < 601) {
	chartRLQConfig.options.plugins.annotation.annotations.label1.xAdjust = -38;
	chartRLQConfig.options.plugins.annotation.annotations.label1.yAdjust = 46;
	chartRLQConfig.options.plugins.annotation.annotations.label1.font.size = 18;
	chartRLQConfig.options.plugins.annotation.annotations.label2.xAdjust = -5;
	chartRLQConfig.options.plugins.annotation.annotations.label2.yAdjust = 48;
	chartRLQConfig.options.plugins.annotation.annotations.label2.font.size = 11;
	chartRLQConfig.options.plugins.annotation.annotations.label3.xAdjust = 75;
	chartRLQConfig.options.plugins.annotation.annotations.label3.yAdjust = 46;
	chartRLQConfig.options.plugins.annotation.annotations.label4.xAdjust = 110;
	chartRLQConfig.options.plugins.annotation.annotations.label4.yAdjust = 46;

	chartKIConfig.options.layout.padding.left = 22;
	chartKIConfig.options.layout.padding.right = 22;
	chartKIConfig.options.layout.padding.bottom = 26;
	chartKIConfig.options.cutout = 22;
	chartKIConfig.options.plugins.annotation.annotations.label1.xAdjust = -24;
	chartKIConfig.options.plugins.annotation.annotations.label1.yAdjust = 56;
	chartKIConfig.options.plugins.annotation.annotations.label2.xAdjust = 64;
	chartKIConfig.options.plugins.annotation.annotations.label2.yAdjust = 56;
	chartKIConfig.data.datasets[0].borderWidth = 2;
	chartKIConfig.data.datasets[1].borderWidth = 2;

	chartMZIConfig.options.layout.padding.left = 22;
	chartMZIConfig.options.layout.padding.right = 22;
	chartMZIConfig.options.layout.padding.bottom = 32;
	chartMZIConfig.options.cutout = 26;
	chartMZIConfig.options.plugins.annotation.annotations.label1.height = 24;
	chartMZIConfig.options.plugins.annotation.annotations.label1.width = 24;
	chartMZIConfig.options.plugins.annotation.annotations.label1.xAdjust = -16;
	chartMZIConfig.options.plugins.annotation.annotations.label1.yAdjust = 50;
	chartMZIConfig.options.plugins.annotation.annotations.label2.height = 24;
	chartMZIConfig.options.plugins.annotation.annotations.label2.width = 24;
	chartMZIConfig.options.plugins.annotation.annotations.label2.xAdjust = 23;
	chartMZIConfig.options.plugins.annotation.annotations.label2.yAdjust = -17;
	chartMZIConfig.options.plugins.annotation.annotations.label3.height = 24;
	chartMZIConfig.options.plugins.annotation.annotations.label3.width = 24;
	chartMZIConfig.options.plugins.annotation.annotations.label3.xAdjust = 62;
	chartMZIConfig.options.plugins.annotation.annotations.label3.yAdjust = 50;
}

if (window.innerWidth < 601) {
	chartScoresConfig.options.layout.padding.left = 12;
	chartScoresConfig.options.layout.padding.right = 12;
	chartScoresConfig.options.layout.padding.bottom = 12;

	chartKPsConfig.options.layout.padding.left = 12;
	chartKPsConfig.options.layout.padding.right = 12;
	chartKPsConfig.options.layout.padding.bottom = 12;
	chartKPsConfig.data.datasets[0].barThickness = 40;
	chartKPsConfig.data.datasets[1].barThickness = 40;
	chartKPsConfig.data.datasets[2].barThickness = 40;
	chartKPsConfig.data.datasets[3].barThickness = 40;
	chartKPsConfig.data.datasets[4].barThickness = 40;
}

if (window.innerWidth < 501) {
	chartKPsConfig.options.plugins.legend.display = false;
}

new Chart(chartRLQ, chartRLQConfig);
new Chart(chartKI, chartKIConfig);
new Chart(chartMZI, chartMZIConfig);
new Chart(chartScores, chartScoresConfig);
new Chart(chartKPs, chartKPsConfig);
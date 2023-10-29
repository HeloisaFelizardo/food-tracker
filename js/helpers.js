import AppData from './app-data.js';
const appData = new AppData();

const capitalize = (word) => {
	return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

const calculateCalories = (carbs = 0, protein = 0, fat = 0) => {
	return carbs * 4 + protein * 4 + fat * 9;
};

export const displayEntry = (name, carbs, protein, fat) => {
	const list = document.querySelector('#food-list');

	appData.addFood(carbs, protein, fat);

	list.insertAdjacentHTML(
		'beforeend',
		`<li class="card">
          <div>
            <h3 class="name">${capitalize(name)}</h3>
            <div class="calories">${calculateCalories(carbs, protein, fat)} calorias</div>
            <ul class="macros">
              <li class="carbs"><div>Calorias</div><div class="value">${carbs}g</div></li>
              <li class="protein"><div>Proteínas</div><div class="value">${protein}g</div></li>
              <li class="fat"><div>Gordura</div><div class="value">${fat}g</div></li>
            </ul>
          </div>
        </li>`,
	);
};

let chartInstance = null;
const renderChart = () => {
	chartInstance?.destroy();
	const context = document.querySelector('#app-chart').getContext('2d');

	chartInstance = new Chart(context, {
		type: 'bar',
		data: {
			labels: ['Carbs', 'Protein', 'Fat'],
			datasets: [
				{
					label: 'Macronutrients',
					data: [appData.getTotalCarbs(), appData.getTotalProtein(), appData.getTotalFat()],
					backgroundColor: ['#25AEEE', '#FECD52', '#57D269'],
					borderWidth: 3, // example of other customization
				},
			],
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
	});
};

const totalCalories = document.querySelector('#total-calories');

const updateTotalCalories = () => {
	totalCalories.textContent = appData.getTotalCalories();
};

export const render = () => {
	renderChart();
	updateTotalCalories();
};

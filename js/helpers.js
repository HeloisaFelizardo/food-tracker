const capitalize = (word) => {
	return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

const calculateCalories = (carbs = 0, protein = 0, fat = 0) => {
	return carbs * 4 + protein * 4 + fat * 9;
};

export const displayEntry = (name, carbs, protein, fat) => {
	const list = document.querySelector('#food-list');
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

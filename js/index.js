//Este código lida com o envio de dados de alimentos para uma API Firestore e exibe os alimentos na lista após a submissão do formulário.

// Importa a classe FetchWrapper do arquivo fetch-wrapper.js.
import FetchWrapper from './class/fetch-wrapper.js';
import { capitalize, calculateCalories } from './helpers.js';

// Cria uma instância da classe FetchWrapper, que será usada para fazer requisições à API Firestore.
const API = new FetchWrapper('https://firestore.googleapis.com/v1/projects/jsdemo-3f387/databases/(default)/documents/heloisa');

// Obtém referências para elementos HTML usando seus IDs.
const list = document.querySelector('#food-list');
const form = document.querySelector('#create-form');
const name = document.querySelector('#create-name');
const carbs = document.querySelector('#create-carbs');
const protein = document.querySelector('#create-protein');
const fat = document.querySelector('#create-fat');

// Adiciona um ouvinte de evento para o evento de envio do formulário.
form.addEventListener('submit', (event) => {
	event.preventDefault(); // Impede o envio padrão do formulário.

	// Faz uma requisição POST para a API Firestore com os valores dos campos do formulário.
	API.post('/', {
		fields: {
			name: { stringValue: name.value },
			carbs: { integerValue: carbs.value },
			protein: { integerValue: protein.value },
			fat: { integerValue: fat.value },
		},
	}).then((data) => {
		console.log(data);

		// Verifica se há um erro na resposta da API.
		if (data.error) {
			// Havia um erro, não faz nada e retorna.
			return;
		}

		// Insere um novo item na lista de alimentos no HTML com os valores do formulário.
		list.insertAdjacentHTML(
			'beforeend',
			`<li class="card">
        <div>
          <h3 class="name">${capitalize(name.value)}</h3>
          <div class="calories">${calculateCalories(carbs.value, protein.value, fat.value)} calories</div>
          <ul class="macros">
            <li class="carbs"><div>Calorias</div><div class="value">${carbs.value}g</div></li>
            <li class="protein"><div>Proteína</div><div class="value">${protein.value}g</div></li>
            <li class="fat"><div>Gordura</div><div class="value">${fat.value}g</div></li>
          </ul>
        </div>
      </li>`,
		);

		// Limpa os campos do formulário após a submissão.
		name.value = '';
		carbs.value = '';
		protein.value = '';
		fat.value = '';
	});
});

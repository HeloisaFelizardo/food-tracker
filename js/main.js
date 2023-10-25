//Este código lida com o envio de dados de alimentos para uma API Firestore e exibe os alimentos na lista após a submissão do formulário.
// Importa a classe FetchWrapper do arquivo fetch-wrapper.js.
import FetchWrapper from './fetch-wrapper.js';
import { displayEntry } from './helpers.js';
import { Snackbar } from './snackbar.js';

// Cria uma instância da classe FetchWrapper, que será usada para fazer requisições à API Firestore.
const API = new FetchWrapper('https://firestore.googleapis.com/v1/projects/jsdemo-3f387/databases/(default)/documents/heloisa');
const snackbar = new Snackbar();
// Obtém referências para elementos HTML usando seus IDs.
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
			snackbar.show('Ausência de dados.');
			return;
		}
		snackbar.show('Alimento adicionado com sucesso!');
		// Função que insere um novo item na lista de alimentos no HTML com os valores do formulário.
		displayEntry(name.value, carbs.value, protein.value, fat.value);

		// Limpa os campos do formulário após a submissão.
		name.value = '';
		carbs.value = '';
		protein.value = '';
		fat.value = '';
	});
});

const init = () => {
	// the ?pageSize=100 is optional
	API.get('/?pageSize=100').then((data) => {
		data.documents?.forEach((doc) => {
			const fields = doc.fields;
			// Função que insere um novo item na lista de alimentos no HTML com os valores do formulário.
			displayEntry(fields.name.stringValue, fields.carbs.integerValue, fields.protein.integerValue, fields.fat.integerValue);
		});
	});
};

init();

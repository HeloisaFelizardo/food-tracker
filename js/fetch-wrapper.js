// Classe que fornece métodos de envio de requisições HTTP usando a API Fetch.
export default class FetchWrapper {
	// Construtor da classe que recebe a URL base da API como argumento.
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

	// Método assíncrono que faz uma requisição GET para o endpoint especificado.
	async get(endpoint) {
		// Faz uma requisição GET para a URL composta pela baseURL e o endpoint.
		const response = await fetch(this.baseURL + endpoint);
		// Retorna os dados da resposta no formato JSON.
		return await response.json();
	}

	// Método que faz uma requisição PUT para o endpoint especificado com o corpo especificado.
	put(endpoint, body) {
		// Chama o método #send com o método HTTP 'put', endpoint e corpo da requisição.
		return this.#send('put', endpoint, body);
	}

	// Método que faz uma requisição POST para o endpoint especificado com o corpo especificado.
	post(endpoint, body) {
		// Chama o método #send com o método HTTP 'post', endpoint e corpo da requisição.
		return this.#send('post', endpoint, body);
	}

	// Método que faz uma requisição DELETE para o endpoint especificado com o corpo especificado.
	delete(endpoint, body) {
		// Chama o método #send com o método HTTP 'delete', endpoint e corpo da requisição.
		return this.#send('delete', endpoint, body);
	}

	// Método privado (indicado pelo '#' antes do nome) para enviar uma requisição HTTP genérica.
	async #send(method, endpoint, body) {
		// Faz uma requisição usando o método especificado, a URL composta pela baseURL e o endpoint,
		// e um objeto de configuração com cabeçalhos e corpo em formato JSON.
		const response = await fetch(this.baseURL + endpoint, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		// Retorna os dados da resposta no formato JSON.
		return await response.json();
	}
}

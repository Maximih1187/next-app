const baseApi = "https://jsonplaceholder.typicode.com/posts";

interface IUrl {
	id?: string;
	value?: string;
}

export const getPosts = async ({ id, value }: IUrl) => {
	let url = `${baseApi}`;

	if (value) {
		url = `${baseApi}?q=${value}`;
	} else if (id) {
		url = `${baseApi}/${id}`;
	}

	try {
		const response = await fetch(`${url}`);
		if (!response.ok) throw new Error("Ошибка запроса Max");
		return response.json();
	} catch (error) {
		console.log(error);
	}
};

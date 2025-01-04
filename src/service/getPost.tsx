export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Ошибка запроса");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (id: string | undefined = undefined) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error("Ошибка запроса");
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const searchPosts = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  if (!response.ok) throw new Error("Ошибка запроса!");
  return response.json();
};

const apiKey = process.env.API_KEY;

export const searchRecipes = async (searchTerm: string, page: number) => {
  if (!apiKey) {
    throw new Error('Api Key not found');
  }

  const url = new URL('https://api.spoonacular.com/recipes/complexSearch');

  const queryParams = {
    apiKey,
    query: searchTerm,
    number: '10',
    offset: (page * 10).toString(),
  };

  url.search = new URLSearchParams(queryParams).toString();

  try {
    const searchResponse = await fetch(url);
    const resultJson = await searchResponse.json();
    return resultJson;
  } catch (error) {
    console.log(error);
  }
};

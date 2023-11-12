const apiKey = process.env.API_KEY;

const searchRecipes = (searchTerm: string, page: number) => {
  if (!apiKey) {
    throw new Error('Api Key not found');
  }

  const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
};

const API_KEY ="3738b22b76d74b04b932dfbe443f9ffe";
const recipelistEl = document.getElementById('recipe-list');

function displayRecipes(recipes){
    recipelistEl.innerHTML = "";
    recipes.forEach((recipe)=> {
        const recipeItemEl = document.createElement('li');
        recipeItemEl.classList.add('recipe-item');

        recipeImgEl= document.createElement("img");
        recipeImgEl.src=recipe.image;
        recipeImgEl.alt= "Recipe Image";

        recipeTitleEl = document.createElement('h2');
        recipeTitleEl.innerText = recipe.title;

        recipeIngredientsEl = document.createElement('p');
        recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}`

        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        
        recipeItemEl.appendChild(recipeImgEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipelistEl.appendChild(recipeItemEl);

        
    });
}

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await response.json();

    return data.recipes;
    
}

async function init()
{
    const recipes = await getRecipes();
    displayRecipes(recipes);
}
init();
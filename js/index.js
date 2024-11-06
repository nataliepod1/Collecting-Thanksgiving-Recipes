// 1a. create an empty thanksgiving recipes list array
const recipesList = []; 

const showRecipes = () => {
    // 2a. check to see if there are recipes to display
    if (recipesList.length > 0) {
        // 2b. grab recipe list
        const listWrapper = document.getElementById('recipe-list');

        // 2c. clear previous list items from the screen
        listWrapper.textContent = '';

        // 2d. loop through each item in list, generate and show each item
        for (index in recipesListList) {
            // 2e. grab recipe text from the list
            const recipeText = recipeList[index];

            // 2f. create li html element
            const listItem = document.createElement('li');

            // 2g. add text content to li element
            listItem.textContent = recipeText;

            // 2h. append to listWrapper
            listWrapper.appendChild(listItem);
        }
    }
}

const createRecipe = () => {
    // 1a. get value of text input
    const gratitude = document.getElementById('recipe').value;
    
    // 1b. add item to the array
    recipeList.push(recipe);
}

const addRecipe = () => {
    // 1. Create (add) item to the recipe list
    createRecipe();

    // 2. Read (show) items in the recipe list
    showRecipe();    
}

// adding an event listener to add recipe button
const addRecipeButton = document.getElementById('add-recipe-button');
// when user clicks on the button, call addrecipe function
addRecipeButton.addEventListener('click', addRecipe, false);


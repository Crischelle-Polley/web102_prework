/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}








/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

    // loop over each item in the data
    for (const game of games) {

        // create a new div element, which will become the game card
        const newDiv = document.createElement('div');

        // add the class game-card to the list
        newDiv.classList.add('game-card');

        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")
        const gameInfo = `
            <img class='game-img' src='${game.img}'/>
            <div class='game-card-text'>
                <div class='game-card-descr'>
                    <h4>${game.name}</h4>
                    <p>${game.description}</p>
                </div>
                <div class='game-card-stats'>
                    <p>Goal $${game.goal.toLocaleString()}</p>
                    <p>Pledged $${game.pledged.toLocaleString()}</p>
                    <p>Backers ${game.backers.toLocaleString()}</p>
                </div>
            </div>
            `;
        newDiv.innerHTML = gameInfo;

        // append the game to the games-container
        gamesContainer.append(newDiv);
    }        

}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games
addGamesToPage(GAMES_JSON);










/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalContributions = GAMES_JSON.reduce( (acc, game) => {return acc + game.backers;}, 0);

// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = `<h4>Individual Contributions</h4>
    <p>${totalContributions.toLocaleString()}</p>`;

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
const totalRaised = GAMES_JSON.reduce( (acc, game) => {return acc + game.pledged;}, 0);

// set inner HTML using template literal
raisedCard.innerHTML = `<h4>Total Raised</h4>
    <p>$${totalRaised.toLocaleString()}</p>`;

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
gamesCard.innerHTML = `<h4>Total Number of Games</h4>
    ${GAMES_JSON.reduce( (acc, game) => {return acc + 1;}, 0).toLocaleString()}`;









/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    const unfundedGames = GAMES_JSON.filter( (game) => {return game.pledged < game.goal;} );

    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(unfundedGames);
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    const fundedGames = GAMES_JSON.filter( (game) => {return game.pledged >= game.goal;} );

    // use the function we previously created to add unfunded games to the DOM
    addGamesToPage(fundedGames);
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener('click', filterUnfundedOnly);
fundedBtn.addEventListener('click', filterFundedOnly);
allBtn.addEventListener('click', showAllGames);







/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("welcome-description");

// use filter or reduce to count the number of unfunded games
const unfundedGames = GAMES_JSON.reduce( (acc, game) => {return game.pledged < game.goal ? acc + 1 : acc;}, 0 ).toLocaleString();

// create a string that explains the number of unfunded games using the ternary operator
const numGames = GAMES_JSON.reduce( (acc, game) => {return acc + 1;}, 0 ).toLocaleString();
const displayStr = `a crowdfunding company that funds independent game 
    developers. After 12 years, we've raised 
    $${totalRaised.toLocaleString()} for 
    ${numGames === 1 ? numGames + ' game' : numGames + ' games'}. Currently, 
    <b>${unfundedGames === 1 ? unfundedGames + ' game remains' : unfundedGames + ' games remain'} unfunded</b>. We need your help to fund 
    ${unfundedGames === 1 ? ' this amazing game!' : ' these amazing games!'}`;

// create a new DOM element containing the template string and append it to the description container
const newPara = document.createElement('p')
newPara.innerHTML = displayStr;
descriptionContainer.append(newPara);






/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [firstGame, secondGame, ...games] = sortedGames;

// create a new element to hold the name of the top pledge game, then append it to the correct element
const firstGameName = document.createElement('p');
const firstGameImg = document.createElement('img');
firstGameName.innerHTML = firstGame.name;
firstGameImg.src = firstGame.img;
firstGameContainer.append(firstGameImg);
firstGameContainer.append(firstGameName);

// do the same for the runner up item
const secondGameName = document.createElement('p');
const secondGameImg = document.createElement('img');
secondGameName.innerHTML = secondGame.name;
secondGameImg.src = secondGame.img;
secondGameContainer.append(secondGameImg);
secondGameContainer.append(secondGameName);







/************************************************************************************
 * Adding button to welcome container that takes user to Games section  
 */

const gamesBtn = document.getElementById('games-button');
gamesBtn.addEventListener('click', () => {document.getElementById('games-container').scrollIntoView({behavior: 'smooth'})});







/************************************************************************************
 * Adding clicking top games takes user to Games section with that game's card first
 */

function displayGameFirst(games) {
    // console.log(games)
    deleteChildElements(gamesContainer);
    addGamesToPage(games);
    document.getElementById('games-container').scrollIntoView({behavior: 'smooth'});
}

const displayFirst = [firstGame].concat(GAMES_JSON.filter( (game) => {return game.name != firstGame.name;} ));
firstGameContainer.addEventListener('click', () => { 
    displayGameFirst(displayFirst) 
    } ); 

const displaySecond = [secondGame].concat(GAMES_JSON.filter( (game) => {return game.name != secondGame.name;} ));
secondGameContainer.addEventListener('click', () => { 
    displayGameFirst(displaySecond) 
    } ); 







/************************************************************************************
 * Adding search functionality
 */

// create datalist to show users available search options
function getDataList() {
    // make list in sorted order based on names
    const orderedGames = GAMES_JSON.sort( (game1, game2) => {
        const name1 = game1.name.toUpperCase();
        const name2 = game2.name.toUpperCase();
        if (name1 < name2) { return -1; }
        if (name1 > name2) { return 1; }
        return 0;
    });

    // create options in dataList for each game
    for (const game of orderedGames) {
        const newOption = document.createElement('option');
        newOption.value = `${game.name}`;
        dataList.append(newOption);
    }
}

const dataList = document.getElementById('games-list');
getDataList();

const searchBtn1 = document.getElementById('search-btn1');
searchBtn1.addEventListener('click', () => { 
    const search1 = document.getElementById('header-search').value;
    const searchGame = GAMES_JSON.filter( (game) => {return game.name == search1;} );
    let displayGame = searchGame.concat(GAMES_JSON.filter( (game) => {return game.name != search1;} ));
    displayGameFirst(displayGame);
} );

const searchBtn2 = document.getElementById('search-btn2');
searchBtn2.addEventListener('click', () => { 
    const search2 = document.getElementById('games-search').value;
    const searchGame = GAMES_JSON.filter( (game) => {return game.name == search2;} );
    let displayGame = searchGame.concat(GAMES_JSON.filter( (game) => {return game.name != search2;} ));
    displayGameFirst(displayGame);
} );
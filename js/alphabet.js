// *************  again to code by function ********** 

/* 
function playNow(){
    const homeScreen  = document.getElementById('home-screen')
    // console.log(homeScreen)
    homeScreen.classList.add('hidden');


    const playGame = document.getElementById('play-game')
    // console.log(playGame.classList)
    playGame.classList.remove('hidden')
}
 */


// button pass keyboard
function handelKeyboardButtonPress(event) {
    const playerPassKeyboard = event.key;

    // game stop if pressed " Esc "
    if(playerPassKeyboard === 'Escape'){
        gameOver()
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('curnnet-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;

    //  check marched or not 
    if (playerPassKeyboard === currentAlphabet) {
        const currentScore = getTextElemntValueById('curnnet-score')
        const updateScore = currentScore + 1;

        setTextElemntValueById('curnnet-score', updateScore)

        // *************  again to code by function ********** 
        /* 
         const currenScoreElement = document.getElementById('curnnet-score')
         const currentScoreText = currenScoreElement.innerText;
         const currentScoreConvet =parseInt(currentScoreText) 
         const newScore = currentScoreConvet + 1;
         currenScoreElement.innerText = newScore
  */
        removeBackgroundColorById(currentAlphabet)
        contineoGames()

    }
    else {
        const currentLife = getTextElemntValueById('curnnet-life')
        const updatesLife = currentLife - 1;
        setTextElemntValueById('curnnet-life', updatesLife);


        if (updatesLife === 0) {
            console.log('game is over !!!!!!!!!!!!')
            gameOver()
        }



        // console.log('sad try again')
        // *************  again to code by function ********** 
        /* 
        const currenLifeElement = document.getElementById('curnnet-life');
        const currentLifeText = currenLifeElement.innerText;
        const currenLifeConvert = parseInt(currentLifeText);
        const newLife = currenLifeConvert -1;
        currenLifeElement.innerText = newLife
         */
    }

}
// capture keyboard key pass
document.addEventListener('keyup', handelKeyboardButtonPress)


function contineoGames() {
    //step -1 generate random number 
    const generateAlphabet = getRandomAlphabet()

    const currentAlphabetElement = document.getElementById('curnnet-alphabet')
    currentAlphabetElement.innerText = generateAlphabet;

    // background-color set 2
    setBackgroundColorById(generateAlphabet)



}


function playNow() {
    // hidden everything show only play
    hiddenElementById('home-screen');
    hiddenElementById('final-score');
    showElementById('play-game');
    
    // reset play life and score
    setTextElemntValueById('curnnet-life', 5)
    setTextElemntValueById('curnnet-score', 0);
    
    contineoGames();
}

// final-score / game over
function gameOver() {
    hiddenElementById('play-game')
    showElementById('final-score')

    //get update final score
    const lastScore = getTextElemntValueById('curnnet-score')
    setTextElemntValueById('last-score', lastScore)

    // clear the last selected alphabet 
    const currentAlphabet = getElemntTextById('curnnet-alphabet')
    removeBackgroundColorById(currentAlphabet);

}
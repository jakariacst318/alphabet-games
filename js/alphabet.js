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
function handelKeyboardButtonPress(event){
    const playerPassKeyboard = event.key;

    // get the expected to press
    const currentAlphabetElement = document.getElementById('curnnet-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;

    //  check marched or not 
     if(playerPassKeyboard === currentAlphabet){
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
     else{
        const currentLife = getTextElemntValueById('curnnet-life')
        const updatesLife = currentLife -1 ;
        setTextElemntValueById('curnnet-life', updatesLife)



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
document.addEventListener('keyup',handelKeyboardButtonPress)


function contineoGames() {
    //step -1 generate random number 
    const generateAlphabet = getRandomAlphabet()

    const currentAlphabetElement = document.getElementById('curnnet-alphabet')
    currentAlphabetElement.innerText = generateAlphabet;

    // background-color set 2
    setBackgroundColorById(generateAlphabet)



}


function playNow() {
    hiddenElementById('home-screen');
    showElementById('play-game');
    contineoGames()
}
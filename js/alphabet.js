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
    // console.log(event.key )
    const playerPassKeyboard = event.key;

    // get the expected to press
    const currentAlphabetElement = document.getElementById('curnnet-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    // console.log(playerPassKeyboard,currentAlphabet)

    //  check marched or not 
     if(playerPassKeyboard === currentAlphabet){
        // console.log('winner boy')
        const currenScoreElement = document.getElementById('curnnet-score')
        const currentScoreText = currenScoreElement.innerText;
        const currentScoreConvet =parseInt(currentScoreText) 
        const newScore = currentScoreConvet + 1;
        currenScoreElement.innerText = newScore

        removeBackgroundColorById(currentAlphabet)
        contineoGames()
        
     }
     else{
        console.log('sad abr try koro')
     }
    
}
    // capture keyboard key pass
document.addEventListener('keyup',handelKeyboardButtonPress)


function contineoGames() {
    //step -1 generate random number 
    const generateAlphabet = getRandomAlphabet()
    // console.log('your alphabet :', generateAlphabet)

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
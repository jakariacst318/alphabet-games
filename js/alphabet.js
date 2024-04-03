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

function contineoGames() {
    //step -1 generate random number 
    const generateAlphabet = getRandomAlphabet()
    console.log('your alphabet :', generateAlphabet)

}


function playNow() {
    hiddenElementById('home-screen');
    showElementById('play-game');
    contineoGames()
}
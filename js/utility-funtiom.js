function hiddenElementById(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('hidden') 

}

function showElementById(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}
// contin
function getRandomAlphabet(){
    // get a create alphabet array []
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetStringToConvert = alphabetString.split('');
    // console.log(alphabetStringToConvert)

    // get  a random  index number 0 - 25
    const randomNumber = Math.random()*25;
    const indexNumber = Math.round(randomNumber);
//   console.log(indexNumber)
    const generateAlphabet = alphabetStringToConvert[indexNumber];
    // console.log(generateAlphabet,indexNumber)
    return generateAlphabet
} 
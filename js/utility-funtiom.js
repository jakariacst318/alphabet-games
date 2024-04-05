function hiddenElementById(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('hidden') 

}

function showElementById(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}

//  keyboard background color show 1
function setBackgroundColorById(elementID){
    const element =document.getElementById(elementID)
    element.classList.add('bg-orange-400')
}

function removeBackgroundColorById(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('bg-orange-400')
}

// curnnet-alphabet add / clear function
function  getElemntTextById(elementID){
    const element = document.getElementById(elementID)
    const text =  element.innerText;
    return text
}

//  score , life update function start
function getTextElemntValueById(elementID){
    const element = document.getElementById(elementID);
    const elementText = element.innerText;
    const elementTextConvert = parseInt(elementText);
    return elementTextConvert ;
}

function setTextElemntValueById(elementID, value){
    const element = document.getElementById(elementID)
    element.innerText = value ;
}
//  score , life update function end


// contineu
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
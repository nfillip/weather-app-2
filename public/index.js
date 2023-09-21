const dataDiv = document.getElementById('data-here');
const dataButton = document.getElementById("button-data");




//FUNCTIONs


//function: pulls data from server which is pulling from terms.json based off user input in URL
const getDataFromServer = () => 
    fetch('/getData', {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => data);
    

let a = 0;
let ulCounter = [];
const buildHTML = (item) => {
    console.log('hello' + a)
    a++;
    let ulEqValue = ulCounter.indexOf(item.category);
    const liName = document.createElement('li');
    liName.textContent = `${item.name}`;

    if(ulEqValue === -1){
    const ulCategory = document.createElement('ul');
    ulCategory.textContent = `${item.category}`;
    dataDiv.appendChild(ulCategory);
    ulCategory.appendChild(liName); 
    ulCounter.push(item.category);
    } else {
        dataDiv.children[ulEqValue].appendChild(liName)
    }
    
}



//overall function of event listener
const buttonAction = () => 
    getDataFromServer().then((response) => response.forEach((item) => buildHTML(item)));


//Event Listener
dataButton.addEventListener('click', buttonAction)

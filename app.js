import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

const appSettings = {
    databaseURL: "https://shopping-list-database-d0086-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsinDB = ref(database, "shopping-list");


const inputField = document.getElementById("input");
const addButton = document.getElementById("button");
const shoppingList = document.getElementById("shopping-list")

addButton.addEventListener("click", () => {
    let inputValue = inputField.value;
    
    push(itemsinDB, inputValue);

    clearInputField();
})

function addShoppingItemToList(itemValue) {
   return  shoppingList.innerHTML += `<li>${itemValue}</li>`;
    
}

function clearInputField() {
    return inputField.value = "";
}

onValue(itemsinDB, function(snapshot) {
    let shoppingArray = Object.values(snapshot.val());
    
    clearShoppingList();
    
    for (let i = 0; i < shoppingArray.length; i++) {
        let currentShoppingList = shoppingArray[i];
        addShoppingItemToList(currentShoppingList);
    }
    
})

function clearShoppingList() {
    return shoppingList.innerHTML = "";
}



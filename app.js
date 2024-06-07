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

addButton.addEventListener("click", () => {
    let inputValue = inputField.value;
    let listItem = document.createElement("li");

    push(itemsinDB, inputValue);

    console.log(`${inputValue} added`);
})
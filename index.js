const input = document.querySelector("#input-box");
const addButton = document.getElementById("add-button");
let itemsList = document.getElementById("items-list");

addButton.addEventListener("click", () => {
    let itemValue = (input.value).trim();
    input.value = "";
    localStorage.setItem(itemValue, itemValue);
    localStorage = Object.values(localStorage).sort();
    generateItem(itemValue);
    input.focus();
})

const generateItem = (item) => {
    const listItem = document.createElement("li");
    const textValue = document.createTextNode(toTitleCase(item));
    listItem.appendChild(textValue);
    itemsList.append(listItem);

    listItem.addEventListener("dblclick", () => {
        localStorage.removeItem(item);
        itemsList.innerHTML = ""
        Object.values(localStorage).forEach(
            i => generateItem(i)
        );
    });
}

const toTitleCase = (string) => {
    let arrayOfStrings = String(string).split(" ");
    const len = arrayOfStrings.length;
    let result = "";
    for (let i = 0; i < arrayOfStrings.length; i++) {
        let s = arrayOfStrings[i];
        let x = (i == len - 1) ? "" : " "
        result += `${s[0].toUpperCase()}${s.substring(1).toLowerCase()}${x}`;
    }
    return result;
}
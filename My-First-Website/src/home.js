const addPerson = document.getElementById("add-people-button");
const peopleDetails = document.getElementById("details"); // fill out form
const cancelAdd = document.getElementById("cancel-button");
const saveBtn = document.getElementById("save-button");
const peopleList = document.getElementById("people-list"); // list
const headerList = document.getElementById("header"); // list header

// call outside for the fill out form to be hidden at first
// peopleDetails.style.visibility = "hidden";

addPerson.onclick = () => {
    peopleDetails.style.visibility = "visible";
    peopleList.style.visibility = "hidden";
    headerList.style.visibility = "hidden";
    addPerson.style.visibility = "hidden";
};

cancelAdd.onclick = () => {
    peopleList.style.visibility = "visible";
    headerList.style.visibility = "visible";
    addPerson.style.visibility = "visible";
    peopleDetails.style.visibility = "hidden";
};

saveBtn.onclick = () => {
    peopleDetails.style.visibility = "hidden";
    peopleList.style.visibility = "visible";
    addPerson.style.visibility = "visible";
    headerList.style.visibility = "visible"

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    const newPeople = `<li class="list-group-item">${firstName} ${lastName}</li>`; // interpolate
    peopleList.insertAdjacentHTML('beforeend', newPeople)
};
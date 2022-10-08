document.getElementById('save-button').addEventListener("click", addToList);

const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const peopleList = document.getElementById('people-list');

function addToList() {
  peopleList.style.visibility = 'visible';
};

// saveBtn.onclick = () => {
//   const firstName = firstNameInput.value;
//   const lastName = lastNameInput.value;


// };

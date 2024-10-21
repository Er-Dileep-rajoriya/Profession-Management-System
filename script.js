let arr = [];

function checkIfArrEmpty() {
  if (arr.length == 0) {
    let div = document.createElement("div");
    div.innerText = "You have 0 Employees.";
    let bottomDiv = document.getElementById("bottom-details");

    bottomDiv.append(div);
  }
}

checkIfArrEmpty();

function deleteItem(index) {
  // Remove the item from the array

  console.log(index);
  let emp = arr.find((emp, i) => i == index);

  if (emp) {
    arr.splice(index, 1);
  }

  // Re-render the employee list
  renderList();
}

function renderList() {
  let bottomContainer = document.getElementById("bottom-details");
  bottomContainer.innerHTML = ""; // Clear existing elements

  // Loop through the array and create elements
  arr.forEach((emp, index) => {
    let div = document.createElement("div");
    div.classList.add("employee-info");

    div.innerHTML = `
                  <span>${index + 1}</span>
                  <span>${emp.name}</span>
                  <span>${emp.profession}</span>
                  <span>${emp.age}</span>
                  <button onclick="deleteItem(${index})" class="delete-btn">Delete</button>
                `;

    bottomContainer.appendChild(div);
  });
}

function handleSubmit(e) {
  // Prevent default form submission
  e.preventDefault();

  let form = document.getElementById("form");
  let formData = new FormData(form);

  let name = formData.get("name");
  let profession = formData.get("profession");
  let age = formData.get("age");

  if (!name || !age || !profession) {
    let errorMsg = document.getElementById("error");
    errorMsg.style.visibility = "visible";
    return;
  } else {
    // for success msg
    let succesMsg = document.getElementById("success");
    succesMsg.style.visibility = "visible";

    let errorMsg = document.getElementById("error");
    errorMsg.style.visibility = "hidden";

    setTimeout(() => {
      succesMsg.style.visibility = "hidden";
    }, 4000);
  }

  // Add the new employee to the array
  arr.push({
    name,
    profession,
    age,
  });

  // Clear form fields
  form.reset();

  // Re-render the employee list
  renderList();
}

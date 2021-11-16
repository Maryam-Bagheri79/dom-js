let form = document.getElementById("form");
let tbody = document.getElementById("tbody");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    nameValue = document.getElementById("name").value;
    familyValue = document.getElementById("family").value;
    emailValue = document.getElementById("email").value;
    phoneValue = document.getElementById("phone").value;

    let newUser = `
    <tr>
        <th scope="col" class="text-center"><i class ="fa fa-close" onclick = "remove(event)"><i></th>
        <th scope="col" class="text-center"><i class ="fa fa-edit" onclick = "edit(event)"><i></th>
        <th scope="col" class="text-center name">${nameValue}</th>
        <th scope="col" class="text-center family">${familyValue}</th>
        <th scope="col" class="text-center email">${emailValue}</th>
        <th scope="col" class="text-center phone">${phoneValue}</th>
    </tr>
    `
    tbody.insertAdjacentHTML("beforeend", newUser);

});

function remove(event) {
    let tr = event.target.parentElement.parentElement;

    tr.remove();
};

function edit(event) {
    let tr = event.target.parentElement.parentElement;

    let newName = prompt("Enter your number", tr.querySelector(".name").innerHTML);
    let newFamily = prompt("Enter your family", tr.querySelector(".family").innerHTML);
    let newEmail = prompt("Enter your email", tr.querySelector(".email").innerHTML);
    let newPhone = prompt("Enter your phone", tr.querySelector(".phone").innerHTML);

    tr.querySelector(".name").innerHTML = newName;
    tr.querySelector(".family").innerHTML = newFamily;
    tr.querySelector(".email").innerHTML = newEmail;
    tr.querySelector(".phone").innerHTML = newPhone;
}
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
        <th scope="col" class="text-center"><i class ="fa fa-close" ><i></th>
        <th scope="col" class="text-center"><i class ="fa fa-edit" ><i></th>
        <th scope="col" class="text-center">${nameValue}</th>
        <th scope="col" class="text-center">${familyValue}</th>
        <th scope="col" class="text-center">${emailValue}</th>
        <th scope="col" class="text-center">${phoneValue}</th>
    </tr>
    `
    tbody.insertAdjacentHTML("beforeend", newUser);

});
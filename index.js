
let form = document.querySelector("form");
let table = document.querySelector("table");

form.addEventListener("submit",(event)=>{
    // event.preventDefault();

    let nameInput = document.querySelector("#name").value 
    let emailInput = document.querySelector("#email").value
    let phoneInput = document.querySelector("#phone").value
    let jobInput = document.querySelector("#job").value

    let savetoLocal = {
        nameInput,
        emailInput,
        phoneInput,
        jobInput
    }

    let emp = JSON.parse(localStorage.getItem("Employee Details: ")) || []

    emp.push(savetoLocal)

    localStorage.setItem("Employee Details: ", JSON.stringify(emp))

    nameInput.value = ""
    emailInput.value = ""
    phoneInput.value = ""
    jobInput.value = ""
})

document.addEventListener("DOMContentLoaded", ()=>{
    let emp = JSON.parse(localStorage.getItem("Employee Details: ")) || []

    let tableBody = document.getElementById("employee-table-body")

    emp.forEach(i=>{
        let row = document.createElement("tr");
        row.innerHTML = `<td>${i.nameInput}</td>
                    <td>${i.emailInput}</td>
                    <td>${i.phoneInput}</td>
                    <td>${i.jobInput}</td>
                    <td>
                        <button class="edit-btn">✏️</button>
                        <button class="delete-btn">❌</button>
                    </td>`
        tableBody.appendChild(row)            
    })
})
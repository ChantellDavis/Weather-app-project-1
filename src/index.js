
function search(event){
    event.preventDefault();
    let searchFormInput = document.querySelector("#search-Form-Input");
    let mainCity = document.querySelector("#main-City")
    mainCity.innerHTML = (searchFormInput.value);
}

let searchForm = document.querySelector("#search-Form");
searchForm.addEventListener("submit",search);
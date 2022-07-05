const form = document.forms["my-form"];
const list = document.getElementById("list")
const input = form["task"]

form.addEventListener("submit", function(e){

	e.preventDefault()	

	list.innerHTML += `<li>${input.value}<i onclick=crossOut(this) class="fa-solid fa-xmark"></i></li>`

})

const crossOut = (e) => {
	e.parentElement.classList.toggle("crossed")
}
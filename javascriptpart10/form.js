let form = document.querySelector("form");
form.addEventListener("submit", () => {
    event.preventDefault();  //Preventing from redirecting to the differenct page
    console.log("Event Occured");
    alert("Form Submitted");
});
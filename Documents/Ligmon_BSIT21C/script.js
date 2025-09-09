document.getElementById("btn").addEventListener("click", function(){
    alert("Button was clicked!");
 });


 function updateDisplay() {
    let textbox = document.getElementById('textbook');
    let displayText = document.getElementById('display');

    displayText.textContent = textbox.value;
}

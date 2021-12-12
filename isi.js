// Mendapatkan modal
var modal = document.getElementById('id01');

// Jika user klik di manapun di luar modal maka akan tertutup
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Mendapatkan modal
var modal = document.getElementById('id02');

// Jika user klik di manapun di luar modal maka akan tertutup
window.onclick = function(event) {
  if (event.target == modal2) {
    modal.style.display = "none";
  }
}
function myFunction() {
  const inpObj = document.getElementById("id3");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  } 
} 
document.getElementById('id4').style.visibility='visible';

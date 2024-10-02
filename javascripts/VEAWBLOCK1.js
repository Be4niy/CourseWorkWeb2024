
 var modal = document.getElementById("learnMoreModal");
 var btn = document.getElementById("learnMoreBtn");
 var span = document.getElementsByClassName("new-close")[0];


 btn.addEventListener("click", function(e) {
     e.preventDefault();
     modal.style.display = "block"; 
     setTimeout(function() {
         modal.classList.add("show"); 
     }, 10);
 });


 span.addEventListener("click", function() {
     modal.classList.remove("show"); 
     setTimeout(function() {
         modal.style.display = "none"; 
     }, 300);
 });

 
 window.addEventListener("click", function(event) {
     if (event.target == modal) {
         modal.classList.remove("show");
         setTimeout(function() {
             modal.style.display = "none";
         }, 300);
     }
 });
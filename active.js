// // Get the container element
// var btnContainer = document.getElementById("nav");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("nav-item-link");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     console.log('clicked');
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// // }

// $(document).ready(function() {
//   var current = document.getElementsByClassName("nav-item-link");
//   $(current).click(function () {
//       $(this).addClass(" active");
//       $(current).not(this).removeClass(" active");
//   });
  
//   });

  $(document).ready(function() {
    $(document).on('click', '.menu',function () {
        $('.nav-item-link').removeClass(" active");
        $(this).addClass(" active");
    });
});
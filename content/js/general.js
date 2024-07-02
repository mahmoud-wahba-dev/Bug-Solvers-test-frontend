// start loader script

// window.addEventListener('load', function () {
//     var preloader = document.getElementById('preloader');
//     var content = document.querySelector("body");

//     preloader.style.display = 'none';
//     content.style.display = 'block';
// });

// end loader script

// navbar search icon

// let search_icon = document.getElementById("search_icon");
// let search_input = document.getElementById("search_input");

// search_icon.addEventListener("click", function () {
//   search_input.focus();
// });
let search_input = document.querySelector("#search_input_id");
let search_result = document.querySelector("#search_result_id");
console.log("hello");
search_input.addEventListener("input", (eo) => {
  console.log("type");
  const query = eo.target.value.trim();
  if (query.length > 0) {
    $("#search_result").show();
    search_result.style.display = "flex";
  } else {
    search_result.style.display = "none";
  }
});

document.addEventListener("click", (eo) => {
    if (!search_input.contains(eo.target) && !search_result.contains(eo.target)) {
      search_result.style.display = "none";
    }
  });
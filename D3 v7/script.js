const dark_mode_btn = document.querySelector("#dark-mood");
const log_out_btn = document.querySelector(".now-temp");
const now_temp = document.querySelectorAll(".now-temp");
const days = document.querySelectorAll(".day-name");
const see_btn = document.querySelector(".see-more-btn");

// to change temperature
for (let i = 0; i < now_temp.length; i++) {
  now_temp[i].innerHTML = 37;
}

// to get days from
// today to next 6 days

let d = new Date().getDay();

const getDayName = function (num) {
  switch (num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thurday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

// Algorithm to get consequtive days

for (let i = 0; i < 7; i++) {
  if (d >= 7) {
    d = 0;
  }
  days[i].innerHTML = getDayName(d);
  d++;
}

// to change background color
// dark_mode_btn.addEventListener("click", function () {
//   // e.preventDefault();
//   document.querySelector("body").classList.add("light-mood");
// });

// to close window
log_out_btn.addEventListener("click", function () {
  window.close();
});

// DISPLAY MAP

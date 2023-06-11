// ====== Flatpicker Date Picker (For Date of Birth Input field) ======== //

document.addEventListener("DOMContentLoaded", function () {
  // Get the input field
  var datepicker = document.getElementById("datepicker");

  // Initialize Flatpickr
  flatpickr(datepicker, {
    dateFormat: "d-m-y", // Set the date format
  });
});

// ======== Flatpickr Time (For Preferred Time Unput Field) ======= //
document.addEventListener("DOMContentLoaded", function () {
  // Get the input field
  var timepicker = document.getElementById("timepicker");

  // Initialize Flatpickr with time picker options
  flatpickr(timepicker, {
    enableTime: true, // Enable time selection
    noCalendar: true, // Disable calendar
    dateFormat: "H:i", // Set date format to hours and minutes
    clickOpens: true, // Open time picker on click
  });
});

$(document).ready(function () {
  $(".select2").select2({
    placeholder: "Select",
  });
});






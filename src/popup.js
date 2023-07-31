document.addEventListener("DOMContentLoaded", function () {
  var submitBtn = document.getElementById("submitBtn");
  var phoneNumberInput = document.getElementById("phoneNumber");

  submitBtn.addEventListener("click", function () {
    var phoneNumber = encodeURIComponent(phoneNumberInput.value);
    var whatsappUrl = "https://web.whatsapp.com/send?phone=" + phoneNumber;
    window.open(whatsappUrl, "_blank");
  });
});

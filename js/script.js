var elSiteForm = document.querySelector(".site-form");
var elSiteInput = elSiteForm.querySelector(".input-form");
var elSiteSelect = elSiteForm.querySelector(".input-select");

var elSiteOutput = document.querySelector(".form-output");
var superContract = 90;
var entranceScore = 100;
var grantEntranceScore = 140;
var score = 189;

elSiteForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = Number(elSiteInput.value);
  var selectValue = elSiteSelect.value;

  console.log(inputValue, selectValue);

  if (inputValue <= 0) {
    elSiteOutput.textContent = "0 yoki ballni kiritmadingiz.";
    return;
  } else if (isNaN(inputValue)) {
    elSiteOutput.textContent = "Raqam kiriting";
    return;
  } else if (selectValue === "Iltimos, oliygohni tanlang.") {
    elSiteOutput.textContent = "Iltimos, oliygohni tanlang.";
    return;
  } else if (inputValue > 0 && inputValue < superContract) {
    elSiteOutput.textContent = "Afsus o'qishga qabul qilinmadingiz. ):";
  } else if (inputValue >= entranceScore && inputValue <= grantEntranceScore) {
    elSiteOutput.textContent =
      "Tabriklaymiz siz kontrak asosida o'qishga qabul qilindingiz (:";
  } else if (inputValue > grantEntranceScore && inputValue <= score) {
    elSiteOutput.textContent =
      "Tabriklaymiz siz grant asosida o'qishga qabul qilingiz";
  } else {
    elSiteOutput.textContent =
      "Sizga " +
      (entranceScore - inputValue) +
      " ball yetmadi. Super kontrak qilsangiz bo'ladi";
  }
});

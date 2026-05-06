const learnMoreBtn = document.getElementById("learnMoreBtn");
const moreInfoSection = document.getElementById("moreInfo");

learnMoreBtn.addEventListener("click", () => {
  moreInfoSection.classList.toggle("hidden");

  if (moreInfoSection.classList.contains("hidden")) {
    learnMoreBtn.textContent = "اعرف المزيد";
  } else {
    learnMoreBtn.textContent = "إخفاء";
    moreInfoSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

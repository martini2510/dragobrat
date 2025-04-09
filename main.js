
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close-btn");

  // Автоматичне відкриття через 2 секунди
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      modal.style.display = "flex";
    }, 2000);
  });

  // Закрити модальне вікно
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Закриття по кліку поза вікном (не обов’язково, але приємно)
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });



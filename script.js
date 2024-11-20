let currentPage = 0;

function nextPage() {
  const pages = document.querySelectorAll(".page");
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
  }
}

function prevPage() {
  const pages = document.querySelectorAll(".page");
  if (currentPage > 0) {
    pages[currentPage].classList.remove("active");
    currentPage--;
    pages[currentPage].classList.add("active");
  }
}

// Inicializa a primeira página como visível
document.querySelectorAll(".page")[0].classList.add("active");

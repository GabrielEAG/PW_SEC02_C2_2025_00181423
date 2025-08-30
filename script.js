let vertical = false;

function changeLayout() {
  const content = document.getElementById("content");
  vertical = !vertical;
  if (vertical) {
    content.classList.add("vertical");
  } else {
    content.classList.remove("vertical");
  }
}

function changeTitle() {
  const headerTitle = document.querySelector("header h1");
  headerTitle.textContent = "HTML & CSS: Curso práctico avanzado";
}

function changeColor() {
  const columns = document.querySelectorAll(".column");
  columns.forEach(col => col.classList.toggle("alt-colors"));
}


function addImage() {
  const footerContent = document.getElementById("footer-content");
  if (!document.getElementById("footer-img")) {
    const img = document.createElement("img");
    img.id = "footer-img";
    img.src = "./media/Image.png"; // ejemplo URL
    footerContent.appendChild(img);
  }
}

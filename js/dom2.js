const sections = document.getElementsByTagName("section");
for (const section of sections) {
  section.style.border = "2px solid blue";
  section.style.borderRadius = "10px";
  section.style.margin = "20px";
  section.style.padding = "20px";
  section.style.backgroundColor = "tomato";
}

const nameSection = document.getElementById("name");
nameSection.classList.add("text-center");
nameSection.classList.remove("text-large");

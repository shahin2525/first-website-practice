const placeList = document.getElementById("place-list");
const pahartoli = document.createElement("li");
pahartoli.innerText = "pahartoli bon";
placeList.appendChild(pahartoli);

const mainContainer = document.getElementById("main-container");
const createSection = document.createElement("section");
const createH1 = document.createElement("h1");
createH1.innerText = "dress section";
createSection.appendChild(createH1);
const createUl = document.createElement("ul");
const createLi1 = document.createElement("li");
createLi1.innerText = "shirt";
createUl.appendChild(createLi1);
const createLi2 = document.createElement("li");
createLi2.innerText = "pant";
createUl.appendChild(createLi2);
const createLi3 = document.createElement("li");
createLi3.innerText = "genji";
createUl.appendChild(createLi3);
createSection.appendChild(createUl);
mainContainer.appendChild(createSection);

//
const sectionStudy = document.createElement("section");
sectionStudy.innerHTML = ` 

<h1>Study Section</h1>
<ul>
<li>Programming</li>
<li>Academic</li>
<li>Religious</li>
</ul>


`;
mainContainer.appendChild(sectionStudy);

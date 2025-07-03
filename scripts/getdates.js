const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span> `;

let x = document.lastModified

document.getElementById("lastModified").innerHTML = `Last Modification: ${x}`
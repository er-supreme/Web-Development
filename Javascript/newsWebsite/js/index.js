let source = "";
let key = "f56956ec980d43248a36cf3a26ed4f69";

let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    let newHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="false" aria-controls="collapse${index}">
                            <b>Breaking News ${index + 1}:</b> ${element["title"]}
                            </button>
                            </h2>
                            </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                    <div class="card-body"> ${element["content"]}. <a href="${element["url"]}" target="_blank" >Read more here</a>  </div>
                        </div>
                        </div>`;
      newHtml += news;
    });
    newsAccordion.innerHTML = newHtml;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();

// let searchTxt = document.getElementById("searchTxt");
// searchTxt.addEventListener("input", searchNews);

// function searchNews() {
//   let inputVal = searchTxt.value.toLowerCase();
//   let card = document.getElementsByClassName("card");

//   Array.from(card).forEach(function (element) {
//     let cardTxt = element.getElementsByTagName("a")[0].innerText.toLowerCase();
//     if (cardTxt.includes(inputVal)) {
//       element.style.display = "block";
//     } else {
//       element.style.display = "none";
//     }
//   });
// }

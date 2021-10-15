console.log('Welcome to News India')
// API key ---> c39bf8b47376418c84fa87f6c6deae72

//news container
let accordian = document.getElementById('accordion');


//create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c39bf8b47376418c84fa87f6c6deae72', true);

xhr.onload = function () {
    if(this.status === 200){

        const json = JSON.parse(this.responseText);
        const articles = json.articles;
        newsHtml = '';

        articles.forEach(function(element,index) {
        
         let news =  `<div class="accordion-item"><h2 class="accordion-header" id="heading${index}"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> ${element["title"]}</button> </h2>  <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">  <div class="accordion-body">${element["content"]}<a target="_blank" href="${element['url']} ">Read More<a></div></div> </div> `

            newsHtml += news;
            newsHtml += '</br>'
    });
        accordian.innerHTML = newsHtml;
        }
    else{
        console.log("Some error occured")
    }
}

xhr.send();


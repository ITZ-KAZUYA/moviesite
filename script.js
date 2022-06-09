"use strict";

import { links } from './movies.js'
import { nameArray } from './movies.js'


const line01 = document.querySelector(".line1");
const line02 = document.querySelector(".line2");
const line03 = document.querySelector(".line3");
const overLay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger-container");
const hiddenhamburgurnavbar = document.querySelector(".hamburgurnavbar");
const movieContainer = document.querySelector(".container3");
const movieLink = document.getElementById('movielink');
const movieTitle = document.getElementById('movietitle');
const moviePoster = document.getElementById('movieposter');
const submit = document.getElementById('button');
const pagination = document.querySelector(".pagination");

hamburger.addEventListener("click", function () {
  line01.classList.toggle("firstline");
  line02.classList.toggle("secondline");
  line03.classList.toggle("thirdline");
  overLay.classList.toggle("hidden");
  hiddenhamburgurnavbar.classList.toggle("hamburgurnavbarjava");
});

overLay.addEventListener("click", function () {
  line01.classList.toggle("firstline");
  line02.classList.toggle("secondline");
  line03.classList.toggle("thirdline");
  overLay.classList.toggle("hidden");
  hiddenhamburgurnavbar.classList.toggle("hamburgurnavbarjava");
});



// API TO FETHC MOVIE INFORMATION

const movieSearch = async (title) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6b2dec73b6697866a50cdaef60ccffcb&query=${title}`);
  const data = await res.json();
  const movieDetails = data.results[0];

  return movieDetails;
}


//  FUCNTION TO RENDER 12 ARRAY ELEMENT OF NAEMEARRAY PER PAGE

let page = 1;
const resultPerPage = 12;
const searchPage = function (page) {
  const start = (page - 1) * resultPerPage;
  const end = page * resultPerPage;
  return nameArray.slice(start, end)
}

//  FUCNTION TO RENDER 12 ARRAY ELEMENT OF LINKSARRAY PER PAGE
const searchPages = function (page) {
  const start = (page - 1) * resultPerPage;
  const end = page * resultPerPage;
  return links.slice(start, end)
}

const bello = () => {
  let newLinks = searchPages(page);
  return newLinks;
}


// FUNCTION TO INSERT HTML ELEMENT IN DOM

const hello = () => {
  searchPage(page).forEach((item, i) => {
    movieSearch(item).then((data) => {
      const movieLInk = htmllink(data, i)
      movieContainer.insertAdjacentHTML("beforeend", movieLInk);
    })
  })
}
hello();


// PAGINATION

const NumberOfPage = function () {
  const numPages = Math.ceil(nameArray.length / resultPerPage);
  if (parseFloat(page) === 1 & numPages > 1) {
    return `<li><a data-goto="${page + 1}" class="page">Next</a></li>`;
  }

  if (parseFloat(page) === numPages) {
    return `<li><a data-goto="${page - 1}" class="page">Previous</a></li>`
  }

  if (parseFloat(page) < numPages) {
    return `<li><a data-goto="${page - 1}" class="page">${page - 1}</a></li>
    <li id="currpagelist"><a data-goto="${page}" class="page currpage">${page}</a></li>
    <li><a data-goto="${page + 1}" class="page">${page + 1}</a></li>`
  }

}


// TO INSERT PAGE IN DOM

let pagehtml = NumberOfPage();
pagination.innerHTML = pagehtml;


// TO REMOVE ELEMENTS OF CURRENT PAGE WHEN LOADING NEXT PAGE

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


// PAGINATION CLICK EVENT

const paginationButton = (e) => {
  let element = e.target;
  if (element.classList.contains('page')) {
    const goToPage = element.dataset.goto;
    removeAllChildNodes(movieContainer);
    page = parseFloat(goToPage);
    hello();
    pagehtml = NumberOfPage();
    pagination.innerHTML = pagehtml;
    bello();
  }
}

pagination.addEventListener('click', paginationButton)




// HTML ELEMENT FOR MOVIES

const htmllink = function (movie, i) {

  return `<div class="item">
        <a class="movielink" href="${bello()[`${i}`]}" target="_blank">
          <img class="backgroundposter"
            src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"  alt="${movie.title}">
          <span class="about">${movie.overview}</span>
        </a>
        <a href="${bello()[`${i}`]}" target="_blank" class="movieslink">${movie.title}
        </a>
        <div class="date_rating">
          <p class="date">${dateFormatter(movie.release_date)}</p><span class="dot"></span>
          <p class="rating">${movie.vote_average} ⭐</p>
        </div>
      </div> `
}

// TO FORMAT FETCHED DATE

const dateFormatter = function (date) {
  let currdate = date;
  const newDate = currdate.slice(0, 4)
  return newDate;
}





const searchBtn = document.getElementById('Layer_1')
const search = document.querySelector('.search')


const lower = nameArray.map(element => {
  return element.toLowerCase();
});

const seacfun = function () {
  let searchContent = search.value.trim().toLowerCase();

  if (lower.includes(searchContent)) {
    let i = lower.indexOf(searchContent);
    movieSearch(searchContent).then(searchedMovie => {
      movieContainer.innerHTML = "";
      const movieLInk = htmllink(searchedMovie, i)
      movieContainer.insertAdjacentHTML("beforeend", movieLInk);
      pagination.classList.add('hidden');
    })

  }
  else {
    console.log("search not found");
  }
}
















searchBtn.addEventListener('click', seacfun);






document.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    seacfun();
  }


})
"use strict";
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


const nameArray = ["Aquaman",
  "Eternals",
  "Black Widow",
  "Avengers Infinity War",
  "Venom Let There Be Carnage",
  "Shang-Chi And The Legend Of The Ten Rings",
  'American Psycho',
  'Black Hawk Down ',
  'Dune ',
  'House of Gucci ',
  'No Time to Die ',
  'Red Notice 2021 ',
  'The Kissing Booth ',
  'The Kissing Booth 2 ',
  'The Kissing Booth 3 ',
  'The Contractor 2022 ',
  'Wyrmwood Apocalypse ',
  'KGF Chapter 2 ',
  'Bachchhan Paandey ',
  ' The Last Duel ',
  'Beast (2022) ',
  'Doctor Strange In The Multiverse of Madness',
  'The Northman 2022',
];


const links = [
  'https://drive.google.com/file/d/1pp0MnHfcexVzo4WXYK7CQP4XMAUYglYh/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1fBKvPIfkFnoOrgCtStFjl4WA1lfEtnIk/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1DqNm6hn6A0CQgRXOrMx3K4iFetdNDWN1/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1augASDeWk1MNABHf7FTEFdBgYZEbYkuu/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1uBxRpGzsoB1Fe73odSU0ZKPIaK7wXtXU/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1Mxg9TkDfmwFcR_LMUGFo6viZl01F7nOV/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1zZHqIq-SnmQE3ArBgs0RbSvYioeQdc6f/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/15mXJKlnzK3z8q7EJI5D_ZH5wq8sxvPNc/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1DbSq1QgMKPxJvddxlx3DJwJAXgvsyYCr/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1_skuoAVdMCtQv9fMn5ZMJp9UoHiYRNhD/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/12KotLz2gXpkLge0dJsVa6p7IWIxyhBJ3/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1GOHFQShckrCpMM74WBJeZ_M-J1yfeRxw/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/15pOJ6FyS0rMjim1ewizWtQ2LpqLKoY9h/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1OeXIR1fC3MI_kJ-UYvT0se70fPVS85iz/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1i4JMiQ-FeAuAcnSH9PgvGA3-c3C1qJJU/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1Le_qZDOx_BIZybmMdhEds4qjY6no_ghc/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1Yrn_Jt4dP9RN7N7WU7A1xMDNTD6L3glG/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1S2730Zq2RggpW1Ek3ZSMy4GKFWyUVyJA/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1c-LVv4t-49X3LC4WuQqcrBspRey5HGtA/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1DRwj-0sf7Uu8yW-ATcmLm1QoUIw-D4v2/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1oO6DDUt_Q7UVusVzqUUwqwXLKXvCRBvW/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1pK_CNwth0J9C_snShHlhxJYJIAI2dYzH/view?usp=sharing" target="_blank',
  'https://drive.google.com/file/d/1Qo6an11mMQIpfB4YmoXtzjevOSP--IvW/view?usp=sharing " target="_blank',

]

const movieSearch = async (title) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6b2dec73b6697866a50cdaef60ccffcb&query=${title}`);
  const data = await res.json();
  const movieDetails = data.results[0];

  return movieDetails;
}




nameArray.forEach((item, i) => {
  movieSearch(item).then(data => {
    const movieLInk = htmllink(data, i)
    movieContainer.insertAdjacentHTML("beforeend", movieLInk);
  })
})


const htmllink = function (movie, i) {
  return `<div class="item">
        <a class="movielink" href="${links[`${i}`]}">
          <img class="backgroundposter"
            src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
          <span class="about">${movie.overview}</span>
        </a>
        <a href="${links[`${i}`]}" class="movieslink">${movie.title}
        </a>
        <div class="date_rating">
          <p class="date">${dateFormatter(movie.release_date)}</p><span class="dot"></span>
          <p class="rating">${movie.vote_average} ⭐</p>
        </div>
      </div> `
}



const dateFormatter = function (date) {
  let currdate = date;
  const newDate = currdate.slice(0, 4)
  return newDate;
}


"use strict";
const line01 = document.querySelector(".line1");
const line02 = document.querySelector(".line2");
const line03 = document.querySelector(".line3");
const overLay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger-container");
const hiddenhamburgurnavbar = document.querySelector(".hamburgurnavbar");
const movieContainer = document.querySelector(".container3");

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

const link = [
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
  'https://drive.google.com/file/d/1oO6DDUt_Q7UVusVzqUUwqwXLKXvCRBvW/view?usp=sharing" target="_blank'




];

const name = [
  "Aquaman (2018) IMAX 1080p UHD HDR10 BluRay x265 10bit HEVC Org Hindi UHD BD 5.1 ~ 448Kbps + English AAC 7.1",
  'Eternals 2021 1080p ENGLISH WEB-DL DD5.1 x264',
  'Black Widow 2021 1080p ENGLISH WEB-DL DD5.1 ESub x264',
  'Marvel Studios Avengers Infinity War 2018 1080p IMAX DSNP WEB-DLDDP5.1 Atmos HEVC',
  'Venom Let There Be Carnage 2021 1080p AMZN WEB-DL DDP 5.1 H.264',
  'Shang-Chi And The Legend Of The Ten Rings 2021 1080p BluRay H264 AAC',
  'American Psycho 2000 Uncut 1080p UHD BluRay x265 HDR DD+5.1',
  'Black Hawk Down (2001) EXTENDED Cut 1080p BluRay [Hindi DD 5.1Ch 448Kbps + English AAC 5.1] ESub.mkv',
  'Dune 2021 2160p WEB-DL x265 HDR DD+5.1 Atmos',
  'House of Gucci 2021 1080p WEBR-DL 6CH x265 HEVC',
  'No Time to Die 2021 1080p WEB-HD x264 6CH',
  'Red Notice 2021 1080p NF WEB-DL x265 10Bit 6CH',
  'The Kissing Booth (2018) 720p 10bit WEBRip x265 HEVC [Hindi HE-AAC 5.1Ch + English AAC 5.1 ESub',
  'The Kissing Booth 2 (2020) 720p 10bit NF WEBRip x265 HEVC [HindiDD+ 5.1 640Kbps + English DD 5.1]',
  'The Kissing Booth 3 (2021) 720p 10bit NF WEBRip x265 HEVC Dual Audio [Hindi DDP5.1 640Kbps + English AAC 5.1] Msubs',
  'The Contractor 2022 1080p AMZN WEB-DL DDP 5.1 H264',
  'Wyrmwood Apocalypse 2022 1080p WEB-DL DD5.1 H 264',
  'KGF Chapter 2 1080p HQ HDACM Hindi Dubbed x264 AAC',
  'Bachchhan Paandey 2022 1080p WEB-DL AAC x264',
  ' The Last Duel 2021 1080p WEBRip DD5.1 x264',
  'Beast (2022) - Hindi - 1080p HQ HDRip - x264 - AAC - 2.5GB - HC'




];


const bgposter = [
  'https://upload.wikimedia.org/wikipedia/en/e/ed/Aquaman_%28film%29_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Black_Widow_%282021_film%29_poster.jpg/220px-Black_Widow_%282021_film%29_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg?20180316132919',
  'https://upload.wikimedia.org/wikipedia/en/a/a7/Venom_Let_There_Be_Carnage_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg/220px-Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg',
  'https://upload.wikimedia.org/wikipedia/en/0/0c/American_Psycho.png',
  'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Black_hawk_down_ver1.jpg/220px-Black_hawk_down_ver1.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg',
  'https://upload.wikimedia.org/wikipedia/en/f/fe/House.of.Gucci.film.jpeg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/No_Time_to_Die_poster.jpg/220px-No_Time_to_Die_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Red_Notice_-_film_promotional_image.jpg/220px-Red_Notice_-_film_promotional_image.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/The_Kissing_Booth.png/220px-The_Kissing_Booth.png',
  'https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/The_Kissing_Booth_2_poster.jpg/220px-The_Kissing_Booth_2_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/The_Kissing_Booth_3.jpg/220px-The_Kissing_Booth_3.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/The_Contractor_%282022_film%29.jpg/220px-The_Contractor_%282022_film%29.jpg',
  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3xPQb090vQTkHw7y6BJ1hYGuzU2-t8kqfrPR91hdTXpzOCtrv',
  'https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Bachchhan_Paandey_poster.jpg/220px-Bachchhan_Paandey_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/e/e8/The_Last_Duel_poster.jpg',
  'https://upload.wikimedia.org/wikipedia/en/3/3d/Beast_2022_Indian_poster.jpg'






];

const displayLink = function (link) {
  link.forEach(function (items, i) {
    const html = ` 
    <div class="item">
    <div class="innerbox">
      <div class="category">
        <a href="https://drive.google.com/drive/folders/16M7XxxfIewV9v05KO2zd5fbuqPYuFUXu?usp=sharing"
          class="Hollywood">HOLLYWOOD</a>
        <a href="https://drive.google.com/drive/folders/1DhXKAAI-fT4qsUUdPbeT2xW-J9OOfakK?usp=sharing"
          class="movies">MOVIES</a>
      </div>

      <img class="backgroundposter"
      src="${bgposter[`${i}`]}" alt="">

      <a href="${items}"
        class="movieslink" >
        ${name[`${i}`]}
      </a >
    </div >
  </div >
    `;
    movieContainer.insertAdjacentHTML("afterbegin", html);
  });
};

displayLink(link);

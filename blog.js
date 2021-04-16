const blog = document.querySelector('.inner');
const btn = document.querySelector('.button');
const randomBtn = document.querySelector('.button1');
const searchBar = document.getElementById('search');
const enterBtn = document.getElementById('enter-Btn');
const profile = document.querySelector(".profile");

btn.addEventListener('click', function () {
  showBlog()
  btn.style.display = 'none';
  profile.style.display = 'none';
  randomBtn.style.width = `${90}%`;
  randomBtn.style.marginLeft = 'auto';
  randomBtn.style.marginRight = 'auto';
});


randomBtn.addEventListener('click', randomShow);
enterBtn.addEventListener('click', function () {
  searchBlog();

});
let text = " ";
let status = false;

function Blog(body, date) {
  this.body = body;
  this.date = date;
}




const arrBlog = [
  new Blog("I read a novel at 4 a.m.(The Innovators by walter Isaacson).i went to see a psychiartrist- Dr Sheik @ 10 a.m at Livingstone central hospital( really fighting some serious depression). I was in the library around 11 a.m, doing some studies.went to see a friend-Ronald  @ 5 p.m. Finally, i was at Kakonde's place from 7 p.m, where i spent a night.",
    new Date('9/04/2020')),

  new Blog(
    "started my day @ 5 a.m with reading (from the innovators by Isaacson). went to check for awhile @ 7 a.m before heading to town for a meeting (support group- glued up with some friends!). spent nearly the whole day with acouple friends- Ronald, Martha, later Ben came along. it was a great way to spend weekend. @ 6p.m, i was back to check on mom before journeying to friend's place for a night."
    , new Date('9/05/2020')),

  new Blog("started my day @ 5 a.m with reading (from the innovators by isaacson- great author)",
    new Date('9/06/2020')),
  new Blog('Hey! i am just around town, about to go live...',
    new Date('5/09/2020')),

  new Blog('Hey! Am just getting better with coding',
    new Date('3/22/2020')),
  new Blog('Hey! Its good to be back again. Happy New Year.....',
    new Date('1/01/2021')),
  new Blog('Hey! Am back again after a very long time. Hope You are all doing great....Guddday!',
    new Date('3/10/2021')),
  new Blog('Turns out its my birthday today but then i dont have any plans. so will just be home coding....',
    new Date('3/22/2021')),
  new Blog('Just started learning Node.js, its really coool. Am kinda loving the progress lol.',
    new Date('4/01/2021')),
];

function showBlog() {

  for (let i = 0; i < arrBlog.length; i++) {

    if (i % 2 == 0) {
      text += "<p id='p1' >";
    } else {
      text += "<p class='p1'>";
    }

    text += arrBlog[i].body + '<br>' + '[' + (arrBlog[i].date.getMonth() + 1)
      + '/' + arrBlog[i].date.getDate() + '/' +
      arrBlog[i].date.getFullYear() + ']' + "</p>";
  }

  blog.innerHTML = text;

}

arrBlog.sort(function (date1, date2) {
  return date2.date - date1.date;
});

function searchBlog() {
  let search = searchBar.value;

  if (search == '') {
    alert('Input Must be Filled!!!');
  } else {

    for (let i = 0; i < arrBlog.length; i++) {
      if (arrBlog[i].body.toLowerCase().indexOf(search.toLowerCase() != -1)) {
        alert(arrBlog[i].body + "  " + "[" + (arrBlog[i].date.getMonth() + 1) + "/" + arrBlog[i].date.getDate() + "/" +
          arrBlog[i].date.getFullYear() + "]");
        search.innerHTML = '';
        break;
      }
      if (i == arrBlog.length) {
        alert('Sorry!! No match was found.');
        search.innerHTML = '';
      }

    }
  }


}

function randomShow() {

  let i = Math.floor(Math.random() * arrBlog.length);
  alert(arrBlog[i].body + "  " + "[" + (arrBlog[i].date.getMonth() + 1) + "/" + arrBlog[i].date.getDate() + "/" +
    arrBlog[i].date.getFullYear() + "]");
}
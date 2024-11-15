let btn = document.getElementsByClassName('hide1').addEventListener("click", stupidfunction)

function stupidfunction(){let img1 = document.getElementsByClassName("img1")
    img1.classlist.add("disappear")
}

let showBtn = document
  .getElementsByClassName("btnA")
  .addEventListener("click", showfunction);

function showfunction() {
  let img1 = document.getElementsByClassName("img1");
  img1.classlist.remove("disappear");
}
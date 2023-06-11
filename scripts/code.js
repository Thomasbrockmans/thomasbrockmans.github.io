console.log("the code script is loaded");

const setup =()=> {
  let dropdownicon = document.getElementById("headerdropdownicon");
  dropdownicon.addEventListener("click", dropdownmenu);
}

window.addEventListener("load", setup);

const dropdownmenu =()=> {
  let navmenu = document.getElementsByClassName('nav');
  for(let i = 0 ; i < navmenu.length ; i++) {
    navmenu[i].style.display = "inline";
  }

  console.log("dropdownmenu should be shown");

  setTimeout(dropdownmenuhide, 10000);
};

const dropdownmenuhide =()=> {
  let navmenu = document.getElementsByClassName('nav');
  for(let i = 0 ; i < navmenu.length ; i++) {
    navmenu[i].style.display = "none";
  }

  console.log("dropdownmenu should be hidden");
}

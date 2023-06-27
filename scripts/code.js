let global = {
  menuVisible: false
};

console.log("the code script is loaded");
console.log("the menu is visible: " + global.menuVisible);

const setup =()=> {
  let dropdownicon = document.getElementById("headerdropdownicon");
  dropdownicon.addEventListener("click", clickmenu);
}

window.addEventListener("load", setup);


const clickmenu =()=> {
  if(global.menuVisible == false){
    dropdownmenu();
  }
  else {
    dropdownmenuhide();
  }
}

const dropdownmenu =()=> {
  let navmenu = document.getElementsByClassName('nav');
  for(let i = 0 ; i < navmenu.length ; i++) {
    navmenu[i].style.display = "inline";
  }

  global.menuVisible = true;
  console.log("dropdownmenu should be shown");

  setTimeout(dropdownmenuhide, 10000);
};

const dropdownmenuhide =()=> {
  let navmenu = document.getElementsByClassName('nav');
  for(let i = 0 ; i < navmenu.length ; i++) {
    navmenu[i].style.display = "none";
  }
  global.menuVisible = false;
  console.log("dropdownmenu should be hidden");
}

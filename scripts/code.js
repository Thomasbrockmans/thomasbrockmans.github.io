const setup =()=> {
  let stylebutton = document.getElementById("style");
  stylebutton.addEventListener('Click', style);
}

window.addEventListener('load', setup);

const style =()=> {
  window.alert("other style");
};

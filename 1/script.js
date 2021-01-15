document.getElementById('name_input').addEventListener('input', (event) => {

  const element = event.target;

  if(element.value !== element.getAttribute('value')) {
    element.classList.add('red');
  } else {
    element.classList.remove('red');
  }
})

var win = window.frames.target;
console.log(win)
win.postMessage("сообщение", "http://yauheni.by");
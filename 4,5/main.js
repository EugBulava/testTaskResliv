document.querySelector('.write').addEventListener('click', () => {
  const win = document.querySelector('.iframe').contentWindow;
  win.postMessage(JSON.stringify({type: 'write', key: document.querySelector('.keyToWrite').value, text: document.querySelector('.valueToWrite').value}), "*");
  console.log('Written');
})

document.querySelector('.delete').addEventListener('click', () => {
  const win = document.querySelector('.iframe').contentWindow;
  win.postMessage(JSON.stringify({type: 'delete', key: document.querySelector('.keyToDelete').value}), "*");
  console.log('Removed');
})

document.querySelector('.get').addEventListener('click', () => {
  const win = document.querySelector('.iframe').contentWindow;
  win.postMessage(JSON.stringify({type: 'get', key: document.querySelector('.keyToGet').value}), "*");
  console.log('Gotten');
})



Promise.all([
  fetch('http://httpbin.org/ip'),
  fetch('http://httpbin.org/user-agent')]).then(response => {
  console.log(response);
  console.log('оба ответа получены');
});

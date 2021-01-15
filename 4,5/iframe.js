window.onmessage = function(event) {
  const data = JSON.parse(event.data);
  
  switch(data.type) {
    case 'write': 
      localStorage.setItem(data.key, data.text);
      break;
    case 'delete':
      localStorage.removeItem(data.key);
      break;
    case 'get': 
      console.log(`Value of key '${data.key}': ${localStorage.getItem(`${data.key}`)}`);
      break;
    default: 
      console.log('default');
      break; 
  }
};
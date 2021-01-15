const fillInputs = () => {
  const url = new URL(location.href);

  document.querySelectorAll('input').forEach((el) => {
    if(el.name === 'size' && el.value === url.searchParams.get('size')) {
      el.checked = "true";
    } else if(el.name === 'color' && url.searchParams.getAll('color').includes(el.value)) {
      el.checked = "true";
    }
  })

  document.querySelectorAll('option').forEach((el) => {
    if(url.searchParams.getAll('manufacturer').includes(el.value)) {
      el.selected = "true";
    }
  })

}

window.onload = () => {
  history.pushState(null, null, '/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd');

  fillInputs();

  document.querySelector('form').addEventListener('change', (event) => {
    if(event.target !== document.getElementById('sale')) {
      let color = [];
      let size = '';
      let manufacturer = [];

      document.querySelectorAll('input').forEach((el) => {
        if(el.name === 'size' && el.checked) {
          size = el.value;
        } else if(el.name === 'color' && el.checked) {
          color.push(el.value);
        }
      })

      document.querySelectorAll('option').forEach((el) => {
        if(el.selected) {
          manufacturer.push(el.value);
        }
      })

      const newUrl = new URL(location.protocol + '//' + location.host + location.pathname);

      newUrl.searchParams.set('size', size);
      
      color.forEach((el) => {
        newUrl.searchParams.append('color', el);
      })

      manufacturer.forEach((el) => {
        newUrl.searchParams.append('manufacturer', el);
      })

      console.log('Actual URL: ' + newUrl.toString()); 
    }
  })
}
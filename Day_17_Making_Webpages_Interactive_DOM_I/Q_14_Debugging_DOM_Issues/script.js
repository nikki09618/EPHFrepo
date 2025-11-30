// Fixed incorrect id: 'massage' → 'message'
    const para = document.querySelector('#message');

    // Fixed incorrect method: getElementByName → getElementById
    const textButton = document.getElementById('textButton');

    // Fixed invalid event method: addClickEventListener → addEventListener
    textButton.addEventListener('click', () => {

      // Fixed property name: contentText → textContent
      para.textContent = 'New Message';
    });

    const box = document.getElementById('box');
    const colorButton = document.getElementById('colorButton');

    colorButton.addEventListener('click', () => {

      // Fixed typo: styl → style
      box.style.backgroundColor = 'blue';
    });
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');
// buttons.forEach(function (button) {
//   button.addEventListener('click', function () {
//     if (button.id === 'grey') {
//       body.style.backgroundColor = 'black';
//     }
//   });
// });

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    switch (button.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'lightblue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'lightyellow';
        break;
      default:
        body.style.backgroundColor = 'black';
    }
  });
});

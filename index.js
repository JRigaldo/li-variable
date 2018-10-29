window.onload = (() => {

  let lis = document.querySelectorAll('li');
  let tableau = document.getElementById('tableau');

  console.log(tableau);

  console.log(lis);
  for(let i = 0; i < lis.length; i++){
    lis[i].addEventListener('click', clickPosition, false);
    function clickPosition(e) {

      e.preventDefault;
      console.log(e);
      console.log(lis[i]);


      if(lis[i].classList.contains('is-active')){
        lis[i].classList.remove('is-active')
      }else{

        // lis[i].style.transform = 'translateY(-100px)'
        // lis[i].classList.add('is-active');

        console.log('BlaBlaBla');

        setTimeout(() => {
        tableau.prepend(lis[i]);

        }, 500);
      }

    };
  }
});


// window.onload = (() => {
//
//   let lis = document.querySelectorAll('li');
//   let tableau = document.getElementById('tableau');
//
//   console.log(tableau);
//
//   console.log(lis);
//   for(let i = 0; i < lis.length; i++){
//     lis[i].addEventListener('click', (e) => {
//       e.preventDefault;
//       console.log(e);
//       console.log(lis[i]);
//
//
//       if(lis[i].classList.contains('is-active')){
//         lis[i].classList.remove('is-active')
//       }else{
//         lis[i].classList.add('is-active')
//       }
//
//
//
//       tableau.prepend(lis[i])
//
//
//     });
//   }
// });





// let vals = [1, 6, 3, 8, 5, 9];
//
// let valsSorted = vals.sort((a, b) => {
//   return a < b;
// });
//
//
//
// console.log(valsSorted);

// window.onload = (() => {
//
//   let lis = document.querySelectorAll('li');
//
//   for(let i = 0; i < lis.length; i++){
//     lis[i].addEventListener('click', (e) => {
//       e.preventDefault;
//       console.log(e);
//     });
//   }
// });

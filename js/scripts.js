// let y = document.querySelector('.b-1').onclick = () => {
//     let selectValue = document.querySelector('#select').value
//     let selectColorValue = document.querySelector('#selectColor').value
//     let kub = document.querySelector('.kub');
//     let width = +document.querySelector('.width').value.toLowerCase().replace(/\s+/g, ' ').trim();
//     let height = +document.querySelector('.height').value.toLowerCase().replace(/\s+/g, ' ').trim();
//     let borderPx = document.querySelector('.borderPx').value.toLowerCase().replace(/\s+/g, ' ').trim();
//     let background = document.querySelector('#background').value;
//     if (height < 0 || height > 500) {
//         document.querySelector('.out-1').innerHTML = 'Не допустимые значения высоты'
//     }
//     else if (width < 0 || width > 500) {
//         document.querySelector('.out-1').innerHTML = 'Не допустимые значения ширины'
//     }
//     else {
//         kub.style.width = width + 'px';
//         kub.style.height = height + 'px';
//         kub.style.background = background;
//         kub.style.border = selectValue + ' ' + selectColorValue + ' ' + borderPx + 'px';
//     }
// }
// document.querySelector('.b-2').onclick = () => {
//     let kub = document.querySelector('.kub');
//     document.querySelector('.width').value = '100'
//     document.querySelector('.height').value = '100'
//     document.querySelector('#select').value = 'solid'
//     document.querySelector('#selectColor').value = 'red'
//     document.querySelector('.borderPx').value = '3'
//     document.querySelector('#background').value = 'white'
//     kub.style.width = '100px';
//     kub.style.height = '100px';
//     kub.style.border = 'solid red 3px';
//     kub.style.background = 'white';
// }
// document.querySelector('.width').onkeydown = (event) => {
//     if (event.key == 'Enter') {
//         y()
//     }
// }
// document.querySelector('.height').onkeydown = (event) => {
//     if (event.key == 'Enter') {
//         y()
//     }
// }
// document.querySelector('.borderPx').onkeydown = (event) => {
//     if (event.key == 'Enter') {
//         y()
//     }
// }

// const cartContainer = document.getElementsByClassName('cartContainer');



// for (let i=0; i<cartContainer.length; i++) {
//     cartContainer[i].addEventListener('click', (e)=>{
//         e.target.style.border = '1px solid #c73b0f';
//     });
// }



window.onload = function() {
    const cartContainer = document.getElementsByClassName('cartContainer');

    for (let i = 0; i < cartContainer.length; i++) {
        cartContainer[i].addEventListener('click', (e) => {
            e.target.style.border = '2px solid red'; // Visible border
        });
    }
};
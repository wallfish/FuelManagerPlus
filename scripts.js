// const formChange = document.querySelectorAll('h3');


// formChange.forEach ( fuel => {
//     if(fuel.textContent.includes('error')) {
//         fuel.classList.add('error');
//     }
//      if (fuel.textContent.includes('success')) {
//         fuel.classList.add('success');
//     };
// });



const itemsGone = document.querySelectorAll('.title_answer');

itemsGone.forEach (items => {
    console.log(items.innerText);
    items.addEventListener('click',i=>{
        i.target.remove();
    })
});









const buttonEvent = document.querySelectorAll('input');

console.log(buttonEvent);

buttonEvent.forEach (input => {
    input.addEventListener('click', () => {
        console.log('clickfish!');
        input.classList.add('focus');
    })
});


buttonEvent.forEach (input => {
    if (input.addEventListener('focusout',() => {
        input.classList.remove('focus');
                }
            )
        );


});


// buttonEvent.addEventListener('focus', () => {
//     console.log('click event occured fish!');
// });



// const formChange = document.querySelectorAll('h3');


// formChange.forEach ( fuel => {
//     if(fuel.textContent.includes('error')) {
//         fuel.classList.add('error');
//     }
//      if (fuel.textContent.includes('success')) {
//         fuel.classList.add('success');
//     };
// });

// buttonEvent.addEventListener('focus', () => {
//     console.log('click event occured fish!');
// });



const itemsGone = document.querySelectorAll('.title_answer');

itemsGone.forEach (items => {
    console.log(items.innerText);
    items.addEventListener('click',i=>{
        i.target.remove();
    })
});









// --------------------------------------
// Style for focus inputs
// --------------------------------------

const buttonEvent = document.querySelectorAll('.fuel_details');

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

// --------------------------------------
// Prevent refresh & store value of inputs
// --------------------------------------
const form = document.querySelector('.input_wrappers');

const feedback = document.querySelector('.feedback')

form.addEventListener('submit', formEvent => {
    formEvent.preventDefault();

    // RegEx

    const entryField = form.entry1.value;
    const entryPattern = /^[0-9]{2,7}$/;

    if (entryPattern.test(entryField)) {
        // feedback good
    } else {
        // feedback bad
        feedback.textContent='Not correct data';
        feedback.style.color = "red";
    }

    console.log();

});














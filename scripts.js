
const highlightInput = document.querySelectorAll('.fuel_details');


highlightInput.forEach (input => {

    if (input.addEventListener('focus', () => {
        input.classList.add('focus');
                }
            )
        );

    if (input.addEventListener('focusout',() => {
        input.classList.remove('focus');
                }
            )
        );

    if (input.addEventListener('keypress', () => {
        input.value = input.value.toUpperCase();
                }
            )
        );

});


const formContainer = document.querySelector('.input_wrappers');

const validationText = document.querySelector('.feedback');

const validationBorder = document.querySelector('.fuel_details');










formContainer.addEventListener('keyup', formEvent => {

    formEvent.preventDefault();

    const validationValue = formContainer.entry1.value;

    const validationPattern = /^[0-9]{2,7}$/;

    // console.log(validationValue);

    if (validationPattern.test(validationValue)) {

        validationText.textContent='';
        
        validationBorder.style.outline = "3px solid green";

        validationText.style.color = "green";

        validationText.style.animation = "heightDecrease .6s forwards";
    
    } else {
        
        validationText.textContent='Only numbers between 2-7 digits';
        
        validationBorder.style.outline = "3px solid red";

        validationText.style.color = "red";

        validationText.style.animation = "heightIncrease .6s forwards";

    };
    
});



const newEveryInput = document.querySelectorAll('.fuel_details');

console.log(newEveryInput);

newEveryInput.forEach (input => {
    input.addEventListener('keyup', () =>{

        console.log(input.value);



        
    });
});








// --------------------------------------------------


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

// const itemsGone = document.querySelectorAll('.title_answer');

// itemsGone.forEach (items => {
//     console.log(items.innerText);
//     items.addEventListener('click',i=>{
//         i.target.remove();
//     })
// });


// --------------------------------------
// Style for focus inputs
// --------------------------------------


















//Mouse Event 
document.getElementById('mouse-event').addEventListener('click', function() {
    alert('Mouse Event Listener Engaged');
});

//Keyboard Event
document.addEventListener('keydown', function(event) {
    console.log(`keyboard input: ${event.key}`);
    if (event.key === 'Escape') {
        console.log('Escape Key was Pressed');
    }
});

//Form Event
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('theForm');
    const fName = document.getElementById('fName');
    const lName = document.getElementById('lName');
    const number = document.getElementById('number');
    
    form.addEventListener('submit', function(event) {
        console.log("submitted");
        event.preventDefault();
        alert(`First name is ${fName.value}, last name is ${lName.value}, the number selected is ${number.value}`);
    });
    
    number.addEventListener('input', function() {
        console.log('Number chosen changed to: ', this.value);
    });
    
    fName.addEventListener('change', function() {
        console.log('First name has been changed to: ', this.value);
    });
    
    lName.addEventListener('change', function() {
        console.log('Last name has been changed to: ', this.value);
    });
    
    fName.addEventListener('input', function() {
        console.log('First name input changed: ', this.value);
    });
    
    lName.addEventListener('input', function() {
        console.log('Last name input changed: ', this.value);
    });
});

//Focus/Blur Event
function focusFun() {
    const focusOrBlur = document.getElementById('focus');
    if (focusOrBlur) {
        focusOrBlur.addEventListener('click', function() {
            this.style.background = 'lightskyblue';
        });
        
        focusOrBlur.addEventListener('blur', function() {
            this.style.background = 'white';
        });
    }
}

focusFun();

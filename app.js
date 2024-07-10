document.addEventListener('DOMContentLoaded', function() {
    var One = document.getElementById('one');
    var isOneClicked = false;
    var Two = document.getElementById('two');
    var isTwoClicked = false;
    var Three = document.getElementById('three');
    var isThreeClicked = false;
    var Four = document.getElementById('four');
    var isFourClicked = false;
    var Five = document.getElementById('five');
    var isFiveClicked = false;
    var Submit = document.querySelector('.BTN-submit');
    var Rating = document.querySelector('.Rating');
    var realRate = 0;
    var ratingState = document.querySelector('.Rating-state');
    var ratingStateSent = document.querySelector('.Rating-state-sent');

    if (One) {
        One.addEventListener('click', function() {
            isOneClicked = true;
            isTwoClicked = false;
            isThreeClicked = false;
            isFourClicked = false;
            isFiveClicked = false;
            One.style.backgroundColor = 'hsl(0, 0%, 100%)';
            One.style
            console.log('One was clicked');
        });
    }

    if (Two) {
        Two.addEventListener('click', function() {
            isTwoClicked = true;
            isOneClicked = false;
            isThreeClicked = false;
            isFourClicked = false;
            isFiveClicked = false;
            console.log('Two was clicked');
        });
    }

    if (Three) {
        Three.addEventListener('click', function() {
            isThreeClicked = true;
            isOneClicked = false;
            isTwoClicked = false;
            isFourClicked = false;
            isFiveClicked = false;
            console.log('Three was clicked');
        });
    }

    if (Four) {
        Four.addEventListener('click', function() {
            isFourClicked = true;
            isOneClicked = false;
            isTwoClicked = false;
            isThreeClicked = false;
            isFiveClicked = false;
            console.log('Four was clicked');
        });
    }

    if (Five) {
        Five.addEventListener('click', function() {
            isFiveClicked = true;
            isOneClicked = false;
            isTwoClicked = false;
            isThreeClicked = false;
            isFourClicked = false;
            console.log('Five was clicked');
        });
    }

    // Example to demonstrate checking the variable state
    Submit.addEventListener('click', function() {
        if (isOneClicked === true) {
            realRate = 1;
            Rating.textContent = realRate;
            ratingState.style.display = 'none';
            ratingStateSent.style.display = 'block';
        } else if (isTwoClicked === true) {
            realRate = 2;
            Rating.textContent = realRate;
            ratingState.style.display = 'none';
            ratingStateSent.style.display = 'block';
        } else if (isThreeClicked === true) {
            realRate = 3;
            Rating.textContent = realRate;
            ratingState.style.display = 'none';
            ratingStateSent.style.display = 'block';
        } else if (isFourClicked === true) {
            realRate = 4;
            Rating.textContent = realRate;
            ratingState.style.display = 'none';
            ratingStateSent.style.display = 'block';
        } else if (isFiveClicked === true) {
            realRate = 5;
            Rating.textContent = realRate;
            ratingState.style.display = 'none';
            ratingStateSent.style.display = 'block';
        } else {
            console.log('The "One" button was not clicked before submitting.');
        }
    });
});

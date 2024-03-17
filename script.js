function calculateWeight() {
    const weight = parseFloat(document.getElementById('weight').value);
    const planet = document.getElementById('planet').value;
    
    const gravitationalAcceleration = {
        'Mercury': 3.7,
        'Venus': 8.87,
        'Earth': 9.81,
        'Moon': 1.62, 
        'Mars': 3.711,
        'Jupiter': 24.79,
        'Saturn': 10.44,
        'Uranus': 8.69,
        'Neptune': 11.15,
        'Pluto': 0.62
    };

    const gravity = gravitationalAcceleration[planet];
    const calculatedWeight = (weight * gravity / gravitationalAcceleration['Earth']).toFixed(2);

    document.getElementById('result').innerHTML = `Weight of the object on ${planet}: ${calculatedWeight} kg`;

    const container4 = document.querySelector('.container4');
    container4.style.display = 'none';

    const container3 = document.querySelector('.container3');
    container3.style.display = 'block';
}

function changeImage() {
    const planet = document.getElementById('planet').value;
    const image = document.getElementById('planetImages');
    const selectElement = document.getElementById('planet');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    
    const planetImages = {
        'Mercury': 'mercury.png',
        'Venus': 'venus.png',
        'Earth': 'earth.png',
        'Moon': 'moon.png',
        'Mars': 'mars.png',
        'Jupiter': 'jupiter.png',
        'Saturn': 'saturn.png',
        'Uranus': 'uranus.png',
        'Neptune': 'neptune.png',
        'Pluto': 'pluto.png'
    };

    if (selectedOption.value === '') {
        image.style.display = 'block'; 
      
    } else {
        image.src = './images/' + planetImages[planet];
        document.getElementById('result').innerHTML = ''; 
        image.style.display = 'block';
        container.style.display = 'none';
    }
}

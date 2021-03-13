document.addEventListener('DOMContentLoaded', function () {

    let form = document.querySelector('#form');
    let image = document.querySelector('#enter_img');
    let topText = document.querySelector('#top_text');
    let BottomText = document.querySelector('#bottom_text');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log(image.value);
        console.log(topText.value);
        console.log(BottomText.value);
        let img = document.createElement('img');
        let section = document.querySelector('section');
        img.src = image.value;
        section.appendChild(img);


    })
})


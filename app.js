document.addEventListener('DOMContentLoaded', function () {

    let form = document.querySelector('#form');
    let image = document.querySelector('#enter_img');
    let topText = document.querySelector('#top_text');
    let bottomText = document.querySelector('#bottom_text');
    let topInput = topText.value;
    let bottomInput = bottomText.value;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let newDiv = document.createElement('div');
        let section = document.querySelector('section');
        section.appendChild(newDiv);
        newDiv.style.position = 'relative';
        let toptextDiv = document.createElement('div');
        toptextDiv.classList.add('topText')
        let bottomtextDiv = document.createElement('div');
        bottomtextDiv.classList.add('bottomText');

        let img = document.createElement('img');
        img.src = image.value;
        img.style.width = '400px';

        bottomtextDiv.innerText = bottomText.value;
        toptextDiv.innerText = topText.value;
        newDiv.appendChild(img);
        newDiv.appendChild(toptextDiv);
        newDiv.appendChild(bottomtextDiv);


        newDiv.style.width = '400px';
        newDiv.style.margin = '0';
        newDiv.style.display = 'flex';
        newDiv.style.justifyContent = 'center';
        img.style.textAlign = 'center';
        img.style.position = 'relative';


        toptextDiv.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
        toptextDiv.style.fontSize = '2.5rem';
        toptextDiv.style.textShadow = '-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000,-1px -1px 0 #000;'
        toptextDiv.style.position = 'absolute';
        toptextDiv.style.color = 'white';
        toptextDiv.style.textAlign = 'center';
        toptextDiv.style.top = '5%'
        // toptextDiv.style.left = '0%';
        toptextDiv.style.display = 'flex';
        // toptextDiv.style.justifyContent = 'space-around';
        toptextDiv.style.alignSelf = 'center';
        // toptextDiv.style.width = '100%';

        bottomtextDiv.style.color = 'white';
        bottomtextDiv.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
        bottomtextDiv.style.fontSize = '2.5rem';
        bottomtextDiv.style.position = 'absolute';
        bottomtextDiv.style.textAlign = 'center';
        // bottomtextDiv.style.width = '50%';
        bottomtextDiv.style.bottom = '5%';
        // bottomtextDiv.style.left = '5%';

        bottomtextDiv.style.display = 'flex';
        bottomtextDiv.style.alignSelf = 'center';










        // toptextDiv.appendChild(topText.value);


    })
})


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



        newDiv.addEventListener('mouseenter', function (e) {
            console.log(e);
            let del = document.createElement('button');
            del.innerText = 'Delete';
            del.classList.add('Remove');
            e.target.appendChild(del);
            del.style.position = 'absolute';
            del.style.fontSize = '1.5rem';
            del.style.textAlign = 'center';
            del.style.color = 'white';
            del.style.display = 'flex';
            del.style.justifyContent = 'center';
            del.style.alignSelf = 'center';
            del.style.backgroundColor = 'black';
            del.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";

            del.addEventListener('click', function (e) {
                e.target.parentElement.remove();
            });

            newDiv.addEventListener('mouseleave', function (e) {
                del.remove();

            })
        });



        img.src = image.value;
        img.style.width = '450px';
        // img.style.height = '350px';
        img.style.margin = '20px 20px 20px 20px';
        img.style.boxSizing = "BorderBox";


        bottomtextDiv.innerText = bottomText.value;
        toptextDiv.innerText = topText.value;
        newDiv.appendChild(img);
        newDiv.appendChild(toptextDiv);
        newDiv.appendChild(bottomtextDiv);




        newDiv.style.width = '450px';
        newDiv.style.display = 'flex';
        newDiv.style.flex = 'wrap';
        newDiv.style.justifyContent = 'center';
        // newDiv.style.margin = '5px 5px 5px 5px';
        newDiv.style.boxSizing = 'borderbox';
        // img.style.textAlign = 'center';
        img.style.position = 'relative';


        toptextDiv.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
        toptextDiv.style.fontSize = '2.5rem';
        toptextDiv.style.textShadow = "2px 2px #000000, 2px 2px #000000, 2px 2px #000000, 2px 2px #000000";
        toptextDiv.style.position = 'absolute';
        toptextDiv.style.color = 'white';
        toptextDiv.style.textAlign = 'center';
        toptextDiv.style.top = '10%'
        // toptextDiv.style.left = '0%';
        toptextDiv.style.display = 'flex';
        // toptextDiv.style.justifyContent = 'space-around';
        toptextDiv.style.alignSelf = 'center';
        // toptextDiv.style.width = '100%';

        bottomtextDiv.style.color = 'white';
        bottomtextDiv.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
        bottomtextDiv.style.textShadow = "2px 2px #000000, 2px 2px #000000, 2px 2px #000000, 2px 2px #000000";
        bottomtextDiv.style.fontSize = '2.5rem';
        bottomtextDiv.style.position = 'absolute';
        bottomtextDiv.style.textAlign = 'center';
        // bottomtextDiv.style.width = '50%';
        bottomtextDiv.style.bottom = '10%';
        // bottomtextDiv.style.left = '5%';

        bottomtextDiv.style.display = 'flex';
        bottomtextDiv.style.alignSelf = 'center';










        // toptextDiv.appendChild(topText.value);

        form.reset();
    })

})


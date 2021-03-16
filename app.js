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
        let toptextDiv = document.createElement('div');
        toptextDiv.classList.add('topText')
        let bottomtextDiv = document.createElement('div');
        bottomtextDiv.classList.add('bottomText');
        let img = document.createElement('img');

        newDiv.addEventListener('mouseenter', function (e) {
            let del = document.createElement('button');
            del.innerText = 'ERMAHGERD DELETE THIS';
            del.classList.add('Remove');
            e.target.appendChild(del);
            buttonStyle(del);

            del.addEventListener('click', function (e) {
                e.target.parentElement.remove();
            });

            newDiv.addEventListener('mouseleave', function (e) {
                del.remove();

            })
        });

        img.src = image.value;
        img.style.width = '450px';
        img.style.margin = '20px 20px 20px 20px';
        img.style.boxSizing = "BorderBox";
        img.style.position = 'relative';

        bottomtextDiv.innerText = bottomText.value;
        toptextDiv.innerText = topText.value;
        newDiv.appendChild(img);
        newDiv.appendChild(toptextDiv);
        newDiv.appendChild(bottomtextDiv);

        containerDivStyle(newDiv);
        textDivStyle(toptextDiv);
        textDivStyle(bottomtextDiv);
        toptextDiv.style.top = '4%';
        bottomtextDiv.style.bottom = '4%';

        form.reset();
    })

    function containerDivStyle(container) {
        container.style.width = '450px';
        container.style.display = 'flex';
        container.style.flex = 'wrap';
        container.style.justifyContent = 'center';
        container.style.boxSizing = 'borderbox';
        container.style.position = 'relative';
        return container;
    }

    function buttonStyle(button) {
        button.style.position = 'absolute';
        button.style.fontSize = '1.5rem';
        button.style.textAlign = 'center';
        button.style.color = 'white';
        button.style.display = 'flex';
        button.style.justifyContent = 'center';
        button.style.alignSelf = 'center';
        button.style.backgroundColor = 'black';
        button.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
        button.style.borderRadius = '5%';
        return button;
    }

    function textDivStyle(textDiv) {
        textDiv.style.color = 'white';
        textDiv.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
        textDiv.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
        textDiv.style.fontSize = '2.5rem';
        textDiv.style.position = 'absolute';
        textDiv.style.textAlign = 'center';
        textDiv.style.display = 'flex';
        textDiv.style.alignSelf = 'center';
        return textDiv;
    }
});


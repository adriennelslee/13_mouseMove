
const hero = document.querySelector(".hero");
const header = hero.querySelector("h1");
const walk = 125;
const walk2 = 250;

function shadow(event){
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = event;

    if(this !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    const xWalk2 = Math.round((x / width * walk2) - (walk2 / 2));
    const yWalk2 = Math.round((y / height * walk2) - (walk2 / 2));

    header.style.textShadow = 
                `
                ${xWalk}px ${yWalk}px 0 red,
                ${xWalk * -1}px ${yWalk}px 0 blue,
                ${yWalk}px ${xWalk * -1}px 0 yellow,
                ${yWalk * -1}px ${xWalk}px 0 green,
                ${xWalk2}px ${yWalk2}px 0 pink,
                ${yWalk2}px ${xWalk2}px 0 purple
                `;


}

hero.addEventListener("mousemove", shadow);
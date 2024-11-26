document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 10000);

function nextImage() {
    const currentChecked = document.querySelector('input[type="radio"]:checked');
    const currentCount = parseInt(currentChecked.id.replace('radio', ''));
    const nextCount = currentCount >= 3 ? 1 : currentCount + 1;
    document.getElementById("radio" + nextCount).checked = true;
}

//

const draggableElements = [
    document.querySelector(".tabs-box"),
    document.querySelector(".tabs-box-secao2"),

    document.querySelector(".tabs-box2"),
    document.querySelector(".tabs-box2-secao2"),
    document.querySelector(".tabs-box2-secao3"),
    document.querySelector(".tabs-box2-secao4"),
    document.querySelector(".tabs-box2-secao5"),
    document.querySelector(".tabs-box2-secao6"),

    document.querySelector(".tabs-box3"),
    document.querySelector(".tabs-box3-secao2"),
    document.querySelector(".tabs-box3-secao3"),
    document.querySelector(".tabs-box3-secao4"),
    document.querySelector(".tabs-box3-secao5"),
    document.querySelector(".tabs-box3-secao6"),
    document.querySelector(".tabs-box3-secao7"),

    document.querySelector(".tabs-box4"),
    document.querySelector(".tabs-box4-secao2"),

];

let isDragging = false;

const dragging = (e) => {
    if (!isDragging) return;

    draggableElements.forEach(element => {
        element.classList.add("dragging");
        element.scrollLeft -= e.movementX;
    });
};

const dragStop = () => {
    isDragging = false;
    draggableElements.forEach(element => element.classList.remove("dragging"));
};

const addDragEvents = (element) => {
    element.addEventListener("mousedown", () => isDragging = true);
    element.addEventListener("mousemove", dragging);
};

draggableElements.forEach(addDragEvents);

document.addEventListener("mouseup", dragStop);

//

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');


const produtos1 = document.getElementById('produtos1'); 
const produtos2 = document.getElementById('produtos2');

produtos1.style.display = 'flex'; 
produtos2.style.display = 'none'; 
button1.classList.add('button-active'); 

button1.addEventListener('click', () => {
    produtos1.style.display = 'flex'; 
    produtos2.style.display = 'none'; 

    button1.classList.add('button-active');
    button2.classList.remove('button-active');
});

button2.addEventListener('click', () => {
    produtos1.style.display = 'none'; 
    produtos2.style.display = 'flex'; 

    button2.classList.add('button-active');
    button1.classList.remove('button-active');
});

//

const button11 = document.querySelector('.button11');
const button22 = document.querySelector('.button22');
const button33 = document.querySelector('.button33');
const button44 = document.querySelector('.button44');
const button55 = document.querySelector('.button55');
const button66 = document.querySelector('.button66');

const produtos11 = document.getElementById('produtos11');
const produtos22 = document.getElementById('produtos22');
const produtos33 = document.getElementById('produtos33');
const produtos44 = document.getElementById('produtos44');
const produtos55 = document.getElementById('produtos55');
const produtos66 = document.getElementById('produtos66');

produtos11.style.display = 'flex';
produtos22.style.display = 'none';
produtos33.style.display = 'none';
produtos44.style.display = 'none';
produtos55.style.display = 'none';
produtos66.style.display = 'none';
button11.classList.add('button-active2');
produtos11.classList.add('active-section2');

function changeSection(button, produtosToShow) {
    produtos11.style.display = 'none';
    produtos22.style.display = 'none';
    produtos33.style.display = 'none';
    produtos44.style.display = 'none';
    produtos55.style.display = 'none';
    produtos66.style.display = 'none';

    button11.classList.remove('button-active2');
    button22.classList.remove('button-active2');
    button33.classList.remove('button-active2');
    button44.classList.remove('button-active2');
    button55.classList.remove('button-active2');
    button66.classList.remove('button-active2');

    produtos11.classList.remove('active-section2');
    produtos22.classList.remove('active-section2');
    produtos33.classList.remove('active-section2');
    produtos44.classList.remove('active-section2');
    produtos55.classList.remove('active-section2');
    produtos66.classList.remove('active-section2');

    produtosToShow.style.display = 'flex';
    produtosToShow.classList.add('active-section2');
    button.classList.add('button-active2');
}

button11.addEventListener('click', () => changeSection(button11, produtos11));
button22.addEventListener('click', () => changeSection(button22, produtos22));
button33.addEventListener('click', () => changeSection(button33, produtos33));
button44.addEventListener('click', () => changeSection(button44, produtos44));
button55.addEventListener('click', () => changeSection(button55, produtos55));
button66.addEventListener('click', () => changeSection(button66, produtos66));

//

const button111 = document.querySelector('.button111');
const button222 = document.querySelector('.button222');
const button333 = document.querySelector('.button333');
const button444 = document.querySelector('.button444');
const button555 = document.querySelector('.button555');
const button666 = document.querySelector('.button666');
const button777 = document.querySelector('.button777');


const produtos111 = document.getElementById('produtos111');
const produtos222 = document.getElementById('produtos222');
const produtos333 = document.getElementById('produtos333');
const produtos444 = document.getElementById('produtos444');
const produtos555 = document.getElementById('produtos555');
const produtos666 = document.getElementById('produtos666');
const produtos777 = document.getElementById('produtos777');


produtos111.style.display = 'flex';
produtos222.style.display = 'none';
produtos333.style.display = 'none';
produtos444.style.display = 'none';
produtos555.style.display = 'none';
produtos666.style.display = 'none';
produtos777.style.display = 'none';
button111.classList.add('button-active3');
produtos111.classList.add('active-section3');

function changeSection2(button, produtosToShow) {
    produtos111.style.display = 'none';
    produtos222.style.display = 'none';
    produtos333.style.display = 'none';
    produtos444.style.display = 'none';
    produtos555.style.display = 'none';
    produtos666.style.display = 'none';
    produtos777.style.display = 'none';


    button111.classList.remove('button-active3');
    button222.classList.remove('button-active3');
    button333.classList.remove('button-active3');
    button444.classList.remove('button-active3');
    button555.classList.remove('button-active3');
    button666.classList.remove('button-active3');
    button777.classList.remove('button-active3');

    produtos111.classList.remove('active-section3');
    produtos222.classList.remove('active-section3');
    produtos333.classList.remove('active-section3');
    produtos444.classList.remove('active-section3');
    produtos555.classList.remove('active-section3');
    produtos666.classList.remove('active-section3');
    produtos777.classList.remove('active-section3');

    produtosToShow.style.display = 'flex';
    produtosToShow.classList.add('active-section3');
    button.classList.add('button-active3');
}

button111.addEventListener('click', () => changeSection2(button111, produtos111));
button222.addEventListener('click', () => changeSection2(button222, produtos222));
button333.addEventListener('click', () => changeSection2(button333, produtos333));
button444.addEventListener('click', () => changeSection2(button444, produtos444));
button555.addEventListener('click', () => changeSection2(button555, produtos555));
button666.addEventListener('click', () => changeSection2(button666, produtos666));
button777.addEventListener('click', () => changeSection2(button777, produtos777));

//

const botaoBlogs = document.querySelector('.botaoBlogs');
const botaoGuias = document.querySelector('.botaoGuias');

const produtos1111 = document.getElementById('produtos1111'); 
const produtos2222 = document.getElementById('produtos2222');

produtos1111.style.display = 'flex'; 
produtos2222.style.display = 'none'; 
botaoBlogs.classList.add('button-active4'); 

botaoBlogs.addEventListener('click', () => {
    produtos1111.style.display = 'flex'; 
    produtos2222.style.display = 'none'; 

    botaoBlogs.classList.add('button-active4');
    botaoGuias.classList.remove('button-active4');
});

botaoGuias.addEventListener('click', () => {
    produtos1111.style.display = 'none'; 
    produtos2222.style.display = 'flex'; 

    botaoGuias.classList.add('button-active4');
    botaoBlogs.classList.remove('button-active4');
});
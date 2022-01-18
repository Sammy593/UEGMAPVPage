var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
});
/* slider*/
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}


btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

/*setInterval(function(){
    Next();
}, 5000);
*/

var pag = document.getElementById("pag_container1");
var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");

btn2.onclick = function(){
    pag.style.marginLeft="-100%";
    pag.style.transition = "all 0.5s";
};

btn1.onclick = function(){
    pag.style.marginLeft="0%";
    pag.style.transition = "all 0.5s";
};


/*input*/
var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, (input) => {
	var label = input.nextElementSibling, labelVal = label.innerHTML;
	input.addEventListener('change', (e) => {
		var fileName = '';
		if (this.files && this.files.length > 1)
			fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
		else
			fileName = e.target.value.split('\\').pop();

		if (fileName)
			label.querySelector('span').innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

var cambiar = document.getElementById('btn_agregar');
var input = document.getElementById('container_insertar1');
var container = document.getElementById('container_agregar');
var isOn = true;

cambiar.addEventListener('click', function(){
    input.classList.toggle('container_insertar');
    if(isOn == true){
        container.style.height = "460px";
        isOn = false;
    }else{
        container.style.height = "400px";
        isOn = true;
    }
});


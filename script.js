let slideindex = 1;

function plusslide(n){
  showslides(slideindex += n);
}

function currentslide(n){
    showslides(slideindex = n);

}

function showslides(n) {
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideindex = 1;
    }

    if (n < 1) {
        slideindex = slides.length;
    }
    
    for(let i = 0; i <slides.length; i++){
        slides[i].style.display = "none";
    }
    for(let i = 0; i <dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    // slideindex - 1 = 0, first img
    // slideindex + 0 = 1, second img
    // slideindex + 1 = 2, third img
    // slideindex + 2 = 3, fourth img
    slides[slideindex-1].style.display = 'block';

    dots[slideindex-1].className += " active";

}
showslides(slideindex);



const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links')
const navMain = document.querySelector('nav');
const navLinksA = nav.querySelectorAll('a');
const photoSlider = document.querySelector('.container')
const items = photoSlider.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.photo-button-left');
const previousItem = document.querySelector('.photo-button-right');

let count = 0;

function showNextItem() {
  items[count].classList.remove('onTop');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add('onTop');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('onTop');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('onTop');
  console.log(count);
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}





window.addEventListener('scroll', () => {
    header.classList.toggle('on-scroll', window.scrollY > 1);

    });


    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('toggle');
  })
  
  // Function that closes navigation when user clicks on single position
  
  navLinksA.forEach(link => {
      link.addEventListener('click', () => {
          nav.classList.toggle('active');
          burger.classList.toggle('toggle');
      })
  })    



  nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);

/*--------------------
Vars
--------------------*/
let carouselProgressValue = 50; // Declare carouselProgressValue variable

let startX = 0;
let active = 0;
let isDown = false;

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02;
const speedDrag = -0.1;

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)));

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item');
const audio = new Audio('ReelAudio-35776.mp3'); // Create audio object

const $cursors = document.querySelectorAll('.cursor');

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index];
  item.style.setProperty('--zIndex', zIndex);
  item.style.setProperty('--active', (index-active)/$items.length);
}

/*--------------------
Animate
--------------------*/
const animate = () => {
  carouselProgressValue = Math.max(0, Math.min(carouselProgressValue, 100));

  active = Math.floor(carouselProgressValue/100*($items.length-1));

  $items.forEach((item, index) => displayItems(item, index, active));
}
animate();

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    audio.play(); // Play audio on click
    carouselProgressValue = (i/$items.length) * 100 + 10;
    animate();
  });

  item.addEventListener('dblclick', () => {
    audio.pause(); // Stop audio on double click
    audio.currentTime = 0; // Reset audio to start
  });

});

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel;
  carouselProgressValue += wheelProgress;

  animate();
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }
  if (!isDown) return;
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  const mouseProgress = (x - startX) * speedDrag;
  carouselProgressValue += mouseProgress;

  startX = x;
  animate();
}

const handleMouseDown = e => {
  isDown = true;
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
}

const handleMouseUp = () => {
  isDown = false;
}

$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    audio.play(); // Play audio on click
    carouselProgressValue = (i/$items.length) * 100 + 10;
    animate();

    // Play video if it exists in the current item
    const video = item.querySelector('video');
    if (video) {
      video.play(); // Play video
    }
  });

  item.addEventListener('dblclick', () => {
    audio.pause(); // Stop audio on double click
    audio.currentTime = 0; // Reset audio to start

    // Pause video if it exists in the current item
    const video = item.querySelector('video');
    if (video) {
      video.pause(); // Pause video
      video.currentTime = 0; // Reset video to start
    }
  });
});

/*--------------------
Listeners
--------------------*/
document.addEventListener('mousewheel', handleWheel);
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);
document.addEventListener('touchstart', handleMouseDown);
document.addEventListener('touchmove', handleMouseMove);
document.addEventListener('touchend', handleMouseUp);
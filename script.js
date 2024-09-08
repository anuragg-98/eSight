document.addEventListener('scroll', function() {
    var head = document.querySelector('.head');
    var headPosition = head.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
  
    if (headPosition < screenPosition) {
      head.classList.add('in-view');
    }
  });
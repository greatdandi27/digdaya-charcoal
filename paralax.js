
window.addEventListener('scroll', () => {
    let contents = document.querySelectorAll('.sticky_card');
    let screenPosition = window.innerHeight * 0.5;
  
    contents.forEach(content => {
      let contentPosition = content.getBoundingClientRect().top;
      
      if (contentPosition < screenPosition) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });


  
window.addEventListener('scroll', () => {
    let card_fitur = document.querySelectorAll('.card-fitur');
    let screenPosition = window.innerHeight;
  
    card_fitur.forEach(content => {
      let contentPosition = content.getBoundingClientRect().top;
      
      if (contentPosition < screenPosition) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });





  /* window.addEventListener('scroll', () => {
    let fitur = document.querySelectorAll('.fitur');
    let screenPosition = window.innerHeight * 0.5;
  
    fitur.forEach(content => {
      let contentPosition = content.getBoundingClientRect().top;
      
      if (contentPosition < screenPosition) {
        setTimeout(() => {
          content.classList.add('active1');
        }, (index + 1) * 200);
      } else {
        content.classList.remove('active1');
      }
    });
  }); */


  window.addEventListener('scroll', () => {
    let fitur = document.querySelectorAll('.container_fitur');
    let screenPosition = window.innerHeight;
  
    fitur.forEach((content, index) => {
      let contentPosition = content.getBoundingClientRect().top;
  
      if (contentPosition < screenPosition) {
       
        setTimeout(() => {
          content.classList.add('active1');
        }, index * 500);
      } else {
        
        content.classList.remove('active1');
      }
    });
  });


  window.addEventListener('scroll', () => {
    let prifat = document.querySelectorAll('.container-private');
    let screenPosition = window.innerHeight;
  
    prifat.forEach(content => {
      let contentPosition = content.getBoundingClientRect().top;
      
      if (contentPosition < screenPosition) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });



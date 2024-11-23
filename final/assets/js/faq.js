const faqs = document.querySelectorAll('details');
faqs.forEach(faq => {
     faq.addEventListener('click', function() {
         const answer = faq.querySelector('.answer');
          if (answer.style.display === 'none'){ 
             answer.style.dislplaly = 'block';
          } else {
              anser.style.display = 'none';
          }

        });
    });  

     const answer = faq.querySelector('.answer');
     if (answer.style,display === 'none'){
        answer.style.display = 'block';
     } else {
        answer.style.display = 'none';
     }
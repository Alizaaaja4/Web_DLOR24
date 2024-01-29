document.querySelectorAll('.owl-prev, .owl-next').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.owl-prev, .owl-next').forEach(button => {
        button.classList.remove('hover:bg-gray-700');
      });
      setTimeout(() => {
        document.querySelectorAll('.owl-prev, .owl-next').forEach(button => {
          if (!button.classList.contains('active')) {
            button.classList.add('hover:bg-gray-700');
          }
        });
      }, 0);
    });
  });
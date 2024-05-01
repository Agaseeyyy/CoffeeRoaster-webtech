function showCategory(category) {
    const categoryContents = document.querySelectorAll('.category-content');
    const categoryButtons = document.querySelectorAll('.category-button');
  
    categoryContents.forEach(content => {
      content.classList.add('hidden');
    });
  
    categoryButtons.forEach(button => {
      button.classList.remove('active');
      if (button.innerText.toLowerCase() === category) {
        button.classList.add('active');
      }
    });
  
    document.getElementById(category).classList.remove('hidden');
  }
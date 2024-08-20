document.addEventListener('DOMContentLoaded', () => {
    const titleBtns = document.querySelectorAll('.title-btn');

    titleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling; 
            
            answer.classList.toggle('open'); 
            btn.classList.toggle('rotate'); 
        });
    });
});

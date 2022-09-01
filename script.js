
    let labels = document.querySelector('.form__inputsCheckboxesBlock').children;

    for(let label of labels){
        if(label.firstChild.checked){
            label.classList.add('active');
        }
    }
  




for(let item of labels) {
    item.addEventListener('click',()=>{
        if(item.firstChild.checked) {
            item.classList.add('active');
            return;
        }
       
        item.classList.remove('active');

    });
}
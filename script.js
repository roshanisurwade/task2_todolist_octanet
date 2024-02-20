const input = document.querySelector('input');
const btn = document.querySelector('.task_Add > button');

btn.addEventListener('click', AddList);
input.addEventListener('keyup', (e)=>{
    (e.keyCode === 13 ? AddList(e) : null);
})


function AddList(e){
    const Not_completed = document.querySelector('.Not_completed');
    const completed = document.querySelector('.completed');


    const NewLi = document.createElement('li');
    const CheckBtn = document.createElement('button');
    const DelBtn = document.createElement('button');

    DelBtn.innerHTML = '<i class="fa fa-trash"></i>';
    CheckBtn.innerHTML = '<i class="fa fa-check"></i>';


    if(input.value !==''){
        NewLi.textContent = input.value;
        input.value = '';
        Not_completed.appendChild(NewLi);
        NewLi.appendChild(CheckBtn);
        NewLi.appendChild(DelBtn);                    
    }
    CheckBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        CheckBtn.style.display = 'none';
    });
    
    DelBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });

}


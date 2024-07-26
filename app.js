const showBtn = document.querySelector('.show')
const form = document.getElementById('form')
const submit = document.getElementById('sumbit')

showBtn.addEventListener('click',()=>{
    if(form.classList.contains('dn'))
    {
        
        form.classList.remove('dn')
        overlay.classList.remove('dn')
        showBtn.classList.add('dn')
    }
})

overlay.addEventListener('click',()=>{
    
    form.classList.add('dn')
    overlay.classList.add('dn')
    showBtn.classList.remove('dn')
})

submit.addEventListener('click',()=>{
    
    form.classList.add('dn')
    overlay.classList.add('dn')
    showBtn.classList.remove('dn')
})
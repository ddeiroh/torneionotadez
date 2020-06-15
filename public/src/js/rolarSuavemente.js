const $menu_items = document.querySelectorAll('.ancora');

$menu_items.forEach(item =>{
    item.addEventListener('click', rolarSuamente)
})

function rolarSuamente(event){
    event.preventDefault();
    const ancora = event.target;
    const id = ancora.getAttribute('href');
    const sessao = document.querySelector(id).offsetTop;
    window.scroll({top: sessao - 80, behavior: "smooth"});
}
/*==== MixItUp Filter ====*/
const mixer = mixitup('.cate_container', {
    selectors: {
        target: '.box_content'
    },
    animation: {
        duration: 400
    }
});

const linkCatagories = document.querySelectorAll('.box_item')
function activeCategories() {
    if(linkCatagories){
        linkCatagories.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkCatagories.forEach(l => l.addEventListener('click', activeCategories))

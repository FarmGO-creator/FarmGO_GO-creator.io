const btn = document.querySelectorAll('.tabs__nav-btn'),
tabsItem = document.querySelectorAll('.tabs__item');
btn.forEach(function(e){
e.addEventListener('click', function() {
    if (! this.classList.contains('active')) {
        let tabsId = e.getAttribute('data-tab');
        let currontTab = document.querySelector(tabsId);
      
        btn.forEach(function(e) {
            e.classList.remove('active');
        })
        tabsItem.forEach(function(e) {
            e.classList.remove('active');
        })
        e.classList.add('active');
        currontTab.classList.add('active');
        goTop()
    }
})
})

function goTop() {
window.scrollTo(0, 0);
}
document.querySelector('.tabs__nav-btn:nth-child(1)').click();
function showPage(name) {

    const pages = document.getElementsByClassName('page');
    const activeClass = 'active';

    document.startViewTransition(() => {
        for (let el of pages) {
            if (el.dataset.page === name) {
                el.classList.add(activeClass);
            } else {
                el.classList.remove(activeClass);
            }
        }
    });

}

(function() {
    var me = {};

    let button = document.querySelector('a.button');
    let footer = document.querySelector('.footer');
    let form = document.querySelector('.form-container');
    console.log(button);

    button.addEventListener('click', function(e) {
        e.preventDefault();
        form.classList.remove('is-hidden');
        footer.scrollIntoView({
            'behavior': 'smooth'
        });
    });

    this.addEventListener('keydown', function(e) {
        if (e.keyCode === 27) {
            form.classList.add('is-hidden');
        }
    });

    me.toggleToActiveLink = function(target) {
        let links = document.querySelectorAll('.nav__link');

        let showedSection = target.dataset.link;

        for (let i = 0; i < links.length; i++) {
            if (links[i].classList.contains('nav__link--active')) {
                links[i].classList.remove('nav__link--active')
            }            
        }       

        target.classList.add('nav__link--active');
        scrollToActiveSection(showedSection);
    };

    function scrollToActiveSection(showedSection) {
        let section = document.querySelector('.' + showedSection);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    ITVDN.navigation = me;
}());
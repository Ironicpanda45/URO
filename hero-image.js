    const heroImage = document.querySelector('.hero-image');
    const heroImages = [
        'img/hero/hero1.png',
        'img/hero/hero2.png',
        'img/hero/hero3.png',
        'img/hero/hero4.png',
        'img/hero/hero5.png',
        'img/hero/hero6.png',
        'img/hero/hero7.png',
        'img/hero/hero8.png'
    ];
    let currentIndex = 0;

    function cambiarImagenHero() {
        heroImage.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % heroImages.length;
    }

    setInterval(cambiarImagenHero, 100);

    cambiarImagenHero();
    const heroImage = document.querySelector('.hero-image');
    const heroImages = [
        'Img/hero/hero1.png',
        'Img/hero/hero2.png',
        'Img/hero/hero3.png',
        'Img/hero/hero4.png',
        'Img/hero/hero5.png',
        'Img/hero/hero6.png',
        'Img/hero/hero7.png',
        'Img/hero/hero8.png'
    ];
    let currentIndex = 0;

    function cambiarImagenHero() {
        heroImage.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % heroImages.length;
    }

    setInterval(cambiarImagenHero, 100);

    cambiarImagenHero();
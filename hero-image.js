    const heroImage = document.querySelector('.hero-image');
    const heroImages = [
        'Img/Hero/Hero1.png',
        'Img/Hero/Hero2.png',
        'Img/Hero/Hero3.png',
        'Img/Hero/Hero4.png',
        'Img/Hero/Hero5.png',
        'Img/Hero/Hero6.png',
        'Img/Hero/Hero7.png',
        'Img/Hero/Hero8.png'
    ];
    let currentIndex = 0;

    function cambiarImagenHero() {
        heroImage.style.backgroundImage = `url('${heroImages[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % heroImages.length;
    }

    setInterval(cambiarImagenHero, 100);

    cambiarImagenHero();

document.querySelectorAll('.card-icon').forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();

    const link = icon.getAttribute('data-link');
    const sound = document.getElementById('launch-sound');

    // Ton abspielen
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }

    // Flug starten
    icon.classList.add('fly-away');

    // Sternenhintergrund aktivieren
    document.body.classList.add('stars');

    // Nach 8 Sekunden weiterleiten
    setTimeout(() => {
      window.location.href = link;
    }, 4000);
  });
});

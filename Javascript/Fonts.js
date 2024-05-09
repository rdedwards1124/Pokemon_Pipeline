

(function() {
    // Add 'Press Start 2P' font
    var linkPressStart = document.createElement('link');
    linkPressStart.rel = 'stylesheet';
    linkPressStart.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    document.head.appendChild(linkPressStart);

    // Add 'Permanent Marker' font
    var linkPermanentMarker = document.createElement('link');
    linkPermanentMarker.rel = 'stylesheet';
    linkPermanentMarker.href = 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap';
    document.head.appendChild(linkPermanentMarker);

    // Add Pokemon Solid font
    var stylePokemon = document.createElement('style');
    stylePokemon.textContent = "@import url('https://fonts.cdnfonts.com/css/pokemon-solid');";
    document.head.appendChild(stylePokemon);
})();
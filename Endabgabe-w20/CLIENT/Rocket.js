"use strict";
var FireworkCrafting;
(function (FireworkCrafting) {
    class Rocket {
        constructor(pos, config) {
            //Array für alle generierten Partikel
            this.particles = [];
            this.pos = pos;
            this.config = config;
            //Berechnen wie groß der Winkel zwischen 2 Partikeln ist, damit alle partikel gleichmäßig verteilt werden
            const angleIncrement = Math.PI * 2 / this.config.particleNumber;
            //für die konfigurierte Anzahl an Partikel, Partikel generieren
            for (let i = 0; i < this.config.particleNumber; i++) {
                //Farbe des Partikels
                const color = `hsl(${this.config.hue},50%,50%`;
                //Bewegung des Partikels in x und y berechnen
                const velocity = {
                    x: Math.cos(angleIncrement * i) * Math.random() * this.config.particleSpeed,
                    //gleiches für die y koordinate
                    y: Math.sin(angleIncrement * i) * Math.random() * this.config.particleSpeed
                };
                //Eigene Position für den Partikel erstellen, damit nicht alle Partikel die gleiche Position haben
                const pos = new FireworkCrafting.Vector2D(this.pos.x, this.pos.y);
                //Erstellen des neuen Partikels und hinzufügen zu dem Partikel Array
                this.particles.push(new FireworkCrafting.Particle(pos, this.config.particleRadius, color, velocity));
            }
        }
        //updated alle Partikel und stellt sie dar
        update() {
            //Ruft bei jedem Partikel die update methode auf
            this.particles.forEach(particle => particle.update());
        }
        //prüfen ob Feuerwerk ausgebrannt ist
        finished() {
            //schauen ob der alphawert des ersten Partikels kleiner als 0 ist, falls ja > ausgebrannt
            return this.particles[0].alpha < 0;
        }
    }
    FireworkCrafting.Rocket = Rocket;
})(FireworkCrafting || (FireworkCrafting = {}));
//# sourceMappingURL=Rocket.js.map
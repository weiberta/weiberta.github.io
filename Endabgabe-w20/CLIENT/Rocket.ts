namespace FireworkCrafting {

    export class Rocket {
        //Ursprungsposition des Feuerwerks (Mausklick Position)
        private pos: Vector2D;
        private config: Config;

        //Array für alle generierten Partikel
        private particles: Particle[] = [];

        constructor(pos: Vector2D, config: Config) {
            this.pos = pos;
            this.config = config;

            //Berechnen wie groß der Winkel zwischen 2 Partikeln ist, damit alle partikel gleichmäßig verteilt werden
            const angleIncrement: number = Math.PI * 2 / this.config.particleNumber;

            //für die konfigurierte Anzahl an Partikel, Partikel generieren
            for (let i: number = 0; i < this.config.particleNumber; i++) {
                //Farbe des Partikels
                const color: string = `hsl(${this.config.hue},50%,50%`;
                //Bewegung des Partikels in x und y berechnen
                const velocity: Vector2D = {
                    x: Math.cos(angleIncrement * i) * Math.random() * this.config.particleSpeed,
                    //gleiches für die y koordinate
                    y: Math.sin(angleIncrement * i) * Math.random() * this.config.particleSpeed
                };

                //Eigene Position für den Partikel erstellen, damit nicht alle Partikel die gleiche Position haben
                const pos: Vector2D = new Vector2D(this.pos.x, this.pos.y);

                //Erstellen des neuen Partikels und hinzufügen zu dem Partikel Array
                this.particles.push(new Particle(pos, this.config.particleRadius, color, velocity));
            }
        }

        //updated alle Partikel und stellt sie dar
        public update(): void {
            //Ruft bei jedem Partikel die update methode auf
            this.particles.forEach(particle => particle.update());
        }

        //prüfen ob Feuerwerk ausgebrannt ist
        public finished(): boolean {
            //schauen ob der alphawert des ersten Partikels kleiner als 0 ist, falls ja > ausgebrannt
            return this.particles[0].alpha < 0;
        }
    }
}
export default class StartScreen extends Phaser.Scene {
    constructor() {
        super("StartScreen");
    }
    create() {
        const game_title = this.add.image(this.game.config.width / 2, this.game.config.height / 2, "game_title");
        game_title.setScale(1.2, 1.2);
        game_title.setOrigin(0.5, 0.5);

    }
    update() {
        //no update tick
    }
}
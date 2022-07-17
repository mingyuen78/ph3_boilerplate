export default class BootLoader extends Phaser.Scene {
    constructor() {
        super("BootLoader");
        console.log("BootLoader loaded...");
    }
    preload() {
        this.load.baseURL = 'assets/';
        this.load.image('loading', 'loading_bar.png');
    }
    create() {
        this.scene.start("PreLoader");
    }
    update() {
        //no update tick
    }
}
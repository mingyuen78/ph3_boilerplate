import 'phaser';
import BootLoader from './scenes/BootLoader';
import PreLoader from './scenes/PreLoader';
import StartScreen from './scenes/StartScreen';

window.addEventListener("load", function() {
    (function() {
        //encap game;
        let game;
        var config = {
            type: Phaser.CANVAS,
            width: 640,
            height: 960,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
            },

        };

        game = new Phaser.Game(config);
        game.scene.add("BootLoader", BootLoader, true);
        game.scene.add("PreLoader", PreLoader);
        game.scene.add("StartScreen", StartScreen);

        window.focus();
        resize();
        window.addEventListener("resize", resize, false);

        function resize() {
            let canvas = document.querySelector("canvas");
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            let windowRatio = windowWidth / windowHeight;
            let gameRatio = game.config.width / game.config.height;
            if (windowRatio < gameRatio) {
                canvas.style.width = windowWidth + "px";
                canvas.style.height = (windowWidth / gameRatio) + "px";
            } else {
                canvas.style.width = (windowHeight * gameRatio) + "px";
                canvas.style.height = windowHeight + "px";
            }
        }
    })();
});




// function preload() {

//     this.load.crossOrigin = "Anonymous";
//     this.load.image('logo', 'assets/logo.png');
// }

// function create() {


//     var logo = this.add.image(game.config.width / 2, 150, 'logo').setOrigin(0.5, 0.5);
//     this.tweens.add({
//         targets: logo,
//         y: 450,
//         duration: 2000,
//         ease: 'Power2',
//         yoyo: true,
//         loop: -1
//     });

// }

// function update() {}
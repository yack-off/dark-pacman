var config = {
    type: Phaser.AUTO,
    width: 614,
    height: 874,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
function preload ()
{
    this.load.image('paper', '../images/paper.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    this.load.image('blue', '../images/squere.png')
    this.load.image('red', '../images/Red.png')
    this.load.image('ground', '../images/platform.png');
}


function create ()
{
    this.add.image(300, 437, 'paper');

    e = 4
    q = 4
    let blue = (a, b) => {for(let i = 0; i <= a; i++){
        let ofHeight =i * 17
        for(let j = 0; j <= b; j++){
            let ofWidht = j * 17
            this.add.image(ofWidht, ofHeight, 'blue').setOrigin(0, 0);
        }
    
    }}
    let red = (a, b) => {for(let i = 0; i <= a; i++){
        let ofHeight = 600 + i * 17
        for(let j = 0; j <= b; j++){
            let ofWidht = 400 + j * 17
            this.add.image(ofWidht, ofHeight, 'red').setOrigin(0, 0);
        }
    
    }}
    

    blue(e,q)
    red(e,q)




        this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });


}

function update ()
{

}
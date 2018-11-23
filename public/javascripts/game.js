var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
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
    this.load.image('place', '../images/place.png')
    this.load.image('right', '../images/right.png')
    this.load.image('left', '../images/left.png')
    this.load.image('downUp', '../images/down-up.png')
    this.load.image('plato', '../images/platform.png')
    this.load.image('red', '../images/squere.png')
    this.load.image('brick', '../images/wall.png')
    this.load.image('brick', '../images/wall.png')
    this.load.spritesheet('pacman', '../images/pacman.png',{
        frameWidth: 51, frameHeight: 52 
    })
    this.load.image('coin', '../images/coins.png')
    this.load.spritesheet('ghost', '../images/ghost.png',{
        frameWidth: 42, frameHeight: 37
    })
    this.load.image('dead', '../images/dead.png')
    this.load.audio('vaka', '../audios/vak.ogg')
    this.load.audio('wave', '../audios/mp3.mp3')
    this.load.audio('died', '../audios/died.mp3')
}

function create ()
{
    this.add.image(0,0,'place').setOrigin(0,0)
    count = 0
    countOfCoins = this.add.text(290, 275, '0',{ fontSize: '32px', fill: 'yellow'})
    notAPlace = this.physics.add.staticGroup();

    music = this.sound.add('vaka');
    music.setLoop(true)
    music.setRate(2.0)

    wave = this.sound.add('wave');
    wave.setVolume(0.1)
    wave.setLoop(true)

    died = this.sound.add('died');

    
    randNumW = Math.floor(Math.random() * (600 + 1))

    randNumH = Math.floor(Math.random() * (600 + 1))

    randVelH = Math.floor(Math.random() * (200 - 100 + 1) + 100)

    randVelV = Math.floor(Math.random() * (300 - 200 + 1) + 200)
    
    notAPlace.create(570,300,'right')
    notAPlace.create(33,300,'left')
    notAPlace.create(300,570,'downUp')
    notAPlace.create(300,21.5,'downUp')
    notAPlace.create(300,353,'brick')
    notAPlace.create(243,301,'brick')
    notAPlace.create(417,353,'brick')


    wall1= this.physics.add.staticGroup({
        key: 'brick',
        repeat: 6,
        setXY: { x: 127, y: 108, stepX: 58 }
    });
    wall = this.physics.add.staticGroup({
        key: 'brick',
        repeat: 6,
        setXY: { x: 127, y: 480, stepX: 58 }
    });
    wall2 = this.physics.add.staticGroup({
        key: 'brick',
        repeat: 1,
        setXY: { x: 127, y: 422, stepX: 58 }
    });
    wall3= this.physics.add.staticGroup({
        key: 'brick',
        repeat: 1,
        setXY: { x: 127, y: 166, stepX: 58 }
    });
    wall4= this.physics.add.staticGroup({
        key: 'brick',
        repeat: 1,
        setXY: { x: 68, y: 301, stepX: 58 }
    });
    wall5= this.physics.add.staticGroup({
        key: 'brick',
        repeat: 2,
        setXY: { x: 301, y: 166, stepX: 58 }
    });
    wall6= this.physics.add.staticGroup({
        key: 'brick',
        repeat: 1,
        setXY: { x: 359, y: 301, stepX: 58 }
    });
    wall7= this.physics.add.staticGroup({
        key: 'brick',
        repeat: 1,
        setXY: { x: 359, y: 301, stepX: 58 }
    });
    wall8= this.physics.add.staticGroup({
        key: 'brick',
        repeat: 2,
        setXY: { x: 533, y: 353, stepY: -58 }
    });

    player = this.physics.add.sprite(275, 275, 'pacman').setOrigin(0,0);


    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('pacman', { start: 6, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'pacman', frame: 5 } ],
        frameRate: 20
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('pacman', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('pacman', { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('pacman', { start: 9, end: 11 }),
        frameRate: 10,
        repeat: -1
    });
    cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(player, notAPlace);
    this.physics.add.collider(player, wall);
    this.physics.add.collider(player, wall1);
    this.physics.add.collider(player, wall2);
    this.physics.add.collider(player, wall3);
    this.physics.add.collider(player, wall4);
    this.physics.add.collider(player, wall5);
    this.physics.add.collider(player, wall6);
    this.physics.add.collider(player, wall7);
    this.physics.add.collider(player, wall8);


    coins = this.physics.add.staticGroup({
        key: 'coin',
        repeat: 14,
        setXY: { x: 70, y: 55, stepX: 33 }
    });
    coins1 = this.physics.add.staticGroup({
        key: 'coin',
        repeat: 5,
        setXY: { x: 70, y: 360, stepX: 33 }
    });

    coins2 = this.physics.add.staticGroup({
        key: 'coin',
        repeat: 14,
        setXY: { x: 70, y: 533, stepX: 33 }
    });

    coins3 = this.physics.add.staticGroup({
        key: 'coin',
        repeat: 3,
        setXY: { x: 70, y: 490, stepY: -33 }
    });

    coins4 = this.physics.add.staticGroup({
        key: 'coin',
        repeat: 12,
        setXY: { x: 70, y: 230, stepX: 33 }
    });

    coins5 = this.physics.add.staticGroup({
        key: 'coin',
        repeat: 3,
        setXY: { x: 70, y: 195, stepY: -33 }
    });

    coins6 = this.physics.add.staticGroup({
        key: 'coin',
        repeat: 9,
        setXY: { x: 243, y: 420, stepX: 33 }
    });

    this.physics.add.overlap(player, coins, collectCoins, null, this);
    this.physics.add.overlap(player, coins1, collectCoins, null, this);
    this.physics.add.overlap(player, coins2, collectCoins, null, this);
    this.physics.add.overlap(player, coins3, collectCoins, null, this);
    this.physics.add.overlap(player, coins4, collectCoins, null, this);
    this.physics.add.overlap(player, coins5, collectCoins, null, this);
    this.physics.add.overlap(player, coins6, collectCoins, null, this);


    let logo = this.physics.add.image(randNumW, randNumH, 'ghost');

    logo.setVelocity(randVelH, randVelV);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
    this.physics.add.collider(player, logo, hitGhost, null, this);
    wave.play()



}


function update ()
{
 
    if (cursors.left.isDown)
    {
        player.setVelocityY(0)
        player.setVelocityX(-160);
        
        player.anims.play('left', true);

        music.play();

        randNumW = Math.floor(Math.random() * (600 + 1))

        randNumH = Math.floor(Math.random() * (600 + 1))

        randVelH = Math.floor(Math.random() * (200 - 100 + 1) + 100)

        randVelv = Math.floor(Math.random() * (300 - 200 + 1) + 200)
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityY(0)
        player.setVelocityX(160);
        
        player.anims.play('right', true);
        music.play();

        randNumW = Math.floor(Math.random() * (600 + 1))

        randNumH = Math.floor(Math.random() * (600 + 1))

        randVelH = Math.floor(Math.random() * (200 - 100 + 1) + 100)

        randVelv = Math.floor(Math.random() * (300 - 200 + 1) + 200)
    }
    else if (cursors.up.isDown)
    {
        player.setVelocityX(0)
        player.setVelocityY(-160);
        
        player.anims.play('up', true);
        music.play();

        randNumW = Math.floor(Math.random() * (600 + 1))

        randNumH = Math.floor(Math.random() * (600 + 1))

        randVelH = Math.floor(Math.random() * (200 - 100 + 1) + 100)

        randVelv = Math.floor(Math.random() * (300 - 200 + 1) + 200)
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityX(0)
        player.setVelocityY(160);
        
        player.anims.play('down', true);
        music.play();

        randNumW = Math.floor(Math.random() * (600 + 1))

        randNumH = Math.floor(Math.random() * (600 + 1))

        randVelH = Math.floor(Math.random() * (200 - 100 + 1) + 100)

        randVelv = Math.floor(Math.random() * (300 - 200 + 1) + 200)
    }


    
}

function collectCoins (player, star){
    star.disableBody(true, true);
    count++
    countOfCoins.setText(count)
    if ((coins.countActive(true) === 0) && (coins1.countActive(true) === 0) && (coins2.countActive(true) === 0) && (coins3.countActive(true) === 0) && (coins4.countActive(true) === 0) && (coins5.countActive(true) === 0) && (coins6.countActive(true) === 0)){

        coins.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
        coins1.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
        coins2.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
        coins3.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
        coins4.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
        coins5.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
        coins6.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        let logo = this.physics.add.image(randNumW, randNumH, 'ghost');

        logo.setVelocity(randVelH, randVelV);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        this.physics.add.collider(player, logo, hitGhost, null, this);
    }
}

function hitGhost (player, ghost)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;

    this.add.image(25,-55,'dead').setOrigin(0,0)
    
    wave.stop()
    died.play()
    music.stop()
}

// module.exports = gameOver
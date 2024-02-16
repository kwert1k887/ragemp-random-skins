const skins = require('./skins.json');

mp.events.add('playerJoin', (player) => {
    player.model = skins[Math.floor(Math.random() * skins.length)];
});

mp.events.addCommand('veh', (player, model) => {
    mp.vehicles.new(mp.joaat(model), new mp.Vector3(player.position.x, player.position.y, player.position.z));
});
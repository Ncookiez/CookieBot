// CookieBot - Written by Ncookie
// Invite Link: https://discord.com/oauth2/authorize?client_id=749021066571022387&scope=bot&permissions=388160

// Initializations:
const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs');
const key = 'cookie';
const prefix = 'cookie ';

// User IDs:
var ncookie = '130396053399797760';
var vigi = '269893084014182410';
var aero = '152113822922964992';

// Startup Message:
client.once('ready', () => {
    console.log('CookieBot is ready to deliver the goods.');
});

// Cookie Bible Quotes Library:
var quotes = ['The cookie is untouchable.', 'There is only one true cookie.', 'May the cookies reign supreme.', 'To dip in milk is life\'s true pleasures.', 'It is the king of the bakery.', 'Its chips can melt your soul.', 'Its crunch deafening - its sight rivetting.', 'The only choice is surrender.', 'The cookie cannot be stopped.', 'The chips made of the highest quality chocolate touch our tongues and hearts with gentleness.', 'The cookie has a hatred for bagels.'];

// Cookie Roast Library:
var roasts = ['This dude <X> has more chromosomes than starting villages.', 'Imagine being in the Cookie Shitlist like <X>. Must be sad.', 'Cookie farts smell much nicer than <X>.', 'The day <X> says something smart is the day cookies forget how to fly.', '<X> is nothing but a bagel.', 'I bet <X> has market 30 on all their villages.', 'The one true cookie is very displeased with you, <X>. Repent.'];

// Bot Messaging Block:
client.on('message', message => {

    //====================================================================================================//
    //                                            BOT COMMANDS                                            //
    //====================================================================================================//

    // Anti-Spy Measures:
    if(message.channel.type == 'dm') {
        return;
    } else if(!message.author.bot && !(message.guild.id == '728968437996716042')) {
        console.log(message.author.username + ': ' + message.content);
    }

    // Uncomment to get author info:
    //console.log(message.author);

    // Checking if author is Ncookie:
    if(message.author.id == ncookie) {
        message.react('🍪');
    }

    // Checking if message contains 'THC':
    if(!message.author.bot && message.content.toLowerCase().includes('thc')) {
        message.react('🤮');
    }

    // Generic message checks:
    if(message.author.bot || !message.content.toLowerCase().includes(key)) {
        return;
    } else if(!message.content.toLowerCase().startsWith(prefix)) {
        message.react('🍪');
        return;
    }

    // String Manipulation:
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Command: 'cookie help':
    if(command === 'help') {
        message.channel.send(`:cookie: What cookies shall I bless upon thee today?\n
    :man_shrugging: \`cookie help\` - Displays this very command!\n
    :thumbsup: \`cookie check\` - The cookie shall dictate if your idea is a good or bad one.\n
    :pray: \`cookie praise\` - Allow your inner self to give into the deliciousness of a cookie.\n
    :crossed_swords: \`cookie calc\` - Along with a cookie, you shall have a simple battle simulator for TW2.\n
    :abacus: \`cookie hiba\` - The most accurate battle simulator for TW2 shall be yours if you accept cookies into your heart.\n
    :map: \`cookie map\` - The one and only cookie shall guide you to a great mapping tool for TW2.\n
    :desktop: \`cookie forum\` - You can be led to our world's forums by the great cookie.\n
    :carousel_horse: \`cookie hc\` - There is no hope.\n
    :milk: \`cookie milk\` - What could possibly be better than this sacred combination?\n
    :dash: \`cookie fart\` - The sacred gases must be released.\n
    :fire: \`cookie roast\` - You may request from the great cookie a great roast to one you despise.\n
    :archery: \`cookie claim\` - You may claim a village for yourself! Please enter its coordinates.\n
    Also, be careful - even mentioning the great name of 'cookie' in any message will summon it.`);
        return;
    }

    // Command: 'cookie check':
    if(command === 'check') {
        (Math.floor(Math.random() * 100)) > 50 ? message.channel.send(':cookie::thumbsup:') : message.channel.send(':cookie::thumbsdown:');
        return;
    }

    // Command: 'cookie praise':
    if(command === 'praise') {
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        message.channel.send(':cookie::pray: ' + randomQuote + ' :pray::cookie:');
        return;
    }

    // Command: 'cookie calc':
    if(command === 'calc') {
        message.channel.send(':cookie: The one true cookie presents you with a link: http://tw2calc.com/');
        return;
    }

    // Command: 'cookie hiba':
    if(command === 'hiba') {
        message.channel.send(':cookie: The one true cookie presents you with a link: https://docs.google.com/spreadsheets/d/1Y-UPCQvlQbulStftYKGhjge2JTrh6s1bUUjVoKL1eLQ/edit?usp=sharing');
        return;
    }

    // Command: 'cookie map':
    if(command === 'map') {
        message.channel.send(':cookie: The one true cookie presents you with a link: https://tribalwars2map.com/en/en56');
        return;
    }

    // Command: 'cookie forum':
    if(command === 'forum') {
        message.channel.send(':cookie: The one true cookie presents you with a link: https://en.forum.tribalwars2.com/index.php?forums/daulatabad-en56.279/');
        return;
    }

    // Command: 'cookie hc':
    if(command === 'hc') {
        message.channel.send(':carousel_horse::cookie::carousel_horse: It is surounded by armoured horses, there is nothing anyone can do.');
        return;
    }

    // Command: 'cookie milk':
    if(command === 'milk') {
        message.channel.send(':cookie::milk:');
        return;
    }

    // Command: 'cookie fart':
    if(command === 'fart') {
        message.channel.send(':cookie::dash:');
        return;
    }

    // Command: 'cookie roast':
    if(command === 'roast') {
        var extraCommand = args.shift();
        var roastee = '';
        if(extraCommand == null) {
            roastee = 'THC';
        } else if(extraCommand == 'cookie' || extraCommand == 'ncookie') {
            roastee = message.author.username;
        } else {
            roastee = extraCommand;
        }
        var randomRoast = roasts[Math.floor(Math.random() * roasts.length)].replace('<X>', roastee);
        message.channel.send(':cookie::fire: ' + randomRoast + ' :fire::cookie:');
        return;
    }

    // Command: 'cookie claim':
    if(command === 'claim') {
        var extraCommand = args.shift();

        // If 'cookie claim delete xxx,yyy':
        if(extraCommand == 'delete') {
            var extraCommand = args.shift();

            // Checking for invalid coordinates:
            if(extraCommand == null) {
                message.channel.send(':cookie: Please use the format `cookie claim XXX,YYY` in order to claim a village, or `cookie claim delete XXX,YYY` in order to unclaim a village. To see all your claims please use `cookie claim list`. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                return;
            } else if(extraCommand.length == 7) {
                for(var i = 0; i < 7; i++) {
                    if(!(extraCommand.charAt(i) >= '0' && extraCommand.charAt(i) <= '9')) {
                        if(i != 3) {
                            message.channel.send(':cookie: Those doesn\'t seem like valid coordinates. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                            return;
                        }
                    }
                }

                // Looking for claim in file:
                fs.readFile('claims.txt', function(err, data) {
                    if(err) throw err;
                    var claims = data.toString().split("\n");
                    var found = false;
                    for(var i = 0; i < claims.length; i++) {
                        if(extraCommand == claims[i]) {
                            found = true;
                            break;
                        }
                    }

                    // Deleting claim if found:
                    if(found && claims[i - 1] == message.author.username) {
                        var stream = fs.createWriteStream('claims.txt');
                        stream.once('open', function() {
                            for(var j = 0; j < claims.length; j++) {
                                if(j == i - 1) {
                                    j += 2;
                                } else {
                                    stream.write(claims[j] + '\n');
                                }
                            }
                        });
                        message.channel.send(':cookie: Your claim has been deleted. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                        console.log('----- CLAIMS: ' + message.author.username + ' has deleted their ' + extraCommand + ' claim.');
                        return;
                    } else {
                        message.channel.send(':cookie: No such claim was found. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                        return;
                    }
                });
            } else {
                message.channel.send(':cookie: Please use the format `cookie claim XXX,YYY` in order to claim a village, or `cookie claim delete XXX,YYY` in order to unclaim a village. To see all your claims please use `cookie claim list`. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                return;
            }

        // If 'cookie claim list':
        } else if(extraCommand == 'list') {
            
            // Getting user's claims:
            var userClaims = [];
            fs.readFile('claims.txt', function(err, data) {
                if(err) throw err;
                var claims = data.toString().split("\n");
                for(var i = 0; i < claims.length; i++) {
                    if(message.author.username == claims[i]) {
                        userClaims.push(claims[i + 1]);
                    }
                }

                // Sending DM to user:
                if(userClaims.length < 1) {
                    message.channel.send(':cookie: You have no claims on file. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                    return;
                } else {
                    var claimString = '';
                    while(userClaims.length > 0) {
                        claimString += '> ' + userClaims.shift() + '\n';
                    }
                    message.channel.send(':cookie: You have been DMd your claims. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                    client.users.cache.get(message.author.id).send(':cookie: You have claimed the following villages:\n' + claimString);
                    return;
                }
            });

        // If 'cookie claim ?':
        } else if(extraCommand == null || extraCommand.length != 7) {
            message.channel.send(':cookie: Please use the format `cookie claim XXX,YYY` in order to claim a village, or `cookie claim delete XXX,YYY` in order to unclaim a village. To see all your claims please use `cookie claim list`. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
            return;

        // If 'cookie claim xxx,yyy':
        } else {

            // Checking for invalid coordinates:
            for(var i = 0; i < 7; i++) {
                if(!(extraCommand.charAt(i) >= '0' && extraCommand.charAt(i) <= '9')) {
                    if(i != 3) {
                        message.channel.send(':cookie: Those doesn\'t seem like valid coordinates. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                        return;
                    }
                }
            }

            // Checking for claim in file:
            fs.readFile('claims.txt', function(err, data) {
                if(err) throw err;
                var claims = data.toString().split("\n");
                for(i in claims) {
                    if(extraCommand == claims[i]) {
                        message.channel.send(':cookie: That village has already been claimed by ' + claims[i - 1] + '. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                        console.log('----- CLAIMS: ' + message.author.username + ' has tried claiming ' + extraCommand + '.');
                        return;
                    }
                }

                // Making new claim:
                var date = new Date();
                var stream = fs.createWriteStream('claims.txt', {flags: 'a'});
                stream.once('open', function() {
                    stream.write(message.author.username + '\n');
                    stream.write(extraCommand + '\n');
                    stream.write(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + '\n');
                });
                message.channel.send(':cookie: Your claim has been made. This message will self-destruct in 5 seconds. :cookie:').then(reply => {reply.delete({timeout: 5000})}).then(message.delete({timeout: 5000}));
                console.log('----- CLAIMS: ' + message.author.username + ' has claimed ' + extraCommand + '.');
                return;
            });
        }
    }

    //====================================================================================================//

});

// Accessing Bot w/ Token:
client.login(process.env.BOT_TOKEN);
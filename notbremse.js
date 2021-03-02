module.exports = {
    name: 'notbremse',
    description: "Bock auf Admin!",
    execute(message, args){

        if(message.member.roles.cache.has('                      ')){
            message.channel.send('Everything works!');

        } else {
            message.channel.send('You will be able in a few seconds!!!');
            message.member.roles.add('                       ');
        }
    }
}
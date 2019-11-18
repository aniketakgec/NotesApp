const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')


yargs.command({
    command:'add',
    description:'Adding a note by user',
    builder:{

        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.addNotes(argv.title,argv.body)
    }

})
yargs.command({
    command:'remove',
    description:'removing notes',
    handler:function(){
        console.log('Note is removed')
    }

})
yargs.command({
    command:'list',
    description:'List your notes',
    handler:function(){
        console.log('Note is Listed below')
    }

})
yargs.command({
    command:'read',
    description:'read a note',
    
    handler:function(){
        console.log('reading a note')
    }

})

yargs.parse()
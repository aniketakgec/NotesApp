const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

//command for adding note


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
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }

})

//command for removing note


yargs.command({
    command:'remove',
    description:'removing notes',
    builder:{
        title:{
            describe:'remove note',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
        
    }

})


yargs.command({
    command:'list',
    description:'List your notes',
    handler(){
       notes.listnotes()
    }

})
yargs.command({
    command:'read',
    description:'read a note',
    
    handler(){
        console.log('reading a note')
    }

})

yargs.parse()

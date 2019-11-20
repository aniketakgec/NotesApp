const fs=require('fs')
const chalk=require('chalk')
const getNotes=()=>
{
    return 'your notes'
}
const addNotes=(title,body)=>{
    const notes=loadNotes()
    
    const duplicateNotes=notes.filter((note)=>note.title===title)
    const duplicateNote=notes.find((note)=>note.title===title)
    if(!duplicateNote)
    {
        notes.push(
            {
                title:title,
                body:body
            }
        )
        saveNotes(notes)
        console.log(chalk.inverse.green('new note added successfully'))
    
    }
    else
    console.log(chalk.inverse.red('Note title taken already!'))

}



const removeNotes=(title)=>{

    const notes=loadNotes()
 
    const notesToKeep=notes.filter((note)=> note.title!==title)
   
    if(notesToKeep.length==notes.length)
     console.log(chalk.red('no notes removed !'))
     else{
    saveNotes(notesToKeep)

    
    
    console.log(chalk.green('Note removed successfully!!'))
     }

}
const listnotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse.green('your notes..'))

    notes.forEach(element => {
        console.log(element.title)
        
    });
}

const saveNotes=(notes)=>
{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes=()=>{
    try
    {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJson=dataBuffer.toString()
        return JSON.parse(dataJson)

    }
    catch(e)
    {
        return []

    }

}

const readNotes=(title)=>{
    const notes=loadNotes()
    
    const FoundNote=notes.find((note)=>note.title===title)
    if(FoundNote)
    {
        console.log(chalk.yellow('Title is: '+FoundNote.title))
        console.log('Body is: '+FoundNote.body)
    }
    else
    console.log(chalk.red('Note not found'))

}
module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listnotes:listnotes,
    readNotes:readNotes
}
const fs=require('fs')
const chalk=require('chalk')
const getNotes=function()
{
    return 'your notes'
}
const addNotes=function(title,body){
    const notes=loadNotes()
    const duplicateNotes=notes.filter(function(note){
        return note .title===title
    })
    if(duplicateNotes.length===0)
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
const saveNotes=function(notes)
{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes=function(){
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
module.exports={
    getNotes:getNotes,
    addNotes:addNotes
}
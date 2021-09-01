const fs = require('fs');
const chalk = require('chalk');

const addNote = function(title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.find( (note)=>  note.title === title)
    debugger
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes);
        console.log('\nNew Note Added Successfully!!!\n');
    }
    else{
        console.log("\nNote Title already existed!!!\n");
    }
}

const removeNote = (title)=>{

    const notes = loadNotes()
    const notesToKeep = notes.filter( (note)=> {
        return note.title !== title
    });
    //saveNotes(notesToKeep)

  if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No note found'));
    }

} 
const listNote= function(title,body){
    const notes = loadNotes()

    console.log(chalk.green.inverse(" <= Your Notes => "));
    
     
    notes.forEach((result)=>{
       // for(var x = 0;x<result.length; x++)
        console.log(chalk.red(result.title))
       // console.log("test content")
    })
}

const readNote = function(title){
    const notes = loadNotes();
    console.log("The results are :")
    const notestoRead= notes.find((note)=> note.title === title)
    //console.log("checking read")
    if(notestoRead){
        console.log("The result is title: " + chalk.red(notestoRead.title) + " and body " + chalk.blueBright(notestoRead.body));
    }
        else{
            console.log(chalk.red.inverse("No matching titles found"))

        }
    }
        

const loadNotes = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []
    }
}
const saveNotes = function(notes)  {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNote : listNote,
    readNote : readNote
}
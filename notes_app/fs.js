const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command : 'add',
    describe: "Adding a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type : 'string'
        }
        
     
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);        
    }
})

yargs.command({
    command : 'remove',
    describe: "Removing a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);        
    }
})

yargs.command({
    command : 'list',
    describe: "Listing notes",
   handler(argv){
       notes.listNote();
   }
        

        
})

yargs.command({
    command : 'read',
    describe: 'Reading notes',
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
        handler(argv){
            notes.readNote(argv.title);        
        }

})

yargs.parse();
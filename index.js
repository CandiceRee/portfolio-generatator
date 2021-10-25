// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const answers=()=>{ return inquirer
.prompt([
    {
        type: 'input',
        message="Title of project?", 
        name:'Title'
    },
    {
        type:'input',
        message="What is the description?",
        name:'Description'
    },
    {
        type:'input',
        message="How do you install your app?",
        name:'Installation'
    },
    {
         type:'input',
         message="Instructions to be followed?",
         name:'instructions'
    },
    {
        type:'input',
        message="Credits?",
        name:'credits'
    },
    {
        type:'input',
        message="How do you use your app?",
        name:'usage'
    },
    {
        type:'input',
        message="License used?",
        name:'license',
        choices:['MIT License','GPL License','Apache License','GNU License', 'N/A']
    },
    {
        type:'input',
        message="Any badges?",
        name:'badge'
    },
    {
        type:'input',
        message="GitHub username?",
        name:'username'
    },
    {
        type:'input',
        message="Linkedin Profile Link?",
        name:'Linkedin'
    },
    {
        type:'input',
        message="E-mail?",
        name:'email'
    },
    {
        type:'input',
        message="Any contributions?",
        name:'contribution'
    },
    {
        type:'input',
        message="How many tests?",
        name:'tests'
    },
    {
        type:'input',
        message="Any urls or screenshots?",
        name:'screenshot'
    }
])
}
answers().then(data=>{
const filename='output.txt';
fs.writeFile(filename,JSON,stringify(data, null,'\t'),function(err){
    if (err){
        return console.log(err);
    }
    console.log("Success!");
});
})

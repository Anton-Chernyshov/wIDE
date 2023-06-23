var isButtonRun = true; // true means it is run, false means it is stop 
var startStopButton = document.getElementById("runStop");
function runScript(){
    if (isButtonRun){
     startStopButton.className = "stop";
     isButtonRun = false;
     startStopButton.textContent = "STOP";
     //RUN THE CODE HERE, TO START RUNNING THE PROGRAM
     console.log(codingField.value)
     runit()
    }
    else{
        startStopButton.className = "run";
        isButtonRun = true;
        startStopButton.textContent = "RUN";
        //HERE IS TO END THE PROGRAM
    }    
}
var isDark = true; // dark is true, light = false
var background = document.getElementById("background");
var codingField = document.getElementById("codingField")
function switchVisualMode(){
    if (isDark){
        background.className = "lightBackGround";
        codingField.className = "lightGeneral";
        isDark = false;    

    }
    else{
           background.className = "darkBackGround";
           codingField.className = "darkGeneral";
           isDark = true;           
       }
}
function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function runit() { 
   var prog = document.getElementById("codingField").value; 
   var mypre = document.getElementById("output"); 
   mypre.innerHTML = ''; 
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead}); 
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
       console.log(err.toString());
   });
} 

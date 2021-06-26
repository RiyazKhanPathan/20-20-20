module.exports = (text)=>{
    var proc = require('child_process');
    var commands = [ 'Add-Type -AssemblyName System.speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Speak([Console]::In.ReadToEnd())' ];
    var options = { shell: true };
    var childProc = proc.spawn('powershell', commands, options);
    childProc.stdin.end(text);
    
}

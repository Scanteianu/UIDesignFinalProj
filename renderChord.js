var currentChord=["bb","d","f","ab"]
var notesLeft=4
var notesPressed=[]
var chordsLeft=[]
function keyDown(keyName){
    var colorToSet="wrongKey"
    if(currentChord.includes(keyName)){
        colorToSet="rightKey"
        if(! notesPressed.includes(keyName)){
            notesLeft--
            notesPressed.push(keyName)
        }
    }
    setKeyColor(keyName,colorToSet)
    if(notesLeft==0){
        document.getElementById("chordStatus").innerHTML=`
            <button class="btn btn-link" onClick="initializeChord()">Next Chord</button>
        `
    }
    else{
        document.getElementById("chordStatus").innerHTML="<b>"+notesLeft+"/"+currentChord.length+"</b> notes left in chord."
    }
    
}

function setKeyColor(keyName,keyColor){
    //requires the colors to be set in css below darken.
    let keyElement=document.getElementById(keyName)
    let keyClass=keyElement.getAttribute("class")
    keyClass+=" "+keyColor
    keyElement.setAttribute("class",keyClass)
}

function initializeChord(){
    if(chordsLeft.length==0){
        chordsLeft=Object.keys(chordLibrary)
        console.log(chordsLeft)
    }
    let index=Math.floor(Math.random()*chordsLeft.length)
    let chosenName=chordsLeft[index]
    chordsLeft.splice(index,1)
    chordName=chosenName
    currentChord=chordLibrary[chosenName]
    notesLeft=currentChord.length
    notesPressed=[]
    setUpChordOnScreen(chordName,currentChord)
}


function setUpChordOnScreen(chordName, currentChord){
    
    notesLeft=currentChord.length
    document.getElementById("content").innerHTML=`
        <div id="chordName"><h1>Chord: ${chordName}</h1></div>
            <div id="piano">
                <div class="row" id="accidentals">
                    <div class="keySpace"></div>
                    <div class="keySpace"></div>
                    <div id="db" class="keyAccidental darken frame" onclick="keyDown(&quot;db&quot;)"></div>
                    <div class="keySpace"></div>
                    <div id="eb" class="keyAccidental darken frame" onclick="keyDown(&quot;eb&quot;)"></div>
                    <div class="keySpace"></div>
                    <div class="keySpace"></div>
                    <div class="keySpace"></div>
                    <div class="keySpace"></div>
                    <div id="gb" class="keyAccidental darken frame" onclick="keyDown(&quot;gb&quot;)"></div>
                    <div class="keySpace"></div>
                    <div id="ab" class="keyAccidental darken frame" onclick="keyDown(&quot;ab&quot;)"></div>
                    <div class="keySpace"></div>
                    <div id="bb" class="keyAccidental darken frame" onclick="keyDown(&quot;bb&quot;)"></div>
                </div>
                <div class="row" id="naturals">
                    <div id="c" class="keyNatural frame" onclick="keyDown(&quot;c&quot;)"></div>
                    <div id="d" class="keyNatural frame" onclick="keyDown(&quot;d&quot;)"></div>
                    <div id="e" class="keyNatural frame" onclick="keyDown(&quot;e&quot;)"></div>
                    <div id="f" class="keyNatural frame" onclick="keyDown(&quot;f&quot;)"></div>
                    <div id="g" class="keyNatural frame" onclick="keyDown(&quot;g&quot;)"></div>
                    <div id="a" class="keyNatural frame" onclick="keyDown(&quot;a&quot;)"></div>
                    <div id="b" class="keyNatural frame" onclick="keyDown(&quot;b&quot;)"></div>
                </div>
            </div>
            <div id="description">Click the notes that make up the chord displayed above on the piano! <br>This section is random, so you might get the current chord multiple times. When you are comfortable with your knowledge of the chord notes, you can move on!</div>
            <div id="chordStatus"><b>${notesLeft}/${notesLeft}</b> notes left in chord.</div>
    `
}
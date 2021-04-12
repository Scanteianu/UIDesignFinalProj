var changes=[
    "Bb7|G-7",
    "C-7|F7",
    "Bb7|G-7",
    "C-7|F7",
    "Bb|Bb7",
    "Eb|Eb7",
    "Bb7|F7",
    "Bb",
    "Bb7|G-7",
    "C-7|F7",
    "Bb7|G-7",
    "C-7|F7",
    "Bb|Bb7",
    "Eb|Eb7",
    "Bb7|F7",
    "Bb",
    "D-7",
    "D-7",
    "G-7",
    "G-7",
    "C-7",
    "C-7",
    "F7",
    "F7",
    "Bb7|G-7",
    "C-7|F7",
    "Bb7|G-7",
    "C-7|F7",
    "Bb|Bb7",
    "Eb|Eb7",
    "Bb7|F7",
    "Bb",
]
var assignedMeasures=[]

function initializeChanges(){
    assignedMeasures=[]
    document.getElementById("content").innerHTML=setUpGrid()
    setupChordChoices()
    setupJq()
    
    
    
}

function setupChordChoices(){
    chordsCopy=[...changes]
    chordsCopy.sort()
    chordBankContents=""
    for(let chord in chordsCopy){
        chordBankContents+=`
            <div class="row frame cSrc">
            ${chordsCopy[chord]}
            </div>
        `
    }
    document.getElementById("chordBank").innerHTML=chordBankContents
    
}
function notifySuccess(){
    alert("congrats, you got all the changes right!")
}
function setupJq(){
    $( ".cSrc" ).draggable({"revert":"invalid","cursor":"move", "zIndex":1000})
    $( ".cDest" ).droppable({
      drop: function( event, ui ) {
        let destinationMeasureDivId=event.target.id
        let attemptedChord=ui.draggable[0].innerHTML.trim()
        let destMNum=parseInt(destinationMeasureDivId.substring("7"))
        console.log(destMNum)
        console.log(attemptedChord)
        console.log("revert: "+changes[destMNum-1]+" "+attemptedChord)
        event.target.innerHTML=attemptedChord
        ui.draggable[0].remove()
        assignedMeasures.push(destMNum)
        if(assignedMeasures.length==32){
            notifySuccess()
        }
        return 
      },
      accept: function(event,ui){
          if(!event){
              return false;
          }
          let destinationMeasureDivId=$(this)[0].id
          let attemptedChord=event[0].innerHTML.trim()
          let destMNum=parseInt(destinationMeasureDivId.substring("7"))
          if(assignedMeasures.includes(destMNum)){
              return false
          }
          
          return attemptedChord==changes[destMNum-1]
      },
      "classes":{"ui-droppable-hover": "darken"}
    });
}

function setUpGrid(){
    return `
        <div class="row">
            Drag the chords from the chord bank to the right measure in the 32 bar grid!
            </div>
            <div class="row">
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" id="chordBank">
                    <div class="row frame cSrc">
                        D-7
                    </div>
                </div>
                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" id="chordSpacer"></div>
                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" id="chords">
                        
                    <div class="row">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="chordCol1">
                            <div class="row frame cDest" id="measure1">?</div>
                            <div class="row frame cDest" id="measure5">?</div>
                            <div class="row frame cDest" id="measure9">?</div>
                            <div class="row frame cDest" id="measure13">?</div>
                            <div class="row frame cDest" id="measure17">?</div>
                            <div class="row frame cDest" id="measure21">?</div>
                            <div class="row frame cDest" id="measure25">?</div>
                            <div class="row frame cDest" id="measure29">?</div>
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="chordCol2">
                            <div class="row frame cDest" id="measure2">?</div>
                            <div class="row frame cDest" id="measure6">?</div>
                            <div class="row frame cDest" id="measure10">?</div>
                            <div class="row frame cDest" id="measure14">?</div>
                            <div class="row frame cDest" id="measure18">?</div>
                            <div class="row frame cDest" id="measure22">?</div>
                            <div class="row frame cDest" id="measure26">?</div>
                            <div class="row frame cDest" id="measure30">?</div>
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="chordCol3">
                            <div class="row frame cDest" id="measure3">?</div>
                            <div class="row frame cDest" id="measure7">?</div>
                            <div class="row frame cDest" id="measure11">?</div>
                            <div class="row frame cDest" id="measure15">?</div>
                            <div class="row frame cDest" id="measure19">?</div>
                            <div class="row frame cDest" id="measure23">?</div>
                            <div class="row frame cDest" id="measure27">?</div>
                            <div class="row frame cDest" id="measure31">?</div>
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="chordCol4">
                            <div class="row frame cDest" id="measure4">?</div>
                            <div class="row frame cDest" id="measure8">?</div>
                            <div class="row frame cDest" id="measure12">?</div>
                            <div class="row frame cDest" id="measure16">?</div>
                            <div class="row frame cDest" id="measure20">?</div>
                            <div class="row frame cDest" id="measure24">?</div>
                            <div class="row frame cDest" id="measure28">?</div>
                            <div class="row frame cDest" id="measure32">?</div>
                        </div>
                    </div>
                </div>
            </div>
    `
}
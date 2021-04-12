
var assignedMeasures=[]

function initializeChanges(){
    assignedMeasures=[]
    document.getElementById("content").innerHTML=setUpGridFromChanges()
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
        if(assignedMeasures.length==changes.length){
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
function setUpGridFromChanges(){
    let cols=["","","",""]
    
    for(let i in changes){
        let iPlusOne=parseInt(i)+1
        cols[i%4]+=`
            <div class="row frame cDest" id="measure${iPlusOne}">?</div>
        `
    }
    
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
                            ${cols[0]}
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="chordCol2">
                            ${cols[1]}
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="chordCol3">
                            ${cols[2]}
                        </div>
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" id="chordCol4">
                            ${cols[3]}
                        </div>
                    </div>
                </div>
            </div>
    `
}
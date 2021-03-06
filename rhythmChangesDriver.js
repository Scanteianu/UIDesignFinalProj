
var currentSection="welcome"
var currentState={
    "currentSection": "welcome",
    "quizProgress": {
        
    }
    
}


$( document ).ready(function() {
    setupHover()
});
function setupHover(){
    $( ".sectionSelect" ).hover(function(){
       $( this ).attr("class","row frame navBlock sectionSelect darken")
    },
    function(){
       $( this ).attr("class","row frame lightBlue navBlock sectionSelect")
    });   
}
function selectSection(sectionId){
    currentState["currentSection"]=sectionId
    loadPage()
    
}

function generateNav(navSegments, currentSection){
    navSection=""
    for(let section in navSegments){
        navSection+=`
            <div class="row frame navBlock lightBlue">
             <h3>${section}</h3>
            </div>
        `
        for(let subsection in navSegments[section]){
            let sectionId=navSegments[section][subsection]
            let sectionClass="sectionSelect"
            if(currentSection==sectionId){
                sectionClass="sectionSelected"
            }
            navSection+=
            `
            <div class="row frame lightBlue navBlock ${sectionClass}" id="${sectionId}" onclick="selectSection(&quot;${sectionId}&quot;)">
                <p>${subsection}</p>
            </div>
            `
        }
    }
    return navSection
    
}

function generateVideoContent(currentContent){
    let title=currentContent["title"]
    let embed=currentContent["video"]
    let description=currentContent["description"]
    videoSection=
    `
        <div class="row">
            <h1>${title}</h1>
        </div>
        <div class="row">
            <div class="narrow">${embed}</div>
        </div>
        <div class="row">
            <p>${description}</p>
        </div>
    `
    return videoSection
    
}

function loadPage(){
    currentContent=contentLibrary[currentState["currentSection"]]
    
    document.getElementById("sections").innerHTML=generateNav(navSegments,currentState["currentSection"])
    setupHover()
    if(currentContent["type"]=="chord"){
        initializeChord()
    }
    if(currentContent["type"]=="changes"){
        initializeChanges()
    }
    if(currentContent["type"]=="media"){
        document.getElementById("content").innerHTML=generateVideoContent(currentContent)
    }
    if(currentContent["type"]=="quiz"){
        document.getElementById("content").innerHTML=generateQuizContent(currentContent,currentState)
    }
    
    
}
function generateQuizContent(currentContent,currentState){
    if(!(currentState["currentSection"] in currentState["quizProgress"])){
        initializeQuiz(currentState)
    }
    quizProgress=currentState["quizProgress"][currentState["currentSection"]]
    if(quizProgress["state"]=="summary"){
        qSummary()
        return document.getElementById("content").innerHTML
    }
    let question=currentContent["questions"][quizProgress["questionNumber"]]
    let qText=question["text"]
    let qNum=quizProgress["questionNumber"]+1//human friendly progress == 1 indexed
    let qTotal=currentContent["questions"].length
    questionSection=
    `
        <div class="row alignRight">
            <p>Question ${qNum} / ${qTotal}</p>
        </div>
        <div class="row">
            <p>${qText}</p>
        </div>
    `
    for(let choice in question["choices"]){
        let choiceText=question["choices"][choice]
        questionSection+=`
            <button type="button" class="btn btn-light" onclick="handleQAnswer(${choice})" id="qButton${choice}">${choiceText}</button><br>
            `
        
    }
    return questionSection
    
}
//given the current fraught political climate, it must be pointed out that "Q" is short for "question" and is not to be associated with baseless conspiracies.
//I was just lazy on the day I originally wrote it and can't be bothered to refactor.
function handleQAnswer(id){
    let quizProgress=currentState["quizProgress"][currentState["currentSection"]]
    if(quizProgress["state"]!=="question"){
        return
    }
    quizProgress["state"]="answer"
    let clickedButton=document.getElementById("qButton"+id)
    console.log("qButton"+id)
    let question=currentContent["questions"][quizProgress["questionNumber"]]
    let correctButton = document.getElementById("qButton"+question["correct"])
    console.log("qButton"+question["correct"])
    console.log(clickedButton)
    if(id==question["correct"]){
        quizProgress["numRight"]+=1
    }
    else {
        clickedButton.setAttribute("class","btn btn-danger")
    }
    correctButton.setAttribute("class","btn btn-success")
    let advanceText="Next Question"
    let advanceHandler="advanceQ"
    quizProgress["questionNumber"]+=1
    quizProgress["state"]="question"
    if(quizProgress["questionNumber"]==currentContent["questions"].length){
        quizProgress["state"]="summary"
        advanceText="Quiz Summary"
        advanceHandler="qSummary"
    }
    document.getElementById("content").innerHTML+=`
    <br><button class="btn btn-link" onclick="${advanceHandler}()">${advanceText}</button>
    `
    
    
}

function advanceQ(){
    document.getElementById("content").innerHTML=generateQuizContent(currentContent,currentState)
}

function qSummary(){
    let quizProgress=currentState["quizProgress"][currentState["currentSection"]]
    let right=quizProgress["numRight"]
    let total=currentContent["questions"].length
    document.getElementById("content").innerHTML=`
    You got ${right} / ${total} right!
    Feel free to reset the quiz and try again, or  go to another section.
    <br><button class="btn btn-link" onclick="resetQuiz()">Reset Quiz</button>
    `
}
function initializeQuiz(currentState){
    currentState["quizProgress"][currentState["currentSection"]]={
        "questionNumber":0,
        "numRight": 0,
        "state": "question"
    }
}
function resetQuiz(){
    initializeQuiz(currentState)
    document.getElementById("content").innerHTML=generateQuizContent(currentContent,currentState)
}
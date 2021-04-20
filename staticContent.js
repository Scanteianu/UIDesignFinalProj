var navSegments = {
    "Learn": {
        "Welcome": "welcome",
        "History": "learnHistory",
        "Theory": "learnTheory",
        "Sheet Music": "learnMusic"
    },
    "Backing Tracks": {
        "Chords on Screen":"practiceChords",
        "Just Music":"practiceMusic",
        
    },
    "Quiz":{
        "History": "quizHistory",
        "Theory": "quizTheory",
        "Chord Notes": "quizNotes",
        "Chord Changes": "quizChanges",
    }
}

var contentLibrary= 
{
    "welcome": {
        "type": "media",
        "video": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/oQdeTbUDCiw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
        "title": "Welcome to the Rhythm Changes Tutorial!",
        "description": "<br>Hello! We're here to teach you Rhythm Changes in 10 minutes or less! <br><br><b>What are Rhythm Changes?</b><br>Rhythm changes are a common 32-bar chord progression in jazz, originating as the chord progression for George Gershwin's I Got Rhythm. The progression is in AABA form, with each A section based on repetitions of the ubiquitous I–vi–ii–V sequence (or variants such as iii–vi–ii–V), and the B section using a circle of fifths sequence based on III7–VI7–II7–V7, a progression which is sometimes given passing chords. -- <a href=\"https://en.wikipedia.org/wiki/Rhythm_changes\"/>Wikipedia</a><br><br><b>How to use this site</b><br>This site is meant to give you the resources to learn Rhythm Changes in 10 minutes. However, if you've got more than 10 minutes, you'll find resources here to really solidify your knowledge and understanding. If you don't have much time, we recommend just reading about the history and the theory, and only listening to the head of the original \"I Got Rhythm\".You can use the menu on the left to go through the sections in whatever order you prefer. Feel free to print the sheet music so that you can refer to it throughout the lesson and also later!",    
    },
    "learnHistory": {
        "type": "media",
        "video": `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/o7DCuXst-uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        "title": "Rhythm Changes History",
        "description": `<br>This progression's endurance in popularity is largely due to its extensive use by early bebop musicians. The chord changes began to be used in the 1930s, became common in the '40s and '50s, and are now ubiquitous.[7] First, "I Got Rhythm" was by then already a popular jazz standard. Second, by listening to the song and writing a new melody over its chord changes, thereby creating a composition of a type known as a contrafact, a jazz musician could claim copyright to the new melody rather than acknowledge Gershwin's inspiration and pay royalties to Gershwin's estate. Third, using a stock, well-known progression for new melodies made it easier to perform a song at jam sessions, shows, and recordings because the bandleader could tell new musicians that the song uses rhythm changes and note any modifications and chord substitutions.<br><br>

        In the 2010s, mastery of the 12-bar blues and rhythm changes chord progressions are "critical elements for building a jazz repertoire". -- <a href="https://en.wikipedia.org/wiki/Rhythm_changes#History"/>Wikipedia</a>`,    
    },
    "learnTheory": {
        "type": "media",
        "video": `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PUjDQpDBF-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        "title": "Rhythm Changes Theory",
        "description": `<br>This video will teach you a little about the theory of Rhythm Changes.<br>
        It is a 32 Bar form, of AABA structure, with each A being 8 bars, and the B (bridge being 8 bars). It's usually played in B flat major, and utilizes ii-V7s extensively.
        `,
    },
    "learnMusic": {
        "type": "media",
        "video": `
            <img class="sheetmusic" src="https://i.pinimg.com/originals/61/39/85/6139855caf1ef2a5c756587f356ae30d.jpg" alt="rhythm changes lead sheet">
        `,
        "title": "Rhythm Changes Sheet Music",
        "description": `<br>Feel free to print this sheet music and use it when learning Rhythm Changes.
        `,
    },
    "practiceChords": {
        "type": "media",
        "video": `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Q_9T1Td-XZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        "title": "Backing Track with Chords On Screen",
        "description": `<br>Here's a backing track so you can practice your solos. It has chord changes on the screen, and tells you where you are in the form, so you can check back if you get lost.
        `,
    },
    "practiceMusic": {
        "type": "media",
        "video": `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/J79BUZF8W0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `,
        "title": "Backing Track Music Only",
        "description": `<br>Here's another backing track, this one doesn't have chords on screen, because you will likely not have chords on the screen at your next jam session or gig. Try to solo along to this one and keep track of where you are in the form!
        `,
    },
    "quizHistory": {
        "type": "quiz",
        "questions": [
            {
                "text": "What is rhythm changes named after?",
                "choices": ["Rockin' in Rhythm", "I Got Rhythm", "Rhythm and Blues", "Drum N' Bass"],
                "correct": 1,
            },
            {
                "text": "Who wrote I Got Rhythm?",
                "choices": ["George Harrison", "John Coltrane", "George Gershwin", "John Williams"],
                "correct": 2,
            },
            {
                "text": "Which of these doesn't use rhythm changes?",
                "choices": ["Ornithology", "Anthropology", "I've Got Rhythm", "Green Dolphin Street"],
                "correct": 3,
            }
        ]
    },
    
    "quizTheory": {
        "type": "quiz",
        "questions": [
            {
                "text": "How long is Rhythm Changes?",
                "choices": ["12 bars", "16 bars", "32 bars", "34 bars"],
                "correct": 2,
            },
            {
                "text": "What time signature is Rhythm Changes in?",
                "choices": ["3/4", "12/8", "6/8", "4/4"],
                "correct": 3,
            },
            {
                "text": "What key is Rhythm Changes in?",
                "choices": ["Bb Major", "Bb Minor", "C Major", "F Minor"],
                "correct": 0,
            },
            {
                "text": "What is the form of Rhythm Changes?",
                "choices": ["AAB", "Blues", "Through Composed", "AABA"],
                "correct": 3,
            },
            {
                "text": "What is the first chord of the bridge?",
                "choices": ["G-7", "C-7", "F7", "D-7"],
                "correct": 3,
            },
            {
                "text": "What is the most common progression in the bridge?",
                "choices": ["ii-V", "I-IV", "I-iii", "V7-vi"],
                "correct": 0,
            },
        ]
    }, 
    "quizNotes": {
        "type": "chord"
    }, 
    "quizChanges": {
        "type": "changes"
    }, 
}

var chordLibrary={
    "Bb7": ["bb","d","f","ab"],
    "Cm": ["c","eb","g"],
    "Gm6": ["g","bb","d","e"],
    "F7": ["f","a","c","eb"],
    "Dm7": ["d","f","a","c"],
    
}

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

var bluesChanges=[
    "A",
    "A",
    "A",
    "A",
    "D",
    "D",
    "A",
    "A",
    "E",
    "D",
    "A",
    "A",
]
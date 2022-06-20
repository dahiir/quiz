function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "السؤال " + currentQuestionNumber + " من " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>النتيجة</h1>";
    gameOverHTML += "<h2 id='score'> " + quiz.score + "/10</h2>";
    
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
new Question("يشمل المفهوم الخاص للشريعة الإسلامية", ["الفقه الإسلامي", "أحكام المعاملات", "أحكام العبادات", "جميع الأجوبة صحيحة"], "جميع الأجوبة صحيحة"),
new Question("من أصول الفقه 'القياس' فما هي أركانه ؟", ["الأصل", "الفرع", "العلة", "جميع الأجوبة صحيحة"], "جميع الأجوبة صحيحة"),
new Question("من مصادر التشريع الإسلامي", ["التشريع", "القرآن الكريم", "مجلة الأحكام العدلية (العثمانية) ", "جميع الأجوبة صحيحة"], "القرآن الكريم"),
new Question("من أقسام الحكم الشرعي", ["حكم تكليفي", "حكم قانوني", "حكم سياسي", "جميع الأجوبة خاطئة"], "حكم تكليفي"),
new Question("من بين أقسام الحكم الشرعي التكليفي", ["التحريم", "الكراهية", "الندب", "جميع الأجوبة صحيحة"], "جميع الأجوبة صحيحة"),
new Question("من بين القواعد الأصولية", ["قواعد موضوعها الأدلة الشرعية", "لا يفهم منها أسرار التشريع ولا حكمته", "أغلبها ناشئة عن الألفاظ العربية", "جميع الأجوبة صحيحة"], "جميع الأجوبة صحيحة"),
new Question("القانون", ["لا يحمي الأخلاق", "يحمي الأخلاق العامة", "يحمي الأخلاق الخاصة", "جميع الأجوبة خاطئة"], "يحمي الأخلاق العامة"),
new Question("مستند الإجماع على تحريم الزواج ببنات الأولاد هو", ["القياس", "الإجماع", "القرآن", "جميع الأجوبة صحيحة"], "القرآن"),
new Question("من قواعد و تطبيقات رفع الضرر", ["قوانين حماية البيئة", "إشتراط رخصة في البناء", "عدم جواز هدم البنية الغير الآهلة للسقوط", "جميع الأجوبة صحيحة"], "إشتراط رخصة في البناء"),
new Question("من بين مباحث علم أصول الفقه", ["المصادر التشريعية", "القواعد اللغوية", "القواعد القانونية", "العرف"], "المصادر التشريعية"),
];


var quiz = new Quiz(questions);


populate();

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
new Question("من بين العناصر القانونية للدولة", ["عنصر الأقليم", "السيادة", "عنصر السكان", "جميع الأجوبة خاطئة"], "السيادة"),
new Question("يشمل الإقليم الوطني", ["اليابسة", "الإقليم البحري", "الإقليم الجوي", "جميع الأجوبة صحيحة"], "جميع الأجوبة صحيحة"),
new Question("صنف الماركسيون المجتمعات والدول ارتكازا على معيار التشكلة الإجتماعية", ["دول رأسمالية", "دول إشتراكية", "دول متخلفة", "جميع الأجوبة صحيحة"], "جميع الأجوبة صحيحة"),
new Question("يتحدد دور البرلمان في كل الأنظمة السياسية في", ["مراقبة العمل القضائي", "التشريع", "تنفيد الأحكام القضائية", "جميع الأجوبة صحيحة"], "التشريع"),
new Question("المصالح الخارجية تحدد", ["البعثات الدبلوماسية", "الحكومة", "الإدارة المركزية", "جميع الأجوبة صحيحة"], "البعثات الدبلوماسية"),
new Question("من خصائص المنظمة الدولية", ["الصفة الإتفاقية", "الصفة الدولية", "الصفة الدائمة", "جميع الأجوبة صحيحة"], "جميع الأجوبة صحيحة"),
new Question("من بين تصنيفات المنظمات حسب المعيار الكمي", ["المنظمات العامة", "المنظمات المتخصصة", "المنظمات ذات الطابع المحدود", "جميع الأجوبة صحيحة"], "المنظمات ذات الطابع المحدود"),
new Question("من بين مكونات منظمة الأمم المتحدة", ["الجمعية العامة", "مجلس الأمن الدولي", "مجلس الوصاية", "جميع الأجوبة صحيحة"], "جميع الأجوبة صحيحة"),
new Question("من خصائص المنظمات الدولية غير الحكومية", ["استهداف الربح", "تمتعها بالشخصية القانونية الدولية", "الطابع العقدي لتأسيسها", "جميع الأجوبة صحيحة"], "الطابع العقدي لتأسيسها"),
new Question("الدولة البسيطة هي", ["التي تكون فيها السلطة السياسية موحدة و غير موزعة", "التي تكون السلطة السياسية فيها موزعة بين هيئتين", "التي تكون السلطة السياسية فيها موزعة بين عدة هيئات", "جميع الأجوبة خاطئة"], "التي تكون فيها السلطة السياسية موحدة و غير موزعة"),
];


var quiz = new Quiz(questions);


populate();

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
new Question("علم الاقتصاد هو ما يقوم به الاقتصاديون، هو تعريف", ["ليونيل روبينز", "جاكوب فينر", "دافيد ريكاردو", "آرثر سيسل بيكو"], "جاكوب فينر"),
new Question("في تعريفه لعلم الاقتصاد، المفكر الذي يربط الاقتصاد بالمال هو:", ["آرثر سيسل بيكو", "فان ميزس", "آدم سميث", "كارل ماركس"], "آرثر سيسل بيكو"),
new Question("يعتبر علم الاقتصاد من", ["العلوم الاجتماعية", "العلوم اليونانية", "العلوم الحقة", "جواب آخر"], "العلوم الاجتماعية"),
new Question("في اطار أن علم الاقتصاد علم اجتماعي، فانه يهتم", ["بالسلوك الاقتصادي للفرد كمستهلك", "بالسلوك الاقتصادي للفرد كمنتج", "بعلاقة الفرد بباقي أفراد المجتمع", "جواب آخر"], "بعلاقة الفرد بباقي أفراد المجتمع"),
new Question("يدور موضوع علم الاقتصاد حول علاقة", ["الإنسان - الطبيعة", "الإنسان - الإنسان", "الطبيعة - الطبيعة", "جواب آخر"], "جواب آخر"),
new Question("يتجلى النشاط الاقتصادي من خلال", ["العلاقة المادية (الإنسان - الطبيعة)", "العلاقة الاجتماعية (الإنسان - الإنسان)", "العلاقة المزدوجة بين العلاقة المادية والعلاقة الاجتماعية", "جواب آخر"], "العلاقة المزدوجة بين العلاقة المادية والعلاقة الاجتماعية"),
new Question("علاقة الإنسان بالموارد الطبيعية هي", ["علاقة متحركة متغيرة", "علاقة ثابتة", "علاقة اقتصادية", "جواب آخر"], "علاقة متحركة متغيرة"),
new Question("تظهر علاقة الإنسان المتغيرة بالموارد الطبيعية من خلال", ["التطور الطبيعي", "التطور التكنولوجي", "التطور الفكري", "التطور الانساني"], "التطور التكنولوجي"),
new Question("يتمثل البعد الاجتماعي للنشاط الاقتصادي في أن الإنسان", ["يهتم بدراسة طريقة استخدام الموارد النادرة", "يصطدم بقوى طبيعية يعمل دائما على إخضاعها", "عاجز على إنتاج كل ما يحتاجه بنفسه", "جواب آخر"], "عاجز على إنتاج كل ما يحتاجه بنفسه"),
new Question("علاقة علم الاقتصاد بالعلوم الأخرى تتمثل في ان", ["علم الاقتصاد يؤثر في العلوم الأخرى", "علم الاقتصاد يتأثر بالعلوم الأخرى", "علم الاقتصاد يؤثر و يتأثر بالعلوم الأخرى", "جواب آخر"], "علم الاقتصاد يؤثر و يتأثر بالعلوم الأخرى"),
];


var quiz = new Quiz(questions);


populate();

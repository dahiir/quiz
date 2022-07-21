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
new Question("الأصل الاصطلاحي لعلم الاقتصاد هو ", ["علم الثروة", "إدارة شؤون المنزل", "ما يقوم به الإقتصاديون", "عقلنة نشاط الإنسان الإقتصادي لما فيه خير الإنسان ورفاهيته"], "إدارة شؤون المنزل"),
new Question("واضع علم الاقتصاد الحديث", ["آدم سميث", "الفريد مارشال", "ليون فالراس", "كارل ماركس"], "آدم سميث"),
new Question("أصبح علم الإقتصاد علما مستقلا ، عندما", ["أصبح شاملا وجامعا لكل الموضوعات", "انفصلا أفكاره ونظرياته عن العلوم الأخرى وتناولها بشكل موضوعي", "تعددت واختلفت التعريفات له", "قام بدراسة العديد من القضايا التي تهتم بالفرد و المجتمع"], "انفصلا أفكاره ونظرياته عن العلوم الأخرى وتناولها بشكل موضوعي"),
new Question("بالنسبة لآدم سميث علم الاقتصاد هو", ["إدارة شؤون المنزل", "العلم الذي يدرس سلوك الإنسان إزاء حاجاته المتعددة ووسائله المحدودة", "علم الثروة", "جواب آخر"], "علم الثروة"),
new Question("علم الاقتصاد هو العلم الذي يدرس سلوك الإنسان إزاء حاجاته المتعددة ووسائله المحدودة ذات الاستعمالات المتنوعة، هو تعريف", ["الفريد مارشال", "ليونيل روبيز", "جاكوب فينر", "جون كامبل"], "ليونيل روبيز"),
new Question("المفكر الذي يركز في تعريفه لعلم الاقتصاد على كيفية الحصول على الدخل، وكيفية استخدامه", ["ليونيل روبينز", "آدم سميث", "فان ميزس", "الفريد مارشال"], "الفريد مارشال"),
new Question("علم الاقتصاد بنظر ليونيل روبينز هو", ["التوفير", "علم زيادة الثروة", "كيفية حصوله على الدخل", "إدارة الموارد من أجل تعظيم المنفعة"], "التوفير"),
new Question("علم الاقتصاد علم إدارة الموارد من أجل تعظيم المنفعة و الحصول على أكبر إشباع للحاجيات، هو تعريف", ["جاكوب فينر", "آرثر سيسل بيكو", "جون كامبل", "ليونيل روبينز"], "جون كامبل"),
new Question("الاقتصاد هو الطريقة التي نوجد بها المال، و تأثير هذا المال على الفعاليات الاقتصادية، هو تعريف", ["ليونيل روبينز", "جاكوب فينر", "جون كامبل", "آرثر سيسل بيكو"], "آرثر سيسل بيكو"),
new Question("علم الاقتصاد بنظر فان ميزس هو", ["التوفير", "المنطق الذي يتم به اتخاذ القرارات العقلانية في السراء و الضراء", "إدارة الموارد من أجل تعظيم المنفعة", "الطريقة التي نوجد بها المال"], "المنطق الذي يتم به اتخاذ القرارات العقلانية في السراء و الضراء"),
];


var quiz = new Quiz(questions);


populate();

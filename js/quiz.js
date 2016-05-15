function Quiz() {
	this.questions = [];
	this.nowAsking = 0;
	this.score = 0;
};

Quiz.prototype.add = function(questionsList) {
	for (var i = 0; i < questionsList.length; i++) {
		this.questions.push(new Question(questions[i][0], questions[i][1], questions[i][2]));
	};
};

Quiz.prototype.start = function() {
	this.refeshUI();
	this.questions[this.nowAsking].toHTML();
};

Quiz.prototype.nextQuestion = function () {
	var self = this;
	this.nowAsking++;

	if(!this.questions[this.nowAsking]) {
		setTimeout(function () {
			self.finish()
		}, 1000);
	} else {
		setTimeout(function () {
			self.questions[self.nowAsking].toHTML();
			self.refeshUI();
		}, 1000);
	}	
};

Quiz.prototype.finish = function () {
	var quizHTML = document.getElementById('quiz');
	var questionsHTML = document.getElementById('questions');
	quizHTML.removeChild(questionsHTML);

	var finalMessage = document.getElementById('question');
	finalMessage.innerHTML = 'That\'s it! Your final score is ' + this.score;
};

Quiz.prototype.updateScore = function (selectedChoice) {
	if(this.questions[this.nowAsking].isRightChoice(selectedChoice)) {
		this.score++;
	}
};

Quiz.prototype.response = function (selectedChoice) {
	var messageChoice = document.getElementById('message-choice-' + selectedChoice);
	var btnChoice = document.getElementById('guess' + selectedChoice);

	if(this.questions[this.nowAsking].isRightChoice(selectedChoice)) {
		messageChoice.style.color = "green";
		btnChoice.style.background = "green";
		messageChoice.innerHTML = 'Right!';
	} else {
		messageChoice.style.color = "red";
		btnChoice.style.background = "red";
		messageChoice.innerHTML = 'Wrong';
	}
};

Quiz.prototype.refeshUI = function() {
	var scoreHTML = document.getElementById('score');
	scoreHTML.innerHTML = 'Score: ' + this.score;

	var progressHTML = document.getElementById('progress');
	progressHTML.innerHTML = 'Question ' + (this.nowAsking + 1)  + ' of ' + this.questions.length;

	var messageChoice0 = document.getElementById('message-choice-0');
	var messageChoice1 = document.getElementById('message-choice-1');
	messageChoice0.innerHTML = '';
	messageChoice1.innerHTML = '';

	var btnChoice0 = document.getElementById('guess0');
	var btnChoice1 = document.getElementById('guess1');
	btnChoice0.style.background = "#52bab3";
	btnChoice1.style.background = "#52bab3";

	enableBtn();
};
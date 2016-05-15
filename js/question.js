function Question(questionText, choices, rightChoice) {
	this.questionText = questionText;
	this.choices = choices;
	this.rightChoice = rightChoice;
}

Question.prototype.isRightChoice = function(selectedChoice) {
	return selectedChoice === this.rightChoice;
}

Question.prototype.toHTML = function() {
	var questionHTML = document.getElementById('question');
	var choice0HTML = document.getElementById('choice0');
	var choice1HTML = document.getElementById('choice1');

	questionHTML.innerHTML = this.questionText;
	choice0HTML.innerHTML = this.choices[0];
	choice1HTML.innerHTML = this.choices[1];
}
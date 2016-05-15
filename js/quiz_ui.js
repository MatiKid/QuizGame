var guess0Button = document.getElementById('guess0');
var guess1Button = document.getElementById('guess1');

guess0Button.onclick = function() {
	var choiceNum = 0;

	disableBtn();
	quiz.updateScore(choiceNum);
	quiz.response(choiceNum);
	quiz.nextQuestion();
};

guess1Button.onclick = function() {
	var choiceNum = 1;

	disableBtn();
	quiz.updateScore(choiceNum);
	quiz.response(choiceNum);
	quiz.nextQuestion();
};

function disableBtn() {
	guess0Button.disabled = true;
	guess1Button.disabled = true;
}

function enableBtn() {
	guess0Button.disabled = false;
	guess1Button.disabled = false;
}
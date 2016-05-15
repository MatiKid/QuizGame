var quiz = new Quiz();

var questions = [
	['Where do the events in "A moveable feast" take place? ', ['Paris', 'Madrid'], 0],
	['What was Hemingway middle name?', ['Francis', 'Miller'], 1],
	['What book won him a Nobel prize?', ['For Whom the Bell Tolls', 'The Old Man and the Sea'], 1],
	['What\' the name of the main character in "For Whom the Bell Tolls"?', ['Robert Jordan', 'Richard Cox'], 0],
	['What year did Hemingway died in?', ['1961', '1974'], 0]
];

quiz.add(questions);

quiz.start();
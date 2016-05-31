var answers = [
	{
		qNum:0,
		correct:3
	},
	{
		qNum:1,
		correct:1
	},
	{
		qNum:2,
		correct:4
	},
	{
		qNum:3,
		correct:2
	},
	{
		qNum:4,
		correct:3
	}
];

var currentQuestion = 0;
var answer = 0;
var score = 0;

$('#seeinstructions').click(function() {
	$('.instructions').show(800);
});

$('#hideinstructions').click(function() {
	$('.instructions').hide(800);
});

$(".form input").on('change', function() {
	if(currentQuestion == 0) {
		answer = $("input[name=question1]:checked", ".form").val();
	}
	else if (currentQuestion == 1) {
		answer = $("input[name=question2]:checked", ".form").val();
	}
	else if (currentQuestion == 2) {
		answer = $("input[name=question3]:checked", ".form").val();
	}
	else if (currentQuestion == 3) {
		answer = $("input[name=question4]:checked", ".form").val();
	}
	else if (currentQuestion == 4) {
		answer = $("input[name=question5]:checked", ".form").val();
	}
	else return;
});

$('.quizgame').on("click", "#submit", function () {
	checkscore();
	return false;
})

function checkscore() {
	console.log(answer);
	console.log(currentQuestion);
	if(answer == answers[currentQuestion].correct) {
		addscore();
	}
	else {
		noscore();
	}

}

function addscore() {

	scoreadd();
	if(currentQuestion == 0) {
		$('#question1').hide();
		$('#answer1correct').show();
	}
	else if(currentQuestion == 1) {
		$('#question2').hide();
		$('#answer2correct').show();
	}
	else if(currentQuestion == 2) {
		$('#question3').hide();
		$('#answer3correct').show();
	}
	else if(currentQuestion == 3) {
		$('#question4').hide();
		$('#answer4correct').show();
	}
	else if(currentQuestion == 4) {
		$('#question5').hide();
		$('#answer5correct').show();
	}
	else return;
	currentQuestion++;
}

function noscore () {
	if(currentQuestion == 0) {
		$('#question1').hide();
		$('#answer1incorrect').show();
	}
	else if(currentQuestion == 1) {
		$('#question2').hide();
		$('#answer2incorrect').show();
	}
	else if(currentQuestion == 2) {
		$('#question3').hide();
		$('#answer3incorrect').show();
	}
	else if(currentQuestion == 3) {
		$('#question4').hide();
		$('#answer4incorrect').show();
	}
	else if(currentQuestion == 4) {
		$('#question5').hide();
		$('#answer5incorrect').show();
	}
	currentQuestion++;
}

function scoreadd() {
	$('#assignat-list').append('<li>' + '<img src="images/assignat.gif" height=60>' + '</li>');
	score++;
	return false;
}

$('#question1correct').click(function() {
	$('#answer1correct').hide();
	$('#question2').show();
})

$('#question1incorrect').click(function() {
	$('#answer1incorrect').hide();
	$('#question2').show();
})

$('#question2correct').click(function() {
	$('#answer2correct').hide();
	$('#question3').show();
})

$('#question2incorrect').click(function() {
	$('#answer2incorrect').hide();
	$('#question3').show();
})

$('#question3correct').click(function() {
	$('#answer3correct').hide();
	$('#question4').show();
})

$('#question3incorrect').click(function() {
	$('#answer3incorrect').hide();
	$('#question4').show();
})

$('#question4correct').click(function() {
	$('#answer4correct').hide();
	$('#question5').show();
})

$('#question4incorrect').click(function() {
	$('#answer4incorrect').hide();
	$('#question5').show();
})

$('#question5correct').click(function() {
	$('#answer5correct').hide();
	$('#thescore').text(score);
	if(score < 5) {
		$('#congrats').text('');
		$('#final').text('Try again and get them all right!');
		$('#image').text('');
	}
	else {
		$('#congrats').text('Congratulations!');
		$('#image').html('<img src="images/declaration.jpg">');
		$('#final').text('You\'ve won a copy of the Declaration of the Rights of Man, conceived by the Marquis de Lafayette and intended to be the basis of enlightened rule in post-Revolutionary France (of course, it was never actually used as such, but it\'s the thought that counts.)');
	}
	$('.results').show();
})

$('#question5incorrect').click(function() {
	$('#answer5incorrect').hide();
	$('#thescore').text(score);
	if(score < 5) {
		$('#congrats').text('');
		$('#final').text('Try again and get them all right!');
		$('#image').text('');
	}
	$('.results').show();
})

$('#newgame').click(function () {
	$('#assignat-list').empty();
	$('#question2').hide();
	$('#question3').hide();
	$('#question4').hide();
	$('#question5').hide();
	$('#answer1correct').hide();
	$('#answer2correct').hide();
	$('#answer3correct').hide();
	$('#answer4correct').hide();
	$('#answer5correct').hide();
	$('#answer1incorrect').hide();
	$('#answer2incorrect').hide();
	$('#answer3incorrect').hide();
	$('#answer4incorrect').hide();
	$('#answer5incorrect').hide();
	$('.results').hide();
	$('#question1').show();
	score = 0;
	currentQuestion = 0;
	answer = 0;
	$('input[name=question1]').attr('checked',false);
	$('input[name=question2]').attr('checked',false);
	$('input[name=question3]').attr('checked',false);
	$('input[name=question4]').attr('checked',false);
	$('input[name=question5]').attr('checked',false);
})
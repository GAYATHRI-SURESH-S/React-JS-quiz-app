import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which of the following best describes React?',
			answerOptions: [
				{ answerText: 'Library', isCorrect: false },
				{ answerText: 'Framework', isCorrect: true },
			],
		},
		{
			questionText: 'Who played the role of Harry Potter?',
			answerOptions: [
				{ answerText: 'Daniel Radcliffe', isCorrect: true },
				{ answerText: 'Vin Diesel', isCorrect: false },
				{ answerText: 'Rock', isCorrect: false },
				{ answerText: 'Rupert Grint', isCorrect: false },
			],
		},
		{
			questionText: 'Deepest point on Earth?',
			answerOptions: [
				{ answerText: 'Pacific Trench', isCorrect: false },
				{ answerText: 'Rosling Point', isCorrect: false },
				{ answerText: 'Mariana Trench', isCorrect: true },
				{ answerText: 'Joanna Trench', isCorrect: false },
			],
		},
		{
			questionText: 'CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Sundar Pichai', isCorrect: false },
				{ answerText: 'Larry Page', isCorrect: false },
				{ answerText: 'Jeff Bezos', isCorrect: false },
			],
		
		},
		{
			questionText : 'Which comany owns phonepay?',
			answerOptions: [
				{ answerText : 'Amazon', isCorrect:false},
				{ answerText: 'Myntra', isCorrect: false},
				{ answerText: 'Flipkart', isCorrect : true},
				{ answerText: 'Walmart' , isCorrect: false},
			]
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [remarks,setRemarks] = useState('');

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(prevscore=>prevscore + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			if({score}>3) {
				setRemarks('Great job!');
			} else {
				setRemarks('Try next time..');
			}
		}
	};

	
	return (
		<>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length} and {setRemarks} 
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		
		</>
	);
}

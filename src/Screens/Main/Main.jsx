import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
function Main() {
  //Create Quest and Answer
  const questions = [
    {
      questionText: 'Kim tử tháp Giza và tượng nhân sư vĩ đại nằm ở',
      answerOptions: [
        {
          answerText: 'Hà Lan',
          isCorrect: false,
        },
        {
          answerText: 'Ai Cập',
          isCorrect: true,
        },
        {
          answerText: 'Mỹ',
          isCorrect: false,
        },
        {
          answerText: 'Đức',
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        'Nếu bạn rơi xuống một cái lỗ không có không khí, không ma sát đi khắp Trái đất, sẽ mất bao lâu để rơi sang phía bên kia? (Đến phút gần nhất.)',
      answerOptions: [
        {
          answerText: '1 Tiếng',
          isCorrect: false,
        },
        {
          answerText: '19 Phút',
          isCorrect: false,
        },
        {
          answerText: '33 Phút',
          isCorrect: false,
        },
        {
          answerText: '42 Phút',
          isCorrect: true,
        },
      ],
    },
    {
      questionText: 'Ai đã phát minh ra máy hát?',
      answerOptions: [
        {
          answerText: 'Emile Berliner',
          isCorrect: true,
        },
        {
          answerText: 'Steve Jobs',
          isCorrect: false,
        },
        {
          answerText: 'Jack Ma',
          isCorrect: false,
        },
        {
          answerText: 'Marissa Mayer',
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'Đấu trường La Mã nằm ở',
      answerOptions: [
        {
          answerText: 'Iran',
          isCorrect: false,
        },
        {
          answerText: 'Qatar',
          isCorrect: false,
        },
        {
          answerText: 'Turkey',
          isCorrect: false,
        },
        {
          answerText: 'Ý',
          isCorrect: true,
        },
      ],
    },
    {
      questionText: 'Angkor Wat nằm ở',
      answerOptions: [
        {
          answerText: 'Campuchia',
          isCorrect: true,
        },
        {
          answerText: 'Nhật Bản',
          isCorrect: false,
        },
        {
          answerText: 'Turkey',
          isCorrect: false,
        },
        {
          answerText: 'Úc',
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'Đài tưởng niệm Azadi nằm ở',
      answerOptions: [
        {
          answerText: 'Pháp',
          isCorrect: false,
        },
        {
          answerText: 'Iran',
          isCorrect: true,
        },
        {
          answerText: 'Mỹ',
          isCorrect: false,
        },
        {
          answerText: 'Brazil',
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'Stonehenge nằm ở',
      answerOptions: [
        {
          answerText: 'Bắc Triều Tiên',
          isCorrect: false,
        },
        {
          answerText: 'Nhật Bản',
          isCorrect: false,
        },
        {
          answerText: 'Thái Lan',
          isCorrect: false,
        },
        {
          answerText: 'Vương quốc Anh',
          isCorrect: true,
        },
      ],
    },
    {
      questionText: 'Cầu bến cảng Sydney nằm ở',
      answerOptions: [
        {
          answerText: 'Úc',
          isCorrect: true,
        },
        {
          answerText: 'Pháp',
          isCorrect: false,
        },
        {
          answerText: 'Thái Lan',
          isCorrect: false,
        },
        {
          answerText: 'Mỹ',
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'Taj Mahal nằm ở',
      answerOptions: [
        {
          answerText: 'Thái Lan',
          isCorrect: false,
        },
        {
          answerText: 'Ấn Độ',
          isCorrect: true,
        },
        {
          answerText: 'Thái Lan',
          isCorrect: false,
        },
        {
          answerText: 'Iran',
          isCorrect: false,
        },
      ],
    },
    {
      questionText: 'Tháp Juche nằm ở',
      answerOptions: [
        {
          answerText: 'Bắc Triều Tiên',
          isCorrect: true,
        },
        {
          answerText: 'Mỹ',
          isCorrect: false,
        },
        {
          answerText: 'Ấn Độ',
          isCorrect: false,
        },
        {
          answerText: 'Iran',
          isCorrect: false,
        },
      ],
    },
  ];

  //Vi tri cau hoi
  const [currentQuestion, setCurrentQuesttion] = useState(0);

  const [showScore, setShowCore] = useState(false);

  const [score, setScore] = useState(0);

  const [playAgain, setPlayAgain] = useState(false);
  //Handle Next Question
  const handleQAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuesttion(nextQuestion);
    } else {
      setShowCore(true);
    }
  };
  //Update PlayAgain when score Changed
  useEffect(() => {
    const length = questions.length;
    if (score === length) {
      setPlayAgain(false);
    }
    if (score < length) {
      setPlayAgain(true);
    }
  }, [score]);
  //Handle Play Again
  const handlePlayAgain = () => {
    if (score < questions.length) {
      setCurrentQuesttion(0);
      setScore(0);
      setShowCore(false);
    }
  };

  return (
    <div className="main">
      {showScore ? (
        <div className="main__showcore">
          <h1>
            {' '}
            You scored {score} out of {questions.length}
          </h1>
          {playAgain ? (
            <button
              className="main__showcore__playAgain"
              onClick={handlePlayAgain}
            >
              Play again
            </button>
          ) : (
            <Link to="/quest2" className="main__showcore__nextQuest">
              Next Quest
            </Link>
          )}
        </div>
      ) : (
        <div className="main__content">
          <div className="main__content__left">
            <h1 className="main__content__left__length">
              Question {currentQuestion + 1}/<span>{questions.length}</span>
            </h1>
            <p className="questText">
              {questions[currentQuestion].questionText}
            </p>
          </div>
          <div className="main__content__right">
            {questions[currentQuestion].answerOptions.map(
              (answerOptions, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      handleQAnswerButtonClick(answerOptions.isCorrect);
                    }}
                    className="item"
                  >
                    {answerOptions.answerText}
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;

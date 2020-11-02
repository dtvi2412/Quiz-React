import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ViewAnswer from '../../Components/ViewAnswer/ViewAnswer';

import './Main.scss';
function Main() {
  //Create Quest and Answer
  const questions = [
    {
      questionText: 'Kim tử tháp Giza và tượng nhân sư vĩ đại nằm ở',
      image:
        'https://znews-photo.zadn.vn/w660/Uploaded/ngtmns/2015_05_26/galacticconnectioncomSphinx1_img.jpg',
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
      image:
        'https://kenh14cdn.com/thumb_w/620/2017/traidat2-1489474689711.jpg',
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
      image:
        'https://ichef.bbci.co.uk/news/640/cpsprodpb/3C9C/production/_99661551_a.jpg',
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
      image:
        'https://vyctravel.com/libs/upload/ckfinder/images/La%20M%C3%A3/Colosseum%206.png',
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
      image:
        'https://media.ex-cdn.com/EXP/media.phatgiao.org.vn/files/lan.anh/2019/01/08/tin-pg-campuchia-5-1101.jpg',
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
      image:
        'https://samgoshare.com/wp-content/grand-media/image/resized_ND8_1193.jpg',
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
          answerText: 'Vương quốc Bhutan',
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
      image:
        'https://icdn.dantri.com.vn/zoom/1200_630/2018/4/12/tang-da-hoc-15235013336031405106842.jpg',
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
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/SydneyHarbourBridge1_gobeirne.jpg',
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
      image: 'https://cdnmedia.thethaovanhoa.vn/2012/05/30/15/33/1.jpg',
      answerOptions: [
        {
          answerText: 'Turkmenistan',
          isCorrect: false,
        },
        {
          answerText: 'Ấn Độ',
          isCorrect: true,
        },
        {
          answerText: 'Nhà nước Palestine',
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
      image:
        'https://mcnewsmd1.keeng.net/tiin/archive/images/2018/04/28/160516_world_records_union.jpg',
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

      //Set View Answer
      setCountPlay(countPlay + 1);
    }
  };

  // Start Quizz
  const [start, setStart] = useState(false);

  //View Answer
  const [viewAnswer, setViewAnswer] = useState(false);
  const handleCloseViewAnswer = () => {
    setViewAnswer(false);
  };
  const handleViewAnswer = () => {
    setViewAnswer(true);
  };

  const [countPlay, setCountPlay] = useState(0);
  const handlePlayQuiz = () => {
    setStart(true);
    setCountPlay(countPlay + 1);
  };

  return (
    <div className="main">
      {/*Go Start Quest App */}
      {start ? (
        <>
          {/* If max length return play again or next quest  */}
          {showScore ? (
            <div className="main__showcore">
              <h1>
                Bạn đúng {score} câu trong {questions.length} câu
              </h1>
              {playAgain ? (
                <div className="main__showcore__playAgain">
                  <button
                    className="main__showcore__playAgain__button choiLai"
                    onClick={handlePlayAgain}
                  >
                    Chơi lại
                  </button>
                  {countPlay >= 2 && (
                    <button
                      className="main__showcore__playAgain__button"
                      onClick={handleViewAnswer}
                    >
                      Xem đáp án
                    </button>
                  )}
                </div>
              ) : (
                <Link to="/quest2" className="main__showcore__nextQuest">
                  Chủ để tiếp theo
                </Link>
              )}
            </div>
          ) : (
            <div className="main__content">
              <div className="main__content__left">
                <h1 className="main__content__left__length">
                  Câu hỏi {currentQuestion + 1}/<span>{questions.length}</span>
                </h1>
                <p className="questText">
                  {questions[currentQuestion].questionText}
                </p>
                {questions[currentQuestion].image && (
                  <div className="main__content__left__img">
                    <img
                      src={questions[currentQuestion].image}
                      alt="img-quest"
                    />
                  </div>
                )}
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
        </>
      ) : (
        <div
        // style={{
        //   display: 'flex',
        //   flexDirection: 'column',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   position: 'absolute',
        //   top: '50%',
        //   left: '50%',
        //   transform: 'translate(-50%,-50%)',
        // }}
        >
          <button className="main__start" onClick={() => handlePlayQuiz()}>
            Lịch Sử Thế Giới
          </button>
          {/* <Link
            to="quest2"
            className="main__start"
            onClick={() => handlePlayQuiz()}
          >
            Âm Nhạc
          </Link> */}
        </div>
      )}
      {viewAnswer && (
        <ViewAnswer viewAnswer={handleCloseViewAnswer} questions={questions} />
      )}
    </div>
  );
}

export default Main;

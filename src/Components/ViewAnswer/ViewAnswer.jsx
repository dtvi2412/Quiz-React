import React from 'react';
import './ViewAnswer.scss';
function ViewAnswer({ viewAnswer, questions }) {
  const renderQuestion = () => {
    return questions.map((item, index) => {
      <React.Fragment key={index}></React.Fragment>;
      return item.answerOptions.map((item2, index1) => {
        if (item2.isCorrect === true) {
          return (
            <div className="item" key={index1}>
              <h1>
                {index + 1}/{item.questionText}
              </h1>
              <h2>{item2.answerText}</h2>
            </div>
          );
        }
      });
    });
  };
  return (
    <div className="viewAnswer">
      <div className="viewAnswer__content">
        <div className="viewAnswer__content__close" onClick={viewAnswer}>
          X
        </div>
        <div className="viewAnswer__content__render">{renderQuestion()}</div>
      </div>
    </div>
  );
}

export default ViewAnswer;

import React from "react";

function QuestionItem({ question, handleDeleteQ, onUpdateQ }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => handleDeleteQ(question))
  }

  function handleUpdatedAnswer(value) {
    // console.log(value);
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "correctIndex": parseInt(value)
      }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => onUpdateQ(updatedQuestion))
  }


  // make a patch request
  // set state (up in App)

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => handleUpdatedAnswer(e.target.value)}>{options} </select>
      </label>
      <button onClick={handleDeleteClick}>
        Delete Question
      </button>
    </li>
  );
}

export default QuestionItem;

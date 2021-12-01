import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDeleteQ, onUpdateQ}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem key={question.id} question={question} handleDeleteQ={handleDeleteQ} onUpdateQ={onUpdateQ} />
      ))}</ul>
    </section>
  );
}

export default QuestionList;

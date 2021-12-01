import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => setQuestions(items));
  }, []);

  function handleAddQ(newQ){
    setQuestions([...questions, newQ]);
  }

  function handleDeleteQ(deletedQ) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQ.id);
    setQuestions(updatedQuestions);
  }

  function handleUpdateQ(updatedQ){
    setQuestions([...questions, updatedQ]);
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQ={handleAddQ}  /> : <QuestionList
      questions={questions}
      handleDeleteQ={handleDeleteQ}
      onUpdateQ={handleUpdateQ}
      />}
    </main>
  );
}

export default App;

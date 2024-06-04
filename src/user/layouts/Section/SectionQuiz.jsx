import { useState } from "react";
import SectionHasil from "./SectionHasil";

const SectionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(0);

  const questions = [
    {
      id: 1,
      text: "Ketika anak melakukan sebuah kesalahan atau melanggar aturan, apa yang Ayah/Bunda lakukan?",
      answers: [
        {
          id: "a",
          text: "a. Mewajarkan apabila kesalahan kecil dan memberikan tindakan ketika mengalami hal yang serius",
          isCorrect: false,
        },
        {
          id: "b",
          text: "b. Memberikan hukuman",
          isCorrect: false,
        },
        {
          id: "c",
          text: "c. Membiarkan segala kesalahan dan berharap anak dapat belajar dari kesalahannya",
          isCorrect: false,
        },
        {
          id: "d",
          text: "d. Tidak memperdulikannya",
          isCorrect: false,
        },
        {
          id: "e",
          text: "e. Memberikan kebebasan penuh kepada anak dan selalu memenuhi keinginannya, tanpa memberikan batasan yang jelas",
          isCorrect: true,
        },
      ],
    },
    {
      id: 2,
      text: "Ketika anak memberikan pendapat atau mengambil keputusan yang bersebrangan,  apa yang Ayah/Bunda lakukan?",
      answers: [
        {
          id: "a",
          text: "a. Mengabaikan kehendak anak dan harus sesuai kemauannya",
          isCorrect: false,
        },
        {
          id: "b",
          text: "b. Mewajarkan dan membiarkan anak mengambil keputusannya dengan diawasi ",
          isCorrect: true,
        },
        {
          id: "c",
          text: "c. Membiarkan segala keputusan yang diambil anak",
          isCorrect: false,
        },
        {
          id: "d",
          text: "d. Diskusikan dengan anak dalam pengambilan keputusan, dengan tetap menghormati dan mempertimbangkan pendapat anak",
          isCorrect: false,
        },
        {
          id: "e",
          text: "e. Mendengarkan dan membenarkan keputusan anak",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: "Bagaimana cara ayah bunda membatasi tindakan anak?",
      answers: [
        {
          id: "a",
          text: "a. Tidak memberikan aturan dan memberikan kebebasan dengan pengawasan",
          isCorrect: false,
        },
        {
          id: "b",
          text: "b. Sama sekali tidak memberikan aturan dan tidak memberikan pengawasan",
          isCorrect: true,
        },
        {
          id: "c",
          text: "c. Memberikan aturan dan menghukum ketika dilanggar bahkan memberikan kontak fisik, seperti pukulan atau sebagainya",
          isCorrect: false,
        },
        {
          id: "d",
          text: "d. Memberikan hukuman ketika melewati batas",
          isCorrect: false,
        },
        {
          id: "e",
          text: "e. Memberikan kebebasan yang cukup luas, tetapi tetap dengan pengawasan yang minimal",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: "Ketika anak mengalami kesulitan, apa yang ayah bunda lakukan?",
      answers: [
        {
          id: "a",
          text: "a. Membiarkan kemandirian pada anak",
          isCorrect: false,
        },
        {
          id: "b",
          text: "b. Mengabaikan anak",
          isCorrect: true,
        },
        {
          id: "c",
          text: "c. Membantu setiap kesulitan yang dialami anak",
          isCorrect: false,
        },
        {
          id: "d",
          text: "d. Membantu jika benar-benar kesulitan dan membiarkan anak bila kesulitan tersebut wajar ",
          isCorrect: false,
        },
        {
          id: "e",
          text: "e. Memberikan dukungan dan bimbingan, namun mendorong anak untuk mencoba menyelesaikan masalah sendiri terlebih dahulu",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      text: "Bagaimana Ayah/Bunda merespon ketika anak mendapatkan prestasi?",
      answers: [
        {
          id: "a",
          text: "a. Memberikan pujian dan apresiasi yang sesuai, serta mendorong untuk terus berprestasi",
          isCorrect: false,
        },
        {
          id: "b",
          text: "b. Memberikan pujian, namun tidak memberikan hadiah atau apresiasi lebih lanjut",
          isCorrect: true,
        },
        {
          id: "c",
          text: "c. Memberikan pujian dan hadiah yang berlebihan",
          isCorrect: false,
        },
        {
          id: "d",
          text: "d. Menganggap itu adalah kewajiban anak dan tidak memberikan apresiasi khusus",
          isCorrect: false,
        },
        {
          id: "e",
          text: "e. Tidak memberikan respon atau apresiasia",
          isCorrect: false,
        },
      ],
    },
  ];

  const handleAnswerChange = (questionId, answerId) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));

    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      setProgress(((nextQuestion + 1) / questions.length) * 100);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      const prevQuestion = currentQuestion - 1;
      setCurrentQuestion(prevQuestion);
      setProgress(((prevQuestion + 1) / questions.length) * 100);
    }
  };

  // const getScore = () => {
  //   let score = 0;
  //   questions.forEach((question) => {
  //     const selectedAnswer = selectedAnswers[question.id];
  //     if (selectedAnswer && question.answers.find((answer) => answer.id === selectedAnswer && answer.isCorrect)) {
  //       score++;
  //     }
  //   });
  //   return score;
  // };

  return (
    <div className=" min-h-screen font-primary">
      <div className="max-w-screen-xl mx-auto  bg-gray-50 mb-8">
        {isFinished ? (
          <div className="">
            <SectionHasil />
          </div>
        ) : (
          <div className="py-12 px-24">
            {currentQuestion > 0 && (
              <button onClick={handleBack} className="mb-4 px-4 py-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-4">Kenali Gaya Parentingmu!</h2>
              <p className="mb-6 font-medium text-2xl">
                {currentQuestion + 1}/{questions.length}
              </p>
              <div className="progress-bar bg-gray-200 h-2 rounded-full overflow-hidden mb-4">
                <div className="progress bg-blue-500 h-full" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <p className="my-6 text-lg font-secondary text-center">{questions[currentQuestion].text}</p>
            <div>
              {questions[currentQuestion].answers.map((answer) => (
                <div key={answer.id} className="flex items-center mb-4">
                  <div className="border px-4 py-6 rounded-lg w-full bg-sky-100 hover:bg-sky-200">
                    <input
                      type="radio"
                      name={`answer-${questions[currentQuestion].id}`}
                      id={answer.id}
                      value={answer.id}
                      checked={selectedAnswers[questions[currentQuestion].id] === answer.id}
                      onChange={() => handleAnswerChange(questions[currentQuestion].id, answer.id)}
                      className="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300  focus:ring-blue-500 focus:bg-blue-500 dark:focus:ring-blue-600 focus:ring-2 "
                    />
                    <label htmlFor={answer.id} className="ml-4 font-medium text-md text-gray-700 dark:text-gray-300">
                      {answer.text}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionQuiz;

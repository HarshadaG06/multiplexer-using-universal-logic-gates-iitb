/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function () {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label name="label${questionNumber}">
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      if (questionNumber == 0) {
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <img src="${currentQuestion.src}" width='700' height='400' />
          <div class="answers"> ${answers.join("")} </div>`
        );
      } else {
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
        );
      }
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    console.log("Show Results");
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      /* <MODIFIED> */
      let index = -1;
      var labels = document.getElementsByName("label" + questionNumber);
      resetLabels = () => {
        for (var i = 0; i < labels.length; i++) {
          labels[i].style.color = "black";
        }
      };
      /* </MODIFIED> */

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        /* <MODIFIED> */
        resetLabels();
        /* </MODIFIED> */

        // answerContainers[questionNumber].style.color = "black";

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red

        /* <MODIFIED> */
        switch (userAnswer) {
          case "a":
            index = 0;
            break;
          case "b":
            index = 1;
            break;
          case "c":
            index = 2;
            break;
          case "d":
            index = 3;
            break;
        }

        if (index !== -1) {
          resetLabels();
          document.getElementsByName("label" + questionNumber)[
            index
          ].style.color = "red";
        } else {
          answerContainers[questionNumber].style.color = "red";
          // answerContainers[questionNumber].style.color = "red";
        }
        /* </MODIFIED> */
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  /////////////////////////////////////////////////////////////////////////////

  /////////////////////// Do not modify the above code ////////////////////////

  /////////////////////////////////////////////////////////////////////////////

  /////////////// Write the MCQ below in the exactly same described format ///////////////

  const myQuestions = [
    {
      question:
        "A multiplexer using basic gates is shown in the figure given image002. If A = B = 11 and D0 D1 D2 D3 = 1001, then the output of the circuit is:", ///// Write the question inside double quotes
      src: "images/Ex2preQ1.png",
      answers: {
        a: "zero", ///// Write the option 1 inside double quotes
        b: "one", ///// Write the option 2 inside double quotes
        //c: "ω=(m/k)^1/2",                  ///// Write the option 3 inside double quotes
        // d: "ω=(km)^1/2"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b", ///// Write the correct option inside double quotes
    },

    {
      question:
        "What if the select inputs in image002are set to A = B = 0 1 and the data inputs are set to D0 D1 D2 D3 = 0100? The output Y is:", ///// Write the question inside double quotes
      answers: {
        a: "zero", ///// Write the option 1 inside double quotes
        b: "one", ///// Write the option 2 inside double quotes
        // c: "V^2",                  ///// Write the option 3 inside double quotes
        //d: "1/V"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b", ///// Write the correct option inside double quotes
    }, ///// To add more questions, copy the section below
    ///// this line

    // REMOVED QUESTION 3, as WRITTEN IN REVIEWS

    // {
    //   question:
    //     "What if the select inputs in image002are set to A = B = 0 0 and D0 D1 D2 D3 = 0010? The output Y is:",
    //   answers: {
    //     a: "zero",
    //     b: "one",
    //     // c: "spring-mass system",
    //     // d: "fluid pressure"
    //   },
    //   correctAnswer: "a",
    // },

    {
      question: "How many select lines are required for a 4: 1 Mux?",
      answers: {
        a: "Two",
        b: "Four",
        c: "Five",
        d: "Eight",
      },
      correctAnswer: "a",
    },

    {
      question:
        "Any multiplexer can be designed using universal logic gates. State True or False.",
      answers: {
        a: "True",
        b: "False",
        // c: "Option 3",
        //d: "Option 4"
      },
      correctAnswer: "a",
    },

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */
  ];

  /////////////////////////////////////////////////////////////////////////////

  /////////////////////// Do not modify the below code ////////////////////////

  /////////////////////////////////////////////////////////////////////////////

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

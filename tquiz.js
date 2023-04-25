function checkAnswers(){
   
  let score=0;
 
      quiz= document.forms.quiz.elements;
 
   answer1= quiz.q1.value;
  
     if(answer1=="A goat herder"){
      score = score +1;
   }
  
   answer2 = quiz.q2.value;
        if(answer2=="Eaten and excreted whole by a wild-cat"){
          score = score +1;
         }
   answer3 = quiz.q3.value;
         if(answer3=="Forced out"){
           score = score +1;
          }
   answer4 = quiz.q4.value;
          if(answer4=="Bushes"){
            score = score +1;
           }
   answer5 = quiz.q5.value;
           if(answer5=="Brazil"){
             score = score +1;
            }
   answer6 = quiz.q6.value;
            if(answer6=="Finland"){
              score = score +1;
             }
   
       alert("Well done! your score was......" + score);

  }
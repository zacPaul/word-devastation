const URL = "http://localhost:3000";

fetch(URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    console.log(myJson);
  
    const word = myJson[0].lemma;

    const wordDef = myJson[0].definition;
 
    const charArray = word.split('');
  
    const answers = document.querySelector('#answer');
  
    let count = document.querySelector('#count');
    count.innerHTML = '&nbsp;';
  
    let score = document.querySelector('#score');
  
    const guess = {
      letters: [],
      count: 0,
      correct: 0,
      score: 120,
    }

    document.addEventListener("keyup", logKey);
  
    function logKey(e){

      answers.innerHTML = '';
      
      if(/^([a-z])/.test(e.key)){
        
        if(guess.letters.includes(e.key)){
          window.alert("You already picked that letter");
        }else if(!charArray.includes(e.key)){
          guess.count += 1;
          guess.score += -20;
          guess.letters.push(e.key);
        }else{
          guess.correct += 1;
          guess.letters.push(e.key);
        }
                
      }
      
      
      
      charArray.forEach(function(value){
        let spans = document.createElement('div');
        answers.appendChild(spans);
        spans.setAttribute('class', 'letters');

        if(guess.letters.includes(value) || guess.letters.includes("-")){
          spans.innerHTML = value;
        }else{
          spans.innerHTML = '&nbsp;';
        }

      }); 
      
      const guesses = document.querySelector("#guesses")
        .innerHTML = "Guessed Letters:<br>&nbsp;" +                           guess.letters.toString().toUpperCase();
      
      count.innerHTML = "Number of incorrect guesses:<br>" + guess.count;
      
      score.innerHTML = "Score: " + guess.score;
      
    }
 
  });
       


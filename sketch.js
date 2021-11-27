var canvas, backgroundImage;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var correctanswer = 0;
var total = 0;
var on = 0;
var game;
var question, contestant, quiz;

class Game{
  constructor(){
      this.title = createElement('h1')
      this.input1 = createInput("Enter Your Name Here....");
      this.input2 = createInput("Enter Correct Option No..");
      this.button = createButton('Submit');
      this.button2 = createButton('Reset');
      this.question = createElement('h3');
      this.option1 = createButton('h4');
      this.option2 = createButton('h4');
      this.option3 = createButton('h4');
      this.option4 = createButton('h4');
      this.question2 = createElement('h3');
      this.option5 = createButton('h4');
      this.option6 = createButton('h4');
      this.option7 = createButton('h4');
      this.option8 = createButton('h4');
      this.question3 = createElement('h3');
      this.option9 = createButton('h4');
      this.option10 = createButton('h4');
      this.option11 = createButton('h4');
      this.option12 = createButton('h4');
      this.question4 = createElement('h3');
      this.option13 = createButton('h4');
      this.option14 = createButton('h4');
      this.option15 = createButton('h4');
      this.option16 = createButton('h4');
      this.question5 = createElement('h3');
      this.option17 = createButton('h4');
      this.option18 = createButton('h4');
      this.option19 = createButton('h4');
      this.option20 = createButton('h4');

  }
  display(){
    this.title.html("MyQuiz Game");
    this.title.position(0, 20);

    this.question.html("Question:- Which of these have the highest speed ? " );
    this.question.position(5, 70);
    this.option1.html("1: Aircraft" );
    this.option1.position(450, 120);
    this.option2.html("2: Light" );
    this.option2.position(5, 120);
    this.option3.html("3: Light and electricity both " );
    this.option3.position(5, 170);
    this.option4.html("4: EV cars" );
    this.option4.position(450, 170);


    this.question2.html("Question:- How much exactly is mass of a proton ?" );
    this.question2.position(150,220);
    this.option5.html("1: 9.1 *10 to power 20 kg" );
    this.option5.position(5, 270);
    this.option6.html("2: 1.672 *10 to power -24 Kg" );
    this.option6.position(450, 270);
    this.option7.html("3: 1.675 *10 to power -24 kg " );
    this.option7.position(5, 320);
    this.option8.html("4: None of these" );
    this.option8.position(450, 320);

    this.question3.html("Question: Which of these are not make up of atoms ?" );
    this.question3.position(150, 320);
    this.option9.html("1: Light" );
    this.option9.position(5, 370);
    this.option10.html("2: Pencils" );
    this.option10.position(450, 370);
    this.option11.html("3: Body cells" );
    this.option11.position(5, 420);
    this.option12.html("4: Batteries" );
    this.option12.position(450, 420);


    
    this.question4.html("Question : The no. of bird added to its no. and adding half its no. and 1/4 of the no. + 1 is 100 . Find the number")
    this.question4.position(150, 470);
    this.option13.html("1: 36" );
    this.option13.position(5, 520);
    this.option14.html("2: 46" );
    this.option14.position(450, 520);
    this.option15.html("3: 26" );
    this.option15.position(5, 570);
    this.option16.html("4: 21" );
    this.option16.position(450, 570);

    
    this.question5.html("Question : Distance between moon and earth is _")
    this.question5.position(150, 570);
    this.option17.html("1: 384400 km" );
    this.option17.position(5, 620);
    this.option18.html("2: 3840000 m" );
    this.option18.position(450, 620);
    this.option19.html("3: 284000 km" );
    this.option19.position(5, 670);
    this.option20.html("4: 2840000 m" );
    this.option20.position(450, 670);


    this.option1.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1;
    })
    
    
    this.option2.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1
      this.option2.fill("red");
  
    })
    
  
  
  
    this.option3.mousePressed(()=>{
      correctanswer = correctanswer+1;
      total = total+1; 
      this.option3.fill("green");
  
    })
  
    this.option4.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
      this.option4.fill("red")
  
    })
  
    this.option5.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option6.mousePressed(()=>{
      correctanswer = correctanswer+1;
      total = total+1; 
  
    })
  
    this.option7.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option8.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option9.mousePressed(()=>{
      correctanswer = correctanswer+1;
      total = total+1; 
  
    })
  
    this.option10.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option11.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option12.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option13.mousePressed(()=>{
      correctanswer = correctanswer+1;
      total = total+1; 
  
    })
  
    this.option14.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option15.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option16.mousePressed(()=>{
      correctanswer = 
      total = total+1; 
  
    })
  
    this.option17.mousePressed(()=>{
      correctanswer = correctanswer+1;
      total = total+1; 
  
    })
  
    this.option18.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option19.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })
  
    this.option20.mousePressed(()=>{
      correctanswer = correctanswer
      total = total+1; 
  
    })  
  }
}

function setup(){
  canvas = createCanvas(850,400);
  

  if(total===5){
on = 2;
  }
  if(on!=2){
    game = new Game();
  }
  if(on===2){
    background("black");
    text("Your score is " + correctanswer,300,300,50,50);
  }
}


function draw(){
  background("pink");
  console.log(on)
  console.log(total);
  game.display();
}









$(document).ready(function() {
//allows us to change the speed of the car
  var speed = 0;
  var maxSpeed = 85;
  var brakeRate = Math.floor((Math.random()*6) + 5); //sets to a random rate between 5 and 10
  var accelerateRate = Math.floor((Math.random()*21) + 10); //sets to a random rate between 10 and 30

//A function to create the car based on the user's input
$("#createCarButton").click (function() {
  //Create a variable to hold a string of the user's input
  var nameOfCar = $("#make").val() + ", " + $("#model").val() + ", " + $("#year").val();
  //Change the carName header to reflect the user's nameOfCar
  $("#carName").html(nameOfCar);
  //updating the user with their speed
  $("#currentSpeed").html("Your current speed is: " + speed);
  //Hide the user input boxes after the car has been created
  $("#make").hide();
  $("#model").hide();
  $("#year").hide();
  $("#createCarButton").hide();
});

//function which runs when the user clicks on the "Accelerate" button
$("#accelerateButton").click(function accelerate(){
  //If they've already hit their max speed, and they still try to accelerate...
  if (speed === maxSpeed){
    //...inform them that they can't
    $("#responseToUsersChangeInSpeed").html("You can't go any faster!!");
  }
  //Otherwise, if the rate of their acceleration is less than or equal to the difference between the maxSpeed, and their speed, allow them to accelerate
  else if (accelerateRate <= (maxSpeed - speed)){
    //increase their speed by the accelerateRate
    speed += accelerateRate;
    //tell them how fast they're going
    $("#currentSpeed").html("Your current speed is: " + speed);
  }
  //Otherwise, the accelerateRate would take them over the maxSpeed, so we only let them go as fast as the maxSpeed
  else {
    //change their speed to the maxSpeed
    speed = maxSpeed;
    //tell them they've hit the max speed
    $("#responseToUsersChangeInSpeed").html("You've hit your max speed of " + maxSpeed + ". Don't even try to go faster.");
    //tell them how fast they're going
    $("#currentSpeed").html("Your current speed is: " + speed);
  }
});

$("#brakeButton").click(function(){
  if (speed === 0) {
    $("#responseToUsersChangeInSpeed").html("You are already at a dead stop.");
  }
  else if(brakeRate <= speed) {
    speed -= brakeRate;
    //tell them how fast they're going
    $("#currentSpeed").html("Your current speed is: " + speed);
  }
  else {
    speed = 0;
    $("#responseToUsersChangeInSpeed").html("You've come to a complete stop.");
    $("#currentSpeed").html("Your current speed is: " + speed);
  }
});

$("#fluidIncreaseDecreaseButton").click(function(){
  maxSpeed = 70;
  while(speed < maxSpeed) {
    $("#accelerateButton").click();
    $("#currentSpeed").html("Your current speed is: " + speed);
    console.log(speed);
  };
  while(speed > 0) {
    $("#brakeButton").click();
    $("#currentSpeed").html("Your current speed is: " + speed);
    console.log(speed);
  };
  $("#brakeButton").click();
});



});

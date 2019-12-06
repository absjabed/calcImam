"use strict";
var mainInput = '';
var mainResult = '';

function numClicked(id) {
    mainInput += id.innerHTML;
        updateInputScreen(mainInput);
  }

function ceClicked(){
    mainInput = mainInput.slice(0, -1);
    updateInputScreen(mainInput);
}

function cClicked(){
    mainInput="";
    mainResult ="";
    updateInputScreen(mainInput);
    updateMainResult(mainResult)
}

function updateInputScreen(inputs){
    document.getElementById("matInput").innerHTML = inputs;
}

function updateMainResult(results){
    document.getElementById("matOutput").innerHTML = results;
}

function calculateResult(){
    try {
    
        if(mainInput[mainInput.length-1]==='%'){
        var mainInputWithoutPer = mainInput.slice(0,mainInput.lastIndexOf("*"))
        //console.log(mainInputWithoutPer)
        var mainResultWithoutPer = evil(mainInputWithoutPer);
        //console.log(mainResultWithoutPer)
        var perNum = mainInput.slice(mainInput.lastIndexOf("*")+1,mainInput.length-1)
        var percentageValue = mainResultWithoutPer * (perNum/100);
        mainResult = percentageValue;
        //console.log(percentageValue)
    }else{
        mainResult = evil(mainInput);
    }
        
    } catch (error) {
        mainResult = "Error, Try again!";
    }
    updateMainResult(mainResult)
}

function evil(fn) {
    return new Function('return ' + fn)();
  }
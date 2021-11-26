"use strict";

const dollar = "$";

const inputBill = document.querySelector(".input__bill");
const inputNPeople = document.querySelector(".input__people");
const custom = document.querySelector(".input__custom");
const tipAmount = document.querySelector(".tip__amt");
const totalAmount = document.querySelector(".total__amt");
const reset = document.querySelector(".btn__reset");

const errorBill = document.querySelector(".error__msg__bill");
const errorPeople = document.querySelector(".error__msg__nPeople");

const fivePercent = document.querySelector(".tip__five");
const tenPercent = document.querySelector(".tip__ten");
const fifteenPercent = document.querySelector(".tip__fifteen");
const twentyFivePercent = document.querySelector(".tip__twentyFive");
const fiftyPercent = document.querySelector(".tip__fifty");

let tip = 5;

fivePercent.addEventListener("click", ()=>{
    tip = 5;
});

tenPercent.addEventListener("click", ()=>{
    tip = 10;
});

fifteenPercent.addEventListener("click", ()=>{
    tip = 15;
});

twentyFivePercent.addEventListener("click", ()=>{
    tip = 25;
});

fiftyPercent.addEventListener("click", ()=>{
    tip = 50;
});

custom.addEventListener("input", ()=>{
    tip = custom.value;
});

let billAmount = "", people = "";

inputBill.addEventListener("input", ()=>{
    billAmount = inputBill.value;
    const ogBillAmount = Number.parseInt(billAmount);
    if(ogBillAmount === 0){
        inputBill.classList.remove("focus:border-strongCyan");
        inputBill.classList.add("border-red-500");
        errorBill.classList.remove("invisible");
    }else{
        inputBill.classList.add("focus:border-strongCyan");
        inputBill.classList.remove("border-red-500");
        errorBill.classList.add("invisible"); 
    }
});

inputNPeople.addEventListener("input", ()=>{
    people = inputNPeople.value;
    const ogPeople = Number.parseInt(people);
    console.log(people);

    if(ogPeople === 0){
        inputNPeople.classList.remove("focus:border-strongCyan");
        inputNPeople.classList.add("border-red-500");
        errorPeople.classList.remove("invisible");
    }else{
        inputNPeople.classList.add("focus:border-strongCyan");
        inputNPeople.classList.remove("border-red-500");
        errorPeople.classList.add("invisible"); 
    }

    if(tip === ""){
        tip = "5";
    }

    if(people === ""){
        totalAmount.textContent = dollar + "0.00";
        tipAmount.textContent = dollar + "0.00";    
    }

    let tipPerPerson = 0, amountPerPerson = 0;
    amountPerPerson = Number.parseInt(billAmount) / Number.parseInt(people);
    tipPerPerson = (Number.parseInt(billAmount) * (Number.parseInt(tip) / 100)) / Number.parseInt(people);
    amountPerPerson += tipPerPerson;

    amountPerPerson = Math.round((amountPerPerson) * 100) / 100;
    tipPerPerson = Math.round((tipPerPerson) * 100) / 100;


    if(!isNaN(tipPerPerson && isFinite(tipPerPerson))){
        tipAmount.textContent = dollar + tipPerPerson;
    }

    if(!isNaN(amountPerPerson) && isFinite(amountPerPerson)){
        totalAmount.textContent = dollar + amountPerPerson;
    }

    console.log(tip);
    console.log(amountPerPerson, tipPerPerson);
});

reset.addEventListener("click", ()=>{
    totalAmount.textContent = dollar + "0.00";
    tipAmount.textContent = dollar + "0.00";
    inputBill.value = "";
    inputNPeople.value = "";
    custom.value = "";
});
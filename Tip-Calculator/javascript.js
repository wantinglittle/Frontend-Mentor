

const reset = document.querySelector('.reset-button');
const inputs = document.querySelectorAll('input')
const bill = document.querySelector(".bill-input")
const numPeople = document.querySelector(".people-quantity")
let tipPerPerson = document.querySelector(".calculated-tip")
let totalPerPerson = document.querySelector(".calculated-total")
const five = document.querySelector(".five")
const ten = document.querySelector(".ten")
const fifteen = document.querySelector(".fifteen")
const twentyfive = document.querySelector(".twentyfive")
const fifty = document.querySelector(".fifty")
const customTip = document.querySelector(".custom-input")
const peopleContainer = document.querySelector(".people-container")
let tip = 0 ;
// const doCalc = () => {
//     tipPerPerson.innerHTML = '$' + (Math.round(100*bill.value/numPeople.value*tip)/100).toFixed(2);
//     totalPerPerson.innerHTML = '$' + (Math.round(100*bill.value/numPeople.value)/100).toFixed(2);
// }

// Percentage selector
document.querySelectorAll('.percentage').forEach(item => {
    item.addEventListener('click', event => {
      document.querySelectorAll('.percentage').forEach(item => {
          item.classList.remove('active-button')
          })
    customTip.value=''
    reset.classList.add("active-button")
    item.classList.add("active-button")
    tip = item.value
    if(numPeople.value!==''){
        tipPerPerson.innerHTML = '$'+(Math.round(100*bill.value/numPeople.value*tip)/100).toFixed(2);
        totalPerPerson.innerHTML = '$'+(Math.round(100*bill.value/numPeople.value)/100).toFixed(2);
    }
    })
  })

  // Custom Percentage
const customEntry = () => {
    document.querySelectorAll('.percentage').forEach(item => {
        item.classList.remove('active-button')
    })
    tip = customTip.value/100
    if(numPeople.value!==''){
        tipPerPerson.innerHTML = '$'+(Math.round(100*bill.value/numPeople.value*tip)/100).toFixed(2);
        totalPerPerson.innerHTML = '$'+(Math.round(100*bill.value/numPeople.value)/100).toFixed(2);
    }
}

customTip.addEventListener('click', customEntry)
customTip.addEventListener('change', customEntry)

// Bill Total Entry
bill.addEventListener('change', () =>{
    
    if(numPeople.value!=='' && tip){
        tipPerPerson.innerHTML = '$' + (Math.round(100*bill.value/numPeople.value*tip)/100).toFixed(2);
        totalPerPerson.innerHTML = '$' + (Math.round(100*bill.value/numPeople.value)/100).toFixed(2);
    } else if(numPeople.value!=='' && tip===0) {
        totalPerPerson.innerHTML = '$'+Math.round(100*bill.value/numPeople.value)/100;
    }
})

// Number of People Entry
numPeople.addEventListener('change', () => {
    if(numPeople.value=='0') {
       numPeople.classList.add('no-zero')
       peopleContainer.classList.add('no-zero-text')
    }
        else if(bill.value!=='' && tip && numPeople.value!='0'){
            numPeople.classList.remove('no-zero')
            peopleContainer.classList.remove('no-zero-text')    
            tipPerPerson.innerHTML = '$' + (Math.round(100*bill.value/numPeople.value*tip)/100).toFixed(2);
            totalPerPerson.innerHTML = '$' + (Math.round(100*bill.value/numPeople.value)/100).toFixed(2);
            }   
        else if(bill.value!=='' && tip===0 && numPeople.value!='0') {
                numPeople.classList.remove('no-zero')
                peopleContainer.classList.remove('no-zero-text')
                totalPerPerson.innerHTML = '$'+(Math.round(100*bill.value/numPeople.value)/100).toFixed(2);
            }
})

// 'Reset' Button Activation
document.querySelectorAll('input').forEach(item => {
    item.addEventListener('change', event => {
        reset.classList.add('active-button')
    })
})

// 'Reset' Button Click
reset.addEventListener('click', function() {
    inputs.forEach(input => input.value = '')
    numPeople.classList.remove('no-zero')
    peopleContainer.classList.remove('no-zero-text')
    tipPerPerson.innerHTML = '$0.00'    
    totalPerPerson.innerHTML = '$0.00'
    customTip.innerHTML = 'Custom'
    tip=0
    document.querySelectorAll('.percentage').forEach(item => {
        item.classList.remove('active-button')
        })
    reset.classList.remove('active-button')
})
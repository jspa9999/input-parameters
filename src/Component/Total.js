import React from 'react'

function Total() {

    let calculateStudetResult = (engMarks,telMarks,mathsMarks,hindiMarks,scienceMarks,socialMarks,studentName)=>{
        
    let passMarks = 35;
    if (engMarks>=passMarks &&
        telMarks>=passMarks &&
       mathsMarks>=passMarks &&
        hindiMarks>=passMarks &&
       scienceMarks>=passMarks &&
       socialMarks>=passMarks) 
       {
        console.log(`${studentName} passed in tenth`);

    } else {
      console.log(`${studentName}  failed in tenth`);
    }
  }
   calculateStudetResult(78,99,67,78,67,89, "Sachin");
   calculateStudetResult(78,65,67,23,67,89, "Sree");
   calculateStudetResult(70,97,67,78,83,89, "suji");

  return (
    <div>Total</div>
  )
}

export default Total
import React, { useRef } from 'react'

function Param() {

       let firstNameInputRef=useRef();
       let lastNameInputRef=useRef();
       let sanInputRef=useRef(); 
       let engInputRef=useRef(); 
       let phyInputRef=useRef(); 
       let mathAInputRef=useRef();
       let cheInputRef=useRef(); 
       let mathBInputRef=useRef(); 
       let resultParaRef=useRef();
        let sanResultRef=useRef();
        let engResultRef=useRef();
        let phyResultRef=useRef();
        let mathAResultRef=useRef();
        let cheResultRef=useRef();
        let mathBResultRef=useRef();
    
        let calculateResult = ()=>{
          //console.log("resultCalculation");
          let firstName=firstNameInputRef.current.value;
          let lastName=lastNameInputRef.current.value;
          let engMarks=Number(engInputRef.current.value);
          let sanMarks=Number(sanInputRef.current.value);
          let phyMarks=Number(phyInputRef.current.value);
          let mathAMarks=Number(mathAInputRef.current.value);
          let cheMarks=Number(cheInputRef.current.value);
          let mathBMarks=Number(mathBInputRef.current.value);
          let totalMarks= engMarks+sanMarks+phyMarks+mathAMarks+cheMarks+mathBMarks;
          let result;
          

          
    
          if (engMarks<35||sanMarks<35||phyMarks<35||mathAMarks<35||cheMarks<35||mathBMarks<35) {
    
             result= "failed";
    
          } else{
            
            result= "passed";
          }
    
    
          resultParaRef.current.innerHTML=`${firstName} ${lastName} ${result} in tenth and got marks are ${totalMarks}`
          alert(`totalMarks are ${totalMarks}`);
        }

        let inputOnChange = (inputRef,resultRef)=>{
            if (inputRef.current.value>=0&& inputRef.current.value<=100){
                if(inputRef.current.value>=35){
                  resultRef.current.innerHTML="pass";
                  resultRef.current.style.backgroundColor="green";
                  resultRef.current.style.Color="white";
                }else {
                  resultRef.current.innerHTML="fail";
                  resultRef.current.style.backgroundColor="red";
                  resultRef.current.style.Color="white";
                }
              } else {
                  resultRef.current.innerHTML="INVALID";
                  resultRef.current.style.color="Orange";
                 }

        }

        
        let inputOnFocus = (inputRef)=>{ engInputRef.current.style.backgroundColor="blue";}

        let inputOnBlur = (inputRef)=>{sanInputRef.current.style.backgroundColor="aqua";}
    
        let sanOnChange = ()=>{inputOnChange(sanInputRef,sanResultRef); 
        }
        let sanOnFocus = ()=>{ inputOnFocus(sanInputRef); 
        }
         
        let sanOnBlur = ()=>{  inputOnBlur(sanInputRef);
        }
    
        let engOnChange = ()=>{inputOnChange(engInputRef,engResultRef);
        }
    
        let engOnFocus = ()=>{inputOnFocus(engInputRef);}
        let engOnBlur = ()=>{inputOnBlur(engInputRef);
          
        }
        let phyOnChange = ()=>{inputOnChange(phyInputRef,phyResultRef)
        }
    
        let phyOnFocus = ()=>{inputOnFocus(phyInputRef);
         
        }
         
       let phyOnBlur = ()=>{inputOnBlur(phyInputRef)
       } 
       
       let mathAOnChange = ()=>{inputOnChange(mathAInputRef,mathAResultRef);
       }
        
       let mathAOnFocus = ()=>{inputOnFocus(mathAInputRef);
        
       }
    
       let mathAOnBlur = ()=>{inputOnBlur(mathAInputRef)
       }
    
       let cheOnChange = ()=>{inputOnChange(cheInputRef,cheResultRef);
       }
        
       let cheOnFocus = ()=>{inputOnFocus(cheInputRef)
        
       }
    
       let cheOnBlur =()=>{inputOnBlur(cheInputRef);}
        
       
       let mathBOnChange = ()=>{inputOnChange(mathAInputRef,mathAResultRef)
       }
    
       let mathBOnFocus = ()=>{inputOnFocus(mathBInputRef);
       }
        
       let mathBOnBlur = ()=>{inputOnBlur(mathBInputRef)
       }
  return (
    <div>
    <form className="frm">

      <div className="fm">
      <label className="abc">FirstName</label>
      <input type="text" ref={firstNameInputRef} onFocus={()=>{firstNameInputRef.current.style.backgroundColor="blue";}}
      onChange={()=>{}} onBlur={()=>{firstNameInputRef.current.style.backgroundColor="aqua";}}></input>
     </div> 

     <div className="fm">
      <label className="abc">LastName</label>
      <input type="text" ref={lastNameInputRef} onFocus={()=>{lastNameInputRef.current.style.backgroundColor="blue";}}
      onChange={()=>{}} onBlur={()=>{lastNameInputRef.current.style.backgroundColor="aqua";}}></input>
      
     </div> 

     <div className="fm">
      <label className="abc">Sanskrit</label>
      <input type="Number" ref={sanInputRef} onFocus={()=>{ sanOnFocus();
        }}
      
      onChange={()=>{
        sanOnChange();
    }
  }
      
       onBlur={()=>{sanOnBlur();}}></input>
      <span className="para" ref={sanResultRef}></span>
     </div> 

     <div className="fm">
      <label className="abc">English</label>
      <input type="Number" ref={engInputRef} onFocus={()=>{engOnChange();}}

      onChange={()=>{ 
        engOnChange();
       }}
        
      onBlur={()=>{engOnBlur();}}></input>
      <span className="para" ref={engResultRef}></span>
     </div> 
      
     <div className="fm">
      <label className="abc">Physics</label>
      <input type="Number" ref={phyInputRef} onFocus={()=>{phyOnFocus();}}
      onChange={()=>{ phyOnChange();
       
    }} 
      onBlur={()=>{}}></input>
      <span className="para" ref={phyResultRef}></span>
     </div> 
      
     <div className="fm" >
      <label className="abc">Maths-A</label>
      <input type="Number" ref={mathAInputRef} onFocus={()=>{mathAOnFocus();}}
      onChange={()=>{
        
           }} 
     onBlur={()=>{mathAOnBlur();}}></input>
      <span className="para" ref={mathAResultRef}></span>
     </div> 

     <div className="fm">
      <label className="abc">Chemistry</label>
      <input type="Number" ref={cheInputRef} onFocus={()=>{cheOnFocus();}}
      onChange={()=>{ cheOnChange();
        
      }} onBlur={()=>{cheOnBlur();}}></input>
      <span className="para" ref={cheResultRef}></span>
     </div> 

     <div>
      <label className="abc">Maths-B</label>
      <input type="Number" ref={mathBInputRef} onFocus={()=>{mathBOnFocus();}}
      onChange={()=>{
        mathBOnChange();
      }} onBlur={()=>{mathBOnBlur();}}></input>
      <span className="para" ref={mathBResultRef}></span>
     </div> 
     
     <div>
     <button type="button" onClick={()=>{

      calculateResult();

     }}> Calculate Result </button>

     <div>
      <p className="kyc" ref={resultParaRef}>
        Please Enter Value and Click Continue
      </p>
     </div>
      
      </div>

     </form>
     
     </div>

  )
}

export default Param


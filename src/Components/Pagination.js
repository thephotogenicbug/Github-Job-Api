import React, {useState, useEffect} from 'react'

const Pagination = ({showPerPage,  onPaginationChange, total}) =>{
    const [counter, setCounter]=useState(1);

    useEffect(()=>{
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
    }, [counter]);

    const onButtonClick=(type)=>{
      if(type === "prev"){
        if(counter === 1){
            setCounter(1)
        } else{
            setCounter(counter - 1);
        }
      }else if(type === "next"){

       if(Math.ceil(total/showPerPage)=== counter ){
           setCounter(counter)

       }else {
           setCounter(counter +1);
       }

      }
    }
  //  console.log(showPerPage);
    return (
        <div className="d-flex justify-content-between">
           <button className="btn btn-primary btn-sm"  onClick={()=> onButtonClick("prev")}>Previous</button>
           <br/>
           <button className="btn btn-primary btn-sm" onClick={()=> onButtonClick("next")}>Next</button>

        </div>
    )
}

export default Pagination;

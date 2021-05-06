import React, {useState, useEffect} from 'react';
import Pagination from './Components/Pagination'
import { UncontrolledCollapse, Button, CardBody, } from 'reactstrap';



const JobSearch =()=>{

    const [user, updateUser]=useState([]);
    const [searchTerm, setSearchTerm]=useState("")

    const getJob=()=>{
      fetch("https://jobs.github.com/positions.json")
      .then(response=>response.json())
      .then(result=>updateUser(result))
    }

    useEffect(()=>{
      getJob();
    },[])

    const [showPerPage, setShowPerPage]=useState(20);
    const [pagination, setPagination]=useState({
      start: 0, 
      end: showPerPage,
    });

    const onPaginationChange=(start, end)=>{
     setPagination({start: start, end: end})
    }

    return(
      <div className="container">
     <div className="row">
       <div className="col-md-6 mt-3">
         <h3 className="text-primary">Github Job Search </h3>
       </div>
       <div className="col-md-6">
      
       </div>
     </div>
     <div className="row">
       <div className="col-md-4 mt-2">
       <input type="text" className="form-control" placeholder="Search Jobs" onChange={event => {setSearchTerm(event.target.value)}} />
       </div>
       <div className="col-md-4">
       
       </div>
       <div className="col-md-4 mt-2">
       <Pagination showPerPage={showPerPage}  onPaginationChange={ onPaginationChange} total={user.length}/>
     
       </div>
     
     </div>
     <div className="row mt-3">
         {
             user.filter((xtype)=>{
               if(searchTerm ==""){
                 return xtype
               } else if (xtype.title.toLowerCase().includes(searchTerm.toLowerCase())){
                 return xtype
               }
             }).slice(pagination.start, pagination.end).map((xtype, index)=>{
                 return(
                 
                  
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12" key={index}>
                        <div className="card mt-3 p-3">
                        
                            <div className="card-body" >
                              {xtype.title}<br/>
                              <br/>
                              <small className="btn btn-info btn-sm text-white">{xtype.created_at}</small> || <b/>
                              <small className=" btn btn-success btn-sm text-white">{xtype.type}</small>
                              <br/><br/>
                              <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                                Details
                              </Button>
                              <UncontrolledCollapse toggler="#toggler">
                                  <CardBody>
                                    {xtype.description}
                                  </CardBody>
                              </UncontrolledCollapse>

                            </div>
                            
                        </div>
                      </div>
                    </div>
                    <div>
                      
                    </div>
                  </div>
               
                      
                 )
             })
         }
     </div>


    </div>
    
      )
}
export default JobSearch;
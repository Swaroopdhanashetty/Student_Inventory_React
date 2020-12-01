import React,{useEffect,useState} from 'react'
import StudentService from '../services/StudentService';
import { Link } from "react-router-dom";

function StudentList() {

    const [students, setStudents] = useState([])
    const [searchName, setSearchName] = useState("");
    const [currentStudetn, setCurrentStudetn] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

        const onChangeSearchName =(e)=>{
        const searchName = e.target.value;
        setSearchName(searchName);
        };
      
        useEffect(() => {
            retrieveStudents()
          },[]);
    
        const retrieveStudents=()=>{
            StudentService.getAll()
            .then(res =>{
                setStudents(res.data);
                console.log(res.date);
            })
            .catch(e =>{
                console.log(e);
            })
        };

        const refreshList =()=>{
            retrieveStudents();
            setCurrentStudetn(null);
            setCurrentIndex(-1);
            setSearchName('');
        };

        const findByName=()=>{
            StudentService.findByName(searchName)
            .then(res =>{
                setStudents(res.data);
                console.log(res.data);
            }).catch(e =>{
                console.log(e);
            })
        };
        const setActiveStudent = (student, index) =>{
            setCurrentStudetn(student);
            setCurrentIndex(index);
        };
        const removeAllStudents =()=>{
            
                refreshList();
            
            
        };
        const deleteStudent =()=>{
            StudentService.remove(currentStudetn.id)
            .then(res =>{
                alert("Data Deleted Successfully!")
                refreshList();
               
            })
            .catch(e => {
                console.log(e);
            });
           };
    

    return (
       

<div className="list row">
<br/><br/>
    <div  >
        <div className= " d-flex justify-content-between">
            
                <div className="col-md-10 pull-left">
                <br/>     
                <input type='text' 
                        placeholder="Search by name"
                        value={searchName}
                        onChange={onChangeSearchName}
                        />
            
                    <button
                        className="btn btn-light"
                        type="button"
                        onClick={findByName}
                        >Search
                     </button>
                    <h3 className="">Students List</h3>
                    {searchName ? ( <ul className="list-grop">
                    {students && students.map((student,index)=>(
                    <li className={"list-group-item-action" + (index === currentIndex ? "active fa fa-home": '')}
                        onClick={()=>setActiveStudent(student, index)} key={index} >
                        {student.name}
                        </li> ))}
                        </ul>):''}
                </div>
            <div className="col-md-10 pull-right">
            <button
            className="m-3 btn btn-sm btn-danger"
            onClick={removeAllStudents}>
            Remove All
            </button>
                {currentStudetn ? (
                    <div>
                        <div>
                        <h4>Student</h4>
                        <label>
                        <strong>Student Name:</strong>
                        </label>{' '}
                        {currentStudetn.name}
                        </div>
                        <div>
                           <label>
                           <strong>Student Email:</strong>
                           </label>{''}
                           {currentStudetn.email}
                         </div>
                         <div>
                         <label>
                         <strong>Student Phone:</strong>
                         </label>{''}
                         {currentStudetn.phone}
                       </div>
                       <div>
                       <label>
                       <strong>Student Address:</strong>
                       </label>{''}
                       {currentStudetn.address}
                     </div>
                     <Link to={"/students/" + currentStudetn.id}> Edit</Link>
                     <button className="badge badge-danger mr-2" onClick={deleteStudent}>
                     Delete
                        </button>
                        
                    </div>
                    
                  
                   
                ):(
                    <div>
                    {
                        deleteStudent?<p>Please click on student...</p>:<p> Data Deleted Successfully</p>
                    }
                        
                    </div>
                    )}
            </div>
         </div>  
        
    </div>
</div>
    
    )
}

export default StudentList


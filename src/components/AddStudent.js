import React,{useState} from 'react';
import StudentService from '../services/StudentService';



function AddStudent() {
    const initalStudentState = {
        id:null,
        name: "",
        email:"",
        phone:"",
        address:"",
    };

    const [student, setStudent] = useState(initalStudentState);
    const [submitted,setSubmitted] = useState(false);
   

    const handelInputChange = e =>{ 
        const { name,value } = e.target;
        setStudent({...student,[name]:value});
    };
    const saveStudent =()=>{
        var data = {
            id:student.id,
            name:student.name,
            email:student.email,
            phone:student.phone,
            address:student.address
        };
        StudentService.create(data)
        .then(res =>{
            setStudent({
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone,
                address: res.data.address
             });
             setSubmitted(true);
             console.log(res.data);
        })
        .catch(e =>{
            console.log(e);
        });
    };

    const newStudent =()=>{
        setStudent(initalStudentState);
        setSubmitted(false)
    }

    return (
        <div className="submit-form" >
        {submitted ?(
            <div>
            <h4>You Submitted successfully</h4>
            <button className="btn btn-successful" onClick={newStudent}>Add</button>
            </div>
            ):(<div>
                <div className="form-grop form-group-lg">
                <h5>Enter Information</h5>
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            id="name" 
            className="form-control" 
            required value={StudentService.name} 
            onChange={handelInputChange} 
            name="name"/>
            </div>
           <div className="form-grop">
           <label htmlFor="email">Email</label>
           <input 
           type="text" 
           id="email"
            className="form-control"
             required value={StudentService.email}
             onChange={handelInputChange}
              name="email"/>
           </div>
           <div className="form-grop">
           <label htmlFor="phone">Phone</label>
           <input 
           type="text" 
           id="phone"
            className="form-control"
             required value={StudentService.phone}
              onChange={handelInputChange}
               name="phone"/>
           </div>
           <div className="form-grop">
           <label htmlFor="address">Address</label>
           <input 
           type="text"
            id="Address"
             className="form-control"
              required value={StudentService.address}
               onChange={handelInputChange}
                name="address"/>
           </div>
            <br/>
          <button onClick={saveStudent} className= "btn btn-success">
            Submit 
          </button>
            
        </div>
        )};
        </div>
    );
}

export default AddStudent

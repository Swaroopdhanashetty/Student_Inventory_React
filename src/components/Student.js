import React,{ useEffect,useState} from 'react';
import StudentService from '../services/StudentService';


const Student =(props)=>{
 const initalStudentState = {
            id:null,
            name:'',
            email:'',
            phone:'',
            address:''

        };
        const [currentStudent, setCurrentStudent] = useState(initalStudentState);
        const [message, setMessage] = useState('');

        const getStudent =id=>{
            StudentService.get(id)
            .then(res =>{
                setCurrentStudent(res.data);
                console.log(res.data);
            })
            .catch(e =>{
                console.log(e);
            })
        }
        useEffect(()=>{
            getStudent(props.match.params.id);
        },[props.match.params.id]);

       const handelInputChange=e=>{
           const {name, value} = e.target;
           setCurrentStudent({...currentStudent,[name]: value});

       };

       const updateStudents =()=>{
           StudentService.update(currentStudent.id, currentStudent)
           .then(res =>{
               console.log(res.data);
               setMessage("The student was updated successfully!");

           })
           .catch(e =>{
               console.log(e);
           });
       };

      
        

    return (
        <div className="edit-form">
            <h4>Student</h4>
            <form>
                <div className="form-grop">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={currentStudent.name}
                        onChange={handelInputChange}
                        />

                </div>
                <div className="form-grop">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={currentStudent.email}
                        onChange={handelInputChange}
                        />

                </div>
                <div className="form-grop">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={currentStudent.phone}
                        onChange={handelInputChange}
                        />

                </div>
                <div className="form-grop">
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={currentStudent.address}
                        onChange={handelInputChange}
                        />
                     </div>
              </form>
        <button
            className="badge badge-primary mr-2"
            onClick={updateStudents}>
            Update
        </button>
        <p>{message}</p>
         
            
        </div>
    )
    }

export default Student

import http  from '../httpService';

   const getAll =()=>{
        return http.get('/students');

    };
   const get =(id)=>{
        return http.get(`/students/${id}`);

    };
    const findByName =(name)=>{
        console.log("Inside Student Service Find by name: "+name);
        return http.get(`/students?name=${name}`);

    };
   const create =(data)=> {
        return http.post("/add",data);
    };
   const update =(id,data)=>{
        return http.patch(`/students/${id}`,data);
    };
   const remove =(id)=> {
        return http.delete(`/students/${id}`);
    };
    const removeAll =()=>{
        return http.removeAll('/students');
    }
export default{
    getAll,
    get,
    create,
    update,
    remove,
    findByName,
    removeAll
};


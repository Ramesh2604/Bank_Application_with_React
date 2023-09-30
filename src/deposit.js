import { useState,useContext } from "react"
import UserContext from "./context";
import './deposit.css'
import { useFormik } from "formik";
export default function Deposit(){
    let user=useContext(UserContext);
    let length=user.users.length;
    let [currentbal,setCurrentbal]=useState(user.users[length-1].balance);
    user.users[length - 1].balance = currentbal;
    const Formik=useFormik({
      initialValues: {
        deposit: ""
      },
      onSubmit:(values)=>{
        setCurrentbal(currentbal+Number(values.deposit));
      },
      validate:(values)=>{
        let errors={};
        if(!values.deposit) errors.deposit="Required";
        if(values.deposit !== "" && isNaN(parseFloat(values.deposit))) errors.deposit = "Just Numbers allowed";
        if(values.deposit < 0) errors.deposit = "Negative Numbers not allowed";
        return errors
      }
    })
    
    return(<>
    
    <h1 className="deposithead">Deposit your Account</h1>
        <form class="row g-3" className="depositform" onSubmit={Formik.handleSubmit} >
  <div class="col-auto">
    <input type="text" name="deposit" style={{ width: '200px'}} class="form-control" id="inputPassword2" placeholder="Enter the amount" onChange={Formik.handleChange} value={Formik.values.deposit}/>
    {Formik.errors.deposit?<div style={{color:"red"}}>{Formik.errors.deposit}</div>:null}
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3" disabled={!Formik.isValid}>Deposit</button>
  </div>
</form>
    <h2 className="depositbalance" >Balance  is {currentbal}</h2>
    </>)
}
import { useState,useContext } from "react"
import UserContext from "./context"
import { useFormik } from "formik";
import "./withdraw.css"

export default function Withdraw(){
    let user=useContext(UserContext);
    let length=user.users.length;
    let [currentbal,setCurrentbal]=useState(user.users[length-1].balance);
    user.users[length-1].balance=currentbal;
    const Formik=useFormik({
      initialValues: {
        withdraw: ""
      },
      onSubmit:(values)=>{
        setCurrentbal(currentbal-Number(values.withdraw));
      },
      validate:(values)=>{
        let errors={};
        if(!values.withdraw) errors.withdraw="Required";
        if(values.withdraw !== "" && isNaN(parseFloat(values.withdraw))) errors.withdraw = "Just Numbers allowed";
        if(values.withdraw >= currentbal){alert("please valid amount")}
        return errors
      }
    })
   

    return(<>
    

    <h1 className="wdhead">Withdraw your Account</h1>
        <form class="row g-3" onSubmit={Formik.handleSubmit} className="wdform">
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Enter the amount</label>
    <input type="text" class="form-control" style={{ width: '200px'}}  name="withdraw" id="inputPassword2" placeholder="Enter the amount" onChange={Formik.handleChange} values={Formik.values.withdraw}/>
    {Formik.errors.withdraw?<div style={{color:"red"}}>{Formik.errors.withdraw}</div>:null}
  </div>
  <div class="col-auto">
    <button type="submit"  class="btn btn-primary mb-3" disabled={!Formik.isValid}>WithDraw</button>
  </div>
</form>
    <h2 className="wdbalance" >Balance  is {currentbal}</h2>
    </>)
}
import React from 'react';
import Style from'./AdoptionReq.module.css';
import Header from '../../components/Header/Header';

const AdoptionReq = () => {
  return (
    <div className={Style.container}>
      <Header />
      <div className={Style.title}>Adoption Request Form</div>
      <div  className={Style.form}>
        <form>
        <label htmlFor='name' >Name</label>
          <input type='text' id='name'placeholder='Enter your full name'></input>

          <label htmlFor='number' >Mobile Number</label>
          <input type='tel' id='number'placeholder='Enter your mobile number'></input>

          <label htmlFor='address' >Address</label>
          <input type='text' id='address' placeholder='Enter your address' ></input>

          <label htmlFor='reason' >Why Do You Want To Adopt?</label>
          <input type='text' id='reason' placeholder='Reason...' ></input>

          <input type='submit' value="Send Request" className={Style.submit}></input>
        </form>
      </div>
    </div>
  );
};

export default AdoptionReq;

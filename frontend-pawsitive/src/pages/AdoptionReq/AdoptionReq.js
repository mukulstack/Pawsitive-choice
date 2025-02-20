import React from 'react';
import './AdoptionReq.css';
import Header from '../../components/Header/Header';

const AdoptionReq = () => {
  return (
    <div className='signup-container'>
      <Header />
      <div className='title'>Adoption Request Form</div>
      <div  className='signup-form'>
        <form>
        <label htmlFor='name' >Name</label>
          <input type='text' id='name'placeholder='Enter your full name'></input>
{/* 
          <label htmlFor='email' >Email</label>
          <input type='email' id='email' placeholder='Enter your email' ></input>
 */}
          <label htmlFor='number' >Mobile Number</label>
          <input type='tel' id='number'placeholder='Enter your mobile number'></input>


          <label htmlFor='address' >Address</label>
          <input type='text' id='address' placeholder='Enter your address' ></input>
{/*         
          <label htmlFor='password' label="label">Create Password</label>
          <input type='password' id='password' placeholder='Enter a password'></input> */}


          <label htmlFor='reason' >Why Do You Want To Adopt?</label>
          <input type='text' id='reason' placeholder='Reason...' ></input>

          <br></br>
          <input type='submit' value="Send Request"></input>
          <br></br>
        </form>


      </div>

    </div>
  );
};

export default AdoptionReq;

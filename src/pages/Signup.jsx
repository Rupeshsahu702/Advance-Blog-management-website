import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

const Signup = () => {
  const [formData , setFormData]= useState({});
  const [errorMessage , setErrorMessage] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value.trim() });
  };
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("Please fill out all field");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers : {'Content-Type':'application/json'},
        body:JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage(data.message);
      };
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }

  };
  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center  gap-5'>
        {/* div for left side */}
        <div className='flex-1 '>
          <Link to='/' className='  text-4xl font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 rounded-lg text-white' > Rupesh's</span>Blog
          </Link>
          <p className='text-semibold text-sm mt-5'>This the Blog management project . You can signin using your gmail and password </p>
        </div>
        {/* div for right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}  >
            <div>
              <Label value='Your Username' />
              <TextInput type='text' placeholder='Username' id='username'  onChange={handleChange} />
            </div>
            <div>
              <Label value='Your Email' />
              <TextInput type='email' placeholder='User@gmail.com' id='email'  onChange={handleChange} />
            </div>
            <div>
              <Label value='Your Password' />
              <TextInput type='password' placeholder='Username' id='password' onChange={handleChange}  />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading} >
              {
                loading ? (
                  <>
                  <Spinner size='m'  />
                  <span>Loading...</span>
                  </>
                ) : 'Sign Up'
              }
            </Button>
            <OAuth/>
          </form>
          <div className='flex gap-2 text-sm mt-5 justify-center'>
            <span>Have an account ? </span>
            <Link to='/sign-in' className='text-blue-500'  >Sign In</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Signup
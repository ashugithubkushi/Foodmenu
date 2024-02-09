import React, { useState } from 'react'
import Layout from '../components/Layouts/Layout'

const Home = () => {

  const [value, setValue] = useState('');
  const options = [
    {label: 'Pizza', value:1},
    {label: 'Burger', value:2},
    {label: 'drinks', value:3}
  ]

   function handleSelect(e) {
    setValue(e.target.value);
   }

  return (
    <Layout>
        {/* <div>
          
          <form>
          <center><h2>Order Page</h2></center>
          <table>
          <div className='order-page'>
            <tr>
              <td>Elders:</td>
              <td>
                <input type="number" name="number"/>
              </td>
            </tr>

            <tr>
              <td>Children:</td>
              <td>
                <input type="number" name="number"/>
              </td>
            </tr>
            </div>
          </table>
        </form>
        </div> */}
        

        <div className='d-flex justify-content-center mt-5'>
          <div className="w-50 p-3 border rounded">
            <h3>Elders</h3>
            <select className="number" id="" 
            // onChange={handleSelect}
            >
              {/* {options.map(option => (<option value={option.value}>{option.label}</option>))} */}
            </select>
            {/* <p>{value}</p> */}
          </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <div className="w-50 p-3 border rounded">
            <h3>Food menu</h3>
            <select className="form-select" id="" onChange={handleSelect}>
              {options.map(option => (<option value={option.value}>{option.label}</option>))}
            </select>
            {/* <p>{value}</p> */}
          </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <div className="w-50 p-3 border rounded">
            <h3>Food menu</h3>
            <select className="form-select" id="" onChange={handleSelect}>
              {options.map(option => (<option value={option.value}>{option.label}</option>))}
            </select>
            {/* <p>{value}</p> */}
          </div>
        </div>
        
    </Layout>
  )
}

export default Home

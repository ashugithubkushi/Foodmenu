import React, { useState } from 'react'
import Layout from '../components/Layouts/Layout'
import "./Home.css"

const Home = () => {



  const [formData, setFormData] = useState({
    elders: '',
    childrens: '',
    fooditem: '',
    itemcount: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData((prevTableData) => [...prevTableData, formData]);
    setFormData({
      elders: '',
      childrens: '',
      fooditem: '',
      itemcount: '',
    });
  };


  return (
    <Layout>
 <div className="background">
          <div className="scrolling">
      <h2>Select your delicious food item here</h2>
    </div>


        <div>
      <form className="displaydata" onSubmit={handleSubmit}>

        
        <label className="m-3 p-4">
          <h5>Elders:</h5>
          <input type="number" name="elders" value={formData.name} onChange={handleChange} />
        </label>

         <br />

        <label className="m-3 p-4">
        <h5>Childrens:</h5>
          <input type="number" name="childrens" value={formData.name} onChange={handleChange} />
        </label>

        <br />

        <label className="m-3 p-4">
        <h5>Food Item:</h5>
          {/* <input type="dropdown" name="fooditem" value={formData.name} onChange={handleChange} /> */}
          <select  id="dropdown-menu" type="dropdown" name="fooditem" className="input" value={formData.name} onChange={handleChange}>
              <option value=""></option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Drink">Drinks</option>
              </select>
        </label>

        <br />

        <label className="m-5 p-4">
        <h5>Item Count:</h5>
          <input type="number" name="itemcount" value={formData.name} onChange={handleChange} />
        </label>

        <br />

        <button type="submit" className="m-3 p-2 btn btn-info">Submit</button>


      </form>

      <br />

      <form>

        <div>
        {/* <h6>Elders : </h6>
        <h6>Childrens : </h6>
        <h6>FoodItem : </h6>
        <h6>Itemcount : </h6> */}
        </div>

        <div className="displayformdata">
          {tableData.map((data, index) => (
            <div key={index}>

              
              <div><span className="text-size">Elders : </span>{data.elders}</div>
              <div><span className="text-size">Childrens : </span>{data.childrens}</div>
              <div><span className="text-size">FoodItem : </span>{data.fooditem}</div>
              <div><span className="text-size">Itemcount : </span>{data.itemcount}</div>
              <button type="submit" className="m-3 p-1 btn btn-info">Submit</button>
            </div>
          ))}
        </div>

        

      </form>
    </div>

  </div>
    </Layout>
    
  )
}

export default Home

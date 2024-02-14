import React, { useState } from "react";
// import Layout from '../components/Layouts/Layout'
import "./Home.css";
// import { Link } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [numberOfElders, setNumberOfElders] = useState();
  const [snacksElder, setSnacksElder] = useState("");
  const [drinksElder, setDrinksElder] = useState("");
  const [totalItemElder, setTotalItemElder] = useState();

  const [numberOfChild, setNumberOfChild] = useState();
  const [snacksChildren, setSnacksChildren] = useState("");
  const [drinksChildren, setDrinksChildren] = useState("");
  const [totalItemChildren, setTotalItemChildren] = useState();

  // console.log("numberOfElders", numberOfElders);
  // console.log("snacksElder", snacksElder);
  // console.log("drinksElder", drinksElder);
  // console.log("totalItemElder", totalItemElder);
  // console.log("numberOfChild", numberOfChild);
  // console.log("snacksChildren", snacksChildren);
  // console.log("drinksChildren", drinksChildren);
  // console.log("totalItemChildren", totalItemChildren);

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createUser", {
        numberOfElders,
        snacksElder,
        drinksElder,
        totalItemElder,
        numberOfChild,
        snacksChildren,
        drinksChildren,
        totalItemChildren,
      })
      .then((result) => {
        console.log(result);
        navigate("/menu");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div>
        {/* <marquee direction="right">Select your delicious snack here</marquee> */}
        <div className="background">
          {/* <div className="scrolling"> */}
          <marquee direction="right">
            <h4>Select your delicious snack here</h4>
          </marquee>
          {/* </div> */}

          <form className="formdata">
            <label className="m-3 p-4">
              <h5>Elders</h5>
              <input
                style={{ width: 250 }}
                className="form-control"
                type="number"
                name="elders"
                onChange={(e) => setNumberOfElders(e.target.value)}
              />
            </label>

            <label className="m-3 p-4">
              <h5>Snacks</h5>
              <select
                style={{ width: 250 }}
                className="form-control"
                type="dropdown"
                name="snacks"
                onChange={(e) => setSnacksElder(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Chats">Chats</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Drinks</h5>
              <select
                style={{ width: 250 }}
                className="form-control"
                type="dropdown"
                name="drinks"
                onChange={(e) => setDrinksElder(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Coffe">Coffe</option>
                <option value="Tea">Tea</option>
                <option value="Cool drink">Cool drink</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Item count</h5>
              <input
                style={{ width: 250 }}
                className="form-control"
                type="number"
                name="itemcount"
                onChange={(e) => setTotalItemElder(e.target.value)}
              />
            </label>

            <div>
              <h4>Selected data:</h4>
              <p>Elder: {numberOfElders}</p>
              <p>Snacks: {snacksElder}</p>
              <p>Drinks: {drinksElder}</p>
              <p>Item Count: {totalItemElder}</p>
            </div>
            {/* <Link to='/menu' type="button" className="btn btn-success">Submit</Link> */}
          </form>

          <form className="formdata">
            <label className="m-3 p-4">
              <h5>Childrens</h5>
              <input
                style={{ width: 250 }}
                className="form-control"
                type="number"
                name="elders"
                onChange={(e) => setNumberOfChild(e.target.value)}
              />
            </label>

            <label className="m-3 p-4">
              <h5>Snacks</h5>
              <select
                style={{ width: 250 }}
                className="form-control"
                type="dropdown"
                name="snacks"
                onChange={(e) => setSnacksChildren(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Chats">Chats</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Drinks</h5>
              <select
                style={{ width: 250 }}
                className="form-control"
                type="dropdown"
                name="drinks"
                onChange={(e) => setDrinksChildren(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="Coffe">Coffe</option>
                <option value="Tea">Tea</option>
                <option value="Cool drink">Cool drink</option>
              </select>
            </label>

            <label className="m-3 p-4">
              <h5>Item count</h5>
              <input
                style={{ width: 250 }}
                className="form-control"
                type="number"
                name="itemcount"
                onChange={(e) => setTotalItemChildren(e.target.value)}
              />
            </label>

            <div>
              <h4>Selected data</h4>
              <p>Children: {numberOfChild}</p>
              <p>Snacks: {snacksChildren}</p>
              <p>Drinks: {drinksChildren}</p>
              <p>Item Count: {totalItemChildren}</p>
            </div>
            <button onClick={Submit} type="button" className="btn btn-success">
              Submit
            </button>
            {/* <Link to='/menu' type="button" className="btn btn-success">Submit</Link> */}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

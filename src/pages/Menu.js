import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import "./Menu.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:3000")
      // .then((result) => setOrders(result.data))
      .then((result) => {setOrders(result.data);
        // console.log(orders);
      })
      .catch((err) => console.log(err));
  }, []);

 
  

  return (
    <Layout>
      {/* <div className="w-100 vh-100 justify-content-center align-items-center">
        <div className="w-100">
          <table class="table">
            <thead>
              <tr className="table-data">
                <th scope="col">Orderid</th>
                <th scope="col">numberOfElders</th>
                <th scope="col">snacksElder</th>
                <th scope="col">drinksElder</th>
                <th scope="col">totalItemElder</th>
                <th scope="col">numberOfChild</th>
                <th scope="col">snacksChildren</th>
                <th scope="col">drinksChildren</th>
                <th scope="col">totalItemChildren</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.numberOfElders}</td>
                    <td>{item.snacksElder}</td>
                    <td>{item.drinksElder}</td>
                    <td>{item.totalItemElder}</td>
                    <td>{item.numberOfChild}</td>
                    <td>{item.snacksChildren}</td>
                    <td>{item.drinksChildren}</td>
                    <td>{item.totalItemChildren}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div> */}

<div className="w-100 vh-100 justify-content-center align-items-center">
            <div className="w-100">
                <Link to="/create" className='btn btn-success float-end'>Logout</Link>
                <table className='table'>
                    <thead>
                    <tr className="table-data">
                <th scope="row">Orderid</th>
                <th scope="row">numberOfElders</th>
                <th scope="row">snacksElder</th>
                <th scope="row">drinksElder</th>
                <th scope="row">totalItemElder</th>
                <th scope="row">numberOfChild</th>
                <th scope="row">snacksChildren</th>
                <th scope="row">drinksChildren</th>
                <th scope="row">totalItemChildren</th>
              </tr>
                    </thead>

                    <tbody>
                    {orders.map((item, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.numberOfElders}</td>
                    <td>{item.snacksElder}</td>
                    <td>{item.drinksElder}</td>
                    <td>{item.totalItemElder}</td>
                    <td>{item.numberOfChild}</td>
                    <td>{item.snacksChildren}</td>
                    <td>{item.drinksChildren}</td>
                    <td>{item.totalItemChildren}</td>
                  </tr>
                );
              })}
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
  );
};

export default Menu;



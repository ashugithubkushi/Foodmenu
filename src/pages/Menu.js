import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import "./Menu.css";
import axios from "axios";

const Menu = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUsers")
      // .then((result) => setOrders(result.data))
      .then((orders) => setOrders(orders.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(orders);

  return (
    <Layout>
      {/* <div>
        <form className="head-data">
          <ul className="head">
            <li>
              <b>Order Id</b>
            </li>
            <li>
              <b>Persons</b>
            </li>
            <li>
              <b>Snacks</b>
            </li>
            <li>
              <b>Drinks</b>
            </li>
            <li>
              <b>Total item</b>
            </li>
            <li>
              <b>
                <button className="p-3 m-1 rounded text-primary">
                  {" "}
                  <i class="bi bi-pen "></i>
                </button>
                <button className="p-3 m-1 rounded text-danger">
                  {" "}
                  <i class="bi bi-trash3"></i>
                </button>
              </b>
            </li>
          </ul>
        </form>
      </div> */}

      <div className="w-100 vh-100 justify-content-center align-items-center">
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
                {/* <th scope="col">icons</th> */}
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

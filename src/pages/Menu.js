import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import "./Menu.css";
import axios from "axios";

const Menu = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setOrders(result.data))
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

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Menu;

import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import "./Menu.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
  // const [status, setStatus] = useState();
  // const [orderStatus, setOrderStatus] = useState();
  const [statusform, setStatusform] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      // .then((result) => setOrders(result.data))
      .then((result) => {
        setOrders(result.data);
        // console.log(orders);
      })
      .catch((err) => console.log(err));
  }, []);

  // const Update = (e, id) => {
  //   e.preventDefault();
  //   axios.put("http://localhost:3000/updateStatus/"+id  , {orderStatus})
  //   .then(result => {
  //       console.log(result)

  //       setStatus(false)
  //       // navigate('/')
  //   })
  //   .catch(err => console.log(err))
  //  }

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/updateUser" +id  , {statusform})
    .then(result => {
        console.log(result)
        // navigate('/')
    })
    .catch(err => console.log(err))
   }

  return (
    <Layout>
      <div></div>

      <div className="w-100 vh-100 justify-content-center align-items-center">
        <div className="w-100">
          <Link to="/login" className="btn btn-success float-end">
            Logout
          </Link>

          <table className="table">
            <thead>
              <tr className="table-data">
                <th scope="row">Orderid</th>
                <th scope="row">Persons</th>
                <th scope="row">Num of Elders</th>
                <th scope="row">Snacks</th>
                <th scope="row">Drinks</th>
                <th scope="row">Total count</th>
                <th scope="row">Status</th>
                <th scope="row">ordered Time</th>
                {/* <th scope="row">snacksChildren</th>
                <th scope="row">drinksChildren</th>
                <th scope="row">totalItemChildren</th> */}
              </tr>
            </thead>

            {orders.map((item, i) => {
              //  console.log(item)
              return (
                <tbody>
                  <tr key={i}>
                    <td className="p-5 m-1" rowSpan={2} scope="row">
                      {i + 1}
                    </td>
                    <td>Elders</td>
                    <td>{item.numberOfElders}</td>
                    <td>{item.snacksElder}</td>
                    <td>{item.drinksElder}</td>
                    <td>{item.totalItemElder}</td>
                    <td className="status-btn p-5 m-1" rowSpan={2} scope="row">


                      {/* <div>
                        <form>
                          <label>
                            Name:
                            <input
                              type="text"
                              name="name"
                              onChange={this.handleInputChange}
                            />
                          </label>
                          <br />
                          <label>
                            Email:
                            <input
                              type="text"
                              name="email"
                              onChange={this.handleInputChange}
                            />
                          </label>
                        </form>
                        <div>
                          <h2>Your Input:</h2>
                          <p>Name: {this.state.name}</p>
                          <p>Email: {this.state.email}</p>
                        </div>
                      </div> */}

              {/* <label className="m-3 p-4">
              <select 
                style={{ width: 150 }}
                className="form-control"
                type="dropdown"
                name="snacks"
                onSubmit={Update}
                // onChange={(e) => setStatusform(e.target.value)}
              >
                <option value="Pending">pending</option>
                <option value="In progress">In progress</option>
                <option value="Ordered">Ordered</option>
              </select>
            </label> */}



            {/* <h2>Status</h2> */}
            <div className="mb-2">
              <select className="form-control" name="" id="" onSubmit={Update}>
                <option value="Pending">Pending</option>
                <option value="In progress">In progress</option>
                <option value="Ordered">Ordered</option>
                </select> <br />
                {/* <button className='btn btn-success'>Update</button> */}
                
            </div>
            
      

                      {/* select form */}
                      {/* <div>
                        <button class="btn btn-success p-2 m-1"
                          type="btn"
                          onClick={() => setStatus(true)}
                // onChange={(e) => setStatus(e.target.value)}
                          
                        >
                          {
                            item.status?item.status : "status"
                          }
                        </button>
                        <Modal
                          isOpen={status}
                          onRequestClose={() => setStatus(false)}
                          style={{
                            overlay: {
                              position: "fixed",
                              zIndex: 1020,
                              top: 0,
                              left: 0,
                              width: "100vw",
                              height: "100vh",
                              // background: "rgba(255, 255, 255, 0.75)",
                              background: "rgba(255, 255, 255, 0.2)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            content: {
                              background: "rgba(64, 64, 64, 0.2)", 
                              width: "45rem",
                              maxWidth: "calc(40vw - 2rem)",
                              maxHeight: "calc(100vh - 2rem)",
                              overflowY: "auto",
                              position: "relative",
                              border: "1px solid #ccc",
                              borderRadius: "0.3rem",
                            },
                          }}
                        >
                          
                          <h1>Ordered Status</h1>
                            
                          <label className="m-3 p-4">
              <select
                style={{ width: 250 }}
                className="form-control"
                type="dropdown"
                name="snacks"
                onChange={(e) => setOrderStatus(e.target.value)}
              >
                <option value="N/A">N/A</option>
                <option value="order">Orderd</option>
                <option value="pending">Pending</option>
                <option value="in progress">In progress</option>
              </select>
            </label>
                             
                          <button class="btn btn-success p-2  m-1"
                            type="submit" 
                            // onClick={() => setStatus(false)}
                            onClick={e => Update(e,item._id)}
                          > 
                            OK
                          </button>
                          
                        </Modal>
                      </div> */}
                    </td>

                    <td class="status-btn p-5 m-1" rowSpan={2} scope="row">
                      {new Date(item.orderDateTime).toLocaleString(undefined, {
                        timeZone: "Asia/Kolkata",
                      })}
                    </td>
                  </tr>
                  <tr key={i}>
                    {/* <td scope="row">{i + 1}</td> */}
                    <td>Childrens</td>
                    <td>{item.numberOfChild}</td>
                    <td>{item.snacksChildren}</td>
                    <td>{item.drinksChildren}</td>
                    <td>{item.totalItemChildren}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;

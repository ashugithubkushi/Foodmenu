import React, { useState } from "react";
import Layout from "../components/Layouts/Layout";
// import { Link } from "react-router-dom";




const Bell = () => {

  const [counter, setCounter] = useState(0);
 
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
      // Counter state is incremented
      setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
      // Counter state is decremented
      setCounter(counter - 1);
  };

  return (
    <Layout>
      <div>
        <h1>GeeksforGeeks</h1>
        <h4>
          Icon with count Badge:
          <span id="group">
            <button type="button" class="btn btn-info">
              <i class="fa fa-envelope"></i>
            </button>
            <span class="badge badge-light">5</span>
          </span>{" "}
          <br />
          <button class="btn btn-danger">
            <i class="fas fa-minus"></i>
            Subtract
          </button>
          <button class="btn btn-success">
            <i class="fas fa-plus"></i>
            Addition
          </button>
        </h4>
      </div>

       {/* <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "300%",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "-15%",
            }}
        >
            Counter App
            <div
                style={{
                    fontSize: "120%",
                    position: "relative",
                    top: "10vh",
                }}
            >
                {counter}
            </div>
            <div className="buttons">
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginRight: "5px",
                        backgroundColor: "green",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick1}
                >
                    Increment
                </button>
                <button
                    style={{
                        fontSize: "60%",
                        position: "relative",
                        top: "20vh",
                        marginLeft: "5px",
                        backgroundColor: "red",
                        borderRadius: "8%",
                        color: "white",
                    }}
                    onClick={handleClick2}
                >
                    Decrement
                </button>
            </div>
            
        </div> */}

      <form action="">
        <div className="w-100 vh-100 justify-content-center align-items-center">
        <div className="w-100">
          <div>
            <h2 style={{ color: "red", fontFamily: "opensans-bold" }}>
              {" "}
              Total order count{" "}
            </h2>
          </div>
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
          </table>
        </div>
      </div>
      </form>
    
    
    </Layout>
  );
};

export default Bell;

import React from 'react'


class Abouut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Childrens: '',
      snacks: '',
      drinks: '',
      totalcount: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

//   render () {
//   return (
//       <div>
//         <form action="">
          
//           <label className="m-3 p-4">
//             <h5>Elders</h5>
//             <input type="number" name="elders" onChange={this.handleInputChange} />
//           </label>

       

//         <label className="m-3 p-4">
//         <h5>Snacks</h5>
//           <select type="dropdown" name="snacks" onChange={this.handleInputChange}>
//               <option value="N/A">N/A</option>
//               <option value="Pizza">Pizza</option>
//               <option value="Burger">Burger</option>
//               <option value="Chats">Chats</option>
//               </select>
//         </label>

//         <label className="m-3 p-4">
//             <h5>Drinks</h5>
//             <select type="dropdown" name="drinks" onChange={this.handleInputChange}>
//               <option value="N/A">N/A</option>
//               <option value="Coffe">Coffe</option>
//               <option value="Tea">Tea</option>
//               <option value="Cool drink">Cool drink</option>
//               </select>
//           </label>



//           <label className="m-3 p-4">
//             <h5>Item count</h5>
//             <input type="number" name="itemcount" onChange={this.handleInputChange} />
//           </label>
//              </form>

//         <div>
//           <h2>Your Input:</h2>
//           <p>Elder: {this.state.elders}</p>
//           <p>Snacks: {this.state.snacks}</p>
//           <p>Snacks: {this.state.drinks}</p>
//           <p>Snacks: {this.state.itemcount}</p>
//         </div>

//         </div>
//   )
// }
// }

// export default Abouut


// import React from 'react'

  render () {
  return (
    <div>
      
      <form className="formdata">
          
          <label className="m-3 p-4">
            <h5>Childrens</h5>
            <input type="number" name="elders" onChange={this.handleInputChange} />
          </label>

       

        <label className="m-3 p-4">
        <h5>Snacks</h5>
          <select type="dropdown" name="snacks" onChange={this.handleInputChange}>
              <option value="N/A">N/A</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Chats">Chats</option>
              </select>
        </label>

        <label className="m-3 p-4">
            <h5>Drinks</h5>
            <select type="dropdown" name="drinks" onChange={this.handleInputChange}>
              <option value="N/A">N/A</option>
              <option value="Coffe">Coffe</option>
              <option value="Tea">Tea</option>
              <option value="Cool drink">Cool drink</option>
              </select>
          </label>



          <label className="m-3 p-4">
            <h5>Item count</h5>
            <input type="number" name="itemcount" onChange={this.handleInputChange} />
          </label>
             

        <div>
          <h2>Selected data</h2>
          <p>Children: {this.state.childrens}</p>
          <p>Snacks: {this.state.snacks}</p>
          <p>Snacks: {this.state.drinks}</p>
          <p>Snacks: {this.state.itemcount}</p>
        </div>
  </form>
      
    </div>









    )
  }
}

export default Abouut



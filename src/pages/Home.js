import React from 'react'
import Layout from '../components/Layouts/Layout'

const Home = () => {
  return (
    <Layout>
        <div>
            {/* <form action="">
                <div className='home-data'>
                <label htmlFor="">Elders</label>
                <input type="number" className='number' />
                </div>
                <div className='home-data'>
                <label htmlFor="">Childrens</label>
                <input type="number" className='number' />
                </div>
            </form> */}

        
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
        </div>
        
    </Layout>
  )
}

export default Home

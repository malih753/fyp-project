import "./profileorders.css";
import { MDBBtn } from "mdb-react-ui-kit";
import ProfileHeader from "./ProfileHeader";
import img from "./../../assets/lightbox5.jpg";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import { ServerDomain } from "../../constant/ServerDomain";
=======
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17

const ProfileOrder = () => {
  const [myOrder, setMyOrders] = useState([])

  useEffect(() => {
    const getMyOrders = async () => {
<<<<<<< HEAD
      const response = await axios.get(`${ServerDomain}/info/getMyOrder`, {
=======
      const response = await axios.get("http://localhost:5000/api/v1/info/getMyOrder", {
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
        withCredentials: true
      })
      setMyOrders(response.data?.info)
    }
    getMyOrders()

  }, [])
  console.log("my orders", myOrder)


  return (
    <>
      <div className="homes-order">
        <div className="text-headings">
          <h3>Order History</h3>
          <p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            inventore sequi quod iste voluptas delectus excepturi adipisci
            doloribus nesciunt autem!
          </p>
        </div>
       <div style={{display:'grid', gridTemplateColumns:"repeat(2, 1fr)"}}>
       {myOrder?.map((item) => {
          return (
            <div className="cards">
              <div className="cards_details">
                <div>
                  <h5>Order Date</h5>
                  <p>12/12/2021</p>
                </div>
                <div>
                  <h5>Order Number </h5>
                  <p>123456789</p>
                </div>
                <div>
                  <h5>Total Amount</h5>
                  <p>$123.45</p>
                </div>
                <Link style={{backgroundColor:"#75DBD0",padding:12,color:"white",marginLeft:200,borderRadius:7}}>View Order</Link>
              </div>
              <hr />
              <div className="">
                <div className="img_details">
                  <img src={img} alt="img" />
                  <div>
                    <div className="heading_img">
                      <h4>{item.package_name}</h4> <h4>{item.price}</h4>
                    </div>
                    <div className="task_details">
                      <h6> Labs : CITI Lab </h6>{" "}
                      <h6>
                        <TaskAltIcon /> Paid
                      </h6>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                      inventore sequi quod iste voluptas delectus excepturi adipisci
                      doloribus nesciunt autem! Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Numquam, iure.
                    </p>
                  </div>
                </div>
                <div className="status_check">
                  <h6>Order Status :</h6>
                  <h6>
                    <TaskAltIcon className="completed" /> Completed
                  </h6>
                  <div>
                    <Link to="/products" className="products">
                      View products
                    </Link> 
                  </div>
                </div>
              </div>
            </div>
          )
        })}
       </div>
      </div>
    </>
  );
};

export default ProfileOrder;


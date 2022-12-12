import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../index.css";
import { FiHeart } from "react-icons/fi";

const Details = () => {
  const [data, setData] = useState("");
  const [love, setLove] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/car/${id}`).then((res) => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  return (
    <div className="postDetailsMain">
      <div className="card m-0 my-3   w-50 ">
        <img
          src={data.imageUrl}
          className="card-img-top "
          alt="Wild Landscape"
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{data.name}</h5>
          <p className="card-text">Car Description : {data.description}</p>
          <h2 className="card-text">
            <small className="text-muted">Price :{data.price} DT</small>
          </h2>
          <h5>
            <small className="text-muted">Phone : {data.nmr} </small>{" "}
          </h5> 
          <section className="heart"> 
          <FiHeart  onClick= {()=>{setLove(love+1)}}  /> 
          <h6>{love}</h6>
          </ section>
          </div>
          
        </div>
      </div>
    
  );
};
export default Details;

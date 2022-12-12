import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import Axios from "axios";

function MyAdds() {
  const userID = localStorage.getItem("id");
  const [car, setCar] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setCar(res.data.filter((item) => item.userId === userID));
      console.log(car);
    });
  }, []);

  return (
    <div style={{ maxWidth: "100vw", width: "100vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MDBRow className="row-cols-1 row-cols-md-3 g-4 w-75 py-5 ">
          {car.map((element) => {
            return <SingleAdd element={element} key={element._id} />;
          })}
        </MDBRow>
      </div>
    </div>
  );
}

const SingleAdd = ({ element }) => {
  const [isOnEdit, setIsOnEdit] = useState(false);
  const [price, setPrice] = useState(element.price);
  const token = localStorage.getItem("token");

  var del = (id) => {
    Axios.delete(`http://localhost:4000/api/car/${id}`, {
      headers: {
        auth: token,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(false);
  };

  var update = (id) => {
    Axios.put(
      `http://localhost:4000/api/car/${id}`,
      { price },
      {
        headers: {
          auth: token,
        },
      }
    )
      .then((res) => {
        console.log("hello");
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  return (
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src={
            element.imageUrl ||
            "https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=2000"
          }
          alt="..."
          position="top"
          className="ratio-4x3 object-cover"
        />
        <MDBCardBody>
          <MDBCardTitle>{element.name}</MDBCardTitle>
          {isOnEdit ? (
            <input value={price} onChange={(e) => setPrice(e.target.value)} />
          ) : (
            <MDBCardText>{element.price} DT</MDBCardText>
          )}
          <div className="btn-group">
            <a className="btn btn-primary " onClick={() => del(element._id)}>
              Delete
            </a>
            {isOnEdit ? (
              <a
                className="btn btn-primary"
                onClick={() => update(element._id)}
              >
                Save
              </a>
            ) : (
              <a
                className="btn btn-primary"
                onClick={() => setIsOnEdit(!isOnEdit)}
              >
                Edit
              </a>
            )}
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default MyAdds;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
} from "mdb-react-ui-kit";

export default function OnePost({ element }) {
  const navigate = useNavigate();

  const Nav = () => {
    navigate(`/details/${element["_id"]}`);
  };

  console.log(element.imageUrl);
  return (
    <MDBCol>
      <MDBCard onClick={Nav}>
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
          <MDBCardText>{element.price} DT</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

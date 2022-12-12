import OnePost from "./OnePost";
import { useEffect, useState } from "react";
import Axios from "axios";
import { MDBRow } from "mdb-react-ui-kit";

var Home = () => {
  const [car, setCar] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:4000/api/car").then((res) => {
      setCar(res.data);
    });
  }, []);
  const search = () => {
    if (searchItem === "") {
      return Axios.get("http://localhost:4000/api/car").then((res) => {
        setCar(res.data);
      });
    }
    setCar((cars) => {
      return cars.filter((car) => {
        return car.name.toLowerCase().includes(searchItem.toLowerCase());
      });
    });
  };

  return (
    <div style={{ maxWidth: "100vw", width: "100vw" }}>
      <img
        style={{ maxWidth: "100vw", width: "100vw" }}
        className="imag"
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/317808319_702182981263372_5492111919281268759_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=67FR5bAjnDkAX_58Ryh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTHbY3JKvUJ7_73b1zFPorGl5LuVxXnxwfm89dX35HVoQ&oe=63BAAF85"
        alt=""
      />

      <div className="w-100 d-flex justify-content-center  ">
        <div className="input-group  w-50 m-0 my-5 ">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setSearchItem(e.target.value)}
          />

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={search}
          >
            search
          </button>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MDBRow className="row-cols-1 row-cols-md-3 g-4 w-75 py-5 ">
            {car?.map((element) => {
              return <OnePost element={element} key={element._id} />;
            })}
          </MDBRow>
        </div>
      </div>
    </div>
  );
};

export default Home;

import useFetch from "../hooks/useFetch";
import { formatDateTime } from "../utils/formatDateTime";
import { Link } from "react-router-dom";
import { useState } from "react";

const Events = ({ typeFilter, search }) => {
  let url = "";

  
  if (typeFilter === "both" && search === "") {
    url = "https://meetup-app-backend-sigma.vercel.app/events";
  } else if (typeFilter === "online" || typeFilter === "offline") {
   
    if (search === "") {
      url = `https://meetup-app-backend-sigma.vercel.app/events/type?type=${typeFilter}`;
    } else {
     
      url = `https://meetup-app-backend-sigma.vercel.app/events/search?q=${encodeURIComponent(
        search
      )}`;
    }
  } else if (search !== "") {
    
    url = `https://meetup-app-backend-sigma.vercel.app/events/search?q=${encodeURIComponent(
      search
    )}`;
  }

 
  const { data, loading, error } = useFetch(url);

  return (
    <main className="container">
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <div className="alert alert-danger text-center" role="alert">
            <strong>Oops!</strong> Something went wrong.
          </div>
        </div>
      )}

      {data && data.length > 0 ? (
        <div className="row mt-3 ms-2 ">
          {data.map((event) => {
            return (
              <div
                key={event._id}
                className="col-12 col-sm-6 col-md-4 col-lg-4 mb-5 position-relative"
              >
                <Link
                  to={`/events/${event._id}`}
                  className="text-decoration-none"
                >
                  <img
                    src={event.imageThumb}
                    alt="Image"
                    className="img-fluid rounded object-fit-cover"
                    style={{ height: "18rem", width: "23rem" }}
                  />
                  <span
                    className="position-absolute top-0 start-0 mt-2 ms-4 px-3 py-1 
             bg-light text-dark rounded small fw-semibold shadow-sm"
                  >
                    {event.type}
                  </span>
                  <div className="text-secondary">
                    <span>{formatDateTime(event.date)} </span>
                    <h5 className="fw-bold text-black">
                      {event.title}
                    </h5>{" "}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        !loading &&
        !error && (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <h5 className="alert alert-danger">Events not found</h5>
          </div>
        )
      )}
    </main>
  );
};

export default Events;

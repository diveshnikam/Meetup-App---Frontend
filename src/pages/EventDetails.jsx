import { formatDateTime } from "../utils/formatDateTime";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { timeDate } from "../utils/timeDate";

const EventDetails = () => {
  const eventId = useParams();

  const { data, loading, error } = useFetch(
    `https://meetup-app-backend-sigma.vercel.app/events/id/${eventId.eventId}`
  );

  return (
    <>
      <Header />

      <hr className="container mt-3" />

      <main className="container">
        <div className="row">
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

          <div className="mt-4">
            {data ? (
              <>
                <div className="row g-4">
                  <div className="col-12 col-lg-6">
                    <h2 className="fw-bold details-title">{data.title}</h2>

                    <div className="mt-4">
                      <span>Hosted by:</span> <br />{" "}
                      <h6 className="fw-bold mt-1">{data.host}</h6>
                    </div>

                    <div className="mt-4">
                      <img
                        src={data.imageCover}
                        alt="Image"
                        className="img-fluid  object-fit-cover"
                        style={{ height: "20rem", width: "25rem" }}
                      />
                    </div>

                    <div className="mt-4">
                      <h5 className="fw-bold">Details:</h5>
                      <p className="mt-3">{data.description}</p>
                    </div>

                    <div className="mt-4">
                      <h5 className="fw-bold">Additional Information:</h5>

                      <div>
                        {" "}
                        <span className="fw-bold">Dress Code: </span>{" "}
                        <span>{data.additionalInfo.dressCode}</span> <br />{" "}
                      </div>
                      <div className="mt-2">
                        {" "}
                        <span className="fw-bold">Age Restrictions: </span>{" "}
                        <span>{data.additionalInfo.ageRestrictions}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h5 className="fw-bold">Event Tags</h5>

                      {data.tags && data.tags.length > 0 ? (
                        <div className="d-flex flex-wrap gap-2 mt-2">
                          {data.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="badge bg-danger p-3 mt-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <small className="text-muted">No tags</small>
                      )}
                    </div>
                  </div>

                  {/* ADDED: second column */}
                  <div className="col-12 col-lg-6 mt-4">
                    <div
                      className="card ms-lg-5 float-lg-end"
                      style={{ width: "22rem" }}
                    >
                      <div className="card-body">
                        <span className="card-text">&#128339;</span>
                        <time className="card-text ms-4 text-body">
                          {timeDate(data.date)} -
                        </time>{" "}
                        <br />
                        <time className="card-text ms-5 text-body ">
                          {formatDateTime(data.endDate)}
                        </time>{" "}
                        <br />
                        <div className="mt-4">
                          <span className="card-text ms-1">&#128205; </span>
                          <span className="ms-3 text-body">
                            {data.venue.name}
                          </span>{" "}
                          <br />
                          <p className="ms-5 text-body">{data.venue.address}</p>
                        </div>
                        <div className="mt-4">
                          <span className="card-text ms-2">&#8377; </span>
                          <span className="ms-4 text-body">
                            {data.isFree ? "Free" : data.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="mt-5 text-start text-lg-end">
                      <h3 className="fw-bold" style={{ marginRight: "11rem" }}>
                        Speakers: ({data.speakers.length})
                      </h3>
                    </div>

                    <div className="row mt-4 speakers-row" style={{ marginLeft: "19vw" }}
>
                      {data.speakers.map((sp, i) => {
                        return (
                          <div key={i} className="col-auto">
                            <div
                              className="card d-flex justify-content-center align-items-center mb-3"
                              style={{ height: "16rem", width: "16rem" }}
                            >
                              <img
                                src={sp.avatar}
                                alt="image"
                                className="object-fit-cover"
                                style={{
                                  height: "5rem",
                                  width: "5rem",
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }}
                              />
                              <h5 className="card-title fw-bold mt-2">{sp.name}</h5>
                              <p className="card-text">{sp.title}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              !loading &&
              !error && (
                <div className="d-flex justify-content-center align-items-center mb-5 ">
                  <h5 className="alert alert-danger">Events not found</h5>
                </div>
              )
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default EventDetails;

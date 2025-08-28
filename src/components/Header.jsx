import logo from "../assets/meetup.svg";
import {Link} from 'react-router-dom'

const Header = ({ search, setSearch }) => {
  return (
    <>
      <div className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {" "}
            <img
              src={logo}
              alt="Meetup"
              className="img-fluid"
              height={40}
              width={100}
            />
          </Link>

          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className=" me-2 p-1 my-placeholder"
              type="search"
              style={{ width: 245 }}
              placeholder={"\u{1F50D} Search by title and tags"}
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          
        </div>

        
        
      </div>

    </>
  );
};

export default Header;

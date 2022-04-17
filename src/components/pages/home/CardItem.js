import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// utils
import { colorType } from "utils/utility";

const CardItem = ({ card }) => {
  let { desc, status, date, title, id } = card;
  let { color } = colorType.find((item) => item.name === status);

  // ui function
  const turncate = (str) => {
    if (str.length < 15) {
      return str;
    }

    return str.substring(0, 15) + "...";
  };
  return (
    <div
      style={{ boxShadow: `0 5px 10px ${color}` }}
      className="cardItem bg-white p-4 rounded border"
    >
      <h4 className="text-center">{turncate(title)}</h4>

      <div className="time_date d-flex justify-content-around">
        <div className="d-flex flex-column align-items-center">
          <small className="text-muted border-bottom border-dark">time</small>
          <span>{new Date(date).toLocaleTimeString()}</span>
        </div>

        <div className="d-flex flex-column align-items-center">
          <small className="text-muted border-bottom border-dark">date</small>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
      <hr className="mx-auto w-100" />
      <div className="d-flex justify-content-between mt-3">
        <span
          style={{ background: color }}
          className="stuts text-white py-1 px-2 rounded d-flex align-items-center"
        >
          {status}
        </span>
        <Link to={`card/${id}`} className=" text-decoration-none    rounded">
          <Button className="btn btn-secondary  text-white">View Task</Button>
        </Link>
      </div>
    </div>
  );
};

export default CardItem;

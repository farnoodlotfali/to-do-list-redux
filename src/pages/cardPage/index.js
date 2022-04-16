import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

// redux features
import { cardActions, selectCardById } from "features/card/card-slice";

// utils
import { colorType } from "utils/utility";

// components
import EditModalBox from "components/Edit-ModalBox";

// styles
import "styles/pages/cardPage.scss";

const CardPage = () => {
  const { cardId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Show, setShow] = useState(false);

  const { desc, status, date, title, id } = useSelector((state) =>
    selectCardById(state, Number(cardId))
  );
  let { color } = colorType.find((item) => item.name === status);

  return (
    <div className="cardPage d-flex flex-lg-row flex-column justify-content-center gap-lg-5 gap-3">
      <Col
        lg="8"
        md="12"
        style={{ boxShadow: `0 5px 10px ${color}` }}
        className=" bg-white p-4 rounded border"
      >
        <h2 className="text-center mb-5">{title}</h2>
        <p className="d-flex justify-content-center text-justify text-dark">
          {desc}
        </p>
      </Col>
      <Col
        lg="3"
        md="12"
        style={{ boxShadow: `0 5px 10px ${color}` }}
        className="card_actions bg-white p-4 rounded border"
      >
        <h5 className="text-center">Actions</h5>

        <div className=" d-flex justify-content-center gap-2 mt-3">
          <Col lg="5" className="">
            <Button
              onClick={() => {
                dispatch(cardActions.deleteCard({ id }));
                navigate("/");
              }}
              className="btn delete_btn w-100 text-nowrap"
            >
              Delete
            </Button>
          </Col>
          <Col lg="5" className="">
            <Button
              onClick={() => setShow(true)}
              className="btn edit_btn w-100 text-nowrap"
            >
              Edit
            </Button>
          </Col>
        </div>
      </Col>

      <EditModalBox
        Show={Show}
        setShow={setShow}
        desc={desc}
        status={status}
        date={date}
        title={title}
        id={id}
      />
    </div>
  );
};

export default CardPage;

import { TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

// components
import SelectBox from "./SelectBox";

// redux features
import { cardActions } from "features/card/card-slice";

// utils
import { StatusCardType } from "utils/utility";

// styles
import "styles/components/editModalBox.scss";

const EditModalBox = ({ Show, setShow, desc, status, date, title, id }) => {
  const dispatch = useDispatch();
  const [editCard, setEditcard] = useState({
    title: title,
    desc: desc,
    date: date,
    status: status,
  });

  //handling
  const handleChangeData = (name, val) => {
    setEditcard((prev) => ({ ...prev, [name]: val }));
  };

  const handleSave = () => {
    dispatch(cardActions.editCard({ ...editCard, id }));
    setShow(false);
  };
  return (
    <Modal
      show={Show}
      onHide={() => setShow(false)}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="editModalBox_content border"
    >
      <Modal.Header closeButton>
        <Modal.Title className="ml-auto">Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Col lg="5">
            <Form.Control
              className="border-primary py-3 "
              type="Title"
              placeholder="Title"
              value={editCard.title}
              onChange={(e) => handleChangeData("title", e.target.value)}
            />
          </Col>
          <Col className="d-flex" lg="6">
            <div className="align-self-center">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField className="" {...props} />}
                  label={<span className="text-primary">DateTimePicker</span>}
                  value={editCard.date}
                  onChange={(newValue) => {
                    handleChangeData("date", newValue.getTime());
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="">
              <SelectBox
                data={StatusCardType}
                selectedData={editCard.status}
                setSelectedData={(e) => handleChangeData("status", e)}
                label={<span className="text-primary">Status</span>}
              />
            </div>
          </Col>
        </div>
        <textarea
          className="w-100 rounded p-2 border-primary"
          placeholder="Description..."
          rows={5}
          value={editCard.desc}
          onChange={(e) => handleChangeData("desc", e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-danger" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button onClick={() => handleSave()}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModalBox;

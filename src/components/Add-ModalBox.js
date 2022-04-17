import { TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Button, Col, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

// components
import SelectBox from "./SelectBox";

// redux features
import { setModalShowAsync } from "features/modal/modal-slice";
import { cardActions, setLoadingValue } from "features/card/card-slice";

// utils
import { StatusCardType } from "utils/utility";
// styles
import "styles/components/addModalBox.scss";

const AddModalBox = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const [newCard, setNewCard] = useState({
    title: "",
    desc: "",
    date: new Date().getTime(),
    status: "In progress",
  });

  //handling
  const handleChangeData = (name, val) => {
    setNewCard((prev) => ({ ...prev, [name]: val }));
  };

  const closeModal = () => {
    dispatch(setModalShowAsync(false));
  };
  const saveCard = () => {
    dispatch(setLoadingValue(true));

    dispatch(cardActions.addCard(newCard));
    closeModal();
    setTimeout(() => {
      dispatch(setLoadingValue(false));
      setNewCard({
        title: "",
        desc: "",
        date: new Date().getTime(),
        status: "In progress",
      });
    }, 1200);
  };

  return (
    <Modal
      show={open}
      onHide={() => closeModal()}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="addModalBox_content border"
    >
      <Modal.Header closeButton>
        <Modal.Title className="ml-auto">Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center">
          <Col lg="5" xs="12">
            <Form.Control
              className="border-danger py-3 "
              type="Title"
              placeholder="Title"
              value={newCard.title}
              onChange={(e) => handleChangeData("title", e.target.value)}
            />
          </Col>
          <Col className="d-flex" lg="6" xs="12">
            <div className="align-self-center">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField className="" {...props} />}
                  label={<span className="text-danger">DateTimePicker</span>}
                  value={newCard.date}
                  onChange={(newValue) => {
                    handleChangeData("date", newValue.getTime());
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="">
              <SelectBox
                data={StatusCardType}
                selectedData={newCard.status}
                setSelectedData={(e) => handleChangeData("status", e)}
                label={<span className="text-danger">Status</span>}
              />
            </div>
          </Col>
        </div>
        <textarea
          className="w-100 rounded p-2 border-danger"
          placeholder="Description..."
          rows={5}
          value={newCard.desc}
          onChange={(e) => handleChangeData("desc", e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-danger" onClick={() => closeModal()}>
          Close
        </Button>
        <Button onClick={() => saveCard()}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModalBox;

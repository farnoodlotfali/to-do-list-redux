import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import SelectBox from "../components/SelectBox";
import CardItem from "../components/pages/home/CardItem";
import fakeDate from "../features/card/cards.json";
import "../styles/pages/home.scss";

const Test = () => {
  const [monthName, setmonthName] = useState([
    monthes[new Date().getMonth()].name,
  ]);
  const [year, setYear] = useState([]);
  const [allYear, setAllYear] = useState([]);
  // console.log(fakeDate);
  useEffect(() => {
    let thisYear = new Date().getFullYear();
    setYear([thisYear]);
    return () => {
      for (let i = 0; i < 5; i++) {
        setAllYear((prev) => [
          ...prev,
          { name: String(thisYear + i), value: thisYear + i },
        ]);
      }
    };
  }, []);

  return (
    <div className="home">
      {/* buttons */}
      <div className="filter_sec d-flex justify-content-around">
        <div className="d-flex">
          <SelectBox
            data={monthes}
            label={"Month"}
            selectedData={monthName}
            setSelectedData={setmonthName}
          />
          <SelectBox
            data={allYear}
            label={"Year"}
            selectedData={year}
            setSelectedData={setYear}
          />
          <div className="d-flex ">
            <Button className="btn btn-danger align-self-center px-4">
              Filter
            </Button>
          </div>
        </div>
        <div className="d-flex">
          <Button className="  align-self-center px-4">
            Add New Task
            <Add />
          </Button>
        </div>
      </div>

      <hr className="mx-auto w-75" />
      {/* cards */}

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {fakeDate.map((item) => {
          return <CardItem key={item.id} card={item} />;
        })}

        {/* <CardItem
          card={{
            desc: "Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.",
            status: "Waiting",
            title: "Reset a text or link’s",
            date: new Date(),
            id: 2,
          }}
        />
        <CardItem
          card={{
            desc: "Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.",
            status: "Done",
            title: "Reset a text or link’s",
            date: new Date(),
            id: 3,
          }}
        />
        <CardItem
          card={{
            desc: "Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.",
            status: "In progress",
            title: "Reset a text or link’s",
            date: new Date(),
            id: 4,
          }}
        />
        <CardItem
          card={{
            desc: "Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.",
            status: "In progress",
            title: "Reset a text or link’s",
            date: new Date(),
            id: 5,
          }}
        />
        <CardItem
          card={{
            desc: "Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.",
            status: "In progress",
            title: "Reset a text or link’s",
            date: new Date(),
            id: 6,
          }}
        />
        <CardItem
          card={{
            desc: "Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.",
            status: "In progress",
            title: "Reset a text or link’s",
            date: new Date(),
            id: 7,
          }}
        />
        <CardItem
          card={{
            desc: "Reset a text or link’s color with .text-reset, so that it inherits the color from its parent.",
            status: "In progress",
            title: "Reset a text or link’s",
            date: new Date(),
            id: 8,
          }}
        /> */}
        {/* <div className="">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                console.log(newValue);
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </div> */}
      </div>
    </div>
  );
};
const monthes = [
  {
    name: "January",
    value: 1,
  },
  {
    name: "February",
    value: 2,
  },
  {
    name: "March",
    value: 3,
  },
  {
    name: "April",
    value: 4,
  },
  {
    name: "May",
    value: 5,
  },
  {
    name: "June",
    value: 6,
  },
  {
    name: "July",
    value: 7,
  },
  {
    name: "August",
    value: 8,
  },
  {
    name: "September",
    value: 9,
  },
  {
    name: "October",
    value: 10,
  },
  {
    name: "November",
    value: 11,
  },
  {
    name: "December",
    value: 12,
  },
];
export default Test;

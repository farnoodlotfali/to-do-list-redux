import { Add } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

// components
import CardItem from "components/pages/home/CardItem";
import SelectBox from "components/SelectBox";

// redux features
import { setModalShowAsync } from "features/modal/modal-slice";
import { cardActions, setLoadingValue } from "features/card/card-slice";

// utils
import { monthes } from "utils/utility";

// styles
import "styles/pages/home.scss";

const Home = () => {
  const [monthName, setmonthName] = useState(monthes[0].name);
  const [year, setYear] = useState("All");
  const [allYear, setAllYear] = useState([{ name: String("All"), value: 0 }]);
  const dispatch = useDispatch();
  const { cards, filterd, loading } = useSelector((state) => state.card);

  useEffect(() => {
    let thisYear = new Date().getFullYear();
    return () => {
      let newArr = [];
      newArr.push({ name: String(thisYear), value: thisYear });
      for (let i = 1; i < 3; i++) {
        newArr.push({ name: String(thisYear + i), value: thisYear + i });
        newArr.push({ name: String(thisYear - i), value: thisYear - i });
      }
      newArr.sort((a, b) => a.value - b.value);
      setAllYear((prev) => [...prev, ...newArr]);
    };
  }, []);

  return (
    <div className="home">
      {/* buttons */}
      <div className="filter_sec d-flex flex-md-row flex-column-reverse  align-items-center  justify-content-around">
        <div className="d-flex flex-wrap justify-content-center">
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
            <Button
              onClick={() => {
                dispatch(setLoadingValue(true));
                dispatch(
                  cardActions.filterCards({
                    year,
                    monthName,
                  })
                );

                setTimeout(() => {
                  dispatch(setLoadingValue(false));
                }, 1200);
              }}
              className="btn btn-danger align-self-center px-4"
            >
              Filter
            </Button>
          </div>
        </div>
        <div className="d-flex mb-md-0 mb-4">
          <Button
            onClick={() => dispatch(setModalShowAsync(true))}
            className="  align-self-center px-4"
          >
            Add New Task
            <Add />
          </Button>
        </div>
      </div>

      <hr className="mx-auto w-75" />
      {/* cards */}

      <div className="home_cards d-flex flex-wrap gap-4 justify-content-center">
        {loading ? (
          <CircularProgress color="error" />
        ) : filterd.length === 0 ? (
          cards.map((item) => {
            return <CardItem key={item.id} card={item} />;
          })
        ) : (
          filterd.map((item) => {
            return <CardItem key={item.id} card={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;

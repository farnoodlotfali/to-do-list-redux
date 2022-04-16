import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { memo } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 10,
    },
  },
};

const useOutlinedInputStyles = makeStyles(() => ({
  notchedOutlineInput: {
    borderColor: "red !important",
  },
}));

const SelectBox = ({ data, selectedData, setSelectedData, label }) => {
  const outlinedInputClasses = useOutlinedInputStyles();

  //handling
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedData(value);
  };

  //ui functoins
  const getStyles = (name) => {
    return {
      background: selectedData.indexOf(name) === -1 ? "white" : "tomato",
      color: selectedData.indexOf(name) === -1 ? "black" : "white",
      fontWeight: selectedData.indexOf(name) === -1 ? "500" : "bold",
    };
  };

  return (
    <FormControl sx={{ m: 1, width: 150 }}>
      <InputLabel className="text-danger">{label}</InputLabel>
      <Select
        value={selectedData}
        onChange={handleChange}
        input={
          <OutlinedInput
            classes={{
              notchedOutline: outlinedInputClasses.notchedOutlineInput,
            }}
            label="Month"
          />
        }
        MenuProps={MenuProps}
      >
        {data.map((item) => (
          <MenuItem
            key={item.value}
            value={item.name}
            style={getStyles(item.name)}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default memo(SelectBox);

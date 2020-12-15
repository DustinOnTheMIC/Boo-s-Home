import React, { Component } from "react";
import Picker from "react-scrollable-picker";

class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        type: "am",
        hours: "8",
        min: "0",
      },
      optionGroupAM: {
        type: [
          { value: "am", label: "AM." },
          { value: "pm", label: "PM." },
        ],
        hours: [
          { value: "8", label: "8" },
          { value: "9", label: "9" },
          { value: "10", label: "10" },
          { value: "11", label: "11" },
          { value: "12", label: "12" },
        ],
        min: [
          { value: "0", label: "00" },
          { value: "30", label: "30" },
        ],
      },
      optionGroupPM: {
        type: [
          { value: "am", label: "AM." },
          { value: "pm", label: "PM." },
        ],
        hours: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "8", label: "8" },
        ],
        min: [
          { value: "0", label: "00" },
          { value: "30", label: "30" },
        ],
      },
    };
  }

  setStateValueGroup = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value,
      },
    }))
  };

  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setStateValueGroup(name, value);
    setTimeout(() => {
      const {hours, min, type} = this.state.valueGroups
      this.props.handleChange(`${hours} ${min} ${type}`)
    }, 100);
  };

  render() {
    const {  valueGroups } = this.state;
    var optionGroups = this.state.optionGroupAM;
    if(this.state.valueGroups.type === 'pm'){
        optionGroups = this.state.optionGroupPM
    }

    return (
      <div className="col-12 bg-light text-dark rounded">
        <Picker
          optionGroups={optionGroups}
          valueGroups={valueGroups}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TimePicker;

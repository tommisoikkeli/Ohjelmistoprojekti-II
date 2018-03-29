import React from "react";
import Country from "../components/content/map/Country";

describe("Country", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Country />);
    expect(wrapper).toMatchSnapshot();
  });

  it("displays default text when no country is selected", () => {
    const wrapper = shallow(<Country />);
    expect(wrapper.find("span").text()).toEqual("Select a country");
  });

  it("displays country name", () => {
    const wrapper = shallow(<Country country="Finland" />);
    expect(wrapper.find("span").text()).toEqual("Finland");
  });
});

import React, { Component } from "react";
import TabButton from "./TabButton";

export default class TimelineTabs extends Component {
  constructor() {
    super();
    this.state = {
      active: "all"
    };
  }

  clickHandler(name, key) {
    this.setState({
      active: name
    });
    this.props.onAssetChange(key);
  }

  render() {
    const buttons = this.props.geographicalWeightData.length
      ? this.props.geographicalWeightData[0].assetClasses.map((item, key) => {
          return (
            <TabButton
              isActive={item.class === this.state.active ? "is-active" : ""}
              onClickHandler={() => this.clickHandler(item.class, key)}
              key={key}
              asset={item.class}
            />
          );
        })
      : [];

    return (
      <div className="tabs is-toggle is-toggle-rounded is-centered is-fullwidth">
        {buttons}
      </div>
    );
  }
}

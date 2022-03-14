import React from "react";

const style = {
  marginBottom: "15px",
  textAlign: "center",
  color: "#8BAD21",
  display: "inline-block",
  fontSize: "36px",
  lineHeight: "1.8",
  width: "80px",
  height: "80px",
  border: "2px solid rgba(153, 153, 153, 0.2)",
  borderRadius: "50%",
  alignItems: "center",
};

class Card extends React.Component {
  render() {
    return (
      <div className="col">
        <div>
          <div style={style}>
            <this.props.icon />
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

import React from 'react';

const Card = (props) => {
   const {title, text} = props;
      return (<div className="card">
      <div className="card-body">
          {title ? <h4 className="card-title"> {title} </h4> : null }
          {text ? <p className="card-text"> {text} </p> : null }
      </div>
  </div>);   
}

export default Card;
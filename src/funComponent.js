import React from 'react';

function MyCar(props) {
  return (
    <h1>I Have a {props.color} car</h1>
  );
}

function ShowRoom(arg) {
  return (
    <div>
      <h1> My ShowRoom </h1> <MyCar color={arg.color} />
    </div>
  );
}

export default ShowRoom;

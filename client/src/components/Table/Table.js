import React from "react";
import "./Table.css";

const Table = props => 
<div class="card">
  <div class="card-body">
  {props.children}
  </div>
</div>;

export default Table;

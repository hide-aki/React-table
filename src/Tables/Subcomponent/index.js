import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class SubComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName",
                  Footer: () =>
                    <div style={{ textAlign: "center" }}>First Name</div>
                },
                {
                  Header: "Last Name",
                  accessor: "lastName",
                  Footer: () =>
                    <div style={{ textAlign: "center" }}>Last Name</div>
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age",
                  Footer: () => <div style={{ textAlign: "center" }}>Age</div>
                }
              ]
            },
            {
              Header: "Expand",
              columns: [
                {
                  expander: true,
                  Header: () => <strong>More</strong>,
                  width: 65,
                  Expander: ({ isExpanded, ...rest }) => {
                    console.log('restrestrestrestrestrest', rest, isExpanded);
                    return (<div>
                      {isExpanded
                        ? <span>&#x2299;</span>
                        : <span>&#x2295;</span>}
                    </div>)},
                  style: {
                    cursor: "pointer",
                    fontSize: 25,
                    padding: "0",
                    textAlign: "center",
                    userSelect: "none"
                  },
                  Footer: () => <span>&hearts;</span>
                }
              ]
            }
          ]}
          defaultPageSize={1}
          className="-striped -highlight"
          isExpanded={true}
          SubComponent={({ original }) => <div style={{padding: '10px'}}>{original.lastName}</div>}
          subRows={<div style={{padding: '10px'}}>Hello</div>}
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

import React from "react";

function Invoices() {
  return (
    <div>
      <div className="collapse bg-base-200 shadow-md">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Test Invoice</div>
        <div className="collapse-content">
          <p>Invoice 1</p>
        </div>
      </div>
      
    </div>
  );
}

export default Invoices;

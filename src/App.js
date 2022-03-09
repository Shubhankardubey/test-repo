import "./1.css";
import React, { useState } from "react";

function App() {
  const [checkBoxArr, setcheckBoxArr] = useState([
    {
      label: "Have members personal information, such as name, address, etc.?",
    },
    {
      label: "Have members medical information?",
    },
    {
      label: "Contact members via written correspondence?",
    },
    {
      label: "Contact members via telephone?",
    },
    {
      label: "Contact members in-person?",
    },
    {
      label: "Mail information to members?",
    },
    {
      label: "Interact with members to improve their quality of health?",
    },
    {
      label: "Make decisions on behalf of CNC-NC?",
    },
    {
      label:
        "Take direction from CNC-NC regarding any decisions that need to be made?",
    },
    {
      label: "Perform a “one-time” service for CNC-NC?",
    },
    {
      label: "Perform an “on-demand” services for CNC-NC?",
    },
  ]);

  const [checkBoxArr1, setcheckBoxArr1] = useState([
    {
      label: "Debarment Screening Completed?",
    },
    {
      label: "Exclusion Screening Completed?",
    },
    {
      label: "Is the vendor an FDR?",
    },
    {
      label: "If FDR, has Code of Conduct been sent?",
    },
    {
      label: "Was an entry made the in the Contracts Library for the vendor?",
    },
  ]);

  const [cnc_nc_requestername, setcnc_nc_requestername] = useState("");
  const [todayDate, settodayDate] = useState("");
  const [dateServiceToBegin, setdateServiceToBegin] = useState("");
  const [contractProperty, setcontractProperty] = useState("");
  const [criticalDate, setcriticalDate] = useState("");
  const [fdrType, setfdrType] = useState("");
  const [serviceRequire, setserviceRequire] = useState("");
  const [vendorContactName, setvendorContactName] = useState("");
  const [vendorContactEmail, setvendorContactEmail] = useState("");
  const [vendorLegalName, setvendorLegalName] = useState("");
  const [vendorFunctions, setvendorFunctions] = useState("");
  const [serviceCharge, setserviceCharge] = useState("");

  const userChecked = (index, value) => {
    let tempArr = JSON.parse(JSON.stringify(checkBoxArr));
    tempArr[index]["value"] = value;
    setcheckBoxArr(tempArr);
  };
  const userChecked1 = (index, value) => {
    let tempArr = JSON.parse(JSON.stringify(checkBoxArr1));
    tempArr[index]["value"] = value;
    setcheckBoxArr1(tempArr);
  };

  const handleSubmit = () => {
    console.log("cnc_nc_requestername", cnc_nc_requestername);
    console.log("todayDate", todayDate);
    console.log("dateServiceToBegin", dateServiceToBegin);
    console.log("contractProperty", contractProperty);
    console.log("criticalDate", criticalDate);
    console.log("fdrType", fdrType);
    console.log("serviceRequire", serviceRequire);
    console.log("vendorContactName", vendorContactName);
    console.log("vendorContactEmail", vendorContactEmail);
    console.log("vendorLegalName", vendorLegalName);

    console.log("vendorLegalName", vendorLegalName);
    console.log("vendorFunctions", vendorFunctions);
    console.log("serviceCharge", serviceCharge);

    console.log("checkBoxArr", checkBoxArr);
    console.log("checkBoxArr1", checkBoxArr1);
  };

  return (
    <div className="mainContainer">
      <div className="topHeading">
        Care N’ Care Insurance Company of North Carolina (“CNC-NC”), Inc.
        Contract Request Intake Form (v. 3.0)
      </div>
      <hr />
      <div className="topContent">
        <h3>Background</h3>
        <p>
          The purpose of the Contract Request Intake Form is to streamline the
          contracting process to ensure business areas have external vendor
          resources to support tactical and strategic goals of CNC-NC. Every
          contract request must include this completed document, along with the
          contract documents.
        </p>
        <p>
          <b>
            Dollar Amount: If a contract totals less than $10,000, after adding
            all costs over the life of the contract, once this Form is completed
            and the requesting party has been notified that the exclusion and/or
            preclusion checks are completed satisfactorily, Compliance does not
            need to review the contract any further, unless the requesting party
            asks Compliance to review the contract.
          </b>
          Reasons that the requesting party may want Compliance to review a
          contract would be if the contract includes legal language or items the
          requesting party does not understand.
        </p>
        <p>
          <b>Two Types of Vendors:</b> There are two types of vendors: vendors
          that are <b style={{ textDecoration: "underline" }}>NOT</b> designated
          as first-tier, downstream or related (FDR) entities and those are
          designated as an FDR.
        </p>
        <p>
          In general, vendors that are{" "}
          <b style={{ textDecoration: "underline" }}>NOT</b> FDRs include
          restaurants, office supplies, member giveaways, paper shredding
          vendors, computer hardware and most software, rental car companies,
          furniture suppliers, event sponsors, trophy and awards vendors,
          construction and repair vendors, and organizations that provide
          training and videos. This is{" "}
          <b style={{ textDecoration: "underline" }}>NOT</b> an exhaustive list.
        </p>
        <p>
          In general, vendors that{" "}
          <b style={{ textDecoration: "underline" }}>ARE</b> FDRs have direct
          contact with our members via in-person engagements, telephone,
          surveys, or sales agents taking enrollment applications. FDRs may have
          member data (i.e., enrollment and clinical information) that is used
          to perform a function that would otherwise be conducted by CNC-NC.
          FDRs usually make decisions on behalf of CNC-NC and perform functions
          that CNC-NC is required to undertake based on our agreement with CMS.
          For example, Beacon processes Part C medical claims and enrollment
          applications, which makes it an FDR.
        </p>
        <p>
          All fields{" "}
          <b style={{ textDecoration: "underline" }}>must be completed</b> prior
          to submission to:{" "}
          <b style={{ textDecoration: "underline", color: "blue" }}>
            Contracts@healthteamadvantage.com
          </b>
          . Please also include the proposed vendor agreement, statement of work
          or terms and conditions.
        </p>
        <p>
          <b>Required Information</b>
        </p>
        <div style={{ display: "flex" }}>
          <div className="flex33">
            <label>CNC-NC Requestor Name</label>
          </div>
          <div className="flex33">
            <label>Today’s Date</label>
          </div>
          <div className="flex33">
            <label>Date Service to Begin</label>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <div className="flex33">
            <input
              type="text"
              value={cnc_nc_requestername}
              name="cnc_nc_requestername"
              onChange={(e) => setcnc_nc_requestername(e.target.value)}
            />
          </div>
          <div className="flex33">
            <input
              type="date"
              onChange={(e) => settodayDate(e.target.value)}
              value={todayDate}
              name="todayDate"
            />
          </div>
          <div className="flex33">
            <input
              type="date"
              value={dateServiceToBegin}
              name="dateServiceToBegin"
              onChange={(e) => setdateServiceToBegin(e.target.value)}
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <div className="flex33">
            <label>Contract Property</label>
          </div>
          <div className="flex33">
            <label>
              Critical Date(s) Before
              <br />
              Service to Begin
            </label>
          </div>
          <div className="flex33">
            <label>FDR/Non-FDR</label>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <div className="flex33">
            <select
              value={contractProperty}
              name="contractProperty"
              onChange={(e) => setcontractProperty(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Low (3 Months)">Low (3 Months)</option>
              <option value="Medium (2 Months)">Medium (2 Months)</option>
              <option value="High (1 Months)">High (1 Months)</option>
              <option value="Critical (2 Weeks)">Critical (2 Weeks)</option>
            </select>
          </div>
          <div className="flex33">
            <input
              type="date"
              value={criticalDate}
              name="criticalDate"
              onChange={(e) => setcriticalDate(e.target.value)}
            />
          </div>
          <div className="flex33">
            <select
              value={fdrType}
              name="fdrType"
              onChange={(e) => setfdrType(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="FDR">FDR</option>
              <option value="Non-FDR">Non-FDR</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <p>CNC-NC Confidential</p>
      <br />
      <br />
      <br />
      <div className="topHeading">
        Care N’ Care Insurance Company of North Carolina (“CNC-NC”), Inc.
        Contract Request Intake Form (v. 3.0)
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <div className="flex33">
          <label>Will Service Require IT Review</label>
        </div>
        <div className="flex33">
          <label>Vendor Contact Name</label>
        </div>
        <div className="flex33">
          <label>Vendor Contact Email</label>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <div className="flex33">
          <select
            value={serviceRequire}
            onChange={(e) => setserviceRequire(e.target.value)}
            name="serviceRequire"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="flex33">
          <input
            type="text"
            onChange={(e) => setvendorContactName(e.target.value)}
            value={vendorContactName}
            name="vendorContactName"
          />
        </div>
        <div className="flex33">
          <input
            type="email"
            onChange={(e) => setvendorContactEmail(e.target.value)}
            value={vendorContactEmail}
            name="vendorContactEmail"
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>Vendor Full Legal Name and Mailing Address</label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          type={"text"}
          style={{ width: "100%" }}
          value={vendorLegalName}
          onChange={(e) => setvendorLegalName(e.target.value)}
          name="vendorLegalName"
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          Briefly describe the function(s) to be performed by the vendor.
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <textarea
          onChange={(e) => setvendorFunctions(e.target.value)}
          value={vendorFunctions}
          name="vendorFunctions"
        />
      </div>
      <br />
      <hr />
      <p>CNC-NC Confidential</p>
      <br />
      <br />
      <br />
      <div className="topHeading">
        Care N’ Care Insurance Company of North Carolina (“CNC-NC”), Inc.
        Contract Request Intake Form (v. 3.0)
      </div>
      <hr />
      <div className="thirdPage">
        <div>
          <label>Does this service or product exceed $10,000?</label>
        </div>
        <div style={{ display: "flex", padding: "0px 200px" }}>
          <div style={{ flexBasis: "40%" }}>
            <input
              onChange={(e) => setserviceCharge("Yes")}
              type="radio"
              value={serviceCharge}
              name="serviceCharge"
            />{" "}
            Yes
          </div>
          <div style={{ flexBasis: "40%" }}>
            <input
              onChange={(e) => setserviceCharge("No")}
              type="radio"
              value={serviceCharge}
              name="serviceCharge"
            />{" "}
            No
          </div>
        </div>
        <p>
          Please complete the following survey questions regarding the proposed
          vendor’s services.
        </p>
        <table>
          <thead>
            <tr>
              <th>Vendor will ...</th>
              <th>Yes</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            {checkBoxArr &&
              checkBoxArr.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>{x.label}</td>
                    <td>
                      <input
                        type="radio"
                        value={x["value"]}
                        onChange={(e) => userChecked(i, "Yes")}
                        name={i}
                      />{" "}
                      Yes
                    </td>
                    <td>
                      <input
                        type="radio"
                        value={x["value"]}
                        onChange={(e) => userChecked(i, "No")}
                        name={i}
                      />{" "}
                      No
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <h3>COMPLIANCE STAFF ONLY – COMPLETE</h3>
        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Yes</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            {checkBoxArr1 &&
              checkBoxArr1.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>{x.label}</td>
                    <td>
                      <input
                        type="radio"
                        value={x["value"]}
                        onChange={(e) => userChecked1(i, "Yes")}
                        name={i}
                      />{" "}
                      Yes
                    </td>
                    <td>
                      <input
                        type="radio"
                        value={x["value"]}
                        onChange={(e) => userChecked1(i, "No")}
                        name={i}
                      />{" "}
                      No
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <button
          type="button"
          className="buttonSubmit"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;

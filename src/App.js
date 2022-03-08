import "./1.css";
import React, { useState, useEffect } from "react";

function App() {
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
            <input type="text" name="cnc-nc-requestername" />
          </div>
          <div className="flex33">
            <input type="date" name="todayDate" />
          </div>
          <div className="flex33">
            <input type="date" name="dateServiceToBegin" />
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
            <select>
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
            <input type="date" name="todayDate" />
          </div>
          <div className="flex33">
            <select>
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
          <select>
            <option value="" disabled>
              Select
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="flex33">
          <input type="text" name="todayDate" />
        </div>
        <div className="flex33">
          <input type="email" name="todayDate" />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>Vendor Full Legal Name and Mailing Address</label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <input type={"text"} style={{ width: "100%" }} />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>
          Briefly describe the function(s) to be performed by the vendor.
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <textarea />
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
      <div>
        <label>Does this service or product exceed $10,000?</label>
      </div>
      <div style={{display:"flex"}}>
        <div className="flex10">
          <input type="radio" value="Yes" name='serviceRate' /> Yes
        </div>
        <div className="flex10">
          <input type="radio" value="No" name='serviceRate' /> No
        </div>
      </div>
      <p>Please complete the following survey questions regarding the proposed vendor’s services.</p>
    </div>
  );
}

export default App;

// Gender
// Male name = "gender"
// Female name = "gender"

// each post should contain
// details regrading the post, created at, userId

// nodejs

// reactjs is divided into 2 parts

// one is static -> npm run build -> move build folder to cloud/hosting/aws/ : what we learnt above // not suitable for seo
// anohter one is server side -> npm run start in the cloud : Nextjs, gatsby. - very good for application having more than 50 pages to avoid multiple deployments
// ssr : server side rendering is goood for seo also

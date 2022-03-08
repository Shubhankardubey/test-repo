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
          In general, vendors that are
          <b style={{ textDecoration: "underline" }}>NOT</b> FDRs include
          restaurants, office supplies, m e m b e r giveaways, paper shredding
          vendors, computer hardware and most software, rental car companies,
          furniture suppliers, event sponsors, trophy and awards vendors,
          construction and repair vendors, and organizations that provide
          training and videos. This is <b style={{ textDecoration: "underline" }}>NOT</b> an exhaustive list.
        </p>
        <p>
          In general, vendors that <b style={{ textDecoration: "underline" }}>ARE</b> FDRs have direct contact with our members
          via in-person engagements, telephone, surveys, or sales agents taking
          enrollment applications. FDRs may have member data (i.e., enrollment
          and clinical information) that is used to perform a function that
          would otherwise be conducted by CNC-NC. FDRs usually make decisions on
          behalf of CNC-NC and perform functions that CNC-NC is required to
          undertake based on our agreement with CMS. For example, Beacon
          processes Part C medical claims and enrollment applications, which
          makes it an FDR.
        </p>
      </div>
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

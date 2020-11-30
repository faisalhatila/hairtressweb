import React from "react";
import HeaderCover from "../components/HeaderCover";
import TechnologyCover from "../components/resources/TechnologyCover";
import TechnologyTile from "../components/resources/TechnologyTile";
import FinanceCover from "../components/resources/FinanceCover";
import FinanceTile from "../components/resources/FinanceTile";
import AccountingCover from "../components/resources/AccountingCover";
import AccountingTile from "../components/resources/AccountingTile";
import HealthCareCover from "../components/resources/HealthCareCover";
import HealthCareTile from "../components/resources/HealthCareTile";

const Resources = () => {
  return (
    <div>
      <HeaderCover heading="Resources" />
      <TechnologyCover heading="Technology" />
      <div className="technologyTilesMainDi">
        <div className="container">
          <div className="row">
            {[...Array(3)].map((i) => {
              return <TechnologyTile key={i} />;
            })}
          </div>
        </div>
      </div>
      <FinanceCover heading="Finance" />
      <div className="technologyTilesMainDi">
        <div className="container">
          <div className="row">
            {[...Array(3)].map((i) => {
              return <FinanceTile key={i} />;
            })}
          </div>
        </div>
      </div>
      <AccountingCover heading="Accounting" />
      <div className="technologyTilesMainDi">
        <div className="container">
          <div className="row">
            {[...Array(3)].map((i) => {
              return <AccountingTile key={i} />;
            })}
          </div>
        </div>
      </div>
      <HealthCareCover heading="Health Care" />
      <div className="technologyTilesMainDi">
        <div className="container">
          <div className="row">
            {[...Array(3)].map((i) => {
              return <HealthCareTile key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

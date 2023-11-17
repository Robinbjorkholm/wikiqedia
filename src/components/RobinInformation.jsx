import React from "react";
import calculateAge from "./utils/calculateAge";
import image from "../images/image.jpg";
import asd from "../images/123.jpg";
import signature from "../images/signature.svg";
import "../styles/RobinInformation.css";
import "../styles/MainContent.css";

function RobinInformation() {
  return (
    <div className="information-div">
      <p className="information-header">
        <b>Robin Björkholm</b>
      </p>

      <img src={asd} className="information-image" alt="Robin in 2022" />
      <table className="information-table">
        <caption id="caption-table">Robin in 2022</caption>
        <tbody>
          <tr className="information-table">
            <th className="information-table-name">Born </th>
            <td>
              <div className="information-table-div">
                <p className="information-table-p">Robin Alexander Björkholm</p>
                <p className="information-table-p">
                  july 8,1998 (age {calculateAge("1998/07/08", 2)})
                </p>
                <p className="information-table-p">
                  <a href="https://en.wikipedia.org/wiki/Jakobstad">
                    Jakobstad,{" "}
                  </a>
                  finland
                </p>{" "}
              </div>
            </td>
          </tr>
          <tr>
            <th className="information-table-name">Education</th>
            <td>
              <div className="information-table-div">
                <p className="information-table-p">None</p>
              </div>
            </td>
          </tr>
          <tr>
            <th className="information-table-name">Title</th>
            <td>
              <div className="information-table-div">
                <p className="information-table-p">Founder, CEO of finlunch</p>
              </div>
            </td>
          </tr>
          <tr>
            <th className="information-table-name">Parents</th>
            <td>
              <div className="information-table-div">
                <p className="information-table-p">mom & dad</p>
              </div>
            </td>
          </tr>
          <tr>
            <th className="information-table-name">Pets</th>
            <td>
              <div className="information-table-div">
                <p className="information-table-p">1x normal cat</p>
                <p className="information-table-p">
                  1x{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Maneki-neko"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Maneki-neko
                  </a>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p id="signature">Signature</p>
      <img id="signature-img" src={signature} alt="Robin" />
    </div>
  );
}

export default RobinInformation;

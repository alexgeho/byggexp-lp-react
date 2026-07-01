import "./Features.scss";
import shiftsExport from "../../assets/features/shiftsExport.png";
import tasks from "../../assets/features/tasks.png";
import live from "../../assets/features/live.png";
import photo from "../../assets/features/photo.png";
import planing from "../../assets/features/planing.png";
import tools from "../../assets/features/tools.png";
import offert from "../../assets/features/offert.png";
import invoice from "../../assets/features/invoice.png";
import project from "../../assets/features/project.png";

import skull from "../../assets/emoji-skull.gif";
import type { FeaturesProps } from "../../types/features";



function Features({ featuresT1_3, featuresT4_6, featuresT7_9 }: FeaturesProps) {
  return (
    <section className="features" id="features">
      <div className="container">
        {/* HEADER */}
        <div className="features-head">
          <span className="eyebrow">{featuresT1_3.featuresTitle}</span>

          <h2>
            {featuresT1_3.featuresHeading1}{" "}
            <em>{featuresT1_3.featuresHeadingAccent}</em>{" "}
            {featuresT1_3.featuresHeading2}
          </h2>

          <p className="section-sub">{featuresT1_3.featuresSub}</p>
        </div>

        {/* STEP 1*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT1_3.featuresCard1Title}</h3>

            <p className="step-text">{featuresT1_3.featuresCard1Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT1_3.featuresCard1Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT1_3.featuresCard1Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT1_3.featuresCard1Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={shiftsExport} alt="" />
            </div>
          </div>
        </div>

        {/* STEP 2*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT1_3.featuresCard2Title}</h3>

            <p className="step-text">{featuresT1_3.featuresCard2Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT1_3.featuresCard2Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT1_3.featuresCard2Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT1_3.featuresCard2Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={tasks} alt="" />
            </div>
          </div>
        </div>

        {/* STEP 3*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT1_3.featuresCard3Title}</h3>

            <p className="step-text">{featuresT1_3.featuresCard3Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT1_3.featuresCard3Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT1_3.featuresCard3Step2}
              </li>

              <li>
                <span className="check">
                  <svg viewBox="0 0 14 10" fill="none">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m1 5 4 4 8-8"
                    />
                  </svg>
                </span>

                {featuresT1_3.featuresCard3Step3}

                <img src={skull} alt="" className="inline-skull" />
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={live} alt="" />
            </div>
          </div>
        </div>

        {/* STEP 4*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT4_6.featuresCard4Title}</h3>

            <p className="step-text">{featuresT4_6.featuresCard4Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT4_6.featuresCard4Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT4_6.featuresCard4Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT4_6.featuresCard4Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={photo} alt="" />
            </div>
          </div>
        </div>

        {/* STEP 5*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT4_6.featuresCard5Title}</h3>

            <p className="step-text">{featuresT4_6.featuresCard5Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT4_6.featuresCard5Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT4_6.featuresCard5Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT4_6.featuresCard5Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={planing} alt="" />
            </div>
          </div>
        </div>

        {/* STEP 6*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT4_6.featuresCard6Title}</h3>

            <p className="step-text">{featuresT4_6.featuresCard6Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT4_6.featuresCard6Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT4_6.featuresCard6Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT4_6.featuresCard6Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={tools} alt="" />
            </div>
          </div>
        </div>

        {/* STEP 7*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT7_9.featuresCard7Title}</h3>

            <p className="step-text">{featuresT7_9.featuresCard7Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT7_9.featuresCard7Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT7_9.featuresCard7Step2}
              </li>

              <li>
                <span className="check">
                  <svg viewBox="0 0 14 10" fill="none">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m1 5 4 4 8-8"
                    />
                  </svg>
                </span>

                {featuresT7_9.featuresCard7Step3}

              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={offert} alt="" />
            </div>
          </div>
        </div>

        {/* STEP 8*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT7_9.featuresCard8Title}</h3>

            <p className="step-text">{featuresT7_9.featuresCard8Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT7_9.featuresCard8Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT7_9.featuresCard8Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT7_9.featuresCard8Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={invoice} alt="" />
            </div>
          </div>
        </div>

        {/* STEP 9*/}
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT7_9.featuresCard9Title}</h3>

            <p className="step-text">{featuresT7_9.featuresCard9Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT7_9.featuresCard9Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT7_9.featuresCard9Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT7_9.featuresCard9Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={project} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

import { useState, useEffect, useRef } from "react";
import useMeasure from "react-use-measure";
import projects from "../Data/Projects.json";
import SetImg from "../Components/SetImg";
import CustomImg from "../Components/CustomImg";
import ProgressIndicator from "../Components/ProgressIndicator";
import $ from "jquery";

export default function CardioGuard() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "cardioguard");

  //progress Indicator
  const [scrollPosition, setScrollPosition] = useState(
    current.sections[0].progressNum
  );
  const [activeSection, setActiveSection] = useState(
    current.sections[0].sectionId
  );

  useEffect(() => {
    const handleScroll = () => {
      const a = window.innerHeight + window.scrollY;
      const b = document.body.offsetHeight;
      const c = a >= b;

      const currentScrollPosition = $(window).scrollTop();

      $("section").each(function () {
        const sectionTop = $(this).offset().top - 131;
        const sectionLength = $(this).height();
        const sectionBottom = sectionTop + sectionLength;
        const i = $(this).index();
        const idSection = $(this).attr("id");

        if (
          currentScrollPosition >= sectionTop &&
          currentScrollPosition <= sectionBottom
        ) {
          setActiveSection(idSection);

          const percent =
            ((currentScrollPosition - sectionTop) / sectionLength) * 100;

          setScrollPosition(percent);
        } else if (currentScrollPosition >= sectionBottom) {
          setScrollPosition(100);
        }

        if (c) {
          setScrollPosition(100);
        }
      });
    };

    $(window).on("scroll", handleScroll);

    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectImage">
          <div className="c11">
            <img src="/Assets/cardioguard/hero.gif" alt="" className="img" />
          </div>
        </div>
        <div className="projectInfo">
          <div>
            <div className="bigH">{current.title}</div>
            <div className="bigP">
              <ul>
                <li>
                  <div className="tinyH">Mission:</div>Health tracking can be be
                  stress-inducing and overwhelming. We designed a heart health
                  app that feels friendly, science-backed and is accessible for
                  elderly users.
                </li>
                <li>
                  <div className="tinyH">My Role:</div>Research, ideation,
                  prototyping, user testing
                </li>
                <li>
                  <div className="tinyH">Tools:</div>Figma, Adobe CC
                </li>
                <li>
                  <div className="tinyH">Completed:</div>03/2023
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contentContainer marginTop32">
        <ProgressIndicator
          activeSection={activeSection}
          scrollPosition={scrollPosition}
          sections={current.sections}
        />
        <div className="projectContent">
          <section className="projectSection" id="section0" name="section0">
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"0"}
                  projectId={"cardioguard"}
                  ratio={"c11"}
                  size={"m"}
                />
              </div>
              <div className="sectionText">
                <div className="smallH sectionTitle">Brief</div>
                <p className="bigP">
                  "Design a UI for a specific health issue. Pay special
                  attention to accessibility"
                </p>
                <p className="bigP">
                  From this relatively broad task my masters course mate
                  Manfredi and I narrowed our aim down to a health app aiding
                  early detection of heart failure through AI analysis of smart
                  watch measurements, which include heart rate, ECG and nightly
                  respatory rate.
                </p>
                <p className="bigP">
                  We wanted to make this app accessible specifically for elderly
                  users. We envisioned that doctors too would be able to sign up
                  and access patient data directly, but decided to concentrate
                  on the patient-facing side of the app for the two-week
                  project.
                </p>
              </div>
            </div>
          </section>
          <section className="projectSection" id="section1" name="section1">
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"6"}
                  projectId={"cardioguard"}
                  ratio={"c11"}
                  size={"m"}
                />
              </div>
              <div className="sectionText">
                <div className="smallH sectionTitle">Research</div>
                <p className="bigP">
                  I begun research with a semi-structured interview with a
                  German friend and medical student specialising in early
                  detection of cardiovascular disease in his PhD thesis. I got
                  an overview from him about what patient data and symptoms he
                  would like to know about and whether there were any pain
                  points for doctors or patients in the diagnostic progress.
                </p>
              </div>
            </div>
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"7"}
                  projectId={"cardioguard"}
                  ratio={"c34"}
                  size={"m"}
                />
              </div>
              <div className="sectionText">
                <p className="bigP">
                  Research in the current scientific literature confirmed our
                  concept in showing that AI is becoming very good at making
                  accurate inferences about heart performance from ECG readings
                  alone when other methods of examination would have been
                  necessary in the past.
                </p>
                <p className="bigP">
                  We found that it would be better to keep detailed measurements
                  “under the hood” and only show a general status, as a lay
                  person is often not qualified to judge if abnormal values are
                  just unique traits or pathologic irregularities.{" "}
                </p>
                <p className="bigP">
                  Finally, we found that to keep engagement with the app as high
                  as possible, simplification of complex data would be effective
                  both for people high and low in health literacy.
                </p>
              </div>
            </div>
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"8"}
                  projectId={"cardioguard"}
                  ratio={"c11"}
                  size={"m"}
                />
              </div>
              <div className="sectionText">
                <p className="bigP">
                  In a competitor analysis we focused primarily on design traits
                  instead of business aspects or gaps in the market. Third party
                  apps often did not seem very trustworthy both in the method of
                  measurement as well as in presentation and design. Another
                  issue we found with apps like Apple’s “Health” was that they
                  showed too many values or included too many different health
                  aspects so they lost transparency and clarity in UX. From all
                  the different research we had one takeaway:
                </p>
                <p className="bigP">
                  Health tracking and health-related content on the internet can
                  be intimidating and overburdening. Ironically, stess and
                  anxiety have adverse effects on cardiac health. Therefore the
                  app should display only actionable information in a manor that
                  is not anxiety-inducing where it doesn’t need to be.
                </p>
              </div>
            </div>
          </section>
          <section className="projectSection" id="section2" name="section2">
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"9"}
                  projectId={"cardioguard"}
                  ratio={"c43"}
                  size={"m"}
                />
              </div>
              <div className="sectionText">
                <div className="smallH sectionTitle">Conceptualization</div>
                <p className="bigP">
                  Structuring our research, we then organised data that could be
                  measured, data we needed users to report, personal data needed
                  on sign up and aspects of presentation in an affinity diagram.
                  We concluded that our main focuses for the project were:
                </p>
                <div className="bigP">
                  <ul className="bulletlist">
                    <li>Creating a human an personal touch</li>
                    <li>Make it easy to understand and read</li>
                    <li>
                      Non-frightening presentation and no rushed diagnosis
                    </li>
                    <li>Reminding patients to keep information up to date</li>
                  </ul>
                </div>
                <p className="bigP">
                  Accordingly, we created some personas to further understand
                  users needs and behaviours, for example:
                </p>
                <p className="bigP">Mary, 69 years old</p>
                <p className="bigP">
                  Mary is a retired teacher who enjoys gardening and doing yoga.
                  She is concerned about her heart health and wants to monitor
                  her condition regularly, which is why her GP has recommended
                  CardioGuard to her. She has some experience using smartphones
                  but doesn't want to spend too much time figuring out how to
                  use the app. Mary wants the app to be easy to use and
                  understand, and wants to receive alerts if any issues are
                  detected. She gets frustrated when technology is overly
                  complicated or difficult to use.
                </p>
              </div>
            </div>
          </section>
          <section className="projectSection" id="section3" name="section3">
            <div className="projectInnerSection">
              <div className="sectionImage">
                <div className="cardiomannequin">
                  <img
                    src="/Assets/cardioguard/mannequin.gif"
                    alt=""
                    className="img"
                  />
                </div>
                <SetImg
                  name={"10"}
                  projectId={"cardioguard"}
                  ratio={"c42"}
                  size={"m"}
                />
                <SetImg
                  name={"11"}
                  projectId={"cardioguard"}
                  ratio={"c41"}
                  size={"m"}
                />
              </div>
              <div className="sectionText">
                <div className="smallH sectionTitle">Ideation</div>
                <p className="bigP">
                  In the ideation stage, I was able to learn a lot from Manfredi
                  who had a few years of experience in the design industry.
                  Together we created flow charts to structure the applications
                  functions and to lay out processes like the sign up. We
                  started with hand sketches to get a feel for available space
                  and basic placement and then started went on to create digital
                  wireframes.
                </p>
                <p className="bigP">
                  At this stage we decided we would not use the colour red or
                  and alarming language; the main status would only be regular
                  or irregular. For a patient with known issues, the status
                  would still remain regular as long as no changes in condition
                  were detected. We also added a little animation of a doctor
                  mannequin to make the app friendlier and provide a character
                  to the name “CardioGuard”.
                </p>
              </div>
            </div>
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"12"}
                  projectId={"cardioguard"}
                  ratio={"c43"}
                  size={"m"}
                />
              </div>
              <div className="sectionImage">
                <SetImg
                  name={"13"}
                  projectId={"cardioguard"}
                  ratio={"c43"}
                  size={"m"}
                />
              </div>
            </div>
          </section>
          <section className="projectSection" id="section4" name="section4">
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"opa"}
                  projectId={"cardioguard"}
                  ratio={"c11"}
                  size={"m"}
                />
              </div>
              <div className="sectionText">
                <div className="smallH sectionTitle">User Testing</div>
                <p className="bigP">
                  We tested a first Figma prototype with elderly users. This
                  really turned out to be an eye-opening reminder for me of how
                  important it is to challenge your own assumptions – what might
                  be true and obvious for you might not be the case for every
                  user.
                </p>
              </div>
            </div>
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"14"}
                  projectId={"cardioguard"}
                  ratio={"c43"}
                  size={"m"}
                />
              </div>
              <div className="sectionText">
                <p className="bigP">
                  We had put the option to share a report for instance in a
                  three-dot sub menu. When asked to find the function, most of
                  our test subjects did not understand what the three dots
                  meant. Where for our generation it might have been clear that
                  this meant the presence of “more options”, for someone with
                  lower digital literacy it was obscure. We therefor decided to
                  make all important functions immediately visible and label
                  icons that might be unclear. We also re-introduced a bottom
                  tab bar to make functions easier to find.
                </p>
              </div>
            </div>
          </section>
          <section className="projectSection" id="section5" name="section5">
            <div className="projectInnerSection">
              <div className="sectionImage">
                <div className="c11">
                  <img
                    src="/Assets/cardioguard/hero.gif"
                    alt=""
                    className="img"
                  />
                </div>
              </div>
              <div className="sectionText">
                <div className="sectionTitle smallH">Prototype</div>
                <p className="bigP">
                  After the two-week project we arrived at our current
                  prototype. Here are some impressions including the Figma
                  design system we created in the process.
                </p>
              </div>
            </div>
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"15"}
                  projectId={"cardioguard"}
                  ratio={"c43"}
                  size={"m"}
                />
              </div>
              <div className="sectionImage">
                <SetImg
                  name={"17"}
                  projectId={"cardioguard"}
                  ratio={"c43"}
                  size={"m"}
                />
              </div>
            </div>
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"prototype"}
                  projectId={"cardioguard"}
                  ratio={"c11"}
                  size={"l"}
                />
              </div>
            </div>
            <div className="projectInnerSection">
              <div className="sectionImage">
                <SetImg
                  name={"18"}
                  projectId={"cardioguard"}
                  ratio={"c32"}
                  size={"m"}
                />
              </div>
              <div className="sectionText">
                <div className="sectionTitle smallH">Key Takeaways:</div>
                <div className="bigP">
                  <ul className="bulletlist">
                    <li>
                      You have to challenge your own assumptions – what might be
                      true and obvious for you might not be the same for every
                      user
                    </li>
                    <li>
                      I improved my design abilities and consideration for
                      accessibility and text size adaptability
                    </li>
                    <li>
                      The project made me aware how important documenting the
                      process is
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

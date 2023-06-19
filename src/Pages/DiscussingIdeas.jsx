import { useEffect, useState } from "react";
import $ from "jquery";
import projects from "../Data/Projects.json";
import ProgressIndicator from "../Components/ProgressIndicator";
import { Link as LinkS } from "react-scroll";
import { RiArrowUpLine } from "react-icons/ri";

export default function DiscussingIdeas() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "discussingideas");

  //scroll handling for progress indicator and reference return button
  const [scrollPosition, setScrollPosition] = useState(
    current.sections[0].progressNum
  );
  const [activeSection, setActiveSection] = useState(
    current.sections[0].sectionId
  );
  const [sectionInview, setSectionInview] = useState(
    current.sections[0].progressNum
  );

  useEffect(() => {
    const handleScroll = () => {
      const a = window.innerHeight + window.scrollY;
      const b = document.body.offsetHeight;
      const c = a >= b;

      const currentScrollPosition = $(window).scrollTop();
      const currentScrollBottom = $(window).scrollTop() + window.innerHeight;

      $("section").each(function () {
        const sectionTop = $(this).offset().top - 131;
        const sectionLength = $(this).height();
        const sectionBottom = sectionTop + sectionLength;
        const i = $(this).index();
        const idSection = $(this).attr("id");

        if (
          currentScrollPosition >= sectionTop &&
          currentScrollPosition <= sectionBottom + 64 //the 64px are to fix the jump due to gap/padding
        ) {
          setActiveSection(idSection);

          const percent =
            ((currentScrollPosition - sectionTop) / sectionLength) * 100;

          setScrollPosition(percent);
        } else if (currentScrollPosition >= sectionBottom) {
          setScrollPosition(100);
        }

        if (currentScrollBottom >= sectionTop + 64) {
          setSectionInview(idSection);
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

  //reference returner functionality
  const [clickedReference, setClickedReference] = useState("");
  const [showReturner, setShowReturner] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (sectionInview !== "sectionR") {
        setShowReturner(false);
      }
    }, 900);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [sectionInview]);

  //references
  function formatReference(reference) {
    const formattedReference = reference.replace(
      /(https:\/\/\S+)/g,
      '<a href="$1" target="_blank">$1</a>'
    );
    return formattedReference;
  }

  const references = [
    {
      intext: "(Bernstein, Shore and Lazer, 2018)",
      bib: "Bernstein, E., Shore, J. and Lazer, D. (2018) ‘How intermittent breaks in interaction improve collective intelligence’, Proceedings of the National Academy of Sciences, 115(35), pp. 8734–8739. Available at: https://doi.org/10.1073/pnas.1802407115",
    },
    {
      intext: "(Bigelow and Poremba,2014)",
      bib: "Bigelow, J. and Poremba, A. (2014) ‘Achilles’ Ear? Inferior Human Short-Term and Recognition Memory in the Auditory Modality’, PLOS ONE, 9(2), p. e89914. Available at: https://doi.org/10.1371/journal.pone.0089914",
    },
    {
      intext: "(Chamorro-Premuzic, 2017)",
      bib: "Chamorro-Premuzic, T. (2017) ‘Does Diversity Actually Increase Creativity?’, Harvard Business Review, 28 June. Available at: https://hbr.org/2017/06/does-diversity-actually-increase-creativity (Accessed: 13 June 2023)",
    },
    {
      intext: "(Edmondson, 2018)",
      bib: "Edmondson, A.C. (2018) The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth. John Wiley & Sons",
    },
    {
      intext: "(Hall, 1980)",
      bib: "Hall, S. (1980) ‘Encoding/decoding’, Culture, media, language : Working papers in cultural studies, 1972-79 [Preprint]. Available at: https://cir.nii.ac.jp/crid/1572543025359490560 (Accessed: 13 June 2023)",
    },
    {
      intext: "(Harvey, 2013)",
      bib: "Harvey, S. (2013) ‘A different perspective: The multiple effects of deep level diversity on group creativity’, Journal of Experimental Social Psychology, 49(5), pp. 822–832. Available at: https://doi.org/10.1016/j.jesp.2013.04.004",
    },
    {
      intext: "(Hülsheger, Anderson and Salgado, 2009)",
      bib: "Hülsheger, U.R., Anderson, N. and Salgado, J.F. (2009) ‘Team-level predictors of innovation at work: a comprehensive meta-analysis spanning three decades of research’, The Journal of Applied Psychology, 94(5), pp. 1128–1145. Available at: https://doi.org/10.1037/a0015978",
    },
    {
      intext: "(Nickerson, 1998)",
      bib: "Nickerson, R.S. (1998) ‘Confirmation bias: A ubiquitous phenomenon in many guises’, Review of General Psychology, 2, pp. 175–220. Available at: https://doi.org/10.1037/1089-2680.2.2.175",
    },
    {
      intext: "(Norton, Mochon and Ariely, 2012)",
      bib: "Norton, M.I., Mochon, D. and Ariely, D. (2012) ‘The IKEA effect: When labor leads to love’, Journal of Consumer Psychology, 22(3), pp. 453–460. Available at: https://doi.org/10.1016/j.jcps.2011.08.002",
    },
    {
      intext: "(Rock and Grant, 2016)",
      bib: "Rock, D. and Grant, H. (2016) ‘Why Diverse Teams Are Smarter’, Harvard Business Review, 4 November. Available at: https://hbr.org/2016/11/why-diverse-teams-are-smarter (Accessed: 13 June 2023)",
    },
    {
      intext: "(Slovic et al., 2007)",
      bib: "Slovic, P. et al. (2007) ‘The affect heuristic’, European Journal of Operational Research, 177(3), pp. 1333–1352. Available at: https://doi.org/10.1016/j.ejor.2005.04.006",
    },
    {
      intext: "(Soper, 2014)",
      bib: "Soper, D. (2014) ‘User Interface Design and the Halo Effect: Some Preliminary Evidence’, Interface Design [Preprint]",
    },
  ];

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <div className="varXlH sentient uppercase">Discussing Ideas</div>
            <p className="textSub">{current.subtitle}</p>
            <div className="tinyH">for:</div>
            <div className="textSub">
              MA User Experience Design at the University of Arts London
            </div>
            <div className="tinyH">Date</div>
            <div className="textSub">06/2023</div>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <ProgressIndicator
          activeSection={activeSection}
          scrollPosition={scrollPosition}
          sections={current.sections}
          clickedReference={clickedReference}
          showReturner={showReturner}
        />
        <div className="projectContent marginTop32">
          <section className="projectSection" id="section1" name="section1">
            <div className="textP">
              <div className="mbs">To improve ideation in a team try to...</div>
              <ol>
                <li>Where you can, communicate ideas visually</li>
                <li>
                  Imagine step-by-step use of the idea in its natural habitat
                </li>
                <li>Make an effort to detach your ego from your ideas</li>
                <li>Evaluate in enumerations</li>
                <li>
                  Reserve separation breaks for individuals to gather thoughts{" "}
                </li>
                <li>Regularly confirm the status quo with everyone</li>
              </ol>
            </div>
            <div className="textP">
              Ideation no doubt is the one crucial step for any human endeavour
              striving for innovation. Finding ways to connect a research input
              to an identified goal output is a sort of magical moment, and much
              of the literature about design and innovation focuses on ways to
              generate ideas, tease out associations, relax into intuition –
              often we can’t quite understand where ideas come from. Wide
              consensus exists around the advantages of team ideation as opposed
              to as individual ideation. Especially teams with deeply diverse
              members seem to perform well in idea generation, because one team
              member’s idea can stimulate novel associations in another{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Rock and Grant, 2016)"}
                name={"intext(Rock and Grant, 2016)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Rock and Grant, 2016)");
                  setShowReturner(true);
                }}
              >
                (Rock and Grant, 2016)
              </LinkS>
              .
            </div>
            <div className="textP">
              What is less discussed than idea generation is evaluation,
              selection and integration in the ideation stage
              <LinkS
                className="intextWordRef"
                to={"ref(Chamorro-Premuzic, 2017)"}
                name={"intext(Chamorro-Premuzic, 2017)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Chamorro-Premuzic, 2017)");
                  setShowReturner(true);
                }}
              >
                (Chamorro-Premuzic, 2017)
              </LinkS>
              . Due to time and cost restraints, commonly ideas need to be
              filtered out through discussion first before going into
              prototyping and testing. Especially diverse teams, shining in
              generation of a wide range of original ideas, then struggle to
              find consensus and integrate ideas because of their members’
              differences{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Harvey, 2013)"}
                name={"intext(Harvey, 2013)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Harvey, 2013)");
                  setShowReturner(true);
                }}
              >
                (Harvey, 2013)
              </LinkS>
              . More than team structure and composition however, the team
              mindset and process variables determine innovation{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Hülsheger, Anderson and Salgado, 2009)"}
                name={"intext(Hülsheger, Anderson and Salgado, 2009)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference(
                    "intext(Hülsheger, Anderson and Salgado, 2009)"
                  );
                  setShowReturner(true);
                }}
              >
                (Hülsheger, Anderson and Salgado, 2009)
              </LinkS>
              .
            </div>
            <div className="textP">
              I believe that agreeing on principles before ideation can
              influence the process. Consequently, I have drawn up the above
              list with six strategies that help facilitate better discussion of
              ideas. The list is certainly not exhaustive but draws both from
              research throughout my BSc Psychology studies as well as from
              observations during both real-world team projects and MA User
              Experience Design group projects.
            </div>
          </section>
          <section className="projectSection" id="section2" name="section2">
            <div className="textH">1. Where you can, communicate visually</div>
            <div className="textP">
              The napkin sketch is well established as a design cliché - and is
              so for a reason. Humans are significantly worse at remembering
              audible compared to visual information{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Bigelow and Poremba,2014)"}
                name={"intext(Bigelow and Poremba,2014)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Bigelow and Poremba,2014)");
                  setShowReturner(true);
                }}
              >
                (Bigelow and Poremba,2014)
              </LinkS>
              . Especially in diverse teams, different codes the sender and
              receiver of a message hold can lead to the same message being
              encoded and decoded very differently{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Hall, 1980)"}
                name={"intext(Hall, 1980)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Hall, 1980)");
                  setShowReturner(true);
                }}
              >
                (Hall, 1980)
              </LinkS>
              . When I try to vocalise complex ideas in the most fundamental
              manor possible in a design project, I still commonly face blank
              faces and question mark eyes. Different levels of involvement at
              the moment of transmission have a similar effect. When other
              people explain their ideas, my own thoughts often wander back to
              my own concept – or to the lunch I’m going to have – which makes
              me miss crucial aspects of their proposal. What I have in my mind
              then is a surface-level idea from a few flashy snapshots I picked
              up – and sometimes vastly different from the speaker’s full
              concept. Listening is an active process that requires considerable
              effort and enquiry.
            </div>
            <div className="textP">
              When I draw a sketch of my idea, I feel both interest and
              comprehension in team members increase. Amazingly, others then can
              jump in and expand the sketch or draw an alternated version of it.
              The same I have found true for task management, where noting down
              a calendar overview or task list engaged team members far more
              then communicating it verbally. Big tech companies like Apple and
              Google employ live illustrators for the sole purpose of generating
              sketches during meetings. Sketches don’t have to be pen and paper;
              tools like the AI Midjourney have now increased everyone’s
              capacity to generate strong visual representations quickly. Short
              video or stop-motion can be used to make complex concepts
              understandable.
            </div>
            <div className="textH">
              2. Imagine the step-by-step use of the idea in its natural habitat
            </div>
            <div className="textP">
              I regularly catch myself in design projects enthusiastically
              supporting an idea because I like a little aspect of it a lot,
              like an aesthetic visual effect or a clever technological
              implementation, meanwhile ignoring large non-functional or
              unnecessary aspects of the design. To catch occurrences of the so
              called halo effect{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Soper, 2014)"}
                name={"intext(Soper, 2014)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Soper, 2014)");
                  setShowReturner(true);
                }}
              >
                (Soper, 2014)
              </LinkS>
              , it is usefully to mentally simulate the use case of the idea
              step by step from the viewpoint of an unknowing user, just like
              you would put into practice at a later testing stage. If the idea
              is supposed to presented to clients, it is useful to mentally walk
              through a possible presentation. Having not done this in some past
              projects of mine, major shortcomings only became clear while first
              presenting. This strategy is helpful for your own ideas just as
              for ideas of others, where you can probe with questions to
              encourage such mental visualisation. When discussing abstract
              concepts or assumptions, it is crucial to challenge yourself and
              other team members to name applied examples to back up an abstract
              thought. Most of the time we visualise theories in specific
              examples anyways, and if not communicated we end up picturing very
              different things – just as mentioned in point 1, decoding and
              encoding the same message quite differently. Emotional states, as
              described by the affect heuristic{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Slovic et al., 2007)"}
                name={"intext(Slovic et al., 2007)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Slovic et al., 2007)");
                  setShowReturner(true);
                }}
              >
                (Slovic et al., 2007)
              </LinkS>
              , also colour our perception and make us overlook shortcomings of
              an idea. I personally tend to feel very euphoric about concepts on
              a fresh dose of caffeine and know when to temper my enthusiasm.
              Visualising the natural use case of an idea step-by-step can help
              reveal hidden flaws in such case.
            </div>
            <div className="textH">
              3. Make an effort to detach your ego from your ideas
            </div>
            <div className="textP">
              Naturally, you get attached to things you have made. The IKEA
              effect in psychology states that individuals place a
              disproportionately high value on products they partially create or
              assemble themselves{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Norton, Mochon and Ariely, 2012)"}
                name={"intext(Norton, Mochon and Ariely, 2012)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference(
                    "intext(Norton, Mochon and Ariely, 2012)"
                  );
                  setShowReturner(true);
                }}
              >
                (Norton, Mochon and Ariely, 2012)
              </LinkS>
              , and I find the same goes for ideas. In a similar vein,
              confirmation bias draws us towards ideas that confirm our already
              existing beliefs
              <LinkS
                className="intextWordRef"
                to={"ref(Nickerson, 1998)"}
                name={"intext(Nickerson, 1998)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Nickerson, 1998)");
                  setShowReturner(true);
                }}
              >
                (Nickerson, 1998)
              </LinkS>
              . All team members should be aware of these biases towards own
              ideas and agree to counterbalance them with objective analysis as
              best as possible. I also find that team members sometimes disagree
              out an emotional response to criticism of their own idea.
              Second-guessing whether one’s motivations stem from feelings of
              resentment or from founded reasoning should be part of the agreed
              team mindset. Instead of rejecting an entire idea, picking
              specific weak points and suggesting alterations is more
              productive. These principles might seem obvious and foundational,
              but communicating them clearly before starting work in an
              environment with psychological safety is crucial for innovation{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Edmondson, 2018)"}
                name={"intext(Edmondson, 2018)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Edmondson, 2018)");
                  setShowReturner(true);
                }}
              >
                (Edmondson, 2018)
              </LinkS>
              .
            </div>
            <div className="textH">4. Evaluate in enumerations</div>
            <div className="textP">
              If you want to criticise another person’s idea, I have found it
              incredibly helpful to structure my observations in an enumeration.
              Something about the statement “I really like the idea, but I have
              three things that bother me. First…“ makes teammates listen up and
              gives them approachable points to counter or agree with. This
              format also improves your own reasoning because you are forced to
              gather your thoughts and categorise a general impression into
              specific aspects, some of which might be redundant or irrelevant
              on closer inspection. It can also help to write the list down and
              then discuss each point in the team.
            </div>
            <div className="textH">
              5. Reserve separation breaks for individuals to gather their
              thoughts
            </div>
            <div className="textP">
              To gather one’s thoughts for such an evaluation, discussion should
              be broken up every now and then into breaks where people can order
              their thoughts or make sketches. From my own experience I know
              that sometimes I need time for introspection to think clearly and
              creatively. Working in solitude for me allows a deeper level of
              thinking; during teamwork, considerable fraction of my cognitive
              capacity is busy with managing social interaction, analysing my
              own behaviour and mentally simulating perceptions of team mates.
              My observation is supported by research showing that teams produce
              higher quality solutions when occasionally separated for periods
              of time{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Bernstein, Shore and Lazer, 2018)"}
                name={"intext(Bernstein, Shore and Lazer, 2018)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference(
                    "intext(Bernstein, Shore and Lazer, 2018)"
                  );
                  setShowReturner(true);
                }}
              >
                (Bernstein, Shore and Lazer, 2018)
              </LinkS>
              . Affording breaks to gather thoughts also aids more reserved
              individuals to collect arguments for their point. The loudest
              voice in the team certainly does not always provide the best
              ideas.
            </div>
            <div className="textH">
              6. Regularly confirm the status quo with everyone
            </div>
            <div className="textP mbm">
              I have frequently experienced team members agreeing to move on
              with one idea, but then coming back later to question previously
              established decisions. The failure to express doubts earlier can
              have its origin in peer pressure or individual timidity, which in
              a psychologically safe team should be minimal to begin with.
              Nonetheless, it is vital to check in with team members and clearly
              communicate whether everyone agrees with the decision, amongst
              other reasons to avoid subliminal acts of sabotage later. Unless
              fundamental assumptions supporting a decision change, it should be
              perceived as status quo to move forward from into further steps.
            </div>
            <div className="textP">
              Again, this list is by no means definitive and is widely based on
              my personal observations from design projects. Discussing this or
              a similar list of principles inside teams before start of the
              ideation stage, and then comparing quantity and quality of
              resulting ideas to teams without this initial discussion in
              large-sample study could be an exciting opportunity for further
              research.
            </div>
          </section>
          <section className="projectSection" id="sectionR" name="sectionR">
            <div className="textH">References</div>
            <ul className="textP bib">
              {references.map((reference, index) => (
                <li
                  key={index}
                  name={`ref${reference.intext}`}
                  dangerouslySetInnerHTML={{
                    __html: formatReference(reference.bib),
                  }}
                ></li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

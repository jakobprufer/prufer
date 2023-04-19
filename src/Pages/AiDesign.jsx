import { useEffect, useState } from "react";
import $ from "jquery";
import projects from "../Data/Projects.json";
import ProgressIndicator from "../Components/ProgressIndicator";
import { Link as LinkS } from "react-scroll";
import { RiArrowUpLine } from "react-icons/ri";

export default function AiDesign() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "aidesign");

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
      intext: "(Altman, 2023)",
      bib: "Altman, S. (2023) Planning for AGI and beyond, OpenAI. Available at: https://openai.com/blog/planning-for-agi-and-beyond (Accessed: 12 April 2023)",
    },
    {
      intext: "(Concha, 2023)",
      bib: "Concha, M. (2023) Galileo AI - Are UI/UX Designers a Thing of the Past? | HackerNoon, Hackernoon. Available at: https://hackernoon.com/galileo-ai-are-uiux-designers-a-thing-of-the-past (Accessed: 13 April 2023)",
    },
    {
      intext: "(Han et al., 2018)",
      bib: "Han, J. et al. (2018) ‘The Combinator – a computer-based tool for creative idea generation based on a simulation approach’, Design Science, 4, p. e11. Available at: https://doi.org/10.1017/dsj.2018.7",
    },
    {
      intext: "(Han et al., 2020)",
      bib: "Han, J. et al. (2020) ‘A Data-Driven Approach for Creative Concept Generation and Evaluation’, Proceedings of the Design Society: DESIGN Conference, 1, pp. 167–176. Available at: https://doi.org/10.1017/dsd.2020.5",
    },
    {
      intext: "(Hohenstein et al., 2023)",
      bib: "Hohenstein, J. et al. (2023) ‘Artificial intelligence in communication impacts language and social relationships’, Scientific Reports, 13(1), p. 5487. Available at: https://doi.org/10.1038/s41598-023-30938-9",
    },
    {
      intext: "(Jacquez, 2023)",
      bib: "Jacquez, K. (2023) Will artificial intelligence replace my job as a UX designer?, Medium. Available at: https://uxdesign.cc/will-artificial-intelligence-like-chatgpt-and-dall-e-replace-my-job-as-a-user-experience-designer-93f26d8c109 (Accessed: 12 April 2023)",
    },
    {
      intext: "(Lin and Chen, 2016)",
      bib: "Lin, Y.-C. and Chen, Y.-T. (2016) ‘Artificial Intelligent Models for New Product Design: An Application Study’, in 2016 International Conference on Computational Science and Computational Intelligence (CSCI). 2016 International Conference on Computational Science and Computational Intelligence (CSCI), pp. 1134–1139. Available at: https://doi.org/10.1109/CSCI.2016.0215",
    },
    {
      intext: "(Ouyang et al., 2022)",
      bib: "Ouyang, L. et al. (2022) ‘Training language models to follow instructions with human feedback’. arXiv. Available at: https://doi.org/10.48550/arXiv.2203.02155",
    },
    {
      intext: "(Roose, 2022)",
      bib: "Roose, K. (2022) ‘An A.I.-Generated Picture Won an Art Prize. Artists Aren’t Happy.’, The New York Times, 2 September. Available at: https://www.nytimes.com/2022/09/02/technology/ai-artificial-intelligence-artists.html (Accessed: 13 April 2023)",
    },
    {
      intext: "(Root-Bernstein, 2002)",
      bib: "Root-Bernstein, R.S. (2002) ‘Aesthetic cognition’, International Studies in the Philosophy of Science, 16(1), pp. 61–77. Available at: https://doi.org/10.1080/02698590120118837",
    },
    {
      intext: "(Sarfaraz Khabbaz et al., 2009)",
      bib: "Sarfaraz Khabbaz, R. et al. (2009) ‘A simplified fuzzy logic approach for materials selection in mechanical engineering design’, Materials & Design, 30(3), pp. 687–697. Available at: https://doi.org/10.1016/j.matdes.2008.05.026",
    },
    {
      intext: "(Simon, 1960)",
      bib: "Simon, H.A. (1960) The new science of management decision. New York, NY, US: Harper & Brothers (The new science of management decision), pp. xii, 50. Available at: https://doi.org/10.1037/13978-000",
    },
    {
      intext: "(Vasconcelos and Crilly, 2016)",
      bib: "Vasconcelos, L.A. and Crilly, N. (2016) ‘Inspiration and fixation: Questions, methods, findings, and challenges’, Design Studies, 42, pp. 1–32. Available at: https://doi.org/10.1016/j.destud.2015.11.001",
    },
    {
      intext: "(Yüksel et al., 2023)",
      bib: "Yüksel, N. et al. (2023) ‘Review of artificial intelligence applications in engineering design perspective’, Engineering Applications of Artificial Intelligence, 118, p. 105697. Available at: https://doi.org/10.1016/j.engappai.2022.105697",
    },
    {
      intext: "(Zador et al., 2023)",
      bib: "Zador, A. et al. (2023) ‘Catalyzing next-generation Artificial Intelligence through NeuroAI’, Nature Communications, 14(1), p. 1597. Available at: https://doi.org/10.1038/s41467-023-37180-x",
    },
  ];

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <div className="varXlH sentient uppercase">
              Will AI replace <br className="responsiveBreak" /> the designer?
            </div>
            <p className="textSub">
              A discussion of AI's abilities in the design process
            </p>
            <div className="tinyH">for:</div>
            <div className="textSub">
              MA User Experience Design at the University of Arts London
            </div>
            <div className="tinyH">Date</div>
            <div className="textSub">04/2023</div>
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
              The thought that computers will take over jobs is not remotely a
              new one. In 1960, Nobel laureate Herbert Simon asserted that
              machines would be able to do any work a man could do within two
              decades{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Simon, 1960)"}
                name={"intext(Simon, 1960)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Simon, 1960)");
                  setShowReturner(true);
                }}
              >
                (Simon, 1960)
              </LinkS>
              . With the late 2022 rise of OpenAI’s ChatGPT and other advanced
              artificial intelligence (AI) tools the debate has grown louder. If
              you ask a search engine whether designers, specifically UX and
              product designers, might be replaced by AI, you will currently
              find most results stating it will not happen anytime soon. Blog
              entries, often written by designers themselves, demonstrate that
              today’s models still do a relatively poor job at basic commands
              like “Create a flow diagram for the sign-up process on
              linkedin.com”{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Jacquez, 2023)"}
                name={"intext(Jacquez, 2023)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Jacquez, 2023)");
                  setShowReturner(true);
                }}
              >
                (Jacquez, 2023)
              </LinkS>
              . But we seem to be at a crossroads, and recent developments have
              demonstrated powerfully how capable AI has become. It is a
              crossroads because artificial general intelligence (AGI) seems
              closer than ever.
            </div>
            <div className="textP">
              AGI, or artificial general intelligence, refers to an AI system
              that can perform any intellectual task that a human can. The
              current level of AI is limited to performing specific tasks for
              which it has been programmed, trained over longer time and
              fine-tuned by humans for alignment{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Ouyang et al., 2022)"}
                name={"intext(Ouyang et al., 2022)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Ouyang et al., 2022)");
                  setShowReturner(true);
                }}
              >
                (Ouyang et al., 2022)
              </LinkS>
              . While it can be highly proficient in certain areas, it lacks the
              ability to understand context, generalize and apply its knowledge
              to new domains. An AGI on the other side could learn fully
              independently, likely take on most of a designer’s tasks and would
              also be indistinguishable from a human in the Turing test{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Zador et al., 2023)"}
                name={"intext(Zador et al., 2023)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Zador et al., 2023)");
                  setShowReturner(true);
                }}
              >
                (Zador et al., 2023)
              </LinkS>
              . How near or far we are to the development of AGI seems to be a
              mystery, even for those closest to the frontier at OpenAI{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Altman, 2023)"}
                name={"intext(Altman, 2023)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Altman, 2023)");
                  setShowReturner(true);
                }}
              >
                (Altman, 2023)
              </LinkS>
              . It remains to be seen whether the engineers in San Francisco’s
              mission district are working on something equitable to a nuclear
              bomb or whether they will keep refining a very advanced summarist
              algorithm.
            </div>
            <div className="textP">
              Returning to less dramatic terrain, I want to review a few common
              tasks of the designer, some of them likely to be replaceable by AI
              and some of them less so.
            </div>
          </section>
          <section className="projectSection" id="section2" name="section2">
            <div className="textH">Things AI might be good at</div>
            <div className="textP">
              Conceptualizing and synthesizing research - understanding the data
              and identifying problems to be solved. While it might still be
              very complex to digitalize qualitative data and derive fine
              details expressed in non-verbal or subliminal ways, measuring
              tools like eye-tracking or vocal interpreters have come a long
              way. Machine learning algorithms certainly seem to have an
              advantage at finding patterns in qualitative data, with easy
              access to big data sets from the internet{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Han et al., 2020)"}
                name={"intext(Han et al., 2020)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Han et al., 2020)");
                  setShowReturner(true);
                }}
              >
                (Han et al., 2020)
              </LinkS>{" "}
              and much bigger processing power compared to the human brain{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Yüksel et al., 2023)"}
                name={"intext(Yüksel et al., 2023)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Yüksel et al., 2023)");
                  setShowReturner(true);
                }}
              >
                (Yüksel et al., 2023)
              </LinkS>
              . An example of application is provided by Lin and Chen{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Lin and Chen, 2016)"}
                name={"intext(Lin and Chen, 2016)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Lin and Chen, 2016)");
                  setShowReturner(true);
                }}
              >
                (2016)
              </LinkS>
              , where AI aids the generation of a perfume bottle by analysing a
              large number of existing bottle shapes.
            </div>
            <div className="textP">
              Ideation - generating creative solutions for the problem to be
              solved, combining existing ideas in new contexts. ChatGPT is
              already a powerful tool to generate options and seems less prone
              to human shortcomings like fixation on one idea once formed{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Vasconcelos and Crilly, 2016)"}
                name={"intext(Vasconcelos and Crilly, 2016)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Vasconcelos and Crilly, 2016)");
                  setShowReturner(true);
                }}
              >
                (Vasconcelos and Crilly, 2016)
              </LinkS>
              . It also considers deficiencies of an idea: when asked about how
              to construct a soundproofing mask for instance, ChatGPT did not
              just provide a considerable list of options but remarked that it
              was unlikely a wearable mask would completely block sound. New
              ideas, it could be argued, are simply a combination of two
              previously unrelated concepts – something that AI is certainly
              able to achieve{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Han et al., 2018)"}
                name={"intext(Han et al., 2018)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Han et al., 2018)");
                  setShowReturner(true);
                }}
              >
                (Han et al., 2018)
              </LinkS>
              . As the look and layout of mobile UX design is relatively
              standardised today, tools like Galileo AI can already fabricate
              prototype screens with a simple language prompt{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Concha, 2023)"}
                name={"intext(Concha, 2023)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Concha, 2023)");
                  setShowReturner(true);
                }}
              >
                (Concha, 2023)
              </LinkS>
              . So far AI is a good idea generator but still requires a designer
              with expert knowledge to curate its output. It seems not
              unimaginable that in the future advanced AI could take on a lot
              more of the ideation.
            </div>
          </section>
          <section className="projectSection" id="section3" name="section3">
            <div className="textH">Things AI might struggle with</div>
            <div className="textP">
              Sense for aesthetics – also understanding other humans’ sense of
              aesthetic and trends. Most products owe their success to a
              combination of functionality and aesthetic, where the latter
              provides a message about the product. Instagram became popular
              between 2010 and 2013, a time where its polaroid icon and photo
              filters grabbed the zeitgeist. A designer understands that a
              website like science.com needs to communicate academic validity,
              for example using a serif font, while a website like Klarna.com
              wants to look light-hearted and fun to show the ease of buying now
              and paying later. While AI might already do a good job at copying
              designs, it seems difficult for it to generate new visual styles,
              create artistic and interesting websites and animations, or take
              inspiration from things in the real world, like the interior of a
              coffee shop. Even with image processing being introduced in
              ChatGPT-4, AI seems still far away from aesthetic cognition{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Root-Bernstein, 2002)"}
                name={"intext(Root-Bernstein, 2002)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Root-Bernstein, 2002)");
                  setShowReturner(true);
                }}
              >
                (Root-Bernstein, 2002)
              </LinkS>
              . When asking the chat bot for aesthetic suggestions for band or a
              brand name, currently you will find the output rather uninspired
              and generic. Tools like Midjourney can be a good aid for creating
              illustration and graphic design, but only as an aggregate of
              existing works and following a detailed description of the desired
              result{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Roose, 2022)"}
                name={"intext(Roose, 2022)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Roose, 2022)");
                  setShowReturner(true);
                }}
              >
                (Roose, 2022)
              </LinkS>
              .
            </div>
            <div className="textP">
              Inter-human communication – expressing ideas to stakeholders,
              communicating with other departments, making users feel heard and
              understood. This element of a designer seems hard to replace
              because we trust other humans more than machines. People are for
              instance perceived more negatively if using AI to generate
              automatic responses in chat{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Hohenstein et al., 2023)"}
                name={"intext(Hohenstein et al., 2023)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Hohenstein et al., 2023)");
                  setShowReturner(true);
                }}
              >
                (Hohenstein et al., 2023)
              </LinkS>
              . Even if AI can generate and partly evaluate ideas{" "}
              <LinkS
                className="intextWordRef"
                to={"ref(Sarfaraz Khabbaz et al., 2009)"}
                name={"intext(Sarfaraz Khabbaz et al., 2009)"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext(Sarfaraz Khabbaz et al., 2009)");
                  setShowReturner(true);
                }}
              >
                (Sarfaraz Khabbaz et al., 2009)
              </LinkS>
              , humans will take a long time to count on the curating ability of
              a computer over that of a fellow human. Even if an AI can pass the
              Turing test on a screen, the age where robots can mimic real human
              interaction seems distant.
            </div>
            <div className="textP">
              For now, AI remains a powerful set of tools and assistants, which
              will speed up many of a designer’s tasks and will give a
              competitive advantage to those who use it. Picking the right tool
              for the purpose, giving prompts in a precise way, error-checking
              and curating output requires expert knowledge. The coming years,
              with AGI seeming closer than ever, will decide whether it remains
              this way.
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

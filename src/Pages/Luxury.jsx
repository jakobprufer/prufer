import { useEffect, useState } from "react";
import $ from "jquery";
import projects from "../Data/Projects.json";
import ProgressIndicator from "../Components/ProgressIndicator";
import { Link as LinkS } from "react-scroll";
import { RiArrowUpLine } from "react-icons/ri";

export default function Luxury() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "luxury");

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
      intext: "1",
      bib: "Gibbons, A. (2012). Bonobos Join Chimps as Closest Human Relatives. Science. https://www.science.org/content/article/bonobos-join-chimps-closest-human-relatives",
    },
    {
      intext: "2",
      bib: "Groeneveld, E. (2016). Prehistoric Hunter-Gatherer Societies—World History Encyclopedia. World History. https://www.worldhistory.org/article/991/prehistoric-hunter-gatherer-societies/",
    },
    {
      intext: "3",
      bib: "National Geographic Society. (2022). The Development of Agriculture. National Geographic. https://education.nationalgeographic.org/resource/development-agriculture",
    },
    {
      intext: "4",
      bib: "Griskevicius, V., & Kenrick, D. T. (2013). Fundamental motives: How evolutionary needs influence consumer behavior. Journal of Consumer Psychology, 23(3), 372–386. https://doi.org/10.1016/j.jcps.2013.03.003",
    },
    {
      intext: "5",
      bib: "Mcleod, S. (2023). Short-Term Memory | Facts, Types, Duration & Capacity. SimplyPsychology. https://www.simplypsychology.org/short-term-memory.html",
    },
    {
      intext: "6",
      bib: "Linton, R. (1936). The study of man: An introduction.",
    },
    {
      intext: "7",
      bib: "Henrich, J., & Gil-White, F. J. (2001). The evolution of prestige: Freely conferred deference as a mechanism for enhancing the benefits of cultural transmission. Evolution and human behavior, 22(3), 165-196.",
    },
    {
      intext: "8",
      bib: "Salahshour, M. (2019). Evolution of costly signaling and partial cooperation | Scientific Reports. Nature. https://www.nature.com/articles/s41598-019-45272-2",
    },
    {
      intext: "9",
      bib: "Russell W. Belk, Possessions and the Extended Self, Journal of Consumer Research, Volume 15, Issue 2, September 1988, Pages 139–168, https://doi.org/10.1086/209154",
    },
    {
      intext: "10",
      bib: "Veblen, T., & Galbraith, J. K. (1973). The theory of the leisure class (p. 154). Boston: Houghton Mifflin.",
    },
    {
      intext: "11",
      bib: "McAndrew, F. T. (2018). Costly Signaling Theory. In T. K. Shackelford & V. A. Weekes-Shackelford (Eds.), Encyclopedia of Evolutionary Psychological Science (pp. 1–8). Springer International Publishing. https://doi.org/10.1007/978-3-319-16999-6_3483-1",
    },
    {
      intext: "12",
      bib: "Mcleod, S. (2022). Social Identity Theory: Definition, History, Examples, & Facts [SimplyPsychology]. https://www.simplypsychology.org/social-identity-theory.html",
    },
  ];

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <div className="varXlH sentient uppercase">
              Why do we crave Luxury?
            </div>
            <p className="textSub">
              An evolutionary explanation of costly signalling
            </p>
            <div className="tinyH">for:</div>
            <div className="textSub">
              BSc Psychological and Behavioural Science at the London School of
              Economics
            </div>
            <div className="tinyH">Date</div>
            <div className="textSub">04/2022</div>
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
              Why does a customer pick a £100.000 watch that indicates time and
              date over a £100 pound watch that additionally includes a
              stopwatch, a timer and alarm function? Why do we crave luxury
              objects that are far detached from our basic needs and whose cost
              is so far detached from their utility? I posed the question about
              the watches to my younger nephew and as children so often do, he
              intuitively hit the nail on its head: “to show off!”. Humans
              consume not just to satisfy their needs, but to signal their
              qualities.
            </div>
            <div className="textP">
              A lot has changed about our lifestyle and the world around us
              since the time we lived as hunter gatherers, while surprisingly
              little has changed about our brains, which are very similar to
              those of our stone age ancestors. We even share nearly 99% percent
              of our DNA with chimpanzees
              <LinkS
                className="intextNumRef"
                to={"ref1"}
                name={"intext1"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext1");
                  setShowReturner(true);
                }}
              >
                1
              </LinkS>
              , our closest primate relatives. This lack of physical change
              becomes comprehensible if you visualize the timeframe of our
              development. Humans have lived as hunter gathers for about 2
              million years
              <LinkS
                className="intextNumRef"
                to={"ref2"}
                name={"intext2"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext2");
                  setShowReturner(true);
                }}
              >
                2
              </LinkS>
              , while the first agriculture and with it the onset of modern
              civilisation emerged only about 12.000 years ago
              <LinkS
                className="intextNumRef"
                to={"ref3"}
                name={"intext3"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext3");
                  setShowReturner(true);
                }}
              >
                3
              </LinkS>
              .
            </div>
            <div className="textP">
              One implication of this is that primitive instincts still guide
              our actions. Research has identified fundamental motivations as
              evading physical harm, avoiding disease, making friends, attaining
              status, acquiring a mate, keeping a mate, and caring for family,
              which might function through the activation of respective
              specialised subsystems in our brain
              <LinkS
                className="intextNumRef"
                to={"ref4"}
                name={"intext4"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext4");
                  setShowReturner(true);
                }}
              >
                4
              </LinkS>
              . Look at the contemporary advertising landscape and you will see
              that mating-related motivations continue to be incredibly powerful
              motivators for us. That’s because the drive for reproduction is
              ingrained in our brains as a necessity for evolutionary success.
              Similarly, because cooperation is the foundation of our species
              advance, we have a strong desire for social belonging and
              prestige. The combination of competition and cooperation has led
              us to organise in complex hierarchical systems, which I will come
              back to in order to explain luxury consumption.
            </div>
          </section>
          <section className="projectSection" id="section2" name="section2">
            <div className="textP">
              Another implication of our stone-age brains is that we struggle to
              process all the information available in the modern world.
              Research shows that our mind only has the ability to hold about
              seven pieces of independent information in working memory at one
              time
              <LinkS
                className="intextNumRef"
                to={"ref5"}
                name={"intext5"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext5");
                  setShowReturner(true);
                }}
              >
                5
              </LinkS>
              . That means we need to be selective with the things we attend to.
              Just imagine an office worker’s Friday, a train commute to the
              city, a lunch break and a night out at the pub. Visualise the
              amount of people this worker passes throughout the day compared to
              a hunter gatherer and compare the number of options and activities
              presented to the worker compared to a fairly restricted life a
              stone age human would have led.
            </div>
            <div className="textP">
              Adapting to this complexity, culture and smaller guidance systems
              have evolved, simplifying the world to meet our limited processing
              capacities. Like traffic rules and road signs govern driving, we
              are channelled through everyday life with little wiggle room, with
              many choices taken away from us by the system. For the office
              worker, his work hours and train schedule limit his commute
              options, company policy determines his tasks and goals for the
              day, his habits and the offerings of a nearby café guide his
              choice of lunch, a social hierarchy and conventions within his
              peer group help deciding on a pub and drink. Correspondingly to
              this concept, division of labour has played an integral part of
              our progress since the days of hunter gatherers. Complex processes
              have been broken up into small, manageable tasks that can be
              completed with an individual’s mental processing capacity. And
              humans put their children through a long education process to
              teach them about culture, guidance systems and specialised tasks,
              in many cases more than 20 years of their life. This means we are
              conditioned to function in our system and responses to our
              environment are widely automatic.
            </div>
          </section>
          <section className="projectSection" id="section3" name="section3">
            <div className="textP">
              As part of culture, status and roles simplify the position of
              individuals in society and social groups. Ralph Linton in his 1936
              book “The Study of Man”
              <LinkS
                className="intextNumRef"
                to={"ref6"}
                name={"intext6"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext6");
                  setShowReturner(true);
                }}
              >
                6
              </LinkS>{" "}
              defined status as what a person is, so for instance a child,
              parent, boss or employee, and roles as the behaviour expected from
              a person of this status. Status and roles are also associated with
              prestige, which can be understood as someone’s value in the eyes
              of others; high prestige meaning that people will admire and
              attempt to copy a person
              <LinkS
                className="intextNumRef"
                to={"ref7"}
                name={"intext7"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext7");
                  setShowReturner(true);
                }}
              >
                7
              </LinkS>
              . Both through neural evolution and cultural learning throughout
              life we have acquired the ability to infer status, roles and
              prestige of someone, without the necessity for direct acts of
              dominance and aggression. Specific signposts, including the goods
              someone owns, facilitate such evaluations. Going about his
              business in the city, those help the office worker to assess
              whether strangers pose a threat or an opportunity, whether they
              should be respected or dismissed, copied or avoided, whether they
              are potential high-quality mates or not. This is where goods such
              as a £100.000 watch come in. More than just the time, they give
              indication about a person’s quality and identity. Signalling value
              in this way means gaining respect and being offered cooperation
              <LinkS
                className="intextNumRef"
                to={"ref8"}
                name={"intext8"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext8");
                  setShowReturner(true);
                }}
              >
                8
              </LinkS>
              . Sophisticated production and new materials have enabled us to
              create goods that last longer than most things a stone age human
              could have possessed, which means they represent a durable
              investment.
            </div>
            <div className="textP">
              Because of such signalling of position and identity, Russel Belk
              in his influential work on consumption considers possessions an
              extension of the self
              <LinkS
                className="intextNumRef"
                to={"ref9"}
                name={"intext9"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext9");
                  setShowReturner(true);
                }}
              >
                9
              </LinkS>
              , consuming as a form of self-realisation. Thorstein Veblen has
              coined the concept of conspicuous consumption, which happens when
              goods are purchased not for their practical value, but to signal
              one’s wealth
              <LinkS
                className="intextNumRef"
                to={"ref10"}
                name={"intext10"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext10");
                  setShowReturner(true);
                }}
              >
                10
              </LinkS>
              . As Veblen describes it, this kind of consumption has become a
              lot more common and accessible for the broad masses after the
              industrial revolution, as an emerging middle class had more money
              to spend than necessities required.
            </div>
            <div className="textP">
              For a good to be meaningful as a signal, it can’t be easily
              available and needs to come at a considerable cost, which is
              described by the costly signalling theory
              <LinkS
                className="intextNumRef"
                to={"ref11"}
                name={"intext11"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext11");
                  setShowReturner(true);
                }}
              >
                11
              </LinkS>
              . That explains why people are happy to spend an amount of money
              on luxury items: it signals they have an excess of resources so
              they can be “wasteful” with their spending. The value of such
              signal can outweigh negative utility of the product. This is
              comparable to the train of the peacock, which is hindering for
              survival, but highly valuable as a signal to attract mates. A
              credible signal also shouldn’t be easy to fake. And social systems
              make sure that signals are mostly accurate representations of real
              quality. It is for a reason that wearing fake designer clothing is
              looked down upon and rappers in their lyrics ridicule those that
              rent expensive cars to seem richer than they are.
            </div>
            <div className="textP">
              People could also consume luxury to show their belonging to a
              group. As social identity theory
              <LinkS
                className="intextNumRef"
                to={"ref12"}
                name={"intext12"}
                smooth={true}
                duration={800}
                offset={-120}
                onClick={() => {
                  setClickedReference("intext12");
                  setShowReturner(true);
                }}
              >
                12
              </LinkS>{" "}
              describes, we constantly categorise us and others into ingroups
              and outgroups. Consumption also is a means to signal membership to
              a group. Examples could be jerseys to signal association with a
              sports club, but also the newest MacBook to identify oneself as an
              Apple user or a Yacht to fit in with an exclusive friend group.
            </div>
            <div className="textP">
              You might be reading this and conclude that spending vast sums on
              luxury might be important for some people, but not for you; that
              you don’t mean to show anything with your purchases. But
              signalling consumption can take all kinds of forms. The purchase
              of eco-friendly or pro-social goods for instance can also convey a
              message. And finally, there is the phenomenon of
              countersignalling, which is the opposite of conspicuous
              consumption. Like a CEO that wears jeans and t-shirt instead of a
              suit or upper-class members that despise flashy designer clothing,
              one hereby communicates that the own status, role and prestige is
              so solidified that no goods are required to signal it.
            </div>
          </section>
          <section className="projectSection" id="sectionR" name="sectionR">
            <div className="textH">References</div>
            <ol className="textP bib">
              {references.map((reference, index) => (
                <li
                  key={index}
                  name={`ref${reference.intext}`}
                  dangerouslySetInnerHTML={{
                    __html: formatReference(reference.bib),
                  }}
                ></li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

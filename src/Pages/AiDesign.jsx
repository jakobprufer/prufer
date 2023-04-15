import { useEffect, useState } from "react";
import $ from "jquery";
import projects from "../Data/Projects.json";
import ProgressIndicator from "../Components/ProgressIndicator";

export default function AiDesign() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "aidesign");

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
        />
        <div className="projectContent">
          <section className="projectSection" id="section1" name="section1">
            <div className="textP">
              The thought that computers will take over jobs is not remotely a
              new one. In 1960, Nobel laureate Herbert Simon asserted that
              machines would be able to do any work a man could do within two
              decades (Simon, 1960). With the late 2022 rise of OpenAI’s ChatGPT
              and other advanced artificial intelligence (AI) tools the debate
              has grown louder. If you ask a search engine whether designers,
              specifically UX and product designers, might be replaced by AI,
              you will currently find most results stating it will not happen
              anytime soon. Blog entries, often written by designers themselves,
              demonstrate that today’s models still do a relatively poor job at
              basic commands like “Create a flow diagram for the sign-up process
              on linkedin.com” (Jacquez, 2023). But we seem to be at a
              crossroads, and recent developments have demonstrated powerfully
              how capable AI has become. It is a crossroads because artificial
              general intelligence (AGI) seems closer than ever.
            </div>
            <div className="textP">
              AGI, or artificial general intelligence, refers to an AI system
              that can perform any intellectual task that a human can. The
              current level of AI is limited to performing specific tasks for
              which it has been programmed, trained over longer time and
              fine-tuned by humans for alignment (Ouyang et al., 2022). While it
              can be highly proficient in certain areas, it lacks the ability to
              understand context, generalize and apply its knowledge to new
              domains. An AGI on the other side could learn fully independently,
              likely take on most of a designer’s tasks and would also be
              indistinguishable from a human in the Turing test (Zador et al.,
              2023). How near or far we are to the development of AGI seems to
              be a mystery, even for those closest to the frontier at OpenAI
              (Altman, 2023). It remains to be seen whether the engineers in San
              Francisco’s mission district are working on something equitable to
              a nuclear bomb or whether they will keep refining a very advanced
              summarist algorithm.
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
              access to big data sets from the internet (Han et al., 2020) and
              much bigger processing power compared to the human brain (Yüksel
              et al., 2023). An example of application is provided by Lin and
              Chen (2016), where AI aids the generation of a perfume bottle by
              analysing a large number of existing bottle shapes.
            </div>
            <div className="textP">
              Ideation - generating creative solutions for the problem to be
              solved, combining existing ideas in new contexts. ChatGPT is
              already a powerful tool to generate options and seems less prone
              to human shortcomings like fixation on one idea once formed
              (Vasconcelos and Crilly, 2016). It also considers deficiencies of
              an idea: when asked about how to construct a soundproofing mask
              for instance, ChatGPT did not just provide a considerable list of
              options but remarked that it was unlikely a wearable mask would
              completely block sound. New ideas, it could be argued, are simply
              a combination of two previously unrelated concepts – something
              that AI is certainly able to achieve (Han et al., 2018). As the
              look and layout of mobile UX design is relatively standardised
              today, tools like Galileo AI can already fabricate prototype
              screens with a simple language prompt (Concha, 2023). So far AI is
              a good idea generator but still requires a designer with expert
              knowledge to curate its output. It seems not unimaginable that in
              the future advanced AI could take on a lot more of the ideation.
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
              ChatGPT-4, AI seems still far away from aesthetic cognition
              (Root-Bernstein, 2002). When asking the chat bot for aesthetic
              suggestions for band or a brand name, currently you will find the
              output rather uninspired and generic. Tools like Midjourney can be
              a good aid for creating illustration and graphic design, but only
              as an aggregate of existing works and following a detailed
              description of the desired result (Roose, 2022).
            </div>
            <div className="textP">
              Inter-human communication – expressing ideas to stakeholders,
              communicating with other departments, making users feel heard and
              understood. This element of a designer seems hard to replace
              because we trust other humans more than machines. People are for
              instance perceived more negatively if using AI to generate
              automatic responses in chat (Hohenstein et al., 2023). Even if AI
              can generate and partly evaluate ideas (Sarfaraz Khabbaz et al.,
              2009), humans will take a long time to count on the curating
              ability of a computer over that of a fellow human. Even if an AI
              can pass the Turing test on a screen, the age where robots can
              mimic real human interaction seems distant.
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
              <li>
                Altman, S. (2023) Planning for AGI and beyond, <i>OpenAI</i>.
                Available at:{" "}
                <a
                  href="https://openai.com/blog/planning-for-agi-and-beyond"
                  target="_blank"
                >
                  https://openai.com/blog/planning-for-agi-and-beyond
                </a>{" "}
                (Accessed: 12 April 2023).
              </li>
              <li>
                Concha, M. (2023) Galileo AI - Are UI/UX Designers a Thing of
                the Past? | <i>HackerNoon, Hackernoon</i>. Available at:{" "}
                <a
                  href="https://hackernoon.com/galileo-ai-are-uiux-designers-a-thing-of-the-past"
                  target="_blank"
                >
                  https://hackernoon.com/galileo-ai-are-uiux-designers-a-thing-of-the-past
                </a>{" "}
                (Accessed: 13 April 2023).
              </li>
              <li>
                Han, J. et al. (2018) ‘The Combinator – a computer-based tool
                for creative idea generation based on a simulation approach’,
                <i>Design Science</i>, 4, p. e11. Available at:{" "}
                <a href="https://doi.org/10.1017/dsj.2018.7" target="_blank">
                  https://doi.org/10.1017/dsj.2018.7
                </a>
                .
              </li>
              <li>
                Han, J. et al. (2020) ‘A Data-Driven Approach for Creative
                Concept Generation and Evaluation’,{" "}
                <i>Proceedings of the Design Society: DESIGN Conference</i>, 1,
                pp. 167–176. Available at:{" "}
                <a href="https://doi.org/10.1017/dsd.2020.5" target="_blank">
                  https://doi.org/10.1017/dsd.2020.5
                </a>
                .
              </li>
              <li>
                Hohenstein, J. et al. (2023) ‘Artificial intelligence in
                communication impacts language and social relationships’,
                <i>Scientific Reports</i>, 13(1), p. 5487. Available at:{" "}
                <a
                  href="https://doi.org/10.1038/s41598-023-30938-9"
                  target="_blank"
                >
                  https://doi.org/10.1038/s41598-023-30938-9
                </a>
                .
              </li>
              <li>
                Jacquez, K. (2023) Will artificial intelligence replace my job
                as a UX designer?, <i>Medium</i>. Available at:{" "}
                <a
                  href="https://uxdesign.cc/will-artificial-intelligence-like-chatgpt-and-dall-e-replace-my-job-as-a-user-experience-designer-93f26d8c109"
                  target="_blank"
                >
                  https://uxdesign.cc/will-artificial-intelligence-like-chatgpt-and-dall-e-replace-my-job-as-a-user-experience-designer-93f26d8c109
                </a>{" "}
                (Accessed: 12 April 2023).
              </li>
              <li>
                Lin, Y.-C. and Chen, Y.-T. (2016) ‘Artificial Intelligent Models
                for New Product Design: An Application Study’, in 2016
                <i>
                  International Conference on Computational Science and
                  Computational Intelligence (CSCI). 2016 International
                  Conference on Computational Science and Computational
                  Intelligence (CSCI)
                </i>
                , pp. 1134–1139. Available at:{" "}
                <a
                  href="https://doi.org/10.1109/CSCI.2016.0215"
                  target="_blank"
                >
                  https://doi.org/10.1109/CSCI.2016.0215
                </a>
                .
              </li>
              <li>
                Ouyang, L. et al. (2022) ‘Training language models to follow
                instructions with human feedback’. <i>arXiv</i>. Available at:{" "}
                <a
                  href="https://doi.org/10.48550/arXiv.2203.02155"
                  target="_blank"
                >
                  https://doi.org/10.48550/arXiv.2203.02155
                </a>
                .
              </li>
              <li>
                Roose, K. (2022) ‘An A.I.-Generated Picture Won an Art Prize.
                Artists Aren’t Happy.’, <i>The New York Times</i>, 2 September.
                Available at:{" "}
                <a
                  href="https://www.nytimes.com/2022/09/02/technology/ai-artificial-intelligence-artists.html"
                  target="_blank"
                >
                  https://www.nytimes.com/2022/09/02/technology/ai-artificial-intelligence-artists.html
                </a>{" "}
                (Accessed: 13 April 2023).
              </li>
              <li>
                Root-Bernstein, R.S. (2002) ‘Aesthetic cognition’,{" "}
                <i>International Studies in the Philosophy of Science</i>,
                16(1), pp. 61–77. Available at:{" "}
                <a
                  href="https://doi.org/10.1080/02698590120118837"
                  target="_blank"
                >
                  https://doi.org/10.1080/02698590120118837
                </a>
                .
              </li>
              <li>
                Sarfaraz Khabbaz, R. et al. (2009) ‘A simplified fuzzy logic
                approach for materials selection in mechanical engineering
                design’, <i>Materials & Design</i>, 30(3), pp. 687–697.
                Available at:{" "}
                <a
                  href="https://doi.org/10.1016/j.matdes.2008.05.026"
                  target="_blank"
                >
                  https://doi.org/10.1016/j.matdes.2008.05.026
                </a>
                .
              </li>
              <li>
                Simon, H.A. (1960) The new science of management decision. New
                York, NY, US: <i>Harper & Brothers</i> (The new science of
                management decision), pp. xii, 50. Available at:{" "}
                <a href="https://doi.org/10.1037/13978-000" target="_blank">
                  https://doi.org/10.1037/13978-000
                </a>
                .
              </li>
              <li>
                Vasconcelos, L.A. and Crilly, N. (2016) ‘Inspiration and
                fixation: Questions, methods, findings, and challenges’,{" "}
                <i>Design Studies</i>, 42, pp. 1–32. Available at:{" "}
                <a
                  href="https://doi.org/10.1016/j.destud.2015.11.001"
                  target="_blank"
                >
                  https://doi.org/10.1016/j.destud.2015.11.001
                </a>
                .
              </li>
              <li>
                Yüksel, N. et al. (2023) ‘Review of artificial intelligence
                applications in engineering design perspective’,{" "}
                <i>Engineering Applications of Artificial Intelligence</i>, 118,
                p. 105697. Available{" "}
                <a
                  href="https://doi.org/10.1016/j.engappai.2022.105697"
                  target="_blank"
                >
                  https://doi.org/10.1016/j.engappai.2022.105697
                </a>
                .
              </li>
              <li>
                Zador, A. et al. (2023) ‘Catalyzing next-generation Artificial
                Intelligence through NeuroAI’, <i>Nature Communications</i>,
                14(1), p. 1597. Available at:{" "}
                <a
                  href="https://doi.org/10.1038/s41467-023-37180-x"
                  target="_blank"
                >
                  https://doi.org/10.1038/s41467-023-37180-x
                </a>
                .
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

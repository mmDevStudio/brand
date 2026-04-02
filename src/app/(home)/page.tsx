import Button from "@/components/Button";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Section
        title="01 / IDENTITY"
        className="text-body"
        actionBtn="BUILD NOW"
        actionHref=""
        scrollBtn="WHAT WE OFFER"
        scrollHref=""
      >
        <span>
          We are a development studio building clean, fast, and modern websites.
          We help small businesses and startups establish their online presence
          with zero unnecessary complexity—just results. Our focus is raw
          performance, scalable architecture, and straightforward design.
        </span>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-h5">Mika Reich</div>
            <div className="text-action">FRONTEND ENGINEER</div>
            <div className="text-body">
              I’m Mika, a 21-year-old Computer Science student based in
              Saarbrücken, Germany. I’ve been coding websites for 10 years,
              living and breathing modern web development.
            </div>
          </div>
          <div>
            <div className="text-h5">Marco Zillgen</div>
            <div className="text-action">SYSTEM ARCHITECT</div>
            <div className="text-body">
              I’m Marco, also 21, and studying Computer Science alongside Mika
              in Saarbrücken. While Mika lives in the browser, my background is
              heavily rooted in low-level programming and IoT (Internet of
              Things).
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

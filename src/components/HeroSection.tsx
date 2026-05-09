export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="section-eyebrow">Developer Journal</p>
        <h1>Build things that last, and write things worth revisiting.</h1>
        <p className="hero-quote">
          "Great developers do not just ship features. They shape systems,
          elevate people, and leave the codebase calmer than they found it."
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#/posts">
            Explore Posts
          </a>
          <a className="button button-light" href="#newsletter">
            Join Newsletter
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-orbit hero-orbit-large" />
        <div className="hero-orbit hero-orbit-small" />
        <div className="hero-code-card">
          <span>const craft = vision + systems + empathy;</span>
          <span>publish(ideas.with.depth());</span>
          <span>while (learning) keep_building();</span>
        </div>
      </div>
    </section>
  )
}

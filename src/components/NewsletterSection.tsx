export function NewsletterSection() {
  return (
    <section className="newsletter-panel" id="newsletter">
      <div>
        <p className="section-eyebrow">Contact Me</p>
        <h2>Stay in the loop with practical notes for builders.</h2>
        <p className="section-copy">
          Drop your email to receive fresh posts on frontend systems, AI
          workflows, blockchain product thinking, and sustainable career habits.
        </p>
      </div>

      <form className="newsletter-form">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          className="newsletter-input"
          id="newsletter-email"
          placeholder="Enter your email"
          type="email"
        />
        <button className="button button-dark" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  )
}

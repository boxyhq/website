import './hero-home.css';

const HeroHome = () => {
  return (
    <section aria-labelledby="hero-section-title" class="hero-home-section">
      <div class="girdle hero-home">
        <div class="content-container">
          <h1
            class="linear-gradient-text hero-section-title"
            id="hero-section-title"
          >
            Security Building Blocks For Developers
          </h1>
          <p>
            Reduce Time to Market without sacrificing your security posture!
            BoxyHQ’s suite of APIs for security and privacy helps engineering
            teams build and ship compliant cloud applications faster. From NPM
            to self-hosting or SaaS, BoxyHQ adjusts to fit your needs.
          </p>
          <ul class="reset-list button-container">
            <li>
              <a
                class="button button-secondary with-icon base-icon-pseudo icon-laptop"
                href="https://cal.com/deepak-boxyhq/demo"
              >
                Book A Demo
              </a>
            </li>
            <li>
              <a
                class="button button-primary with-icon base-icon-pseudo icon-code-slash"
                href="https://app.eu.boxyhq.com/auth/join"
              >
                Sign Up Today
              </a>
            </li>
          </ul>
        </div>
        <div class="hero-image-container">
          <picture>
            <source
              srcset="/images/heroes/home-cubes-hero@2x.avif"
              type="image/avif"
            />
            <source
              srcset="/images/heroes/home-cubes-hero@2x.webp"
              type="image/webp"
            />
            <img
              alt=""
              class="hero-image"
              width="725"
              height="758"
              src="/images/heroes/home-cubes-hero.png"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;

import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import './Home.css';

const Home = () => {
  return (
    <main>
      {/* HERO */}
      <section className="hero hero-centered">
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">Complete control of your fleet and deliveries.</h1>
            <p className="hero-subtitle">
              Compliance tracking, route optimization, and payment reconciliation in one platform.
            </p>
            <div className="hero-actions">
              <Link to="/book-a-demo" className="btn btn-primary">Book a Demo</Link>
              <Link to="/#pricing" className="btn btn-secondary">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Products</div>
            <h2 className="section-title">Everything you need to deliver</h2>
            <p className="section-subtitle">
              From route planning to vehicle maintenance. Use them together or choose what fits your operation.
            </p>
          </div>

          <div className="products-showcase">
            {/* Fleet Management */}
            <div className="product-row">
              <div className="product-info">
                <span className="product-tag">Compliance &amp; Control</span>
                <h3 className="product-info-title">Fleet Management</h3>
                <p className="product-info-description">
                  Stay audit-ready with automated compliance tracking, approve every expense before it happens
                  with WhatsApp workflows, and catch fuel theft with AI monitoring. Complete fleet oversight
                  from insurance renewals to parts tracking—all in one platform.
                </p>
                <Link to="/fleet-solution" className="product-info-link">Learn more</Link>
              </div>
              <div className="product-image-wrapper product-image-lg">
                <img
                  src="https://static.wixstatic.com/media/aa113a_39b1f3d92dff4204beb4c5bfaa3981ef~mv2.png"
                  alt="Fleet Management Dashboard"
                />
              </div>
            </div>

            {/* Operations Management */}
            <div className="product-row reverse">
              <div className="product-info">
                <span className="product-tag">Command Center</span>
                <h3 className="product-info-title">Operations Management</h3>
                <p className="product-info-description">
                  Your real-time control room for delivery operations. Monitor all active routes, dispatch
                  orders instantly, track driver locations, and make quick decisions when things change on the ground.
                </p>
                <Link to="/delivery-solution" className="product-info-link">Learn more</Link>
              </div>
              <div className="product-image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/aa113a_b54c05681a87415eaaba78b30d5991af~mv2.png"
                  alt="Operations Management Dashboard"
                />
              </div>
            </div>

            {/* Driver App */}
            <div className="product-row">
              <div className="product-info">
                <span className="product-tag">Driver Companion</span>
                <h3 className="product-info-title">Driver App</h3>
                <p className="product-info-description">
                  The mobile app your drivers actually want to use. Turn-by-turn navigation to each stop,
                  one-tap proof of delivery with photos and signatures, real-time GPS tracking, and automatic
                  status updates that keep customers informed. Works offline in areas with poor network coverage.
                </p>
              </div>
              <div className="product-image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/aa113a_535756870d224acfb5887d319271303f~mv2.png"
                  alt="Driver App"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="section section-alt" id="pricing">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Get a Quote</div>
            <h2 className="section-title">Custom pricing for your fleet</h2>
            <p className="section-subtitle">
              Every fleet is different. Let's build a solution that fits your specific needs and budget.
            </p>
          </div>

          <div className="pricing-bundle">
            <h3>Ready to get started?</h3>
            <p>
              Contact our sales team for a custom quote tailored to your fleet size and requirements.
              No commitment, no pressure—just honest answers about how LogixFleet can help your business.
            </p>
            <div className="pricing-bundle-actions">
              <Link to="/book-a-demo" className="btn">Book a Demo</Link>
              <a href="#contact" className="btn btn-outline">Contact Sales</a>
            </div>
          </div>

          <div className="pricing-products">
            <div className="pricing-products-header">
              <h3>Choose what you need</h3>
              <p>Pick the products that fit your business. Use them together or standalone.</p>
            </div>

            <div className="pricing-products-grid">
              <div className="pricing-product-card">
                <h4>Fleet Management</h4>
                <p className="pricing-product-subtitle">For vehicle compliance and cost control</p>
                <ul>
                  <li>Compliance tracking</li>
                  <li>Approval workflows</li>
                  <li>AI fuel monitoring</li>
                  <li>Parts tracking</li>
                  <li>Maintenance scheduling</li>
                  <li>WhatsApp integration</li>
                </ul>
              </div>

              <div className="pricing-product-card">
                <h4>Delivery Management</h4>
                <p className="pricing-product-subtitle">For route planning and delivery operations</p>
                <ul>
                  <li>Route optimization</li>
                  <li>Real-time tracking</li>
                  <li>Dispatch management</li>
                  <li>Proof of delivery</li>
                  <li>Customer notifications</li>
                  <li>Driver mobile app</li>
                </ul>
              </div>

              <div className="pricing-product-card">
                <h4>Finance &amp; Reconciliation</h4>
                <p className="pricing-product-subtitle">For payments and invoicing</p>
                <ul>
                  <li>Invoice generation</li>
                  <li>Payment tracking</li>
                  <li>Cash reconciliation</li>
                  <li>Driver collections</li>
                  <li>Payment ledger</li>
                  <li>Financial reports</li>
                </ul>
              </div>
            </div>

            <div className="pricing-note">
              <p>
                <strong>Mix and match:</strong> Use one product or all three. Pricing is customized
                based on your fleet size and which features you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="section section-warm">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Why LogixFleet</div>
            <h2 className="section-title">Built differently</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h4 className="why-title">Built for the World</h4>
              <p className="why-description">
                Designed for local roads, networks, and business conditions. We understand the challenges you face.
              </p>
            </div>
            <div className="why-card">
              <h4 className="why-title">Fast Setup</h4>
              <p className="why-description">
                Get started in days, not weeks. We handle onboarding and training so you can focus on your business.
              </p>
            </div>
            <div className="why-card">
              <h4 className="why-title">Local Support</h4>
              <p className="why-description">
                Real people on WhatsApp, phone, and email. Based in Nairobi, available when you need us.
              </p>
            </div>
            <div className="why-card">
              <h4 className="why-title">Works on Any Phone</h4>
              <p className="why-description">
                Android app that runs on any smartphone. No expensive hardware or special devices needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
};

export default Home;

import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import Button from '@/components/Button/Button';
import { services } from '@/data/services';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>

      <Hero />

      {/* About Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>About Bonding Concepts</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className={styles.aboutContent}>
            <p>
              Bonding Concepts is a premier Dubai-based technical services company dedicated to providing comprehensive maintenance, installation, and contracting solutions. With a team of experienced technicians and a commitment to quality, we serve both residential and commercial clients, ensuring every project is delivered to the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>We offer a wide range of professional technical services.</p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
            ))}
          </div>
          <div className={styles.centerBtn}>
            <Button href="/services" variant="primary">View All Services</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Bonding Concepts</h2>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <h3>Skilled Technicians</h3>
              <p>Certified and experienced professionals for every job.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>On-Time Delivery</h3>
              <p>We respect your time and ensure projects are completed on schedule.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Transparent Pricing</h3>
              <p>No hidden costs. Clear and honest quotes upfront.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Quality Materials</h3>
              <p>We use only the best materials to ensure long-lasting results.</p>
            </div>
          </div>

          <div className={styles.centerBtn} style={{ marginTop: '2rem' }}>
            <Button href="/about" variant="secondary">Learn More About Us</Button>
          </div>
        </div>
      </section>

      {/* Our Process Section (New) */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How We Work</h2>
            <p className={styles.sectionSubtitle}>Simple, transparent, and efficient process.</p>
          </div>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>Consultation</h3>
              <p>We discuss your needs and assess the scope of work.</p>
            </div>
            <div className={styles.processArrow}>→</div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Proposal</h3>
              <p>We provide a clear, detailed quote and timeline.</p>
            </div>
            <div className={styles.processArrow}>→</div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Execution</h3>
              <p>Our skilled team carries out the work to the highest standards.</p>
            </div>
            <div className={styles.processArrow}>→</div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3>Completion</h3>
              <p>We ensure your complete satisfaction before handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (New) */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"Fantastic service! The team was professional, clean, and finished the painting job right on time. Highly recommended."</p>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>Sarah Jenkins</span>
                <span className={styles.clientType}>Residential Client</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"Bonding Concepts has been handling our office maintenance for a year now. Reliable and efficient every time."</p>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>Mohammed Al-Fayed</span>
                <span className={styles.clientType}>Business Owner</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"Great experience with their plumbing team. Fixed a major leak quickly and professionally."</p>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>Priya Patel</span>
                <span className={styles.clientType}>Villa Owner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and quote.</p>
          <Button href="/contact" variant="primary" className={styles.ctaBtn}>Let’s Discuss Your Project</Button>
        </div>
      </section>
    </div>
  );
}

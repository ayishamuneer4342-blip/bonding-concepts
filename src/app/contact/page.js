import PageHeader from '@/components/PageHeader/PageHeader';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

export const metadata = {
    title: 'Contact Us | Bonding Concepts',
    description: 'Get in touch with Bonding Concepts for all your technical service needs in Dubai.',
};

export default function Contact() {
    return (
        <div>
            <PageHeader title="Contact Us" subtitle="Let's Discuss Your Project" />

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div className={styles.grid}>
                    {/* Contact Info */}
                    <div className={styles.info}>
                        <h2>Get In Touch</h2>
                        <p className={styles.infoText}>
                            Have a question or need a quote? Reach out to us via email or visit our office.
                        </p>

                        <div className={styles.contactItem}>
                            <h3>Address</h3>
                            <p>
                                CBD Building, 1st Floor<br />
                                Near Sharaf DG Metro Station<br />
                                Al Mankhool, Dubai
                            </p>
                        </div>

                        <div className={styles.contactItem}>
                            <h3>Email</h3>
                            <p>
                                <a href="mailto:bondingconcepts2@gmail.com">bondingconcepts2@gmail.com</a>
                            </p>
                        </div>

                        <div className={styles.contactItem}>
                            <h3>Office Hours</h3>
                            <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formContainer}>
                        <h2>Send Us a Message</h2>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your Email" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="Your Phone Number" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="service">Service Needed</label>
                                <select id="service" className={styles.select} required defaultValue="">
                                    <option value="" disabled>Select a Service</option>
                                    <option value="plaster-works">Plaster Works</option>
                                    <option value="painting">Painting Contracting</option>
                                    <option value="cleaning">Building Cleaning</option>
                                    <option value="flooring">Flooring & Tiling</option>
                                    <option value="plumbing">Plumbing & Sanitary</option>
                                    <option value="electrical">Electrical Works</option>
                                    <option value="ac">AC & Ventilation</option>
                                    <option value="carpentry">Carpentry</option>
                                    <option value="other">Other / General Inquiry</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Subject" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
                            </div>

                            <Button type="submit" variant="primary">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

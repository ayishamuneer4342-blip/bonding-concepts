"use client";
import Button from '../Button/Button';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    return (
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

                <Button type="submit" variant="primary" style={{ width: '100%' }}>Send Message</Button>
            </form>
        </div>
    );
};

export default ContactForm;

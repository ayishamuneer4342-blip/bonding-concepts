import PageHeader from '@/components/PageHeader/PageHeader';
import ContactForm from '@/components/ContactForm/ContactForm';
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

                    {/* Contact Form Component */}
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

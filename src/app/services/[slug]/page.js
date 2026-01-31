import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader/PageHeader';
import Button from '@/components/Button/Button';
import { services } from '@/data/services';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) return { title: 'Service Not Found' };

    return {
        title: `${service.title} | Bonding Concepts`,
        description: service.description,
    };
}

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetail({ params }) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <div>
            <PageHeader title={service.title} />

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div className={styles.content}>
                    <p className={styles.intro}>{service.description}</p>

                    <div className={styles.details}>
                        <h3>What We Offer</h3>
                        <ul className={styles.list}>
                            <li>Professional installation and maintenance</li>
                            <li>Experienced and certified technicians</li>
                            <li>High-quality materials and tools</li>
                            <li>Commercial and residential scope coverage</li>
                            <li>Safety and compliance assurance</li>
                        </ul>

                        <h3>Why Choose Us for {service.title}?</h3>
                        <p>
                            We bring years of expertise to every {service.title.toLowerCase()} project.
                            Our team ensures timely completion with minimal disruption to your daily operations.
                        </p>

                        <div className={styles.cta}>
                            <Button href="/contact" variant="primary">Request a Quote for {service.title}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

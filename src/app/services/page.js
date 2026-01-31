import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import { services } from '@/data/services';
import styles from './page.module.css';

export const metadata = {
    title: 'Our Services | Bonding Concepts',
    description: 'Explore our comprehensive range of technical services including plastering, painting, cleaning, and more.',
};

export default function Services() {
    return (
        <div>
            <PageHeader title="Our Services" subtitle="Expert Technical Solutions for Every Need" />

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div className={styles.grid}>
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            slug={service.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

type ApiCard = {
  title: string;
  description: string;
  href: string;
  badge: string;
  iconPath: string;
};

const apis: ApiCard[] = [
  {
    title: 'Notax Pay',
    description:
      'Emita boletos, gerencie titulares, contas bancárias, convênios e webhooks através da API de pagamentos da Notax.',
    href: '/notax-pay',
    badge: 'v1',
    iconPath: '/img/icons/fin001.svg',
  },
];

function ApiCard({ title, description, href, badge, iconPath }: ApiCard): ReactNode {
  return (
    <Link to={href} className={styles.apiCard}>
      <div className={styles.apiCardIcon}>
        <img src={iconPath} alt={title} width={24} height={24} />
      </div>
      <div className={styles.apiCardContent}>
        <div className={styles.apiCardHeader}>
          <h3 className={styles.apiCardTitle}>{title}</h3>
          <span className={styles.apiCardBadge}>{badge}</span>
        </div>
        <p className={styles.apiCardDescription}>{description}</p>
      </div>
      <div className={styles.apiCardArrow}>→</div>
    </Link>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Documentação" description="Documentação das APIs Notax">
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroBadge}>Developer Docs</span>
            <h1 className={styles.heroTitle}>
              Bem-vindo à documentação
              <br />
              das APIs Notax
            </h1>
            <p className={styles.heroSubtitle}>
              Integre as soluções financeiras e fiscais da Notax na sua aplicação com nossas APIs
              bem documentadas e fáceis de usar.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>APIs disponíveis</h2>
            <div className={styles.apiGrid}>
              {apis.map((api) => (
                <ApiCard key={api.title} {...api} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <img
                  src="/img/icons/cod007.svg"
                  alt="REST API"
                  width={28}
                  height={28}
                  className={styles.infoIcon}
                />
                <h3>REST API</h3>
                <p>
                  Todas as APIs seguem o padrão REST com respostas em JSON e autenticação via Bearer
                  token.
                </p>
              </div>
              <div className={styles.infoCard}>
                <img
                  src="/img/icons/gen005.svg"
                  alt="OpenAPI"
                  width={28}
                  height={28}
                  className={styles.infoIcon}
                />
                <h3>OpenAPI 3.x</h3>
                <p>
                  Specs em formato OpenAPI 3.x prontas para importar no Postman, Insomnia ou gerar
                  SDKs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

import Picture from '../Picture';

import './customers-partners.css';

const CustomersAndPartners = () => {
  const customersAndPartners = [
    {
      alt: 'Visit Cal.com',
      pictureSrc: '/images/customers-partners/calcom',
      url: 'https://cal.com',
    },
    {
      alt: 'Visit Supademo.com',
      pictureSrc: '/images/customers-partners/supademo',
      url: 'https://supademo.com/',
    },
    {
      alt: 'Visit Spike.sh',
      pictureSrc: '/images/customers-partners/spikesh',
      url: 'https://spike.sh/',
    },
    {
      alt: 'Visit Dub.co',
      pictureSrc: '/images/customers-partners/dub',
      url: 'https://dub.co/',
    },
    {
      alt: 'Visit Unosecur.com',
      pictureSrc: '/images/customers-partners/unosecur',
      url: 'https://www.unosecur.com/',
    },
    {
      alt: 'Visit Unicis.tech',
      pictureSrc: '/images/customers-partners/unicis',
      url: 'https://www.unicis.tech/',
    },
    {
      alt: 'Visit SuperTokens.com',
      pictureSrc: '/images/customers-partners/supertokens',
      url: 'https://supertokens.com/',
    },
  ];
  return (
    <section
      aria-labelledby="customers-and-partners-title"
      className="customers-and-partners-container"
    >
      <header className="feature-header">
        <h2
          className="feature-header-title linear-gradient-text"
          id="customers-and-partners-title"
        >
          Trusted By
        </h2>
      </header>
      <ul className="reset-list girdle customers-and-partners-list">
        {customersAndPartners.map((customerOrPartner) => (
          <li key={customerOrPartner.url} className="customer-partner-logo">
            <a
              href={customerOrPartner.url}
              rel="noreferrer noopener external"
              target="_blank"
            >
              <Picture
                alt={customerOrPartner.alt}
                pictureSrc={customerOrPartner.pictureSrc}
                height="75"
                width="250"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CustomersAndPartners;

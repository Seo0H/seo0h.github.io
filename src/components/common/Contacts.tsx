import ContactsIcon from '@/components/common/ContactsIcon';
import LinkExternal from '@/components/common/LinkExternal';
import { type ContactsKey, siteConfig } from '@/config';
import { cvar } from '@/styles/cssVar';

const Contacts = () => {
  return (
    <>
      {Object.keys(siteConfig.author.contacts).map((sns) => {
        let link: string = siteConfig.author.contacts[sns as ContactsKey];

        if (sns === 'email') link = `mailto:${link}`;
        else if (sns === 'github') link = `https://github.com/${link}`;

        return !link ? null : (
          <LinkExternal key={sns} href={link}>
            <ContactsIcon
              contact={sns as ContactsKey}
              style={{ color: cvar({ key: 'gray', idx: '500' }) }}
            />
          </LinkExternal>
        );
      })}
    </>
  );
};

export default Contacts;

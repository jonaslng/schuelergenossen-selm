import { createStyles, Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandGithub } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export default function Footer() {
  const { classes } = useStyles();
  let data = [
    {
      "title": "Rechtliches",
      "links": [
        {
          "label": "Impressum",
          "link": "#"
        },
        {
          "label": "Liefer- und Zahlungsbedingungen",
          "link": "#"
        },
        {
          "label": "Datenschutz",
          "link": "#"
        },
        {
          "label": "Cookie- Richtlinie",
          "link": "#"
        }
      ]
    },
  ]

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer style={{background: "black"}} className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image alt="Schülergenossen-Logo" src="/logo.png" width="60" height="60"  />
          <Text size="xs" color="dimmed" className={classes.description}>
            Die Inhalte dieser Seite sind urheberrechtlich geschützt.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm" className="font-semibold">
          © 2022 Schülergenossen Selm eSG
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon component='a' href='https://www.instagram.com/schuelergenossenschaft_selm/' size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon component='a' href='https://github.com/jonaslng/schuelergenossen-selm' size="lg">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
import DexscreenerIcon from '@/assets/DexscreenerIcon';
import DiscordIcon from '@/assets/DiscordIcon';
import GitHubIcon from '@/assets/GitHubIcon';
import TwitterIcon from '@/assets/TwitterIcon';

export const SOCIAL_LINKS = [
  {
    href: 'https://x.com/friday_dot_run',
    icon: <TwitterIcon />,
    label: 'Twitter',
  },
  {
    href: 'https://discord.gg/CSpxET3D6u',
    icon: <DiscordIcon />,
    label: 'Discord',
  },
  {
    href: 'https://github.com/Friday-Al',
    icon: <GitHubIcon />,
    label: 'GitHub',
  },
  {
    href: 'https://dexscreener.com/solana/fdqkxnuypejdhuxwvx1sscfxeuzhsmtmsralhesdffnh',
    icon: <DexscreenerIcon />,
    label: 'Dexscreener',
  },
];

export const FOOTER_ITEMS = [
  {
    title: '$FRIDAY',
    links: [
      { label: 'HOW IT WORKS', href: '#how-it-works', isActive: true },
      {
        label: 'BUY $FRIDAY',
        href: 'https://jup.ag/swap/SOL-B29VFNAL4vh7rNcZMCmsHkZaYzUaVj3UinU3dFh6pump',
        isActive: true,
      },
      {
        label: 'TOKENOMICS',
        href: 'https://x.com/friday_dot_run/status/1884030755116081358?s=46&t=kIwGE7SaHCmX2rzg2Qv02g',
        isActive: true,
      },
    ],
  },
  {
    title: 'FRIDAY AI',
    links: [
      { label: 'LEARN', href: '/learn', badge: 'SOON', isActive: false },
      {
        label: 'GITHUB',
        href: SOCIAL_LINKS[2].href,
        isActive: true,
      },
      { label: 'GITBOOK', href: '/gitbook', badge: 'SOON', isActive: false },
    ],
  },
  {
    title: 'JOIN US',
    links: [
      {
        label: 'TWITTER',
        href: SOCIAL_LINKS[0].href,
        isActive: true,
      },
      {
        label: 'DISCORD',
        href: SOCIAL_LINKS[1].href,
        isActive: true,
      },
    ],
  },
];

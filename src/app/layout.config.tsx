import { Icons } from '@/components/icons/icons';
import { Download } from 'lucide-react';
import type { LinkItemType } from 'fumadocs-ui/layouts/links';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const title = 'Prysm';
export const description =
  'Intelligent Optical Clinic Management, Simplified. A comprehensive multi-clinic management system designed specifically for optical clinics.';
export const owner = 'Prysm';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title,
  },
  // githubUrl: 'https://github.com/techwithanirudh/shadcn-saas-landing',
};

export const linkItems: LinkItemType[] = [
  {
    icon: <Icons.info />,
    text: 'About',
    url: '/about',
    active: 'url',
  },
  {
    icon: <Icons.pricing />,
    text: 'Pricing',
    url: '/pricing',
    active: 'url',
  },
  {
    icon: <Download className='size-4' />,
    text: 'Download',
    url: '/download',
    active: 'url',
  },
  {
    icon: <Icons.phone />,
    text: 'Contact',
    url: '/contact',
    active: 'url',
  },
];

export const postsPerPage = 5;

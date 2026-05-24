import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import notaxPaySidebar from './docs/notax-pay/sidebar';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introdução',
    },
    {
      type: 'category',
      label: 'Notax Pay',
      collapsible: false,
      items: notaxPaySidebar,
    },
  ],
};

export default sidebars;

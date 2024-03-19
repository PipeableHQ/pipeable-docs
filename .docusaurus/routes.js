import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ed5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c06'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'cd0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a87'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c5c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8aa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '478'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '301'),
    exact: true
  },
  {
    path: '/blog/introducing-pipeable',
    component: ComponentCreator('/blog/introducing-pipeable', '9f9'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '72b'),
    exact: true
  },
  {
    path: '/blog/tags/announcements',
    component: ComponentCreator('/blog/tags/announcements', '307'),
    exact: true
  },
  {
    path: '/blog/tags/launch',
    component: ComponentCreator('/blog/tags/launch', '741'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '8f5'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '936'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'aae'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a32'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '911'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

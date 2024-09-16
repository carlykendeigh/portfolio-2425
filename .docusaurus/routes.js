import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/portfolio-2425/blog',
    component: ComponentCreator('/portfolio-2425/blog', '4fe'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/archive',
    component: ComponentCreator('/portfolio-2425/blog/archive', 'd5e'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/authors',
    component: ComponentCreator('/portfolio-2425/blog/authors', '867'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/portfolio-2425/blog/authors/all-sebastien-lorber-articles', 'e7e'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/authors/yangshun',
    component: ComponentCreator('/portfolio-2425/blog/authors/yangshun', '0bf'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/first-blog-post',
    component: ComponentCreator('/portfolio-2425/blog/first-blog-post', 'a6a'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/long-blog-post',
    component: ComponentCreator('/portfolio-2425/blog/long-blog-post', 'fc9'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/mdx-blog-post',
    component: ComponentCreator('/portfolio-2425/blog/mdx-blog-post', 'db1'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/tags',
    component: ComponentCreator('/portfolio-2425/blog/tags', 'f88'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/tags/docusaurus',
    component: ComponentCreator('/portfolio-2425/blog/tags/docusaurus', '919'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/tags/facebook',
    component: ComponentCreator('/portfolio-2425/blog/tags/facebook', '5ba'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/tags/hello',
    component: ComponentCreator('/portfolio-2425/blog/tags/hello', 'd6f'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/tags/hola',
    component: ComponentCreator('/portfolio-2425/blog/tags/hola', '588'),
    exact: true
  },
  {
    path: '/portfolio-2425/blog/welcome',
    component: ComponentCreator('/portfolio-2425/blog/welcome', 'c32'),
    exact: true
  },
  {
    path: '/portfolio-2425/markdown-page',
    component: ComponentCreator('/portfolio-2425/markdown-page', 'abb'),
    exact: true
  },
  {
    path: '/portfolio-2425/docs',
    component: ComponentCreator('/portfolio-2425/docs', 'b4e'),
    routes: [
      {
        path: '/portfolio-2425/docs',
        component: ComponentCreator('/portfolio-2425/docs', 'de7'),
        routes: [
          {
            path: '/portfolio-2425/docs',
            component: ComponentCreator('/portfolio-2425/docs', '9bb'),
            routes: [
              {
                path: '/portfolio-2425/docs/category/tutorial---basics',
                component: ComponentCreator('/portfolio-2425/docs/category/tutorial---basics', '92e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/category/tutorial---extras',
                component: ComponentCreator('/portfolio-2425/docs/category/tutorial---extras', '213'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/intro',
                component: ComponentCreator('/portfolio-2425/docs/intro', '487'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/portfolio-2425/docs/tutorial-basics/congratulations', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/portfolio-2425/docs/tutorial-basics/create-a-blog-post', '27c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/portfolio-2425/docs/tutorial-basics/create-a-document', '36c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/portfolio-2425/docs/tutorial-basics/create-a-page', 'c62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/portfolio-2425/docs/tutorial-basics/deploy-your-site', '657'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/portfolio-2425/docs/tutorial-basics/markdown-features', '9c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/portfolio-2425/docs/tutorial-extras/manage-docs-versions', 'a79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/portfolio-2425/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/portfolio-2425/docs/tutorial-extras/translate-your-site', 'ea4'),
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
    path: '/portfolio-2425/',
    component: ComponentCreator('/portfolio-2425/', '89c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

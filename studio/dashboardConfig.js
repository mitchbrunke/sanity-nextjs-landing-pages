export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60bc2789461885dbc8b2078d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xrbmaz3c',
                  apiId: '9b6ffd46-35d8-4cd5-9221-117cc85aa275'
                },
                {
                  buildHookId: '60bc27895c3a87ffcc70e063',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xsx2w8j4',
                  apiId: 'e543f347-b58e-4d16-81b6-28a4aba0fb5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mitchbrunke/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xsx2w8j4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

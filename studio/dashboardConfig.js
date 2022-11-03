export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6363726e7fc96d3e51b36a3d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-3th3nqrj',
                  apiId: '7b55f1c0-5f87-457c-bab4-95693d0a52f4'
                },
                {
                  buildHookId: '6363726f57449c3e932e55fe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-hsucfei6',
                  apiId: '0ed96402-2fcb-471e-94fb-e12ca149edf7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prooftv/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-hsucfei6.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

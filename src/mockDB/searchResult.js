const searchResult = [
  {
    response: {
      status: 'ok',
      userTier: 'developer',
      total: 65687,
      startIndex: 1,
      pageSize: 10,
      currentPage: 1,
      pages: 6569,
      orderBy: 'relevance',
      results: [
        {
          id:
            'us-news/2020/jul/17/portland-protests-federal-officers-george-floyd',
          type: 'article',
          sectionId: 'us-news',
          sectionName: 'US news',
          webPublicationDate: '2020-07-17T20:24:15Z',
          webTitle:
            'Federal officers are using unmarked cars to arrest Portland protesters',
          webUrl:
            'https://www.theguardian.com/us-news/2020/jul/17/portland-protests-federal-officers-george-floyd',
          apiUrl:
            'https://content.guardianapis.com/us-news/2020/jul/17/portland-protests-federal-officers-george-floyd',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/5b484d0aa615f57c4b0f2819502453625ff97a5c/0_25_4000_2399/500.jpg',
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id:
            'business/2020/jul/21/used-cars-uk-commuters-transport-scooters-mopeds-bikes',
          type: 'article',
          sectionId: 'business',
          sectionName: 'Business',
          webPublicationDate: '2020-07-21T05:00:34Z',
          webTitle:
            'UK public transport fears drive more online demand for used cars',
          webUrl:
            'https://www.theguardian.com/business/2020/jul/21/used-cars-uk-commuters-transport-scooters-mopeds-bikes',
          apiUrl:
            'https://content.guardianapis.com/business/2020/jul/21/used-cars-uk-commuters-transport-scooters-mopeds-bikes',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/cb735b7d6c035fca51398506050556d4f7463eff/0_327_4952_2973/500.jpg',
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id:
            'money/2020/jul/11/electric-cars-five-best-buys-from-new-models-to-used-bargains',
          type: 'article',
          sectionId: 'money',
          sectionName: 'Money',
          webPublicationDate: '2020-07-11T11:00:10Z',
          webTitle:
            'Electric cars: five best buys, from new models to used bargains',
          webUrl:
            'https://www.theguardian.com/money/2020/jul/11/electric-cars-five-best-buys-from-new-models-to-used-bargains',
          apiUrl:
            'https://content.guardianapis.com/money/2020/jul/11/electric-cars-five-best-buys-from-new-models-to-used-bargains',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/1c4c318347bad3a08601b3cc91905979d4245fab/0_0_2560_1536/500.jpg',
          },
          isHosted: false,
          pillarId: 'pillar/lifestyle',
          pillarName: 'Lifestyle',
        },
        {
          id:
            'business/2020/may/29/british-car-industry-produced-just-197-cars-last-month',
          type: 'article',
          sectionId: 'business',
          sectionName: 'Business',
          webPublicationDate: '2020-05-28T23:01:43Z',
          webTitle: 'British car industry produced just 197 cars last month',
          webUrl:
            'https://www.theguardian.com/business/2020/may/29/british-car-industry-produced-just-197-cars-last-month',
          apiUrl:
            'https://content.guardianapis.com/business/2020/may/29/british-car-industry-produced-just-197-cars-last-month',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/01917966694c4bf09ad12727bad0d59a9490497a/0_0_6720_4032/500.jpg',
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id:
            'world/2020/jul/07/zimbabwe-spends-millions-on-officials-luxury-cars-as-country-goes-hungry',
          type: 'article',
          sectionId: 'world',
          sectionName: 'World news',
          webPublicationDate: '2020-07-07T09:45:07Z',
          webTitle:
            "Zimbabwe spends millions on officials' luxury cars as country goes hungry",
          webUrl:
            'https://www.theguardian.com/world/2020/jul/07/zimbabwe-spends-millions-on-officials-luxury-cars-as-country-goes-hungry',
          apiUrl:
            'https://content.guardianapis.com/world/2020/jul/07/zimbabwe-spends-millions-on-officials-luxury-cars-as-country-goes-hungry',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/772fc3cda350aa47015cfd554b22fbad013f58d0/0_156_3500_2101/500.jpg',
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id:
            'sport/2020/jul/02/f1-2020-team-by-team-guide-to-the-cars-and-drivers',
          type: 'article',
          sectionId: 'sport',
          sectionName: 'Sport',
          webPublicationDate: '2020-07-02T07:04:45Z',
          webTitle:
            'F1 2020: team-by-team guide to the cars and drivers | Giles Richards',
          webUrl:
            'https://www.theguardian.com/sport/2020/jul/02/f1-2020-team-by-team-guide-to-the-cars-and-drivers',
          apiUrl:
            'https://content.guardianapis.com/sport/2020/jul/02/f1-2020-team-by-team-guide-to-the-cars-and-drivers',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/e029471efdd29979782b3b6b38e2004bcca58a11/2_0_3020_1814/500.jpg',
          },
          isHosted: false,
          pillarId: 'pillar/sport',
          pillarName: 'Sport',
        },
        {
          id:
            'business/2020/jun/02/electric-carseurope-covid-19-emissions-reductions',
          type: 'article',
          sectionId: 'business',
          sectionName: 'Business',
          webPublicationDate: '2020-06-02T12:07:15Z',
          webTitle:
            'Electric cars gain market share in Europe despite Covid-19 crisis',
          webUrl:
            'https://www.theguardian.com/business/2020/jun/02/electric-carseurope-covid-19-emissions-reductions',
          apiUrl:
            'https://content.guardianapis.com/business/2020/jun/02/electric-carseurope-covid-19-emissions-reductions',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/5cc44315cf4d467d99f99c0c34fe7399b2741a46/16_626_3435_2062/500.jpg',
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id:
            'thehybridhero/2020/mar/11/your-guide-to-different-types-of-hybrid-cars',
          type: 'article',
          sectionId: 'thehybridhero',
          sectionName: 'The hybrid hero',
          webPublicationDate: '2020-03-11T14:40:37Z',
          webTitle: 'Your guide to different types of hybrid cars',
          webUrl:
            'https://www.theguardian.com/thehybridhero/2020/mar/11/your-guide-to-different-types-of-hybrid-cars',
          apiUrl:
            'https://content.guardianapis.com/thehybridhero/2020/mar/11/your-guide-to-different-types-of-hybrid-cars',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/6c512add84c589ebc9bde4ccd9c070ab12b37627/0_150_5100_3060/500.jpg',
          },
          isHosted: false,
        },
        {
          id:
            'world/2020/apr/06/drive-by-strauss-hungarian-orchestra-airs-concerts-from-cars',
          type: 'article',
          sectionId: 'world',
          sectionName: 'World news',
          webPublicationDate: '2020-04-06T09:46:55Z',
          webTitle:
            'Drive-by Strauss: Hungarian orchestra airs concerts from cars',
          webUrl:
            'https://www.theguardian.com/world/2020/apr/06/drive-by-strauss-hungarian-orchestra-airs-concerts-from-cars',
          apiUrl:
            'https://content.guardianapis.com/world/2020/apr/06/drive-by-strauss-hungarian-orchestra-airs-concerts-from-cars',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/16e27567ac8bbf3ea17fb8b5de009f56550655b3/85_897_3475_2085/500..jpg',
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
        {
          id:
            'australia-news/2020/jul/30/electric-cars-green-recovery-price-second-hand-bulk-buy',
          type: 'article',
          sectionId: 'australia-news',
          sectionName: 'Australia news',
          webPublicationDate: '2020-07-29T17:30:06Z',
          webTitle:
            'Electric cars have few downsides except price. One company is looking to change that',
          webUrl:
            'https://www.theguardian.com/australia-news/2020/jul/30/electric-cars-green-recovery-price-second-hand-bulk-buy',
          apiUrl:
            'https://content.guardianapis.com/australia-news/2020/jul/30/electric-cars-green-recovery-price-second-hand-bulk-buy',
          fields: {
            thumbnail:
              'https://media.guim.co.uk/c155abc7e6a8f29c8a006387f6e068227a588534/0_0_2500_1500/500.jpg',
          },
          isHosted: false,
          pillarId: 'pillar/news',
          pillarName: 'News',
        },
      ],
    },
  },
];

export default searchResult;
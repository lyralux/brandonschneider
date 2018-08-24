/**
 * Created by brand on 1/12/2017.
 */
const experienceData = [
  {
    'id': 'job1',
    'title': 'Business Development Representative',
    'company': 'eFinancial',
    'location': {
      'region': null,
      'city': 'Bellevue, WA'
    },
    'timeframe': {
      'start': '2018-07-01',
      'end': ''
    },
    'desc': 'First point of contact with prospective customers to qualify and transfer them to a licensed Account Executive.',
    'highlights': [
      'Engaged customers who previously requested to be contacted',
      'Consistently exceeded performance goals'
    ]
  },
  {
    'id': 'job2',
    'title': 'FC Associate',
    'company': 'Amazon',
    'location': {
      'region': null,
      'city': 'Seattle, WA'
    },
    'timeframe': {
      'start': '2017-08-01',
      'end': '2018-03-01'
    },
    'desc': 'Fulfillment associate for outbound operations.',
    'highlights': [
      'Collaborated with inbound and outbound processes to ensure smooth work flow and efficient organization operations.',
      'Communicated operational issues and changes to supervisor on regular basis.',
      'Consistently exceeded performance goals',
      'Picked orders from inventory locations.'
    ]
  },
  {
    'id': 'job3',
    'title': 'Web Development Consultant',
    'company': 'Self-employed/Freelance',
    'location': {
      'region': 'Greater Seattle Area',
      'city': 'Seattle'
    },
    'timeframe': {
      'start': '2013-01-01',
      'end': '2017-08-01'
    },
    'desc': 'Strong track record of creating functional and high-quality web applications,' +
      ' websites and marketing material. Creating and updating custom WordPress Themes and Plugins.' +
      ' Optimizing sites for usability, search engine optimization and accessibility.',
    'sub': 'Clients (partial list): Celebrity Florist Eric Buterbaugh, MATTALIANO, GrayMalin.com',
    'highlights': [
      'Designed, implemented and monitored web pages and sites for continuous improvement in a fast-paced environment.',
      'Utilized programming capabilities in PHP, SQL and JavaScript and other libraries as needed.',
      'Managed creative projects from concept to completion.',
      'Directed and coordinated marketing activities and policies to promote products and services.'
    ]
  },
  {
    'id': 'job4',
    'title': 'OSP Engineer',
    'company': 'Self-employed',
    'location': {
      'region': null,
      'city': "Coeur d'Alene, ID"
    },
    'timeframe': {
      'start': '2016-06-01',
      'end': '2016-10-01'
    },
    'desc': 'Responsible for the complete design of telecommunication distribution projects such as downtown underground projects, new facility projects, highway relocation projects, and other projects requiring the highest reliability',
    'highlights': [
      'Prepared site drawings and construction drawings for various telecommunication facilities in a cost effective manner'
    ]
  },
  {
    'id': 'job5',
    'title': 'Web Application Developer',
    'company': 'Sound View Window & Door',
    'location': {
      'region': '',
      'city': 'Seattle'
    },
    'timeframe': {
      'start': '2013-05-01',
      'end': '2016-06-01'
    },
    'desc': 'Responsible for working closely with the owner and sales representatives to create web-based business applications, project management tools and CRM systems.',
    'highlights': [
      {
        main: 'Developed a cloud-based CRM application for the Window & Door industry using an open source PHP business application platform (BAP), Symfony2, Backbone.JS and jQuery.',
        sub: ['Custom Modules Include: Inventory Management, Lead/Sales Pipelines, Purchase Order and Sales Order tracking, Commission Payments, Dashboards']
      },
      {
        main: 'Developed and maintained the functionality of Project Management, and Project Estimating applications using PHP (Laravel) and JavaScript (Backbone.JS/Chaplin, React, jQuery)',
        sub: ['Developed a new workflow that decreased time to proposal by 300%', 'Reduced the amount of misorders by 60-70% ($400,000+/year)']
      },
      'As a full stack developer, building both the front-end and back-end, ensuring all aspects of the project have balanced attention and are aligned with the scope, and timelines while maintaining a high level of quality.',
      'Oversaw troubleshooting of technical issues to solve problems within a reasonable time frame.',
      'Developed and implemented complex Internet and Intranet applications on multiple platforms.'
    ]
  }
]

module.exports = experienceData

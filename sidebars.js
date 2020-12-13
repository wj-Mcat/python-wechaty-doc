module.exports = {
  docs: {
    Introduction: [
      'introduction/README',
      'introduction/puppet',
      'introduction/installation',
      {
        type: 'category',
        label: '示例',
        items: [
          'chatbot-1-to-2/applications/1.words-per-day',
          'chatbot-1-to-2/applications/2.contact-and-room-management',
          'chatbot-1-to-2/applications/3.group-chatbot',
          'chatbot-1-to-2/applications/4.group-qa-chatbot',
        ],
      },
    ],
    'Getting Started': [
      'getting-started',
    ],
    Recipes: [
      'recipes/README',
      'recipes/configure-wechaty',
      'recipes/usage-with-typescript',
      'recipes/usage-with-docker',
      'recipes/usage-with-heroku',
      'recipes/using-plugin-with-wechaty',
      'recipes/using-vorpal-with-wechaty',
      'recipes/using-redux-with-wechaty',
    ],
    'API Reference': [
      'api/README',
      'api/wechaty',
      'api/message',
      'api/contact',
      'api/room',
      'api/room-invitation',
      'api/friendship',
    ],
    FAQ: [
      'faq/README',
      'faq/general',
      'faq/puppet',
      'faq/miscellaneous',
    ],
  },
}

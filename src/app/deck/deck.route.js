(function() {
  'use strict';

  angular
    .module('deck')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('deck', {
        parent: 'navbar',
        url: '/deck/:deckId',
        templateUrl: 'app/deck/deck.page.html'
      })
      .state('deck.addCard', {
        parent: 'deck',
        url: '/:cardId'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

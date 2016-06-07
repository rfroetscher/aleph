!(angular => {
  'use strict';

  function TableResource(ResourceFactory) {
    return ResourceFactory.make('/tables/:id.json', {id: '@id'});
  }

  TableResource.$inject = ['ResourceFactory'];
  angular.module('alephServices.tableResource', []).service('TableResource', TableResource);
}(angular));

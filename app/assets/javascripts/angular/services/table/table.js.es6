!(angular => {
  'use strict';

  function TableModelImports(TableResource, StandardModel) {

    return class Table extends StandardModel {

      constructor() {
        super(
          'table',
          TableResource,
          {
            name: '',
            fields: {},
            description: ''
          },
          [
            'name',
            'fields',
            'description'
          ]
         );
      }


    };
  }

  TableModelImports.$inject = ['TableResource', 'StandardModel'];
  angular.module('alephServices.table', []).service('Table', TableModelImports);
}(angular));

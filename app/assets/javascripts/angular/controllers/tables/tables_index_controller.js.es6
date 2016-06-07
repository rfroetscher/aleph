!(angular => {
  'use strict';

  class TablesIndexController {
    constructor(TableResource, PaginationComponents, Table, defaultDateFormat) {
      this.pagination = new PaginationComponents('Paginated Tables', TableResource.index, Table);
      this.defaultDateFormat = defaultDateFormat;
    }
  }

  TablesIndexController.$inject = ['TableResource', 'PaginationComponents', 'Table', 'defaultDateFormat'];

  angular
    .module('alephControllers.tablesIndexController', ['alephServices'])
    .controller('TablesIndexController', TablesIndexController);
}(angular));

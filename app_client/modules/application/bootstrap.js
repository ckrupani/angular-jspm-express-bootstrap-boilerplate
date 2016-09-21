/*global angular*/

import 'angular-ui-router';
import application from './application.module';

angular.element(document).ready(() => {
    angular.bootstrap(document, [ application.name ]);
});

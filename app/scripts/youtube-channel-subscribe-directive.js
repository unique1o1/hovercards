'use strict';

define(['angular-app'], function(app) {
    app.directive('youtubeChannelSubscribe', function() {
        return {
            restrict: 'A',
            scope: {
                id: '=youtubeChannelId'
            },
            link: function($scope, $element) {
                require(['async!https://apis.google.com/js/platform.js!onload'], function() {
                    /* global gapi */
                    gapi.ytsubscribe.render($element[0], {'channelid': $scope.id, layout: 'default', count: 'hidden' });
                });
            }
        };
    });
});

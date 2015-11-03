function YammerGetUserCtrl($scope, $http) {
//you may pass the token in scope if you like; whatever you do, don't just let it be exposed or comprised.
    $http.get('https://api.yammer.com/api/v1/users.json', {headers: {'Authorization': 'Bearer PASTE_TOKEN_HERE'}}).
        success(function (data) {
            $scope.users = data;
            console.log($scope.users)
        });

}

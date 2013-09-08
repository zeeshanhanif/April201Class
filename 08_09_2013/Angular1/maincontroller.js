/**
 * Created with JetBrains WebStorm.
 * User: ziauk_000
 * Date: 9/2/13
 * Time: 7:59 PM
 * To change this template use File | Settings | File Templates.
 */
function HelloController($location,$scope) {
    $scope.greeting = { text: 'Hello' };
}
function CartController($scope) {
    $scope.items = [
        {title: 'Paint pots', quantity: 8, price: 3.95},
        {title: 'Polka dots', quantity: 17, price: 12.95},
        {title: 'Pebbles', quantity: 5, price: 6.95}
    ];
    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }
}
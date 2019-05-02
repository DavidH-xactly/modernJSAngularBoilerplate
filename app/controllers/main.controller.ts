interface IMainController {}

export default class MainController implements IMainController {
  constructor($scope) {
    $scope.something = "Hello Modern AngularJs Boilerplate!";
  }
}

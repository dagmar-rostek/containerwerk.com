<!DOCTYPE html>

<html lang="en" ng-app="crudApp">
<head>
    <title>${title}</title>
    <link href="css/bootstrap.css" rel="stylesheet"/>
    <link href="css/app.css" rel="stylesheet"/>
    <style>
        .navbar {
            border-radius: 0;
        }
    </style>
    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular-animate.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular-sanitize.js"></script>
    <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-2.5.0.js"></script>

    <#--<script src="https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.7/angular-material.css"></script>-->
</head>
<body>

<!-- NAVIGATION -->
<nav class="navbar navbar-inverse" role="navigation">
    <div class="navbar-header">
        <a class="navbar-brand" ui-sref="login">CONTAINERWERK.COM CONFIGURATOR</a>
    </div>
    <ul class="nav navbar-nav">
        <li><a ui-sref="angebot">ANGEBOT</a></li>
        <li><a ui-sref="configurator">CONFIGURATOR</a></li>
        <li><a href="#">
            <span class="glyphicon glyphicon-eye-open"></span>
        </a></li>
        <!--     <li> <a href="#">
                 <span class="glyphicon glyphicon-eye-close"></span>
             </a></li>-->
    </ul>
</nav>

<!-- MAIN CONTENT -->
<!-- THIS IS WHERE WE WILL INJECT OUR CONTENT ============================== -->
<div class="container">
    <div ui-view></div>
</div>

<#--<script src="js/lib/angular.min.js"></script>-->
<#--<script src="js/lib/ui-bootstrap-tpls-2.5.0.js"></script>-->
<script src="js/lib/statehelper.min.js"></script>
<script src="js/lib/angular-ui-router.min.js"></script>
<script src="js/lib/localforage.min.js"></script>
<script src="js/lib/ngStorage.min.js"></script>
<script src="js/app/app.js"></script>
<script src="js/app/ModalDemoCtrl.js"></script>
<script src="js/app/LoginService.js"></script>
<script src="js/app/LoginController.js"></script>
<script src="js/app/ModulService.js"></script>
<script src="js/app/ModulController.js"></script>
<script src="js/app/AngebotService.js"></script>
<script src="js/app/AngebotController.js"></script>
<script src="js/app/ContainerService.js"></script>
<script src="js/app/ContainerController.js"></script>
<script src="js/app/UserService.js"></script>
<script src="js/app/UserController.js"></script>



<pre>
      <!-- Here's some values to keep an eye on in the sample in order to understand $state and $stateParams -->
      $state = {{$state.current.name}}
      $stateParams = {{$stateParams}}
      $state full url = {{ $state.$current.url.source }}
    <!-- $state.$current is not a public api, we are using it to
         display the full url for learning purposes-->
    </pre>
</body>
</html>
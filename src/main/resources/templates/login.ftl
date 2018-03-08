<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">LOGIN </span></div>
        <div class="panel-body">
            <div class="formcontainer">
                <form ng-submit="ctrl.submit()" modul="myForm" class="form-horizontal">
                    <input type="hidden" ng-model="ctrl.login.id" />
                    <div class="row">
                        <div class="form-group col-md-10">
                            <label class="col-md-2 control-lable" for="login">Login Name</label>
                            <div class="col-md-7">
                                <input type="text" ng-model="ctrl.login.name" id="lname" class="loginname form-control input-sm" placeholder="Enter your login name." required ng-minlength="3"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-10">
                            <label class="col-md-2 control-lable" for="passwort">Passwort</label>
                            <div class="col-md-7">
                                <input type="password" ng-model="ctrl.login.passwort" id="passwort" class="form-control input-sm" placeholder="Enter your Passwort." required ng-minlength="8"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-actions floatRight">
                            <a ui-sref="angebot" class="btn btn-success custom-width"> LOGIN </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

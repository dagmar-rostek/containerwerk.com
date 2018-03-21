<div class="generic-container" ng-controller="AngebotController as $ctrl">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Angebot </span></div>
        <div class="panel-body">
            <div class="formcontainer">
                <div class="alert alert-success" role="alert" ng-if="$ctrl.successMessage">{{$ctrl.successMessage}}</div>
                <div class="alert alert-danger" role="alert" ng-if="$ctrl.errorMessage">{{$ctrl.errorMessage}}</div>
                <form ng-submit="$ctrl.submit()" name="myForm" class="form-horizontal">
                    <input type="hidden" ng-model="$ctrl.angebot.id"/>
                    <input type="hidden" ng-model="$ctrl.angebot.containerliste"/>
                    <input type="hidden" ng-model="$ctrl.angebot.interneAnsicht"/>
                    <input type="hidden" ng-model="$ctrl.angebot.projektinformationen"/>
                    <input type="hidden" ng-model="$ctrl.angebot.kunde"/>
                    <input type="hidden" ng-model="$ctrl.angebot.gesamtpreis"/>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="name">Angebotsname</label>
                            <div class="col-md-7">
                                <input type="text" ng-model="$ctrl.angebot.name" id="name"
                                       class="name form-control input-sm"
                                       placeholder="Geben Sie einen Angebotsnamen an." required ng-minlength="3"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="beschreibung">Beschreibung</label>
                            <div class="col-md-7">
                                <input type="text" ng-model="$ctrl.angebot.beschreibung" id="beschreibung"
                                       class="form-control input-sm"
                                       placeholder="Geben Sie eine Beschreibung für das Angebot an."/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="kommentar">Kommentar</label>
                            <div class="col-md-7">
                                <input type="text" ng-model="$ctrl.angebot.kommentar" id="kommentar"
                                       class="form-control input-sm" placeholder="Geben Sie einen Kommentar ein"/>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="rabatt">Rabatt</label>
                            <div class="col-md-7">
                                <input type="text" ng-model="$ctrl.angebot.rabatt" id="rabatt"
                                       class="form-control input-sm" placeholder="Geben Sie den Rabatt ein"/>
                            </div>
                        </div>
                    </div>


                    <div class="modal-demo">

                        <script type="text/ng-template" id="myModalKundeContent.html" >
                            <div class="modal-header">
                                <h3 class="modal-title" id="modal-title">Wählen Sie einen Kunden oder legen Sie
                                    einen neuen Kunden an</h3>
                            </div>
                            <div class="modal-body" id="modal-body">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>KUNDENNAME</th>
                                            <th>ANSPRECHPARTNER</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr ng-repeat="item in $ctrl.items" ng-click="$event.preventDefault(); $ctrl.selected.item = item">
                                            <td>{{item.id}}</td>
                                            <td>{{item.name}}</td>
                                            <td>{{item.ansprechpartner}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="modal-footer">
                                    <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK
                                    </button>
                                    <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">
                                        Cancel
                                    </button>
                                </div>

                        </script>
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="col-md-2 control-lable"
                                       for="ansprechpartner">Kunde</label>
                                <div class="col-md-7">
                                    <select class="form-control" ng-model="selectedIndex"
                                            ng-change="$ctrl.openModalKunde('lg'); $ctrl.selected.item = item"
                                            ng-options="item as item.name for item in $ctrl.getAllKundes()">
                                        <option value="" ng-hide="selectedIndex">Wählen Sie einen Kunden oder
                                            legen Sie
                                            einen neuen Kunden an
                                        </option>
                                    </select>
                                    <div class="modal-parent">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div ui-view></div>
                    <div ui-view="angebot"></div>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable"
                                   for="ansprechpartner">Ansprechpartner</label>
                            <div class="col-md-7">
                                <select class="form-control" ng-model="selectedIndex"
                                        ng-change="$ctrl.openModalKunde('lg'); $ctrl.selected.item = item"
                                        ng-options="item as item.ansprechpartner for item in $ctrl.getAllKundes()">
                                    <option value="" ng-hide="selectedIndex">Wählen Sie einen
                                        Ansprechpartner oder legen
                                        Sie einen neuen Ansprechpartner an
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
            </div>

            <div class="row">

                <h3><a class="col-sm-4" ui-sref="projektinformationen"> Projektinformationen </a>
                    <a class="col-sm-4" ng-show="!myForm.$invalid" ui-sref="containers">
                        Containerliste </a>
                    <a class="col-sm-4" ui-sref="projektinformationen"> Anbaumodule </a></h3>
            </div>
            <div class="row">
            </div>

            <div class="row">
                <div class="form-actions floatRight">
                    <input type="submit" value="{{!$ctrl.angebot.id ? 'Add' : 'Update'}}"
                           class="btn btn-primary" ng-click="$ctrl.submit()"
                           ng-disabled="myForm.$invalid || myForm.$pristine">
                    <button type="button" ng-click="$ctrl.reset()" class="btn btn-warning"
                            ng-disabled="myForm.$pristine">Reset Form
                    </button>
                    <button type="button" ng-click="$ctrl.submit()" class="btn btn-success"
                            ui-sref="container"
                            ng-disabled="myForm.$invalid">Konfigurator
                    </button>
                </div>
            </div>
            </form>
        </div>
    </div>

    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Liste von existierenden Angeboten </span></div>
        <div class="panel-body">

            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>ANGEBOTSNAME</th>
                        <th>BESCHREIBUNG</th>
                        <th>KOMMENTAR</th>
                        <th>RABATT</th>
                        <th>ANSPRECHPARTNER</th>
                        <th width="100"></th>
                        <th width="100"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="u in $ctrl.getAllAngebote()">
                        <td>{{u.id}}</td>
                        <td>{{u.name}}</td>
                        <td>{{u.beschreibung}}</td>
                        <td>{{u.kommentar}}</td>
                        <td>{{u.rabatt}}</td>
                        <td>{{u.ansprechpartner}}</td>
                        <td>
                            <button type="button" ng-click="$ctrl.editAngebot(u.id)"
                                    class="btn btn-success custom-width">Edit
                            </button>
                        </td>
                        <td>
                            <button type="button" ng-click="$ctrl.removeAngebot(u.id)"
                                    class="btn btn-danger custom-width">Remove
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="form-actions floatRight">
                    <button type="button" ng-click="" class="btn btn-primary btn-sm  custom-width">PDF</button>
                    <button type="button" ng-click="" class="btn btn-primary btn-sm custom-width">eMail</button>
                    <button type="button" ng-click="" class="btn btn-primary btn-sm custom-width">you3000</button>
                </div>
            </div>
        </div>
    </div>
</div>
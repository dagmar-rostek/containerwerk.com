<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Angebot </span></div>
        <div class="panel-body">
            <div class="formcontainer">
                <div class="alert alert-success" role="alert" ng-if="ctrl.successMessage">{{ctrl.successMessage}}</div>
                <div class="alert alert-danger" role="alert" ng-if="ctrl.errorMessage">{{ctrl.errorMessage}}</div>
                <form ng-submit="ctrl.submit()" modul="myForm" class="form-horizontal">
                    <input type="hidden" ng-model="ctrl.angebot.id"/>
                    <input type="hidden" ng-model="ctrl.angebot.containerliste"/>
                    <input type="hidden" ng-model="ctrl.angebot.interneAnsicht"/>
                    <input type="hidden" ng-model="ctrl.angebot.projektinformationen"/>
                    <input type="hidden" ng-model="ctrl.angebot.kunde"/>
                    <input type="hidden" ng-model="ctrl.angebot.gesamtpreis"/>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="name">Angebotsname</label>
                            <div class="col-md-7">
                                <input type="text" ng-model="ctrl.angebot.name" id="name"
                                       class="name form-control input-sm"
                                       placeholder="Geben Sie einen Angebotsnamen an." required ng-minlength="3"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="beschreibung">Beschreibung</label>
                            <div class="col-md-7">
                                <input type="text" ng-model="ctrl.angebot.beschreibung" id="beschreibung"
                                       class="form-control input-sm"
                                       placeholder="Geben Sie eine Beschreibung für das Angebot an."/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="kommentar">Kommentar</label>
                            <div class="col-md-7">
                                <input type="text" ng-model="ctrl.angebot.kommentar" id="kommentar"
                                       class="form-control input-sm" placeholder="Geben Sie einen Kommentar ein"/>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="rabatt">Rabatt</label>
                            <div class="col-md-7">
                                <input type="text" ng-model="ctrl.angebot.rabatt" id="rabatt"
                                       class="form-control input-sm" placeholder="Geben Sie den Rabatt ein"/>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="ansprechpartner">Ansprechpartner</label>
                            <div class="col-md-7">
                                <select class="form-control" ng-model="selectedIndex"
                                        ng-change="$ctrl.openComponentModal('lg'); $ctrl.selected.item = item"
                                        ng-options="item as item.modul for item in ctrl.getAllContainers()">
                                    <option value="" ng-hide="selectedIndex">Wählen Sie einen Ansprechpartner oder legen
                                        Sie einen neuen Ansprechpartner an
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-md-2 control-lable" for="ansprechpartner">Kunde</label>
                            <div class="col-md-7">
                                <select class="form-control" ng-model="selectedIndex"
                                        ng-change="$ctrl.openComponentModal('lg'); $ctrl.selected.item = item"
                                        ng-options="item as item.modul for item in ctrl.getAllContainers()">
                                    <option value="" ng-hide="selectedIndex">Wählen Sie einen Kunden oder legen Sie
                                        einen neuen Kunden an
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">

                                <h3><a class="col-sm-4" ui-sref="projektinformationen"> Projektinformationen </a>
                                    <a class="col-sm-4" ui-sref="containers.list"> Containerliste </a>
                                    <a class="col-sm-4" ui-sref="projektinformationen"> Anbaumodule </a>
                                    <a class="col-sm-4" ui-sref="projektinformationen">  </a>   </h3>

                    </div>
                    <div class="row">
                    </div>

                    <div class="row">
                        <div class="form-actions floatRight">
                            <input type="submit" value="{{!ctrl.angebot.id ? 'Add' : 'Update'}}"
                                   class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid || myForm.$pristine">
                            <button type="button" ng-click="ctrl.reset()" class="btn btn-warning btn-sm"
                                    ng-disabled="myForm.$pristine">Reset Form
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Liste von existierenden Angeboten </span></div>
        <div class="panel-body">
        <#-- <div ng-cloak>
             <div ng-controller="AngebotControllerTab" class="sample" layout="column" ng-cloak>
                 <md-content class="md-padding">
                     <md-tabs md-selected="selectedIndex" md-border-bottom md-autoselect md-swipe-content>
                         <md-tab ng-repeat="tab in tabs"
                                 ng-disabled="tab.disabled"
                                 label="{{tab.title}}">
                             <div class="demo-tab tab{{$index%4}}" style="padding: 25px; text-align: center;">
                                 <div ng-bind="tab.content"></div>
                                 <br/>
                                 <md-button class="md-primary md-raised" ng-click="removeTab( tab )" ng-disabled="tabs.length <= 1">Remove Tab</md-button>
                             </div>
                         </md-tab>
                     </md-tabs>
                 </md-content>

                 <form ng-submit="addTab(tTitle,tContent)" layout="column" class="md-padding" style="padding-top: 0;">
                     <div layout="row" layout-sm="column">
                         <div flex style="position: relative;">
                             <h2 class="md-subhead" style="position: absolute; bottom: 0; left: 0; margin: 0; font-weight: 500; text-transform: uppercase; line-height: 35px; white-space: nowrap;">Add a new Tab:</h2>
                         </div>
                         <md-input-container>
                             <label for="label">Label</label>
                             <input type="text" id="label" ng-model="tTitle">
                         </md-input-container>
                         <md-input-container>
                             <label for="content">Content</label>
                             <input type="text" id="content" ng-model="tContent">
                         </md-input-container>
                         <md-button class="add-tab md-primary md-raised" ng-disabled="!tTitle || !tContent" type="submit" style="margin-right: 0;">Add Tab</md-button>
                     </div>
                 </form>

             </div>
         </div>-->
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
                    <tr ng-repeat="u in ctrl.getAllAngebote()">
                        <td>{{u.id}}</td>
                        <td>{{u.name}}</td>
                        <td>{{u.beschreibung}}</td>
                        <td>{{u.kommentar}}</td>
                        <td>{{u.rabatt}}</td>
                        <td>{{u.ansprechpartner}}</td>
                        <td>
                            <button type="button" ng-click="ctrl.editAngebot(u.id)"
                                    class="btn btn-success custom-width">Edit
                            </button>
                        </td>
                        <td>
                            <button type="button" ng-click="ctrl.removeAngebot(u.id)"
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
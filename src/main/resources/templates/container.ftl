<div ng-controller="ContainerController as $ctrl">
    <div class="panel panel-default">
        <input type="hidden" ng-model="$ctrl.container.id"/>
        <input type="hidden" ng-model="$ctrl.container.modul"/>
        <input type="hidden" ng-model="$ctrl.container.imageID"/>
        <input type="hidden" ng-model="$ctrl.container.preis"/>
        <input type="hidden" ng-model="$ctrl.container.beschreibung"/>
        <input type="hidden" ng-model="$ctrl.container.angebot"/>
        <input type="hidden" ng-model="$ctrl.container.gesamtpreis"/>
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">CONTAINERWERK.COM </span></div>
        <div class="panel-body">
            <div class="formcontainer">
                <img src="images/{{$ctrl.selected.imageID}}"
                     alt="Wählen Sie ein Container Modul aus..." class="img center smaller"/>
            </div>
            <div class="row">
                <div class="form-actions floatRight">
                    <h4>Einzelpreis Modul: {{$ctrl.selected.preis}} EUR</h4>
                    <h4>Gesamtpreis: {{$ctrl.container.anzahl * $ctrl.selected.preis}} EUR</h4>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading"><span class="lead">CONFIGURATOR MODULAUSWAHL: {{$ctrl.selected.modul}} </span>
            </div>
            <div class="generic-container">
                <div ui-view>
                    <div class="row" ng-hide="$ctrl.hide">
                        <div class="col-lg-4">
                            <div class="modal-demo">
                                <script type="text/ng-template" id="myModalContent.html">
                                    <div class="modal-header">
                                        <h3 class="modal-title" id="modal-title">Wählen Sie das Modul aus</h3>
                                    </div>
                                    <div class="modal-body" id="modal-body">

                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>MODUL</th>
                                                    <th width="800">BESCHREIBUNG</th>
                                                    <th>PREIS</th>
                                                    <th width="800"></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr ng-repeat="item in $ctrl.items"
                                                    ng-click="$event.preventDefault(); $ctrl.selected.item = item">
                                                    <td>{{item.modul}}</td>
                                                    <td>{{item.beschreibung}}</td>
                                                    <td>{{item.preis}}</td>
                                                    <td><img src="images/{{item.imageID}}"
                                                             alt="Wählen Sie ein Container Modul aus..." class="img"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            Selected: <b>{{$ctrl.selected.item}}</b>

                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary" type="button"
                                                    ng-click="$ctrl.ok()">OK
                                            </button>
                                            <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">
                                                Cancel
                                            </button>
                                        </div>
                                </script>

                                <select class="form-control" ng-model="selectedIndex"
                                        ng-change="$ctrl.openModal('lg'); $ctrl.selected.item = item"
                                        ng-options="item as item.modul for item in ctrl.getAllModuls()"
                                >
                                    <option value="" ng-hide="selectedIndex">Bitte wählen Sie ein Modul aus ...</option>
                                </select>

                                <div class="modal-parent">
                                </div>
                            </div>
                        <#--  <div ui-view></div>-->
                        <#-- <div ui-view="nutzungsart"></div>-->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <input class="form-control" type="number" name="anzahl" id="anzahl"
                                   min="1" max="500" step="1" value="1"
                                   placeholder="Bitte wählen Sie die Anzahl der Module aus"
                                   ng-model="$ctrl.container.anzahl">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <label><input class="form-control" type="checkbox" name="ispreisrelevant"
                                          id="ispreisrelevant"
                                          ng-model="$ctrl.container.ispreisrelevant"> Preisrelevant?</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="form-actions floatRight">
                        <button type="button" ng-click="ctrl.reset()" class="btn btn-warning  custom-width">ZURÜCK
                        </button>
                    <#-- <a ui-sref="nutzungsart" $ctrl.views[$ctrl.status] ng-click="ctrl.submit()" class="btn btn-success custom-width"> WEITER </a>-->
                        <input type="submit" value="WEITER"
                               ui-sref="{{$ctrl.getView()}}" class="btn btn-primary" ng-click="$ctrl.submit($ctrl.getView())">
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>






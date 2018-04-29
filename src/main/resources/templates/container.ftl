<div ng-controller="ContainerController as $ctrl">
    <div class="panel panel-default">
        <input type="hidden" ng-model="$ctrl.container.id"/>
        <input type="hidden" ng-model="$ctrl.container.modul"/>
        <input type="hidden" ng-model="$ctrl.container.imageID"/>
        <input type="hidden" ng-model="$ctrl.container.preis"/>
        <input type="hidden" ng-model="$ctrl.container.beschreibung"/>
        <input type="hidden" ng-model="$ctrl.container.angebot"/>
        <input type="hidden" ng-model="$ctrl.container.gesamtpreis"/>
        <input type="hidden" ng-model="$ctrl.modul.id"/>
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">CONTAINERWERK.COM </span></div>
        <div class="panel-body">
            <div class="formcontainer">
                <img ng-hide="$ctrl.hidePreis" src="images/{{$ctrl.selected.imageID}}"
                     alt="Wählen Sie ein Container Modul aus..." class="img center smaller"/>
            </div>
            <div class="row">
                <div class="form-actions floatRight">
                    <h4 ng-hide="$ctrl.hideModulText">Modul: {{$ctrl.container.modul.modul}}</h4>
                    <h4 ng-hide="$ctrl.hidePreis">Einzelpreis Modul: {{$ctrl.container.modul.preis}} EUR</h4>
                    <h4 ng-hide="$ctrl.hidePreis">Anzahl Module: {{$ctrl.container.anzahl}}</h4>
                    <h4 ng-hide="$ctrl.hideNutzungsartText">Nutzungsart: {{$ctrl.container.nutzungsart.typ}}</h4>
                    <h4 ng-hide="$ctrl.hideNutzungsartText">Nutzungsart Preis: {{$ctrl.container.nutzungsart.preis}} EUR</h4>
                    <h4 ng-hide="$ctrl.hideAusfuehrungText">Ausfuehrung: {{$ctrl.container.ausfuehrung.typ}}</h4>
                    <h4 ng-hide="$ctrl.hideAusfuehrungText">Ausfuehrung Preis: {{$ctrl.container.ausfuehrung.preis}} EUR</h4>
                    <h4 ng-hide="$ctrl.hidePreisrelevant">Preisrelevant für das Angebot: {{$ctrl.container.ispreisrelevant}}</h4>
                    <h4 ng-hide="$ctrl.hideGesamtpreis">Gesamtpreis: {{$ctrl.container.anzahl*$ctrl.container.gesamtpreis}} EUR</h4>
                </div>
            </div>
        </div>
        <!-- <div class="panel panel-default"> -->
        <!-- Default panel contents -->
       <#-- <div class="panel-heading" ng-hide="$ctrl.hideModulText"><span class="lead">CONFIGURATOR: {{$ctrl.selected.modul}} </span>
        </div>-->
        <!-- <div class="generic-container"> -->
        <!-- Modul Bereich -->
        <div ui-view>
            <div class="row" ng-hide="$ctrl.hideModul">
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
                                                     alt="Wählen Sie ein Container Modul aus..."
                                                     class="img"/>
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

                        <select class="form-control" ng-model="selectedItem"
                                ng-change="$ctrl.openModal('lg'); $ctrl.selected.item = item"
                                ng-options="item as item.modul for item in ctrl.getAllModuls()"

                        >
                           <option value="">Bitte wählen Sie ein Modul aus ...
                            </option>
                        </select>

                        <div class="modal-parent">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" ng-hide="$ctrl.hideModul">
            <div class="col-lg-4">
                <input class="form-control" type="number" name="anzahl" id="anzahl"
                       min="1" max="500" step="1" value="1"
                       placeholder="Bitte wählen Sie die Anzahl der Module aus"
                       ng-model="$ctrl.container.anzahl">
            </div>
        </div>
        <div class="row" ng-hide="$ctrl.hideModul">
            <div class="col-lg-4">
                <label><input class="form-control" type="checkbox" name="ispreisrelevant"
                              id="ispreisrelevant"
                              ng-model="$ctrl.container.ispreisrelevant"> Preisrelevant?</label>
            </div>
        </div>
        <div class="row" ng-hide="$ctrl.hideModul">
            <div class="col-lg-4">
                <div class="col-md-7">
                    <input type="text" ng-model="$ctrl.container.bezeichnung" id="bezeichnung"
                           class="name form-control input-sm"
                           placeholder="Geben Sie eine Bezeichnung für die Kontainervariante an." required ng-minlength="3"/>
                </div>
            </div>
        </div>

        <!-- Nutzungsart Bereich -->
        <div ui-view>
            <div class="row" ng-hide="$ctrl.hideNutzungsart">
                <div class="col-lg-4">
                    <div class="modal-demo">
                        <script type="text/ng-template" id="myModalContentNutzungsart.html">
                            <div class="modal-header">
                                <h3 class="modal-title" id="modal-title">Wählen Sie die Nutzungsart aus</h3>
                            </div>
                            <div class="modal-body" id="modal-body">

                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Nutzungsart</th>
                                            <th width="800">BESCHREIBUNG</th>
                                            <th>PREIS</th>
                                            <th width="800"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr ng-repeat="item in $ctrl.items"
                                            ng-click="$event.preventDefault(); $ctrl.selected.item = item">
                                            <td>{{item.typ}}</td>
                                            <td>{{item.beschreibung}}</td>
                                            <td>{{item.preis}}</td>
                                            <td><img src="images/{{item.imageID}}"
                                                     alt="Wählen Sie eine Nutzungsart aus..." class="img"/></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                <#--  Selected: <b>{{$ctrl.selected.item}}</b>-->
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
                                    <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel
                                    </button>
                                </div>
                        </script>
                        <select class="form-control" ng-model="selectedIndex"
                                ng-change="$ctrl.openModalNutzung('lg'); $ctrl.selected.item = item;"
                                ng-options="item as item for item in $ctrl.getNutzungsarts()">
                            <option value="" ng-hide="selectedIndex">Bitte wählen Sie eine Nutzungsart aus ...
                            </option>
                        </select>
                        <div class="modal-parent">
                        </div>
                    </div>
                <#--<div ui-view></div>
                <div ui-view="nutzungsart"></div>-->
                </div>
            </div>
        </div>


        <!--</div> -->

     <#--   <div ui-view>
            <div class="row" ng-hide="$ctrl.hideAusfuehrung">
                <div class="col-lg-4">
                    <div class="modal-demo">
                        <script type="text/ng-template" id="myModalContentNutzungsart.html">
                            <div class="modal-header">
                                <h3 class="modal-title" id="modal-title">Wählen Sie die Ausfuehrung aus</h3>
                            </div>
                            <div class="modal-body" id="modal-body">

                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>NUTZUNGSART</th>
                                            <th width="800">BESCHREIBUNG</th>
                                            <th>PREIS</th>
                                            <th width="800"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr ng-repeat="item in $ctrl.items"
                                            ng-click="$event.preventDefault(); $ctrl.selected.item = item">
                                            <td>{{item.typ}}</td>
                                            <td>{{item.beschreibung}}</td>
                                            <td>{{item.preis}}</td>
                                            <td><img src="images/{{item.imageID}}"
                                                     alt="Wählen Sie eine Nutzungsart aus..." class="img"/></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                &lt;#&ndash;  Selected: <b>{{$ctrl.selected.item}}</b>&ndash;&gt;
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
                                    <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel
                                    </button>
                                </div>
                        </script>
                        <select class="form-control" ng-model="selectedIndex"
                                ng-change="$ctrl.openModalNutzung('lg'); $ctrl.selected.item = item"
                                ng-options="item as item.typ for item in $ctrl.getAllNutzungsarts()">
                            <option value="" ng-hide="selectedIndex">Bitte wählen Sie eine Nutzungsart aus ...
                            </option>
                        </select>
                        <div class="modal-parent">
                        </div>
                    </div>
                &lt;#&ndash;<div ui-view></div>
                <div ui-view="nutzungsart"></div>&ndash;&gt;
                </div>
            </div>

        </div>-->

        <div ui-view>
            <div class="row" ng-hide="$ctrl.hideAusfuehrung">
                <div class="col-lg-4">
                    <div class="modal-demo">
                        <script type="text/ng-template" id="myModalContentAusfuehrung.html">
                            <div class="modal-header">
                                <h3 class="modal-title" id="modal-title">Wählen Sie die Ausfuehrung aus</h3>
                            </div>
                            <div class="modal-body" id="modal-body">

                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Ausfuehrung</th>
                                            <th width="800">BESCHREIBUNG</th>
                                            <th>PREIS</th>
                                            <th width="800"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr ng-repeat="item in $ctrl.items"
                                            ng-click="$event.preventDefault(); $ctrl.selected.item = item">
                                            <td>{{item.typ}}</td>
                                            <td>{{item.beschreibung}}</td>
                                            <td>{{item.preis}}</td>
                                            <td><img src="images/{{item.imageID}}"
                                                     alt="Wählen Sie eine Ausfuehrung aus..." class="img"/></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                <#--  Selected: <b>{{$ctrl.selected.item}}</b>-->
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
                                    <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel
                                    </button>
                                </div>
                        </script>
                        <select class="form-control" ng-model="selectedIndex"
                                ng-change="$ctrl.openModalAusfuehrung('lg'); $ctrl.selected.item = item"
                                ng-options="item as item.typ for item in $ctrl.getAllAusfuehrungen()">
                            <option value="" ng-hide="selectedIndex">Bitte wählen Sie eine Ausfuehrung aus ...
                            </option>
                        </select>
                        <div class="modal-parent">
                        </div>
                    </div>
                <#--<div ui-view></div>
                <div ui-view="nutzungsart"></div>-->
                </div>
            </div>
        </div>

        <div class="panel-body">
            <div class="row">
                <div class="form-actions floatRight">
                    <button type="button" ng-click="$ctrl.submit($ctrl.getViewBefore())" class="btn btn-warning  custom-width">ZURÜCK
                    </button>
                <#-- <a ui-sref="nutzungsart" $ctrl.views[$ctrl.status] ng-click="ctrl.submit()" class="btn btn-success custom-width"> WEITER </a>-->
                    <input type="submit" value="WEITER"
                           ui-sref="{{$ctrl.getView()}}" class="btn btn-primary"
                           ng-click="$ctrl.submit($ctrl.getView())" ng-hide="!$ctrl.hideAngebotErstellen">
                    <button type="button"  ng-click="$ctrl.createContainer($ctrl.container)" ui-sref="angebot" class="btn btn-warning custom-width" ng-hide="$ctrl.hideAngebotErstellen">ANGEBOT
                    </button>
                </div>
            </div>

        </div>
    </div>
</div>







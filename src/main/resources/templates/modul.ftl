<div ng-controller="ModalDemoCtrl as $ctrl" class="generic-container">
    <div class="row">
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
                                             alt="Wählen Sie ein Container Modul aus..." class="img"/></td>
                                </tr>
                                </tbody>
                            </table>
                            Selected: <b>{{$ctrl.selected.item}}</b>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
                            <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel
                            </button>
                        </div>
                </script>
                <select class="form-control" ng-model="selectedIndex"
                        ng-change="$ctrl.openComponentModal('lg'); $ctrl.selected.item = item"
                        ng-options="item as item.modul for item in ctrl.getAllContainers()">
                    <option value="" ng-hide="selectedIndex">Bitte wählen Sie ein Modul aus</option>
                </select>
                <div class="modal-parent">
                </div>
            </div>
            <div ui-view></div>
            <div ui-view="nutzungsart"></div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4">
            <input class="form-control" type="number" name="anzahl" id="anzahl"
                   min="1" max="500" step="1" value="1"
                   placeholder="Bitte wählen Sie die Anzahl der Module aus"
                   ng-model="theValue">
        </div>
    </div>
</div>


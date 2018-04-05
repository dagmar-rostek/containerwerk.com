<div ng-controller="ContainerController as $ctrl">
    <div class="row">
        <div class="col-lg-4">
            <div class="modal-demo">
                <script type="text/ng-template" id="myModalContentAusfuehrung.html">
                    <div class="modal-header">
                        <h3 class="modal-title" id="modal-title">Wählen Sie die Nutzungsart aus</h3>
                    </div>
                    <div class="modal-body" id="modal-body">

                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>ART</th>
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
                                             alt="Wählen Sie eine Ausführung aus..." class="img"/></td>
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
                        ng-change="$ctrl.openModalAusfuehrung('lg'); $ctrl.selected.item = item"
                        ng-options="item as item.typ for item in $ctrl.getAllAusfuehrungen()">
                    <option value="" ng-hide="selectedIndex">Bitte wählen Sie eine Ausführung aus ...</option>
                </select>
                <div class="modal-parent">
                </div>
            </div>
        </div>
    </div>
</div>






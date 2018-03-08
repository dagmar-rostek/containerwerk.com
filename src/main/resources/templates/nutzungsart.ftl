<div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading"><span class="lead">CONFIGURATOR NUTZUNGSART</span></div>
    <div class="panel-body">


        <div class="row">
            <div class="col-lg-4">

                <select class="form-control" ng-model="selectedIndex" ng-change="changedValue(selectedIndex)"
                        ng-options="item as item.modul for item in ctrl.getAllNutzungsarts()">
                    <option value="" ng-hide="selectedIndex">Bitte wählen Sie die Nutzungsart aus</option>

                </select>
            </div>
            <div class="col-lg-6"> {{selectedIndex.beschreibung}}</div>

        </div>
        </br>

    </div>

    <div class="row">
        <div class="form-actions floatRight">
            <button type="button" ng-click="ctrl.reset()" class="btn btn-warning  custom-width"
                    ng-disabled="myForm.$pristine">ZURÜCK
            </button>
            <input type="submit" value="{{!ctrl.nutzungsart.id ? 'WEITER' : 'Update'}}"
                   class="btn btn-success custom-width" ng-disabled="myForm.$invalid || myForm.$pristine">
        </div>
    </div>
</div>
<div ng-controller="ModalDemoCtrl as $ctrl" class="generic-container">
    <div class="panel panel-default">
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
                    <h4>Gesamtpreis: {{theValue * $ctrl.selected.preis}} EUR</h4>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading"><span class="lead">CONFIGURATOR MODULAUSWAHL: {{$ctrl.selected.modul}} </span>
            </div>

            <div ui-view="modul"></div>
            <div class="panel-body">
                <div class="row">
                    <div class="form-actions floatRight">
                        <button type="button" ng-click="ctrl.reset()" class="btn btn-warning  custom-width"
                                ng-disabled="myForm.$pristine">ZURÜCK
                        </button>
                        <button type="button" ng-click="ctrl.getAllNutzungsarts()"
                                ui-sref="modul" class="btn btn-success custom-width">WEITER
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>






<div class="generic-container" >
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
                <img src="images/02_containerbshd_a4510743-300x169.jpg"
                     alt="Das Startbild" class="img"/>
            </div>
        </div>
        <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading"><span class="lead">CONFIGURATOR</span></div>
            <div class="panel-body">
                <strong>Wer andauernd begreift, was er tut, bleibt unter seinem Niveau. – Martin Walser</strong>
                </br>
                </br>
                </br>
                </br>
                ... Hier erscheint die Ansicht aller konfigurierten Container als Übersicht.
                Wenn noch kein Kontainer konfiguriert ist, kann hier ??? Was auch immer erscheinen
            </div>

            <div class="row">
                <div class="form-actions floatRight">
<#--                  <input type="submit" value="WEITER" ng-click="ctrl.submit"
                         class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid || myForm.$pristine" ui-sref="container">-->
                   <a ui-sref="container" class="btn btn-success custom-width"> WEITER </a>

   <#-- <a ui-sref="container" ng-click="ctrl.submit()" class="btn btn-success custom-width"> WEITER </a>-->
                  <#--  <input type="submit" value="{{!ctrl.angebot.id ? 'WEITER' : 'WEITER'}}"
                        class="btn btn-primary btn-sm">-->
                </div>
            </div>
        </div>
    </div>
</div>


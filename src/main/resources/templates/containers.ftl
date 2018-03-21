<div ng-controller="containers as $ctrl">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Containerliste des Angebotes - TODO-Angebotsname </span></div>
        <div class="panel-body">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Modul</th>
                        <th>Preis</th>
                        <th>Beschreibung</th>
                        <th>Anzahl</th>
                        <th>Gesamtpreis</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="u in ctrl.getAllContainers()">
                        <td>{{u.id}}</td>
                        <td>{{u.modul}}</td>
                        <td>{{u.preis}}</td>
                        <td>{{u.beschreibung}}</td>
                        <td>{{u.anzahl}}</td>
                        <td>{{u.gesamtpreis}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="form-actions floatRight">
                        <a ui-sref="angebot" class="btn btn-success custom-width"> ZURÜCK </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

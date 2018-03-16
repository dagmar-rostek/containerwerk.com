<h2>Alle Module des Angebotes</h2>
<ul>
    <li ng-repeat="u in ctrl.getAllModuls()">
        <a ui-sref="moduls.detail({contactId:contact.id})">{{u.name}}</a>
    </li>
</ul>

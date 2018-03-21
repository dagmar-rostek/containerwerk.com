<h2>Alle Module des Angebotes</h2>
<ul>
    <li ng-repeat="module in moduls">
        <a ui-sref="contacts.detail({contactId:contact.id})">{{contact.name}}</a>
    </li>
</ul>

<div ng-controller="ContainerController as $ctrl">
    <h2>{{$ctrl.container.modul}}</h2>
    <ul>
        <li>
            {{$ctrl.container.beschreibung}}
        </li>
        <li>
            {{$ctrl.container.preis}}
        </li>
        <li>
            {{$ctrl.container.bild}}
        </li>
    </ul>
<#--    <div ui-view class="slide">
        <!-- Example of default content. This content will be replace as soon as
             this ui-view is populate with a template &ndash;&gt;
        <small class="muted">Click on a container item to view and/or edit it.</small>
    </div>-->
</div>

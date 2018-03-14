<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Projektinformationen </span></div>
        <div class="panel-body">
            <div class="formcontainer">
                <div ng-controller="ProjektinformationenController" class="sample tabsdemoDynamicTabs" layout="column"
                     ng-cloak="">
                    <div class="row">

                        <md-content class="md-padding">
                            <md-tabs md-selected="selectedIndex" md-border-bottom="" md-autoselect=""
                                     md-swipe-content="">
                                <md-tab ng-repeat="tab in tabs" ng-disabled="tab.disabled" label="{{tab.title}}">
                                    <div class="demo-tab tab{{$index%4}}" style="padding: 25px; text-align: center;">
                                        <div ng-bind="tab.content"></div>
                                        <br>
                                        <md-button class="md-primary md-raised" ng-click="removeTab( tab )"
                                                   ng-disabled="tabs.length <= 4">Löschen von eigenen Tabs ...
                                        </md-button>
                                    </div>
                                </md-tab>
                            </md-tabs>
                        </md-content>

                        <form ng-submit="addTab(tTitle,tContent)" layout="column" class="md-padding"
                              style="padding-top: 0;">
                            <div layout="row" layout-sm="column">
                                <div flex="" style="position: relative;">
                                <#--  <h2 class="md-subhead"
                                        style="position: absolute; bottom: 0; left: 0; margin: 0; font-weight: 500; text-transform: uppercase; line-height: 35px; white-space: nowrap;">
                                        Add neue Projektinformationen:</h2>-->
                                </div>
                                <md-input-container>
                                    <label for="label">Bezeichnung</label>
                                    <input type="text" id="label" ng-model="tTitle">
                                </md-input-container>
                                <md-input-container>
                                    <label for="content">Inhalt</label>
                                    ​<textarea id="content" rows="5" cols="70" ng-model="tContent"></textarea>
                                <#--<input type="text" id="content" ng-model="tContent">-->
                                </md-input-container>
                                <md-button class="add-tab md-primary md-raised" ng-disabled="!tTitle || !tContent"
                                           type="submit" style="margin-right: 0;">Hinzufügen von Projektinformationen
                                </md-button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



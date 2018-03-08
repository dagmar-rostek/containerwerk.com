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
            <div class="panel-heading"><span class="lead">CONFIGURATOR MODULAUSWAHL: {{$ctrl.selected.modul}} </span></div>
            <div class="panel-body">

            <#-- <div class="row">
                 <div class="col-lg-4">
                     <select class="form-control" ng-model="selectedIndex" ng-change="changedValue(selectedIndex)"
                             ng-options="item as item.modul for item in ctrl.getAllContainers()">
                         <option value="" ng-hide="selectedIndex">Bitte wählen Sie ein Modul aus  </option>

                     </select>
                 </div>
                 <div class="col-lg-6">{{selectedIndex.beschreibung}}</div>
             </div>-->
                <div class="row">
                    <div class="col-lg-4">
                    <#--<select class="form-control" ng-model="selectedIndex" ng-change="Confirm()"
                             ng-options="item as item.modul for item in ctrl.getAllContainers()">
                         <option value="" ng-hide="selectedIndex">Bitte wählen Sie ein Modul aus  </option>
                     </select>-->
                    <#-- <button type="" class="btn grn-btn" ng-click=“Confirm()”>Confirm Admin
                     </button>-->




                        <div  class="modal-demo">
                        <#--  <select class="form-control" ng-model="selectedIndex" ng-change="$event.preventDefault(); $ctrl.selected.item = item"
                                  ng-options="item as item.modul for item in ctrl.getAllContainers()">
                              <option value="" ng-hide="selectedIndex">Bitte wählen Sie ein Modul aus  </option>
                          </select>-->

                            <script type="text/ng-template" id="myModalContent.html">
                                <div class="modal-header">
                                    <h3 class="modal-title" id="modal-title">Wählen Sie das Modul aus</h3>
                                </div>
                                <div class="modal-body" id="modal-body" >
                                <#--<ul>
                                    <li ng-repeat="container in ctrl.getAllContainers()">
                                        <a href="#" ng-click="$event.preventDefault(); $ctrl.selected.item = container.modul">{{ container.modul }}</a>
                                    </li>
                                </ul>-->
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                            <tr>
                                                <th>MODUL</th>
                                                <th width="800">BESCHREIBUNG</th>
                                                <th>PREIS</th>
                                                <th width="300"></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <#--<ul>
                                                <li ng-repeat="item in $ctrl.items">
                                                    <a href="#" ng-click="$event.preventDefault(); $ctrl.selected.item = item">{{ item }}</a>
                                                </li>
                                            </ul>-->


                                            <tr ng-repeat="item in $ctrl.items" ng-click="$event.preventDefault(); $ctrl.selected.item = item">
                                                <td>{{item.modul}}</td>
                                                <td>{{item.beschreibung}}</td>
                                                <td>{{item.preis}}</td>
                                                <td><img src="images/{{item.imageID}}"
                                                         alt="Wählen Sie ein Container Modul aus..." class="img"/></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        Selected blabla: <b>{{$ctrl.selected.item}}</b>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
                                        <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel</button>
                                    </div>
                            </script>
                        <#-- <script type="text/ng-template" id="myModalContent.html">
                             <div class="modal-header">
                                 <h3 class="modal-title" id="modal-title">I'm a modal!</h3>
                             </div>
                             <div class="modal-body" id="modal-body">
                                 <ul>
                                     <li ng-repeat="item in $ctrl.items">
                                         <a href="#" ng-click="$event.preventDefault(); $ctrl.selected.item = item">{{ item }}</a>
                                     </li>
                                 </ul>
                                 Selected blabla: <b>{{ $ctrl.selected.item }}</b>
                             </div>
                             <div class="modal-footer">
                                 <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
                                 <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel</button>
                             </div>
                         </script>-->


                        <#-- ------->
                        <#-- <script type="text/ng-template" id="stackedModal.html">
                             <div class="modal-header">
                                 <h3 class="modal-title" id="modal-title-{{name}}">The {{name}} modal!</h3>
                             </div>
                             <div class="modal-body" id="modal-body-{{name}}">
                                 Having multiple modals open at once is probably bad UX but it's technically possible.
                             </div>
                         </script>-->

                        <#--   <button type="button" class="btn btn-default" ng-click="$ctrl.open()">Open me!</button>
                           <button type="button" class="btn btn-default" ng-click="$ctrl.open('lg')">Large modal</button>
                           <button type="button" class="btn btn-default" ng-click="$ctrl.open('sm')">Small modal</button>
                           <button type="button" class="btn btn-default" ng-click="$ctrl.open('sm', '.modal-parent')">Modal appended to a custom parent</button>-->
                        <#--  <button type="button" class="btn btn-default" ng-click="$ctrl.toggleAnimation()">Toggle Animation ({{ $ctrl.animationsEnabled }})</button>-->
                        <#--<button type="button" class="btn btn-default" ng-click="$ctrl.openComponentModal('lg')">Modulauswahl</button>-->


                            <select class="form-control" ng-model="selectedIndex" ng-change="$ctrl.openComponentModal('lg'); $ctrl.selected.item = item"
                                    ng-options="item as item.modul for item in ctrl.getAllContainers()">
                                <option value="" ng-hide="selectedIndex">Bitte wählen Sie ein Modul aus  </option>
                            </select>


                        <#-- <select class="form-control" ng-model="selectedIndex" ng-change="$event.preventDefault(); $ctrl.selected.item = item"
                                 ng-options="item as item.modul for item in ctrl.getAllContainers()">
                             <option value="" ng-hide="selectedIndex">Bitte wählen Sie ein Modul aus  </option>
                         </select>&ndash;&gt;-->


                        <#--   <button type="button" class="btn btn-default" ng-click="$ctrl.openMultipleModals()">Open multiple modals at once</button>-->
                        <#--<div class="row">
                            <div class="col-lg-4">
                               <div ng-show="$ctrl.selected">Selektion: {{ $ctrl.selected.modul }}</div>
                            </div>
                        </div>-->
                            <div class="modal-parent">
                            </div>
                        </div>




                    <#-- <div ng-controller="ModalDemoCtrl as $ctrl" class="modal-demo">-->
                    <#--   <script type="text/ng-template" id="confirmAlert">
                           <div class="modal-header">
                               <h3 class="modal-title" id="modal-title">I'm a modal!</h3>
                           </div>
                           <div class="modal-body" id="modal-body">
                               <ul>
                                   <li ng-repeat="item in $ctrl.items">
                                       <a href="#" ng-click="$event.preventDefault(); $ctrl.selected.item = item">{{ item }}</a>
                                   </li>
                               </ul>
                               Selected: <b>{{ $ctrl.selected.item }}</b>
                           </div>
                           <div class="modal-footer">
                               <button class="btn btn-primary" type="button" ng-click="$ctrl.ok()">OK</button>
                               <button class="btn btn-warning" type="button" ng-click="$ctrl.cancel()">Cancel</button>
                           </div>
                       </script>
                       <script type="text/ng-template" id="stackedModal.html">
                           <div class="modal-header">
                               <h3 class="modal-title" id="modal-title-{{name}}">The {{name}} modal!</h3>
                           </div>
                           <div class="modal-body" id="modal-body-{{name}}">
                               Having multiple modals open at once is probably bad UX but it's technically possible.
                           </div>
                       </script>

                       <button type="button" class="btn btn-default" ng-click="$ctrl.open()">Open me!</button>
                       <button type="button" class="btn btn-default" ng-click="$ctrl.open('lg')">Large modal</button>
                       <button type="button" class="btn btn-default" ng-click="$ctrl.open('sm')">Small modal</button>
                       <button type="button"
                               class="btn btn-default"
                               ng-click="$ctrl.open('sm', '.modal-parent')">
                           Modal appended to a custom parent
                       </button>
                       <button type="button" class="btn btn-default" ng-click="$ctrl.toggleAnimation()">Toggle Animation ({{ $ctrl.animationsEnabled }})</button>
                       <button type="button" class="btn btn-default" ng-click="$ctrl.openComponentModal()">Open a component modal!</button>
                       <button type="button" class="btn btn-default" ng-click="$ctrl.openMultipleModals()">
                           Open multiple modals at once
                       </button>
                       <div ng-show="$ctrl.selected">Selection from a modal: {{ $ctrl.selected }}</div>
                       <div class="modal-parent">
                       </div>-->
                    <#--   </div>-->











                        <div ui-view></div>
                    </div>
                <#-- <div class="col-lg-6">{{selectedIndex.beschreibung}}</div>-->
                </div>
            <#--      &lt;#&ndash;&ndash;&gt;<div ui-view></div>-->
            <#-- <div ui-view="secondViewToReplace"></div>-->
            <#--&lt;#&ndash;&ndash;&gt;  <div ui-view="cm1"></div>-->

                <div class="row">
                    <div class="col-lg-4">
                        <input class="form-control" type="number" name="anzahl" id="anzahl"
                               min="1" max="500" step="1" value="1"
                               placeholder="Bitte wählen Sie die Anzahl der Module aus"
                               ng-model="theValue">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="form-actions floatRight">
                    <button type="button" ng-click="ctrl.reset()" class="btn btn-warning  custom-width"
                            ng-disabled="myForm.$pristine">ZURÜCK
                    </button>
                    <input type="submit" value="{{!ctrl.angebot.id ? 'WEITER' : 'Update'}}"
                           class="btn btn-success custom-width" ng-disabled="myForm.$invalid || myForm.$pristine">
                </div>
            </div>
        </div>
    </div>
</div>





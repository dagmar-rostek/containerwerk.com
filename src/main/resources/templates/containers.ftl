<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Containerliste </span></div>
        <div class="panel-body">
            <div class="formcontainer">

                <li ng-class="{ active: $state.includes('containers.list') }"><a ui-sref="containers.list">All Contacts</a></li>

                    <#--<div class="span3">
                        <div class="pa-sidebar well well-small">
                            <ul class="nav nav-list">-->
                                <#--<li ng-class="{ active: $state.includes('containers.list') }">
                                    <a ui-sref="containers.list">Alle Container des Angebotes</a></li>-->


                    <#-- <li class="nav-header">Top Container</li>-->

                                <!-- This <li> will only add the 'active' class if 'contacts.detail' or its descendants are active
                                     AND if it is the link for the active contact (aka contactId) -->
                               <#-- <li ng-repeat="container in containers | limitTo:2" ui-sref-active="active">

                                    <!-- Here's a ui-sref that is also providing necessary parameters &ndash;&gt;
                                    <a ui-sref="containers.detail({containerId:container.id})">{{container.modul}}</a>
                                </li>-->
                         <#--   </ul>

                           &lt;#&ndash; <hr> <button class="btn" ng-click="goToRandom()">Show random container</button>

                            <!-- Another named view &ndash;&gt;
                            <div ui-view="menuTip" class="slide"></div>&ndash;&gt;
                        </div>
                    </div>-->

                    <!-- Our unnamed main ui-view for this template -->
                  <#--  <div ui-view class="span9 slide"></div>-->
               <#-- </div>-->
            </div>
        </div>
    </div>
    <div ui-view class="span9 slide"></div>
</div>

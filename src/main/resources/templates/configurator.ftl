<div class="navbar navbar-fixed-top">
    <div class="navbar-inner"><div class="container">

        <!-- ui-sref is a great directive for linking a state location with an anchor link.
             You should almost always use ui-sref instead of href on your links when you want
             then to navigate to a state. When this link is clicked it will take the application
             to the 'home' state. Behind the scenes the directive also adds the correct href attr
             and url. -->
        <a class="brand" ui-sref="home">ui-router</a>
        <ul class="nav">

            <!-- Here you can see ui-sref in action again. Also notice the use of $state.includes, which
                 will set the links to 'active' if, for example on the first link, 'containers' or any of
                 its descendant states are activated. -->
            <li ng-class="{active: $state.includes('containers')}"><a ui-sref="containers.list">Containers</a></li>
            <li ui-sref-active="active"><a ui-sref="about">About</a></li>
        </ul>

        <!-- Here is a named ui-view. ui-views don't have to be named, but we'll populate this
             one from various different child states and we want a name to help us target. -->
        <p ui-view="hint" class="navbar-text pull-right"></p>
    </div></div>
</div>

<!-- Here is the main ui-view (unnamed) and will be populated by its immediate children's templates
     unless otherwise explicitly named views are targeted. It's also employing ng-animate. -->
<div ui-view class="container slide" style="padding-top: 80px;"></div>




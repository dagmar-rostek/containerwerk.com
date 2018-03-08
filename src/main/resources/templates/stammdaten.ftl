<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">CONTAINERWERK.COM </span></div>
        <div class="panel-body">
            <div class="formcontainer">


                <div data-na-app="" data-ng-init="Employees_Monthly_Salary=[{name:'Jay',salary:8100}, {name='Sdwt',salary:7000}]">
                    <table border="1">
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                        </tr>
                        <tr data-ng-repeat="x in Employees_Monthly_Salary">
                            <td data-ng-bind="x.name"></td>
                            <td data-ng-bind="x.salary"></td>
                        </tr>
                    </table>
                </div>
                <div data-na-app="" data-ng-init="Usernames=['Dagmar Rostek', 'Annette Ansorge', 'Paul Schmidt']">
                    <p style="color:green; font-weight:bold">User Names:<br>
                    <p>Anderer Name: <input type="text" ng-model="AndererName"></p>
                    <p style="color:red" ng-bind="AndererName | uppercase"></p>
                </div>
                <div ng-app="">
                    <p>Input my id in the input box:</p>
                    <p><input type="text" ng-model="id"></p>
                    <br>
                    <h1>Welcome! {{id}}</h1>
                </div>
                <div><h2>-----------------</h2>
                    <input type="text" ng-model="yourName" placeholder="enter your name du idiot."><br>
                    <h1>Hello {{yourName}}</h1>
                    </p>
                </div>
                <div>
                    <p>Das ist ein ... :<br>
                        <input type="text" ng-model="blabla"></p>
                    <p ng-bind="blabla"></p>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading"><span class="lead">CONFIGURATOR</span></div>
            <div class="panel-body">
                <div class="formcontainer">
                    <ol type="1">
                        <li data-ng-repeat="show in Usernames">
                            {{show}}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</div>
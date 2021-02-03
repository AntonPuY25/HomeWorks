import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import SuperJunior from "./pages/SuperJunior";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    Junior: '/Junior',
    SuperJunior: '/SuperJunior',
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}

            <Switch>

                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.Junior}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.Junior} render={() => <Junior/>}/>
                <Route path={PATH.SuperJunior} render={() => <SuperJunior/>}/>


                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>

        </div>
    );
}

export default Routes;

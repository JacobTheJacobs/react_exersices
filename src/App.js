import logo from "./logo.svg";
import "./App.css";
import ProductList from "./FUNDAMENTALS/lists_2";
import StateEvent1 from "./FUNDAMENTALS/state_and_events_1";
import StateEvent2 from "./FUNDAMENTALS/state_and_events_2";
import StateEvent3 from "./FUNDAMENTALS/state_and_events_3";
import StateEvent4 from "./FUNDAMENTALS/state_and_events_4";
import StateEvent5 from "./FUNDAMENTALS/state_and_events_5";
import StateEvent6 from "./FUNDAMENTALS/state_and_events_6";
import StateEvent7 from "./FUNDAMENTALS/state_and_events_7";
import StateEvent8 from "./FUNDAMENTALS/state_and_events_8";
import ConditionRender1 from "./FUNDAMENTALS/conditional_render_1";
import ConditionRender2 from "./FUNDAMENTALS/conditional_render_2";
import ConditionRender3 from "./FUNDAMENTALS/conditional_render_3";
import LifeCycle1 from "./FUNDAMENTALS/lifecycleMethods_1";
import LifeCycle2 from "./FUNDAMENTALS/lifecycleMethods_2";
import LifeCycle3 from "./FUNDAMENTALS/lifecycleMethods_3";
import Forms1 from "./FUNDAMENTALS/forms_1";
import Forms2 from "./FUNDAMENTALS/forms_2";
import QouteList from "./FUNDAMENTALS/lists_1";

function App() {
    return (
        <div className="App">
            {/**card component */}

            <div className="card">
                <div className="card-header">
                    <h3>Fundamentals</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <QouteList />
                            <ProductList />
                        </div>
                        <div className="col-md-6">
                            <StateEvent1 />
                            <hr />
                            <StateEvent2 />
                            <hr />
                            <StateEvent3 />
                            <hr />
                            <StateEvent4 />
                            <hr />
                            <StateEvent5 />
                            <hr />
                            <StateEvent6 />
                            <hr />
                            <StateEvent7 />
                            <hr />
                            <StateEvent8 />
                            <hr />
                            <ConditionRender1 />
                            <hr />
                            <ConditionRender2 />
                            <hr />
                            <ConditionRender3 />
                            <hr />
                            <LifeCycle1 />
                            <hr />
                            <LifeCycle2 />
                            <hr />
                            <LifeCycle3 />
                            <hr />
                            <Forms1 />
                            <hr />
                            <Forms2 />
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

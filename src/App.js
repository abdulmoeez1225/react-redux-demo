import "./App.css";
import CakeContainer from "./component/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./component/HookCakeContainer";
import FormValidation from "./component/FormValidation";
import YoutubeForm from "./component/validationFormic/YoutubeForm";
import IceCreamContainer from "./component/IceCreamContainer";
import FeatureContainer from "./component/FeatureContainer";
import HookFeature from "./component/HookFeature";
import NewCakeContainer from "./component/NewCakeContainer";
import ItemContainer from "./component/ItemContainer";
import UserContainer from "./component/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <div>
          <CakeContainer />
        </div>
        <div>
          <HookCakeContainer />
        </div>
        <div>
          <IceCreamContainer />
        </div>
        <div>
          <FeatureContainer />
        </div>
        <div>
          <HookFeature />
        </div>
        <div>
          <NewCakeContainer />
        </div>
        <div>
          <ItemContainer cake />
        </div>
        <div>
          <ItemContainer />
        </div> */}
        <div>
          <UserContainer />
        </div>
      </div>
    </Provider>
    // <div>
    //   <FormValidation />
    // </div>
    // <div>
    //   <YoutubeForm />
    // </div>
  );
}

export default App;

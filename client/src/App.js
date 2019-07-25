import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

// Import Routes
import AuthRoutes from "./components/Auth/AuthRoutes";
import PrivateRoutes from "./components/Private/PrivateRoutes";
import PublicRoutes from "./components/Public/PublicRoutes";

// Scroll To Top FIX
import ScrollToTop from "./components/Common/ScrollToTop";

// Actions
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Utilities
import setAuthToken from "./utils/setAuthToken";

// Store
import store from "./store";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);

  // Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/";
  }
}

// import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
// import Navigation from "./components/Navigation/Navigation";
// import Signin from "./components/Signin/Signin";
// import Register from "./components/Register/Register";
// import Logo from "./components/Logo/Logo";
// import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
// import Rank from "./components/Rank/Rank";
// import axios from "axios";

// const initialState = {
//   input: "",
//   imageUrl: "",
//   box: {},
//   route: "signin",
//   isSignedIn: false,
//   user: {
//     id: "",
//     name: "",
//     email: "",
//     entries: 0,
//     joined: ""
//   }
// };

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/dashboard" component={PrivateRoutes} />
            <Route path="/auth" component={AuthRoutes} />
            <Route path="/" component={PublicRoutes} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
// class App extends Component {
//   constructor() {
//     super();
//     this.state = initialState;
//   }

//   loadUser = data => {
//     this.setState({
//       user: {
//         id: data.id,
//         name: data.name,
//         email: data.email,
//         entries: data.entries,
//         joined: data.joined
//       }
//     });
//   };

//   calculateFaceLocation = data => {
//     console.log("DATA: ", data);
//     const clarifaiFace =
//       data.outputs[0].data.regions[0].region_info.bounding_box;
//     const image = document.getElementById("inputimage");
//     const width = Number(image.width);
//     const height = Number(image.height);
//     return {
//       leftCol: clarifaiFace.left_col * width,
//       topRow: clarifaiFace.top_row * height,
//       rightCol: width - clarifaiFace.right_col * width,
//       bottomRow: height - clarifaiFace.bottom_row * height
//     };
//   };

//   displayFaceBox = box => {
//     this.setState({ box: box });
//   };

//   onInputChange = event => {
//     this.setState({ input: event.target.value });
//   };

//   onButtonSubmit = () => {
//     this.setState({ imageUrl: this.state.input });
//     let data = {
//       input: this.state.input
//     };
//     console.log(this.state.user);
//     axios
//       .post(`/api/image/${this.state.user.id}`, data)
//       .then(response => {
//         console.log("RESPONSE", response);
//         this.setState(
//           Object.assign(this.state.user, {
//             entries: response.data.entries[0].entries
//           })
//         );
//         this.displayFaceBox(this.calculateFaceLocation(response.data));
//       })
//       .catch(err => console.log(err));
//   };

//   onRouteChange = route => {
//     if (route === "signout") {
//       this.setState(initialState);
//     } else if (route === "home") {
//       this.setState({ isSignedIn: true });
//     }
//     this.setState({ route: route });
//   };

//   render() {
//     const { isSignedIn, imageUrl, route, box } = this.state;
//     return (
//       <div className="App">
//         <Particles className="particles" params={particlesOptions} />
//         <Navigation
//           isSignedIn={isSignedIn}
//           onRouteChange={this.onRouteChange}
//         />
//         {route === "home" ? (
//           <div>
//             <Logo />
//             <Rank
//               name={this.state.user.name}
//               entries={this.state.user.entries}
//             />
//             <ImageLinkForm
//               onInputChange={this.onInputChange}
//               onButtonSubmit={this.onButtonSubmit}
//             />
//             <FaceRecognition box={box} imageUrl={imageUrl} />
//           </div>
//         ) : route === "signin" ? (
//           <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
//         ) : (
//           <Register
//             loadUser={this.loadUser}
//             onRouteChange={this.onRouteChange}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default App;

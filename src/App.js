import HelloWorld from "./component/01-hello-world/hello-world";
import Jsx1 from "./component/03-jsx/jsx1";
import Jsx2 from "./component/03-jsx/jsx2";
import Jsx3 from "./component/03-jsx/jsx3";
import Jsx4 from "./component/03-jsx/jsx4";
import Jsx5 from "./component/03-jsx/jsx5";
import Jsx6 from "./component/03-jsx/jsx6";
import Style1 from "./component/04-styles/style1";
import Style2 from "./component/04-styles/style2";
import Style3 from "./component/04-styles/style3";
import Style4 from "./component/04-styles/style4";
import Clock1 from "./component/05-clock1/clock1";
import Greetings from "./component/06-props1/greetings";
import Products from "./component/07-props-2/products";
import Clock2 from "./component/08-clock2/clock2";
import Gallery from "./component/09-image/gallery";
import Image from "./component/09-image/image";
import ProfileCard from "./component/10-profile-card/profile-card";
import BootstrapDynamic from "./component/11-bootstrap/bootstrap-dynamic";
import BootstrapStatic from "./component/11-bootstrap/bootstrap-static";
import Icon from "./component/12-icons/icon";
import Event from "./component/13-event/event";
import Shop from "./component/14-products/shop";
const App = () => {
  return (
    <div>
      {/* 
      <HelloWorld />
      <Jsx1 />
      <Jsx2 />
      <Jsx3 /> 
      <Jsx4 />
      <Jsx5 />
      <Jsx6 />
      <Style1 />
      <Style2 />
      <Style3 />
      <Style4 />
      <Clock1 />
      <Greetings />
      <Products />
      <Clock2 textColor="red" bgColor="yellow" />
      <Image />
      <Gallery />
      <ProfileCard
        avatar="profile.jpg"
        name="Ali Gel"
        location="Turkey, Istanbul"
        shot="1"
        followers="5"
        following="10"
      />
      <BootstrapStatic />
      <BootstrapDynamic />
      <Icon />
      <Event />
      */}
      <Shop />
    </div>
  );
};
export default App;

import HelloWorld from "./component/01-hello-world/hello-world";
import Jsx1 from "./component/03-jsx/jsx1";
import Jsx2 from "./component/03-jsx/jsx2";
import Jsx3 from "./component/03-jsx/jsx3";
import Jsx4 from "./component/03-jsx/jsx4";
import Jsx5 from "./component/03-jsx/jsx5";
import Jsx6 from "./component/03-jsx/jsx6";
import Jsx7 from "./component/03-jsx/jsx7";
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
import State from "./component/15-useState/state";
import Stateless from "./component/15-useState/stateless";
import Counter from "./component/16-counter/counter";
import Birthday from "./component/17-birthday/birthday";
import UseEffect from "./component/18-useeffect/useEffect1";
import UseEffect2 from "./component/18-useeffect/useEffect2";
import Clock3 from "./component/19-clock3/clock3";
import CountryFilter from "./component/20-country-filter/country-filter";
import Scroll from "./component/21-useRef/scroll";
import UseRef from "./component/21-useRef/useRef";
import ClassComp from "./component/22-class-type-component/class-comp";
import UserCards from "./component/23-fetch-users/user-cards";
import Countries from "./component/24-axios-countries/countries";
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
      <Shop />
      <Jsx7 />
      <Stateless />
      <State />
      <Counter />
      <Birthday />
      <UseEffect1 />
      <Clock3 />
      <UseEffect2 />
      <CountryFilter />
      <UseRef />
      <Scroll/>
      <ClassComp />
       <UserCards />
      */}
      <Countries />
    </div>
  );
};
export default App;

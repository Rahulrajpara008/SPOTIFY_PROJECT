import "./App.css";
import { assets } from "./assets/assets";
import NavBar from "./Component/NavBar";
import AlbumItem from "./Component/AlbumItem";
import Page from "./Component/Page";
import SideBar from "./Component/SideBar";
import Nav_Bar from "./Component/Nav_Bar";
import Display_Search from "./Component/Display_Search";
import Big_Album from "./Component/Big_Album";

function App() {
  return (
    <>
      <div className="App-main">
        <div className="app-main-small">
          <div className="App-main-1">
            <SideBar />
            {/* <Big_Album /> */}
          </div>
              <div className="App-main-2">
                <div className="App-main-2-1">
                  {/* <NavBar /> */}
                  {/* <Nav_Bar /> */}
                </div>
                <div className="App-main-2-2">
                  <Page />
                  {/* <Big_Album /> */}
                  {/* <Display_Search /> */}
                </div>
              </div>
        </div>
            <div className="App-main2">
              <div className="App-main2-1">
                <div className="App-main2-1-1">
                  <img src={assets.Rectangle20} alt="" id="rest20" />
                </div>
                <div className="App-main2-1-2">
                  <p id="para"> Dreaming On</p>
                </div>
                <div className="App-main2-1-3">
                  <img src={assets.heart2} alt="" />
                </div>
              </div>
              <div className="App-main2-2">
                <div className="App-main2-2-1">
                  <div className="App-main2-2-1-1">
                    <img src={assets.shuffle} alt="" id="small-shuf" />
                  </div>
                  <div className="App-main2-2-1-2">
                    <img src={assets.leftA} alt="" id="small-left" />
                  </div>
                  <div className="App-main2-2-1-3">
                    <img src={assets.play} alt="" id="small-play" />
                  </div>
                  <div className="App-main2-2-1-4">
                    <img src={assets.rightA} alt="" id="small-right" />
                  </div>
                  <div className="App-main2-2-1-5">
                    <img src={assets.fluent} alt="" id="small-fluent" />
                  </div>
                </div>
                <div className="App-main2-2-2">
                  <hr id="line" />
                </div>
              </div>
              <div className="App-main2-3">
                <div className="App-main2-3-1">
                  <img src={assets.mic} alt="" id="mic" />
                </div>
                <div className="App-main2-3-2">
                  <img src={assets.carbon_query_queue} alt=""  id="carbon"/>
                </div>
                <div className="App-main2-3-5">
                  <img src={assets.speaker} alt="" id="speaker"/>
                </div>
                <div className="App-main2-3-4">
                  <hr id="line2" />
                </div>
                <div className="App-main2-3-3">
                  <img src={assets.carbon_laptop} alt="" id="laptop"/>
                </div>
              </div>
            </div>
      </div>
    </>
  );
}

export default App;

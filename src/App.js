import './styles.css';
import Logo from "./images/Logo.svg";
import Dashboard from "./images/dashboard_icon.jfif";
import Rocket from "./images/Shape (1).svg";
import Logout from "./images/icon-sign-out.svg";
import Star from "./images/icon-star.svg"
import School from "./images/icon-school.svg"
import Crown from "./images/icon-crown.svg"
import Users from "./images/icon-users.svg"
import Icon from "./images/icon.svg"
import Search from "./images/icon-search.svg"
import User from "./images/User.svg"
import Trophy from "./images/icon-trophy.svg"
import Notif from "./images/icon Notification.svg"
import Flame from "./images/icon-flame.svg"
import Dot from "./images/Ellipse 2.png"
import N7 from "./images/Number7.svg"
import N2 from "./images/Number2.svg"
import Myimage from "./images/rocket.svg"
import Diamond from "./images/icon-diamond.svg"
import Arrow from "./images/icon-arrow-right.svg"
import GameCard from './Gamecard';
import Heart from "./images/icon-heart.png"
import Download from "./images/icon-download.png"
import Rectangle from "./images/Rectangle 6.svg"
import Stargame from "./images/Star game.svg"
import Content from './Content';
import Awards from "./images/Awards.svg"
function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className='Logo'>
          <img src={Logo} alt='Hello'/>
        </div>
        <div className='pages'>
          <div className='active'><img className='icon' src={Dashboard}/>DashBoard</div>
          <div className='na'><img className='icon' src={Rocket}/>Game Store</div>
          <div className='na'><img className='icon' src={Icon}/>Live Stream TV</div>
          <div className='na'><img className='icon' src={Users}/>Teams Member</div>
          <div className='na'><img className='icon' src={Crown}/>Badges</div>
          <div className='na'><img className='icon' src={School}/>My Library<img className='number' src={N2}/></div>
          <div className='na'><img className='icon' src={Star}/>Thropies <img className='number' src={N7}/></div>
        </div>
        <div className='logout'>
          
          <div><img className='icon' src={Logout}/>Logout</div>
        </div>
      </div>
      <div className="mainbar">
        <div className='navbar'>
          <div className='searchbar'>Search game..... <img src={Search}/></div>
          <div className='buttons'>
            <button className='ni'><img src={Flame}/></button>
            <button className='ni dot'><img className='thedot' src={Dot}/><img src={Notif}/></button>
            <button className='ni'><img src={Trophy}/></button>
            <button className='User'><img src={User}/></button>
          </div>
        </div>
        <div className='dashboard'>
          <div className='main-dashboard'>
            <div className='promo'>
              <div className='info'>
                <div className='smalltext'>3D Game Assets Store <br/> & Free</div>
                <div className='bigtext'>High-quality premium <br/> & free 3D-game assets.</div>
                <button className='download'><img src={Diamond}/><b>Download Assets</b></button>
              </div>
              <img className='myimage' src={Myimage}/>
            </div>
            <div className='games'>
              <div className='header'><b>Popular Games</b><img src={Arrow}/></div>
              <div className='row-1'>
                <GameCard name="Nocturnal" className="active-card"></GameCard>
                <GameCard name="The Keeper" className="na-game"></GameCard>
                <GameCard name="The Keeper" className="na-game"></GameCard>
              </div>
              <div className='row-2'>
                <GameCard name="Fear lift" className="na-game"></GameCard>
                <GameCard name="Eerness" className="na-game"></GameCard>
                <GameCard name="Eerness" className="na-game"></GameCard>
              </div>
            </div>
          </div>
          <div className='dashboard-sidebar'>
            <div className="sidebar-card">
              <img className="sd-rectangle" src={Rectangle}/>
              <div className="sd-name">
                <div className="game-name">Nocturnal
                </div>
                <div className="sd-game-info">
                    <img className="heart" src={Heart}/>
                    <div className="sf">232</div>
                    <img className="down-symbol" src={Download}/>
                    <div className="sf">146k</div>
                </div>
              </div>
            </div>
            <div className='content'>
              <Content></Content>
              <Content></Content>
              <Content></Content>
              <Content></Content>
              <Content></Content>
            </div>
            <div className='ratings'>
              <img src={Stargame}/>
              <div className='rating-details'>
                <div><b>8.2</b></div> 
                <div className='lg'>Star Game</div>
              </div>
              <img src={Awards}/>
              <div className='rating-details'>
                <div><b>12</b></div> 
                <div className='lg'>Awards Game</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

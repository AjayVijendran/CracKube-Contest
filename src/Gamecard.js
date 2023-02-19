import "./Gamecard.css"
import Heart from "./images/icon-heart.png"
import Download from "./images/icon-download.png"
import Rectangle from "./images/Rectangle 6.svg"
import Marketplace from "./images/Logo Marketplace.svg"
export default function GameCard({name,className}){
    return(
        <div className={`card ${className}`}>
            <img className="rectangle" src={Rectangle}/>
            <div className="name">
                <div className="game-name">{name}</div>
                <div className="game-info">
                    <img className="heart" src={Heart}/>
                    <div className="sf">232</div>
                    <img className="down-symbol" src={Download}/>
                    <div className="sf">146k</div>
                </div>
            </div>
            <div className="details">Its your last night shift as a forklift <br/> operator at…</div>
            <div className="card-download">
                <img src={Marketplace}/>
                <button  className="game-download">Download</button>
            </div>
        </div>
    )
}
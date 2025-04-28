import React from 'react';
import './DetailCards.css';
import HtmlIcon from '../assets/icons/html.svg';
import CssIcon from '../assets/icons/css.svg';
import JqueryIcon from '../assets/icons/jquery.svg';
import ReduxIcon from '../assets/icons/redux.svg';
import WebpackIcon from '../assets/icons/webpack.svg';
import NextJSIcon from '../assets/icons/html.svg';

//row2
import GraphQLIcon from '../assets/icons/graph.svg';
import JavaScriptIcon from '../assets/icons/javascript.svg';
import BootstrapIcon from '../assets/icons/bootstrap.svg';
import ReactIcon from '../assets/icons/react.svg';
import VueIcon from '../assets/icons/vue.svg';
import FlutterIcon from '../assets/icons/flutter.svg';

//row3
import TailwindIcon from '../assets/icons/tailwind.svg';
import SvelteIcon from '../assets/icons/svelte.svg';
import ViteIcon from '../assets/icons/vite.svg';


//backend icons
import BKIcon1 from '../assets/icons/bkend1.svg'
import BKIcon2 from '../assets/icons/bkend2.svg'
import BKIcon3 from '../assets/icons/bkend3.svg'
import BKIcon4 from '../assets/icons/bkend4.svg'
import BKIcon5 from '../assets/icons/bkend5.svg'
import BKIcon6 from '../assets/icons/bkend6.svg'
import BKIcon7 from '../assets/icons/bkend7.svg'
import BKIcon8 from '../assets/icons/bkend8.svg'
import BKIcon9 from '../assets/icons/bkend9.svg'
import BKIcon10 from '../assets/icons/bkend10.svg'
import BKIcon11 from '../assets/icons/bkend11.svg'
import BKIcon12 from '../assets/icons/bkend12.svg'
import BKIcon13 from '../assets/icons/bkend13.svg'
import BKIcon14 from '../assets/icons/bkend14.svg'
import BKIcon15 from '../assets/icons/bkend15.svg'
import BKIcon16 from '../assets/icons/bkend16.svg'



export default function RoleCards() {
  return (
    <div className="cards-container">
      <div className="detail-card">
        <div className="text-col project">
          <h2>Project Coordination</h2>
          <p  style={{width: 534}}>Project Coordinator skilled in organizing tasks, managing timelines, and supporting successful project execution.</p>
        </div>
      </div>
      <div className="detail-card">
        <div className="icons-col frontend">
          <div className="icon-row">
            <img src= {HtmlIcon} alt="HTML5" />
            <img src= {CssIcon} alt="CSS3" />
            <img src= {JqueryIcon} alt="Tailwind CSS" />
            <img src= {ReduxIcon} alt="Redux" />
            <img src= {WebpackIcon} alt="Webpack" />
            <img src= {NextJSIcon} alt="Next.js" />
          </div>
          <div className="icon-row">
            <img src= {GraphQLIcon} alt="GraphQL" />
            <img src= {JavaScriptIcon} alt="JS" />
            <img src= {ReactIcon} alt="React" />
            <img src= {BootstrapIcon} alt="Bootstrap" />
            <img src= {VueIcon} alt="Vue" />
            <img src= {FlutterIcon} alt="Flutter" />
          </div>
          <div className="icon-row">
            <img src= {TailwindIcon} alt="Tailwind" />
            <img src= {SvelteIcon} alt="Svelte" />
            <img src= {ViteIcon} alt="Vite"/>
          </div>
        </div>
        <div className="text-col frontend">
          <h2>Frontend Developer</h2>
          <p>Front-End Developer specializing in creating responsive, dynamic, and user-centric web applications using modern technologies.</p>
        </div>
      </div>
      <div className="detail-card">
      <div className="text-col backend">
          <h2>Backend Developer</h2>
          <p>Back-End Developer experienced in building scalable and secure server-side applications and APIs.</p>
        </div>
        <div className="icons-col backend">
          <div className="icon-row">
            <img src={BKIcon1} alt="Icon1" />
            <img src={BKIcon2} alt="Icon2" />
            <img src={BKIcon3} alt="Icon3" />
            <img src={BKIcon4} alt="Icon4" />
            <img src={BKIcon5} alt="Icon5" />
            <img src={BKIcon6} alt="Icon6" />
            <img src={FlutterIcon} alt="Flutter" />
          </div>
          <div className="icon-row">
            <img src={BKIcon7} alt="Icon7" />
            <img src={BKIcon8} alt="Icon8" />
            <img src={BKIcon9} alt="Icon9" />
            <img src={BKIcon10} alt="Icon10" />
            <img src={BKIcon11} alt="Icon11" />
            <img src={BKIcon12} alt="Icon12" />
            <img src={BKIcon13} alt="Icon13" />
          </div>
          <div className="icon-row">
            <img src={BKIcon14} alt="Icon14" />
            <img src={BKIcon15} alt="Icon15" />
            <img src={BKIcon16} alt="Icon16" />
          </div>
        </div>
      </div>
      <div className="detail-card">
        <div className="text-col">
          <h2>Quality Tester</h2>
          <p>Tester experienced in quality assurance, identifying defects, and ensuring optimal software performance through rigorous testing.</p>
        </div>
      </div>
      <div className="detail-card">
        <div className="text-col">
          <h2>Designer</h2>
          <p>Designer with expertise in UI design, logo creation, branding, and poster design, focused on delivering visually impactful and user-friendly solutions.</p>
        </div>
      </div>
    </div>
  );
}

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


//Testing Icons
import QTIcon1 from '../assets/icons/qtIcon1.svg'
import QTIcon2 from '../assets/icons/qtIcon2.svg'
import QTIcon3 from '../assets/icons/qtIcon3.svg'
import QTIcon4 from '../assets/icons/qtIcon4.svg'
import QTIcon5 from '../assets/icons/qtIcon5.svg'
import QTIcon6 from '../assets/icons/qtIcon6.svg'
import QTIcon7 from '../assets/icons/qtIcon7.svg'

//Design Icons
import DNIcon1 from '../assets/icons/dnIcon1.svg'
import DNIcon2 from '../assets/icons/dnIcon2.svg'
import DNIcon3 from '../assets/icons/dnIcon3.svg'
import DNIcon4 from '../assets/icons/dnIcon4.svg'
import DNIcon5 from '../assets/icons/dnIcon5.svg'
import DNIcon6 from '../assets/icons/dnIcon6.svg'
import DNIcon7 from '../assets/icons/dnIcon7.svg'

export default function RoleCards() {
  return (
    <div className="cards-container">
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
          <h2>App Development</h2>
          <p>App Developer specializing in developing intuitive and high-performance mobile applications for iOS and Android platforms.</p>
        </div>
      </div>
      <div className="detail-card">
      <div className="text-col backend">
          <h2>Web Development</h2>
          <p>Web Developer Specializing in creating responsive, dynamic, and user-centric websites and web applications using modern web technologies</p>
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
        <div className="icons-col testing">
          <div className="icon-row">
            <img src={QTIcon1} alt="Icon1" />
            <img src={QTIcon2} alt="Icon2" />
            <img src={QTIcon3} alt="Icon3" />
            <img src={QTIcon4} alt="Icon4" />
            <img src={QTIcon5} alt="Icon5" />
          </div>
          <div className="icon-row">
            <img src={QTIcon6} alt="Icon6" />
            <img src={QTIcon7} alt="Icon7" />
          </div>
        </div>
        <div className="text-col testing">
          <h2>Quality Testing</h2>
          <p>Tester experienced in quality assurance, identifying defects, and ensuring optimal software performance through rigorous testing.</p>
        </div>
      </div>
      <div className="detail-card">
        <div className="text-col design">
          <h2>Designing</h2>
          <p>Designer with expertise in UI design, logo creation, branding, and poster design, focused on delivering visually impactful and user-friendly solutions.</p>
        </div>
        <div className="icons-col design">
          <div className="icon-row">
            <img src={DNIcon1} alt="Icon1" />
            <img src={DNIcon2} alt="Icon2" />
            <img src={DNIcon3} alt="Icon3" />
            <img src={DNIcon4} alt="Icon4" />
            <img src={DNIcon5} alt="Icon5" />
          </div>
          <div className="icon-row">
            <img src={DNIcon6} alt="Icon6" />
            <img src={DNIcon7} alt="Icon7" />
          </div>
        </div>
      </div>
    </div>
  );
}

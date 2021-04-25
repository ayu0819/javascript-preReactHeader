import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import {push} from 'connected-react-router';

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes} from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const Nav = styled.div`
    position: fixed;
    top: 1.5em;
    left: 1.5em;
    background-color: #FF385C;
    z-index: 9999;
    box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
    border-radius: 50%;
    height: 4em;
    -webkit-transition: all ease-out .3s;
    transition: all ease-out .3s;
    cursor: pointer;
    width: 4em;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
`;

const NavItem = styled.div`
   width: 100%;
`;

const Toggle = styled.div`
   background-color: #fff;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const Menu = () => {
    const dispatch = useDispatch();
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

    const SignIn = [
        {
            title: 'Home',
            path: '/',
            cName: 'nav-text'
        },
        {
            title: 'About',
            path: '/about',
            cName: 'nav-text'
        },
        {
            title: 'Portfolio',
            path: '/portfolio',
            cName: 'nav-text'
        }
    ]

 return(
  <>
   <Nav>
     <FontAwesomeIcon className="bar-icon" icon={faBars} onClick={showSidebar} />
   </Nav> 
    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <NavItem onClick={showSidebar}>
       <Toggle>
        <FontAwesomeIcon className="close-icon" icon={faTimes} />
       </Toggle>
        <ul>
         {SignIn.map((item, index) => {
          return (
            <li key={index} className={item.cName}><a onClick= {() => dispatch(push(item.path))}><span>{item.title}</span></a></li>
          )
          })}
        </ul>
      </NavItem>
    </div>
  </>
)
}

export default Menu;
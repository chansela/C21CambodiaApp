import React, { Component } from "react";
import objects from 'objects';
import Slider from '../slider.js';
import '../build/horizontal.css';
import '../skin/slider-animations.css';
import Drawer from "../lib/drawer.jsx";
import "../skin/global.css";
import "../skin/invite.css";
import "../skin/mini.css";
import '../skin/scss/style.css';
import Collapsible from 'react-collapsible';
//import { ReactSlackChat } from 'react-slack-chat';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Modal from 'react-awesome-modal'
import { Button, Collapse, h1, p, Carousel, CardBody, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
//import Drawer from 'react-motion-drawer';
import WxLogin from 'wxlogin.react';
import {browserHistory} from 'react-router'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
//import {PostData} from './PostData';
import { Redirect,Link } from 'react-router-dom';
import image from "../skin/Images/planurahuette.jpg";
import nabar from "../skin/Images/nabar.png"
import home from "../skin/Images/home.png"
import settings from "../skin/Images/settings.png"
import question from "../skin/Images/question-mark.png"
import userprofile from "../skin/Images/user.png"
import hold from "../skin/Images/hold.png"
import contact from "../skin/Images/contact.png"
import about from "../skin/Images/warning.png"
import Sr from '../skin/Images/vip-dingzhi.png'
import "../skin/style2.css";
import "../skin/reset.css";
import superagent from 'superagent';
const items = [
  {


    src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
    altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
  },
  {
    src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
    altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
  },
  {
    src: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2.jpg',
    altText: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
    caption: 'https://www.pioneerpm.com/wp-content/uploads/2014/03/home-banner-2',
  },
];

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase();
var isMobile = false;
for (var i = 0; i < mobileAgent.length; i++) {
  if (browser.indexOf(mobileAgent[i]) != -1) {
    isMobile = true;
    //alert(mobileAgent[i]); 
    window.location.href = '#/500';
    break;
  }
}





class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    
  }
  state = {
    data: [

    ],
    country_id: '',
    end_price: '',
    project_type_id: '',
    rent_or_buy: "",
    room_amount: '',
    sort: "",
    start_price: '',
    title: "",
    photo: '',
    collapse: false,
    accordion: [true, false, false],
    username: '',
    redirect: false,
    visible: false,
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc",
    count: 10,
    openLeft: false,
    openRight: false,
    projectalllist: [],
    option_types: [],
    drawerStyle: `
    {
      "background": "#beaf87",
      "boxShadow": "rgba(0, 0, 0, 0.188235) 0px 0px 0px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
    }`,
    relativeWidth: false,
    width: 300,
    noTouchOpen: false,
    noTouchClose: false,
  };
  setWidth = e => {
    this.setState({
      width: Number(e.target.value) || e.target.value
    });
  };
  componentDidMount() {
    let data = sessionStorage.getItem('userData2');
    let data1 = sessionStorage.getItem('userData');
    console.log("test",data);
    this.setState({
      photo: data,
      username: data1
    })
  }
  handleSubmit(e) {
    sessionStorage.setItem("country_id", this.state.country_id);
    sessionStorage.setItem("country_name", this.state.country_name);
    sessionStorage.setItem("end_price", this.state.end_price);
    sessionStorage.setItem("project_type_id", this.state.project_type_id);
    sessionStorage.setItem("rent_or_buy", this.state.rent_or_buy);
    sessionStorage.setItem("room_amount", this.state.room_amount);
    sessionStorage.setItem("sort", this.state.sort);
    sessionStorage.setItem("start_price", this.state.start_price);
    sessionStorage.setItem("title", this.state.title);
    window.location.href = '#/search'
  }
 testhandle(){
  this.props.history.push('/#/app/users');
  this.setState(this.refs);
 }
  handleLogout() {
    sessionStorage.removeItem('userData2');
    sessionStorage.removeItem('userData');

    this.setState(this.refs);
  }

  setTouch = e => {
    this.setState({
      [e.target.name]: !e.target.checked
    })
  }
  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  openModal() {
    this.setState({
      visible: true
    });
  }
  searchTitl = (event) => {
    this.setState({ title: event.target.value })
  }
  countrychange = (event) => {
    this.setState({ country_id: event.target.value })

    console.log(event.target.value);
    let cId = event.target.value;
    if(cId ==0) {
      this.setState({ option_types: [] });
    } else {
      this.state.projectalllist.map((country) => {
        console.log(country)
        if (country.country_id == cId) {
          this.setState({ option_types: country.types });
        }
      });
      console.log(this.state.option_types);
    }
    
  }
  projecttypeidchange = (event) => {
    this.setState({ project_type_id: event.target.value })
  }
  rentorbuychange = (event) => {
    this.setState({ rent_or_buy: event.target.value })
  }
  roomchange = (event) => {
    this.setState({ room_amount: event.target.value })
  }


  shortchange = (event) => {
    this.setState({ sort: event.target.value })
  }
  startpricechange = (event) => {
    this.setState({ start_price: event.target.value })
  }
  endpricechange = (event) => {
    this.setState({ end_price: event.target.value })
  }
  closeModal() {
    this.setState({
      visible: false
    });
  }

  createSelectItems() {
    let test = this.state.projectalllist.map((typetep) => {
      let cId = this.state.country_id
      this.state.projectalllist.map((country) => {
        if (country.country_id == cId) {
          country.types.map((type) => {
            return (
              <option value={type.id}>{type.type}</option>
            );
          })
        }
      });
    });
  }

  onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
  }
  
  componentDidMount() {

    console.log(sessionStorage.getItem("country_id"))
    superagent
      .get(`https://century21api.herokuapp.com/api/type-country-project`)
      //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
      // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken}
      // .send({ country_id: sessionStorage.getItem("country_id"), project_type_id: sessionStorage.getItem("project_type_id"),end_price:sessionStorage.getItem("end_price"),rent_or_buy:sessionStorage.getItem("end_price"),room_amount:sessionStorage.getItem("room_amount"),sort:sessionStorage.getItem("sort"), start_price:sessionStorage.getItem("start_price"),title: sessionStorage.getItem("title") })

      .end((err, res) => {
        if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }

        this.setState({
          projectalllist: res.body.result

        });
      });
  }
  setDrawerStyle = e => {
    e.preventDefault()
    this.setState({
      drawerStyle: this.drawerStyleRef.value
    })
  }
  render() {
    
    let nabarview = null;
    if (this.state.photo === '') {

    } else {
      nabarview = <div class="flex-0-0-auto"><a onClick={() =>
        this.setState({ openLeft: !openLeft, openRight: false })}><img src={nabar} style={{ marginTop: "30px", paddingRight: '30px', width: '55px' }} /></a></div>

    }
    let Login = null;
    let Null = null;
    if (this.state.photo === '') {
      Login = <li class="login">
        <a href="http://www.shitonghk.com/login">  Login
   </a><a> | </a><a href="http://www.shitonghk.com/register">Register</a>
      </li>
    } else {

      Login = <li class="login">
        <a href="http://www.shitonghk.com/login">  Wellcome:
   </a><a> | </a><a href="http://www.shitonghk.com/register">{this.state.username}</a>
      </li>

    }
    const {
      drawerStyle: stringDrawerStyle,
      openLeft,
      openRight,
      noTouchOpen,
      noTouchClose
    } = this.state;

    let drawerStyle = {}
    try {
      drawerStyle = JSON.parse(stringDrawerStyle)
    } catch (err) {
      console.error('Error parsing JSON: ', err)
    }

    const drawerProps = {
      overlayColor: "rgba(255,255,255,0.6)",
      drawerStyle
    };

    return (

      <header id="header" >
        <div class="container1 header flex">
          {nabarview}
          <div class="flex-0-0-auto"><a href="#/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Century_21_seal_2018.svg/220px-Century_21_seal_2018.svg.png" style={{ marginTop: "10px", width: '60px' }} /></a></div>
          <div class="flex-1-1-0 nav1">
            <ul>


              <li class="nav-on"><a href="#/">Home</a></li>
              <li class="fire nav1-li ">
                <a class="nex-ico" href="javascript:void(0);">Activity</a>
                <ul class="">
                  <li><a href="javascript:void(0);">马来西亚</a><a href="http://www.shitonghk.com/au-1-0-1467-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html">泰国</a><a href="http://www.shitonghk.com/au-1-0-1468-0-0-0-0-0-0-0-0-0-0-0-0-0-0.html">柬埔寨 </a></li>
                </ul>
              </li>
              <li><a href="javascript:void(0);">News</a></li>

              <li class="fire1"><div class="searchicon searchicon2"><span class="s_span2 fl" onClick={() => this.openModal()}></span><input type="text" name="search" onClick={() => this.toggleAccordion(1)} value={this.state.title} onChange={this.searchTitl.bind(this)}></input></div></li>

            </ul>




          </div>
          <div class="flex-0-0-auto core">
            <ul>

              {Login}


              <li class="kefuphone">
                <div class="div1">
                  <div class="searchicon searchicon1">
                    <div class="header_line fl">400-688-6160</div>
                    <div class="header_line fl">400-688-6160</div>

                    <div class="header_search_btn fl">

                    </div>

                  </div>

                </div>
              </li>

            </ul>


          </div>

        </div>
        <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
          <CardBody>
            <div class="vip-dingzhi clear overflow mb20">
              <dl>
                <dt class="vip-title">没有相中合适的项目，就来量身定制吧！</dt>
              </dl>
              <dl class="xuqiu-liu">
                <dd>Region</dd>

                <dd>Categories</dd>
                <dd>Type</dd>
                <dd>Room</dd>
                <dd>Short</dd>
                <dd></dd>
              </dl>

              <dl class="vip-select">

                <select id="Region" value={this.state.country_id} onChange={this.countrychange.bind(this)}>
                 
                  <option value="0" style={{ Color: '#fff' }} >Region ...</option>
                  {this.state.projectalllist.map((typetep) => {

                    return (
                      <option value={typetep.country_id}>{typetep.country_name}</option>
                    );
                  })}
                </select>

                <select id="Categories" value={this.state.project_type_id} onChange={this.projecttypeidchange.bind(this)}>
                  <option value="0">Categories ...</option>

                  {this.state.option_types.map((type) => {

                    return (
                      <option value={type.id}>{type.type}</option>
                    );
                  })}

                </select>

                <select id="Type" value={this.state.rent_or_buy} onChange={this.rentorbuychange.bind(this)}>
                  <option value=" ">Type ...</option>
                  <option value="Rent">Rent</option>
                  <option value="Buy">Buy</option>

                </select>
                <select id="Room" value={this.state.room_amount} onChange={this.roomchange.bind(this)}>
                  <option value="">Room ...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="else">Else</option>
                </select>
                <select id="Short" value={this.state.sort} onChange={this.shortchange.bind(this)}>
                  <option value="">Short ...</option>

                  <option value="phtl">Price high to low</option>
                  <option value="plth">Price low to high</option>
                  <option value="grr">GRR</option>

                </select>
                <span>√（Required）</span>
              </dl>


              <dl class="vip-xuqiu">
                <dt>
                 <button class="tj-xuqiu" type="submit" onClick={this.handleSubmit.bind(this)} >Search</button>
                </dt>
                <dd>
                  <input class="vip-name" name="" id="" placeholder="必填" size="" value={this.state.start_price} onChange={this.startpricechange.bind(this)} />
                </dd>
                <dd>
                  <input class="vip-tel" name="" id="" placeholder="必填" size="" value={this.state.end_price} onChange={this.endpricechange.bind(this)} />
                </dd>
                <dd>
                  <textarea class="vip-text" name="" id="" ></textarea>
                </dd>
              </dl>
            </div>
          </CardBody>
        </Collapse>

        {!openRight &&
          <Drawer
            {...drawerProps}
            width={this.state.width}
            fadeOut
            open={openLeft}
            onChange={open => this.setState({ openLeft: open })}
            noTouchOpen={noTouchOpen}
            noTouchClose={noTouchClose}
          >
            <div style={{ width: "200%" }}>

            </div>
            <div style={{ paddingTop: "2em", paddingLeft: "2em" }}>

              <img src={this.state.photo} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </div>


            <div style={{ padding: "0.2em", paddingLeft: "2.5em" }}>
              <h3><strong>{this.state.username}</strong></h3>

            </div>

            <ul style={{ backgroundColor: '#fff', height: '430px', float: 'Left', width: '35%' }}>
              <li style={{ padding: "0.3em", paddingTop: "1em", marginLeft: "2.5em" }}>    <img src={home} className="" style={{ paddingRight: '20px' }} alt="admin@bootstrapmaster.com" /></li>
              <li style={{ padding: "0.3em", paddingTop: "1em", marginLeft: "2.5em" }}>    <img src={question} className="" style={{ paddingRight: '20px' }} alt="admin@bootstrapmaster.com" /></li>

              <li style={{ padding: "0.3em", paddingTop: "1em", marginLeft: "2.5em" }}>    <img src={userprofile} className="" style={{ paddingRight: '20px' }} alt="admin@bootstrapmaster.com" /></li>
              <li style={{ padding: "0.3em", paddingTop: "1em", marginLeft: "2.5em" }}>    <img src={hold} className="" style={{ paddingRight: '20px' }} alt="admin@bootstrapmaster.com" /></li>
              <li style={{ padding: "0.3em", paddingTop: "1em", marginLeft: "2.5em" }}>    <img src={contact} className="" style={{ paddingRight: '20px' }} alt="admin@bootstrapmaster.com" /></li>
              <li style={{ padding: "0.3em", paddingTop: "1em", marginLeft: "2.5em" }}>    <img src={about} className="" style={{ paddingRight: '20px' }} alt="admin@bootstrapmaster.com" /></li>
              <li style={{ padding: "0.3em", paddingTop: "1em", marginLeft: "2.5em" }}>    <img src={settings} className="" style={{ paddingRight: '20px' }} alt="admin@bootstrapmaster.com" /></li>



            </ul>
            <ul style={{ backgroundColor: '#fff', height: '430px' }}>
              <li style={{ padding: "1em", marginLeft: "2.5em", borderBottom: "1.3px solid #beaf87" }}>Home</li>
              <li style={{ padding: "1em", marginLeft: "2.5em", borderBottom: "1.3px solid #beaf87" }}>Inquiry</li>
              <li style={{ padding: "1em", marginLeft: "2.5em", borderBottom: "1.3px solid #beaf87" }}>Profile</li>
              <li style={{ padding: "1em", marginLeft: "2.5em", borderBottom: "1.3px solid #beaf87" }}>Privacy</li>
              <li style={{ padding: "1em", marginLeft: "2.5em", borderBottom: "1.3px solid #beaf87" }}>Contact</li>
              <li style={{ padding: "1em", marginLeft: "2.5em", borderBottom: "1.3px solid #beaf87" }}>About Us</li>
              <li style={{ padding: "1em", marginLeft: "2.5em", borderBottom: "1.3px solid #beaf87" }}>Settings</li>
            </ul>
            <div style={{ padding: "0.2em", paddingLeft: "3em" }}>
              <h3><strong>Powered by Zillennium</strong></h3>

            </div>
          </Drawer>}
        {!openLeft &&
          <Drawer
            right
            width={this.state.width}
            {...drawerProps}
            open={openRight}
            onChange={open => this.setState({ openRight: open })}
            noTouchOpen={noTouchOpen}
            noTouchClose={noTouchClose}
          >
            <div style={{ width: "100%" }}>

            </div>
            <div style={{ padding: "2em 2em 0 2em" }}>
              <h3 style={{ paddingBottom: "20px" }}><strong>Categories</strong></h3>
              <Tabs class="tabs1 tc"
                defaultTab="All"
                onChange={(tabId) => { console.log(tabId) }}
              >
                <TabList >
                  <Tab style={{ paddingBottom: "30px", height: "20px", width: "102px", border: "1.3px solid #beaf87", marginRight: "10px" }} tabFor="All">All</Tab>

                  <Tab style={{ paddingBottom: "30px", height: "20px", width: "102px", border: "1.3px solid #beaf87", marginRight: "10px" }} tabFor="Condo">Condo</Tab>



                </TabList>
                <TabPanel tabId="All">
                  <p>Tab All content</p>
                </TabPanel>
                <TabPanel tabId="Condo">
                  <p>Tab 1 content</p>
                </TabPanel>

              </Tabs>
            </div>

            <div style={{ padding: "2em 2em 0 2em" }}>
              <h3 style={{ paddingBottom: "20px" }}><strong>Type</strong></h3>
              <ul style={{ paddingBottom: "30px" }} class="tabs1 tc"><li1 class=""><a href="javascript:;">Rent</a></li1><li1 class=""><a href="javascript:;">Buy</a></li1></ul>

            </div>
            <div style={{ padding: "2em 2em 0 2em" }}>
              <h3 style={{ paddingBottom: "20px" }}><strong>Room</strong></h3>
              <ul style={{ paddingBottom: "30px" }} class="tabs1 tc"><li1 class=""><a href="javascript:;">1</a></li1><li1 class=""><a href="javascript:;">2</a></li1></ul>
              <ul style={{ paddingBottom: "7px" }}></ul>

              <ul style={{ paddingBottom: "30px" }} class="tabs1 tc"><li1 class=""><a href="javascript:;">3</a></li1><li1 class=""><a href="javascript:;">4</a></li1></ul>
              <ul style={{ paddingBottom: "7px" }}></ul>

              <ul style={{ paddingBottom: "30px" }} class="tabs1 tc"><li1 class=""><a href="javascript:;">5</a></li1><li1 class=""><a href="javascript:;">6</a></li1></ul>
              <ul style={{ paddingBottom: "7px" }}></ul>

              <ul style={{ paddingBottom: "30px" }} class="tabs1 tc"><li1 class=""><a href="javascript:;">Else</a></li1></ul>

            </div>
            <div style={{ padding: "2em 2em 0 2em" }}>
              <h3 style={{ paddingBottom: "20px" }}><strong>Short</strong></h3>
              <ul style={{ paddingBottom: "30px" }} class="tabs1 tc"><li1 class=""><a href="javascript:;">Default</a></li1><li1 class=""><a href="javascript:;"> High to Low</a></li1></ul>
              <ul style={{ paddingBottom: "7px" }}></ul>

              <ul style={{ paddingBottom: "30px" }} class="tabs1 tc"><li1 class=""><a href="javascript:;"> Low to high</a></li1><li1 class=""><a href="javascript:;">Total</a></li1></ul>
              <ul style={{ paddingBottom: "7px" }}></ul>

              <ul style={{ paddingBottom: "30px" }} class="tabs1 tc"><li1 class=""><a href="javascript:;">String to title</a></li1><li1 class=""><a href="javascript:;">GRR</a></li1></ul>
              <ul style={{ paddingBottom: "7px" }}></ul>


            </div>
          </Drawer>}
      </header>
    )
  }
}

export default Header;

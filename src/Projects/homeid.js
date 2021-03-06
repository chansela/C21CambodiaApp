import React, { Component } from "react";
import Slider from '../slider.js';
import '../build/horizontal.css';
import '../skin/slider-animations.css';
import Drawer from "../lib/drawer.jsx";

import "../skin/global.css";
import "../skin/invite.css";
import {
   
    Button,
    ButtonDropdown,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
   
  
  
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row,
  } from 'reactstrap';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import Inquirey from './inquirey';
import "../skin/mini.css";
import '../skin/scss/style.css';
import '../skin/Chart.css';
import Header from './header'
import FloatingMenu from './floating'
import Flooter from './flooter'

//import { ReactSlackChat } from 'react-slack-chat';
import imagenotavaiable from "../skin/Images/no_photo_available.gif";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import Modal from 'react-awesome-modal'
import {  h1, p, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from 'reactstrap';
//import Drawer from 'react-motion-drawer';
import image from "../skin/Images/planurahuette.jpg";
import imagephone from "../skin/Images/index.png";
import PhoneInput, { formatPhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'

import 'react-phone-number-input/style.css'
//import PhoneInput from 'react-phone-number-input'
import FloatingMenuItem from './floating'
import superagent from 'superagent';
import "../skin/style2.css";
import "../skin/reset.css";

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



class homeid extends Component {


    constructor(props) {
        super(props);

    }
    state = {
        data: [],
        data1: [],
        country:'',
        issue:'',
        nameinq:'',
        phone:'',
        id: '',
        eventlist:[],
        name: '',
        projectalllist: [],
        nameproject: '',
        grr: '',
        countryproject: '',
        gettop4: [],
        idselectt: '',
        thumbnail: '',
        start_price: '',
        end_price: '',
        project_type: '',
        typeAll: [
                {"id": 0, "type": "All"}
              
           ],//, "list"= [], "pagination"= ["page"= 1, "limit" = 10]];

        visible: false,
        editIdx: -1,
        columnToSort: "",
        sortDirection: "desc",
        count: 10,

        visible: false,
        activeItem: 'home',
        openLeft: false,
        openRight: false,
        Getdata: [],
        limit: 10,
        page: 1,
        totalpage: '',
        drawerStyle: `
    {
      "background": "#F9F9F9",
      "boxShadow": "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
    }`,
        relativeWidth: false,
        width: 300,
        noTouchOpen: false,
        noTouchClose: false,
    };
    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    setWidth = e => {
        this.setState({
            width: Number(e.target.value) || e.target.value
        });
    };

    setTouch = e => {
        this.setState({
            [e.target.name]: !e.target.checked
        })
    }
    loadMore = (typetep, countryid) => {
       
        
    }
    loadMoretap = () => {

        this.setState(prevState => ({
            // searchTerm=event.target.value,
            limit: prevState.limit + 10,
        }), this.componentDidMount)

    }
    countrychange = (event) => {
        this.setState({ country: event.target.value })
    }
    nameinqchange = (event) => {
        this.setState({ nameinq : event.target.value })
    }
    issuechange = (event) => {
        this.setState({ issue : event.target.value })
    }
    phonechange = (event) => {
        this.setState({ phone : event.target.value })
    }
   inquery(){
    superagent
    .post(`https://century21api.herokuapp.com/api/user-question`)
    //     //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
    //     // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    //     //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
        .send({ country: this.state.country, issue: this.state.issue, name: this.state.nameinq, phone: '05000505005' })

        .end((err, res) => {
           if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
           this.setState({
              

            });
        });
   }
    componentDidMount() {
        let meetupID = Number(this.props.match.params.id);
        const { limit, page } = this.state;
       
        superagent
        .get(`https://century21api.herokuapp.com/api/events`)
        //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
        // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken}
       // .send({ country_id: sessionStorage.getItem("country_id"), project_type_id: sessionStorage.getItem("project_type_id"),end_price:sessionStorage.getItem("end_price"),rent_or_buy:sessionStorage.getItem("end_price"),room_amount:sessionStorage.getItem("room_amount"),sort:sessionStorage.getItem("sort"), start_price:sessionStorage.getItem("start_price"),title: sessionStorage.getItem("title") })
      
        .end((err, res) => {
            if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
          
             this.setState({
                 eventlist: res.body.result,
                 
      
             });
        });




        superagent
            .get(`https://century21api.herokuapp.com/api/projects-forweb?limit=10&page=1`)
            //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
            // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
            //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
            .end((err, res) => {
                if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
                this.setState({
                    Getdata: res.body.result,
                  
                });
               

                 // console.log(test);
                let country = this.state.Getdata[0];
                let type = country.project_type[0];

                console.log(this.state.Getdata[0].project_type);
               //alert(country.country_id)

               //type.id = 0;
               
               this.getProjectTypeList(country, type);


            });
                }

    getProjectTypeList(country, type) {
//         let c = this.state.Getdata.map((count)=>{
// if(country.country_id==count.id)
// return count;
//         });
const { limit, page } = this.state;
//         let t= c.map((tt)=>{
// if(type.id==tt.id)
// return tt;
//         });
sessionStorage.setItem("country_id", country.country_id);

sessionStorage.setItem("end_price", '');
sessionStorage.setItem("project_type_id", type.id);
sessionStorage.setItem("rent_or_buy", '');
sessionStorage.setItem("room_amount", '');
sessionStorage.setItem("sort", '');
sessionStorage.setItem("start_price", '');
sessionStorage.setItem("title", '');
console.log(country.country_id,type.id)
        superagent
                .post(`https://century21api.herokuapp.com/api/projects?limit=${type.paging.limit}&page=${type.paging.page}`)
                //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
                // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
                //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
                .send({ country_id: country.country_id, project_type_id: type.id })

                .end((err, res) => {
                    if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
                    let test = res.body.paging;
                    let typeList = res.body.result;
                    console.log("DATA");
                    console.log(typeList,test);

                     this.setState({
                    projectalllist: res.body.result,
                    page: res.body.paging.page,
                    totalpage:res.body.paging.total_page


                    });
                });
                superagent
        .post(`https://century21api.herokuapp.com/api/search?limit=4&page=1`)
        //     //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
        //     // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        //     //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
            .send({ title: null, country_id: country.country_id, project_type_id: type.id, sort: "plth" })

            .end((err, res) => {
               if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
               this.setState({
                   gettop4: res.body.result

                });
            });
    }

    clickme(typetep, countryid) {

        this.getProjectTypeList(countryid, typetep);
        // const { limit, page } = this.state;
        // console.log(Number(this.props.match.params.id))
        // superagent
        //     .post(`https://century21api.herokuapp.com/api/search?limit=4&page=1`)
        //     //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
        //     // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        //     //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
        //     .send({ title: null, country_id: countryid.country_id, project_type_id: typetep.id, sort: "plth" })

        //     .end((err, res) => {
        //         if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
        //         this.setState({
        //             gettop4: res.body.result

        //         });
        //     });
        // superagent
        //     .post(`https://century21api.herokuapp.com/api/projects?limit=${limit}&page=${page}`)
        //     //  .set('Authorization', `Bearer ${this.getAuthenticationToken()}`)
        //     // .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
        //     //.set('Authorization', 'Bearer perm: {this.getAuthenticationToken})
        //     .send({ country_id: countryid.country_id, project_type_id: typetep.id })

        //     .end((err, res) => {
        //         if (err) { this.setState({ errorMessage: 'Cannot retrieve data form server' }); return; }
        //         this.setState({
        //             projectalllist: res.body.result

        //         });
        //     });
    }
    Clickcountry(countryid) {
        let typetep =  this.state.Getdata[0].project_type[0];
        this.getProjectTypeList(countryid, typetep);
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    setDrawerStyle = e => {
        e.preventDefault()
        this.setState({
            drawerStyle: this.drawerStyleRef.value
        })
    }
    render() {
        const { phone } = this.state
        
        let loadMoredata = null
        if (this.state.page == this.state.totalpage) {
            loadMoredata = <li class="bin">
                <a >No More</a>
            </li>
        } else {
            loadMoredata = <li class="bin" onClick={this.loadMore.bind(this)}><a href="#/Search">More</a>
             </li>
        }
        const { visible } = this.state
        const coutrytpanel = this.state.Getdata.map((countrypanelid) => {

            return (
                <TabPanel tabId={countrypanelid.country_id}>
                    <div class="container1">

                        <div class="hot house">



                            <Tabs class="tabs1 tc"
                             
                            // onChange={(tabId) =>{console.log(tabId) ,this.clickme.bind(this,tabId)} }

                            // onChange={this.clickme.bind(this,tabId)}
                            defaultTab="0"
                            onChange={(tabId) => { console.log(tabId) }}
                            >
                                <TabList style={{ backgroundColor: 'transparent', paddingLeft: '250px', fontSize: '16px', marginTop: '-0px', lineHeight: '2px' }}>
                                     {countrypanelid.project_type.map((typetep) => {

                                        return (

                                            <a onClick={this.clickme.bind(this, typetep, countrypanelid)} >  <Tab style={{ backgroundColor: 'transparent', paddingLeft: '50px', paddingRight: '50px' }} tabFor={String(typetep.id)} >{typetep.type.charAt(0).toUpperCase() + typetep.type.slice(1)}</Tab></a>

                                        );
                                    })}

                                </TabList>
                             
                                {countrypanelid.project_type.map((headers) => {
                                    return (

                                        <TabPanel tabId={headers.id}>
                                            <p>Tab 1 content</p>
                                        </TabPanel>

                                    );
                                })}

                            </Tabs>

                            <div style={{ display: 'none' }} class="img">
                                <ul class="imgTop">

                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/279.html">
                                                <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>金边“汤臣一品”-香格里拉公寓</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>金边核心商务地段,新加坡豪利开放,香格里拉比邻</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/279.html">
                                                <h3>The peak坐落在柬埔寨金边的中心地带，毗邻河畔大道，前往永旺梦乐城，金界酒店、国民议会大楼、外交部等地仅需步行几分钟。
                    </h3>
                                                <p><span>42㎡</span> <span>公寓 </span> <span>约14286RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/280.html">
                                                <img src="Images/7d21101f7118a39489fbcee997474c98.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>100万买金边“陆家嘴”首选—【钻石双星】</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>柬埔寨“陆家嘴”,三年包租24%服务,金边富人区</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/280.html">
                                                <h3>国际开发商联手巨献 擎天136米双星地标 开发商提供4年24%保证回酬金额
                    </h3>
                                                <p><span>46㎡</span> <span>公寓 </span> <span>约18043RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/278.html">
                                                <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>柬埔寨首相府旁地标公寓—Skyline</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>首相府旁的家,3-5年包租18%,金融核心：玛卡拉区</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/278.html">
                                                <h3>坐落在金边权力中心—首相府后面。北靠首相府，东邻中央市场，毗邻商业中心和金融中心，2公里到达金边皇宫、国家博物馆。
                    </h3>
                                                <p><span>77㎡</span> <span>公寓 </span> <span>约12987RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>
                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/331.html">
                                                <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>金边·星汇城Star City：10万美金首选项目</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>毗邻国际机场,丰富的生活配套,水系园林生态设计</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/331.html">
                                                <h3>10万美金首选项目，包租三年 净回报6%,
                    </h3>
                                                <p><span>51㎡</span> <span>公寓 </span> <span>约12549RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>




                                </ul>
                            </div>
                            <div class="img" style={{ display: 'block' }}>
                                <ul class="imgTop">
                                    {this.state.gettop4.map((top4) => {
                                        if(top4.thumbnail==null){
                                            return (


                                                <li key={top4.id} class="fl" style={{ margin: '2px' }}>
                                                    <div class="imgShow">
                                                        <a href={`#/${top4.id}`}>
                                                            <img src = "https://www.ecolab.com/Areas/EcolabSite/img/catalog-default-img.gif"  alt="" width="620" />
                                                            <div class="zhezhao"></div>
                                                            <div class="imgInfo">
                                                                <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>{top4.name}</h1>
                                                                <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>{top4.end_price}</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="descShow tc">
                                                        <a href={`#/${top4.id}`}>
                                                            <h3>{top4.name}
                        </h3>
                                                            <p><span>Price</span> <span>{top4.start_price}$ -</span> <span>{top4.end_price}$</span></p>
                                                            <div class="detail tc">Detail</div>
                                                        </a>
                                                    </div>
                                                </li>
    
    
                                            );
                                        }else{
                                            return (


                                                <li key={top4.id} class="fl" style={{ margin: '2px' }}>
                                                    <div class="imgShow">
                                                        <a href={`#/${top4.id}`}>
                                                            <img src={top4.thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = "https://www.ecolab.com/Areas/EcolabSite/img/catalog-default-img.gif" }} alt="" width="620" />
                                                            <div class="zhezhao"></div>
                                                            <div class="imgInfo">
                                                                <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>{top4.name}</h1>
                                                                <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>{top4.end_price}</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div class="descShow tc">
                                                        <a href={`#/${top4.id}`}>
                                                            <h3>{top4.name}
                        </h3>
                                                            <p><span>Price</span> <span>{top4.start_price}$ -</span> <span>{top4.end_price}$</span></p>
                                                            <div class="detail tc">Detail</div>
                                                        </a>
                                                    </div>
                                                </li>
    
    
                                            );
                                        }
                                       
                                    })}
                                </ul>
                            </div>
                            <div class="img" style={{ display: 'none' }}>
                                <ul class="imgTop">


                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/279.html">
                                                <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>The peak坐落在柬埔寨金边的中心地带，毗邻河畔大道，前往永旺梦乐城，金界酒店、国民议会大楼、外交部等地仅需步行几分钟。</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>金边核心商务地段,新加坡豪利开放,香格里拉比邻</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/279.html">
                                                <h3>The peak坐落在柬埔寨金边的中心地带，毗邻河畔大道，前往永旺梦乐城，金界酒店、国民议会大楼、外交部等地仅需步行几分钟。
                    </h3>
                                                <p><span>42㎡</span> <span>公寓 </span> <span>约14286RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>

                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/280.html">
                                                <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>国际开发商联手巨献 擎天136米双星地标 开发商提供4年24%保证回酬金额</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>柬埔寨“陆家嘴”,三年包租24%服务,金边富人区</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/280.html">
                                                <h3>国际开发商联手巨献 擎天136米双星地标 开发商提供4年24%保证回酬金额
                    </h3>
                                                <p><span>46㎡</span> <span>公寓 </span> <span>约18043RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>

                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/278.html">
                                                <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>坐落在金边权力中心—首相府后面。北靠首相府，东邻中央市场，毗邻商业中心和金融中心，2公里到达金边皇宫、国家博物馆。</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>首相府旁的家,3-5年包租18%,金融核心：玛卡拉区</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/278.html">
                                                <h3>坐落在金边权力中心—首相府后面。北靠首相府，东邻中央市场，毗邻商业中心和金融中心，2公里到达金边皇宫、国家博物馆。
                    </h3>
                                                <p><span>77㎡</span> <span>公寓 </span> <span>约12987RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>

                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/331.html">
                                                <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>10万美金首选项目，包租三年 净回报6%,</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>毗邻国际机场,丰富的生活配套,水系园林生态设计</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/331.html">
                                                <h3>10万美金首选项目，包租三年 净回报6%,
                    </h3>
                                                <p><span>51㎡</span> <span>公寓 </span> <span>约12549RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                            <div class="img" style={{ display: 'none' }}>
                                <ul class="imgTop">


                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/334.html">
                                                <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>西港永远唯一的沙滩之上旅游综合体项目，投资西港海滨公寓的唯一机会</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>滨海亲水豪宅,360°全景海岸风景</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/334.html">
                                                <h3>西港永远唯一的沙滩之上旅游综合体项目，投资西港海滨公寓的唯一机会
                    </h3>
                                                <p><span>55㎡</span> <span>公寓 </span> <span>约21818RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>

                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/336.html">
                                                <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>泰荣·西港城位于西港胜利海滩，毗邻西哈努克港省政府，生态环境优美，地理位置绝佳，升值潜力巨大。</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>稀缺,升值潜力巨大</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/336.html">
                                                <h3>泰荣·西港城位于西港胜利海滩，毗邻西哈努克港省政府，生态环境优美，地理位置绝佳，升值潜力巨大。
                    </h3>
                                                <p><span>30㎡</span> <span>公寓 </span> <span>约13333RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>

                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/338.html">
                                                <img src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130px auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>唯一一栋没有赌场的高层公寓，建筑规范布局合理</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>稀缺,海景豪宅</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/338.html">
                                                <h3>唯一一栋没有赌场的高层公寓，建筑规范布局合理
                    </h3>
                                                <p><span>0㎡</span> <span>公寓 </span> <span>约0RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>

                                    <li class="fl" style={{ margin: '2px' }}>
                                        <div class="imgShow">
                                            <a href="http://www.shitonghk.com/au/337.html">
                                                <img src="https://amp.businessinsider.com/images/5b75a356e199f336008b528b-750-563.jpg" alt="" width="620" />
                                                <div class="zhezhao"></div>
                                                <div class="imgInfo">
                                                    <h1 style={{ width: '400px', margin: '130p auto 20px auto', overflow: 'hidden', height: '32px', textAlign: 'center' }}>距离Sokha度假村10分钟，拥有壮观的海、山与市景，属永久地契</h1>
                                                    <p style={{ width: '610px', textAlign: 'center', height: '30px' }}>稀缺,永久地契</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="descShow tc">
                                            <a href="http://www.shitonghk.com/au/337.html">
                                                <h3>距离Sokha度假村10分钟，拥有壮观的海、山与市景，属永久地契
                    </h3>
                                                <p><span>0㎡</span> <span>公寓 </span> <span>约0RMB/㎡起</span></p>
                                                <div class="detail tc">查看详情</div>
                                            </a>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div>




                        <div class="news hot" style={{ width: ' 1182px', marginLeft: 'auto', marginRight: 'auto' }}>
                            <div class="title tc">
                                <h1>Overseas information</h1>
                                <p>Master the latest information and activities, and look at the world</p>
                            </div>

                            <div class="newRight fl">
                                <div class="left fl">
                                    {this.state.projectalllist
                                        .filter((listprojeect1, index) => (index < 1))
                                        .map((listprojeect1) => {
                                            if(listprojeect1.thumbnail  == null){
                                                return (
                                                    <div key={listprojeect1.id} class="donghua">
    
    
    
                                                        <a href={`#/${listprojeect1.id}`}>
                                                            <img src="https://www.soltecventures.com/images/no_image_available.gif" alt="" width="100%" height="300" />
                                                            <div class="toumingtiao"></div>
                                                            <div class="imgInfo">
                                                                <h1>{listprojeect1.name}</h1>
                                                                <p>{listprojeect1.grr}</p>
                                                            </div>
    
                                                            <div class="info">
                                                                <p>
                                                                    如果你资金量不是很大，又想对冲人民币贬值的压力，完全可以了解下柬埔寨的房产市场。本文是根据一个在柬埔寨工作生活四年、资深房产投资客的访谈整理而成，希望对你有所启发                                </p>
    
                                                            </div>
                                                        </a>
                                                    </div>
    
                                                );
                                            }else{
                                                return (
                                                    <div key={listprojeect1.id} class="donghua">
    
    
    
                                                        <a href={`#/${listprojeect1.id}`}>
                                                            <img src={listprojeect1.thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = "https://www.soltecventures.com/images/no_image_available.gif" }} alt="" width="100%" height="300" />
                                                            <div class="toumingtiao"></div>
                                                            <div class="imgInfo">
                                                                <h1>{listprojeect1.name}</h1>
                                                                <p>{listprojeect1.grr}</p>
                                                            </div>
    
                                                            <div class="info">
                                                                <p>
                                                                    如果你资金量不是很大，又想对冲人民币贬值的压力，完全可以了解下柬埔寨的房产市场。本文是根据一个在柬埔寨工作生活四年、资深房产投资客的访谈整理而成，希望对你有所启发                                </p>
    
                                                            </div>
                                                        </a>
                                                    </div>
    
                                                );
                                            }
                                           
                                        })}


                                    <div class="clear"></div>
                                    <ul class="newsList" style={{ display: 'block' }}>
                                        {this.state.projectalllist
                                            .filter((listprojeect, index) => (index > 0))
                                            .map((listprojeect) => {
                                                if (listprojeect.thumbnail == null ) {
                                                    return (

                                                        <li key={listprojeect.id}>
                                                            <a href={`#/${listprojeect.id}`}>
                                                                <img class="pic fl" src={imagenotavaiable} />
                                                              
                                                                <div class="index_dsc fr">
                                                                    <p>{listprojeect.name}</p>
                                                                    <span class="mar-5">GRR: {listprojeect.grr}</span><br />
                                                                     <span class="mar-5">Country: {listprojeect.country}</span><br />
                                                                     <span style={{color:'red'}} class="mar-5">Price start: {listprojeect.start_price}$ to {listprojeect.end_price}$ </span><br />
                                                                 
                                                                   

                                                                </div>
                                                            </a>
                                                        </li>
                                                    );
                                                } else {
                                                    return (

                                                        <li key={listprojeect.id}>
                                                            <a href={`#/${listprojeect.id}`}>
                                                                <img class="pic fl" src={listprojeect.thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = imagenotavaiable }} />
                                                                <div class="index_dsc fr">
                                                                    <p>{listprojeect.name}</p>
                                                                    <span class="mar-5">GRR: {listprojeect.grr}</span><br />
                                                                     <span class="mar-5">Country: {listprojeect.country} Project Type:  {listprojeect.project_type}</span><br />
                                                                     <span style={{color:'red'}} class="mar-5">Price start: {listprojeect.start_price}$ to {listprojeect.end_price}$ </span><br />
                                                                 
                                                                </div>
                                                            </a>
                                                        </li>
                                                    );
                                                }

                                            })}
                                        {loadMoredata}

                                    </ul>
                                </div>




                            </div>

                            <div class="newLeft fr">

                                <div class="remen">
                                    <h2>Popular Articles</h2>
                                    {this.state.projectalllist
                                            .filter((listprojeect, index) => (index <=2))
                                            .map((listprojeect) => {
                                                if (listprojeect.thumbnail == null ) {
                                                    return (
                                    <a class="item1" href={`#/${listprojeect.id}`}>
                                        <img src={imagenotavaiable} />
                                        <i>1</i>
                                        <p>Are you looking to purchase, or invest in, a villa, a condominium or a business? Century 21 Cambodia has thousands of listed products, spread across our Franchisees.</p>
                                    </a>
  );
} else {
    return (
        <a class="item1" href={`#/${listprojeect.id}`}>
                           <img class="pic fl" src={listprojeect.thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = imagenotavaiable }} />
       
        <i>1</i>
        <p>Are you looking to purchase, or invest in, a villa, a condominium or a business? Century 21 Cambodia has thousands of listed products, spread across our Franchisees.</p>
    </a>
    );
}

})}

    {this.state.projectalllist
                                            .filter((listprojeect, index) => (index > 3))
                                            .map((listprojeect) => {
                                                if (listprojeect.thumbnail == null ) {
                                                    return (
                                                        <a class="item" href={`#/${listprojeect.id}`}>
                                                        <img src={listprojeect.thumbnail} />
                                                        <i></i>
                                                        <p>All kinds of properties for rent in the whole Kingdom of Cambodia</p>
                                                    </a>
  );
} else {
    return (
        <a class="item" href={`#/${listprojeect.id}`}>
        <img src={listprojeect.thumbnail} onError={(e) => { e.target.onerror = null; e.target.src = imagenotavaiable }} />
        <i></i>
        <p>All kinds of properties for rent in the whole Kingdom of Cambodia</p>
    </a>
    );
}

})}

                                  

                                   

                                    
                                </div>
                                <div class="remen">
                                    <h2 style={{ color: '#990000' }}>Events</h2>
                                    {this.state.eventlist
                 
                  .map((type) => {

return (
                                    <a class="item" href="http://www.shitonghk.com/exhibition/4602.html">
                                        <img src={type.banner} onError={(e) => { e.target.onerror = null; e.target.src = imagenotavaiable }} />
                                        <p>{type.title}</p>
                                    </a>
   );
})}

<div id="fb-root"></div>

                                   
                                </div>


                            </div>
                        </div>


                        <div class="hot immigrant">
                            <div class="title tc">
                                <h1>Newest Events</h1>
                                <p>Top 5</p>
                            </div>

                            <div style={{ display: 'block' }} class="img">
                                <ul class="imgTop imgTop1">
                                
                  {this.state.eventlist
                  .filter((type, index) => (index <5))
                  .map((type) => {

return (
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/13.html">
                                            <img src={type.banner} onError={(e) => { e.target.onerror = null; e.target.src = imagenotavaiable }} alt="" />
                                            <div class="imgInfo">
                                                <h1>{type.title}</h1>
                                                <p>{type.description}</p>
                                            </div>

                                        </a>
                                    </li>
                           
                        );
                    })}


                                </ul>
                            </div>


                            <div class="img">
                                <ul class="imgTop imgTop1">
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/13.html">
                                            <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="马耳他" />
                                            <div class="imgInfo">
                                                <h1>马耳他</h1>
                                                <p>免签全球165个国家，享欧盟一流教</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/1.html">
                                            <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="英国" />
                                            <div class="imgInfo">
                                                <h1>英国</h1>
                                                <p>享世界顶尖教育与全民免费医疗服</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/4.html">
                                            <img src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg" alt="澳洲188A" />
                                            <div class="imgInfo">
                                                <h1>澳洲188A</h1>
                                                <p>无英语要求,投资方式可灵活变通</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/5.html">
                                            <img src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg" alt="爱尔兰" />
                                            <div class="imgInfo">
                                                <h1>爱尔兰</h1>
                                                <p>一步到位拿永居，先批准后投资，跳板</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/6.html">
                                            <img src="https://cdnimages.familyhomeplans.com/plans/75977/75977-b1200.jpg" alt="美国" />
                                            <div class="imgInfo">
                                                <h1>美国</h1>
                                                <p>50万美金全家拿美国绿卡，享一流教</p>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div class="img">
                                <ul class="imgTop imgTop1">
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/8.html">
                                            <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?" alt="希腊" />
                                            <div class="imgInfo">
                                                <h1>希腊</h1>
                                                <p>更便宜， 25万欧元买房畅行欧洲</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/9.html">
                                            <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg" alt="西班牙" />
                                            <div class="imgInfo">
                                                <h1>西班牙</h1>
                                                <p>更宜/移居，50万欧买房遇见西班牙</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/10.html">
                                            <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg" alt="葡萄牙" />
                                            <div class="imgInfo">
                                                <h1>葡萄牙</h1>
                                                <p>更方便，50万欧拿永居，无居住要求</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/11.html">
                                            <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg" alt="圣基茨" />
                                            <div class="imgInfo">
                                                <h1>圣基茨</h1>
                                                <p>免签加拿大、英国、所有欧盟及申</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/12.html">
                                            <img src="https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg" alt="多米尼克" />
                                            <div class="imgInfo">
                                                <h1>多米尼克</h1>
                                                <p>免签英国，加拿大，欧盟及申根国等全</p>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div class="img">
                                <ul class="imgTop imgTop1">
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/14.html">
                                            <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="多米尼克" />
                                            <div class="imgInfo">
                                                <h1>多米尼克</h1>
                                                <p>20万美金全家四代直接拿护照，免签</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/15.html">
                                            <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="圣基茨" />
                                            <div class="imgInfo">
                                                <h1>圣基茨</h1>
                                                <p>40万美金四代直接拿护照，免签100</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.shitonghk.com/yimin/Global/7.html">
                                            <img src="https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg" alt="马耳他" />
                                            <div class="imgInfo">
                                                <h1>马耳他</h1>
                                                <p>免签/落地签160多个国家及地区</p>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>




                    </div>

                </TabPanel>
            )
        })
        const coutrytap = this.state.Getdata.map((countryid) => {
            return (

                <a href="javascript:;" onClick={this.Clickcountry.bind(this, countryid)} > <Tab style={{ backgroundColor: '#fafafa', paddingLeft: '100px', paddingRight: '100px' }} tabFor={countryid.country_id} ><h3>{countryid.country_name.toUpperCase()}</h3></Tab></a>

            )
        })
        const blockElements = {
            content: 'tabs-content',
            panel: 'tabs-panel',
            label: 'tabs-title'
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
            <html>
                <head>

                    <script src="script/jquery-1.js"></script>
                    <script src="script/jquery.js"></script>
                    <script src="script/layer.js"></script>

                    <script type="text/javascript" id="lim:component" src="script/component-v5.js"></script>


                </head>
                <body >

                    <Header />



                    <div class="clear"></div>
                    <div class="main1" >
                        <div class="banner">
                            <div class="flexslider">
                                <ul class="slides">


                                    <Slider autoplay={3000}>
                                        {this.state.eventlist.map((item, index) => (
                                          
                                            <div
                                                key={index}
                                                style={{ background: `url('${item.banner}'),url('${imagenotavaiable}') no-repeat center center` }}
                                            >
                                            
                                                <div className="center">

                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </ul>

                                <ol class="flex-control-nav flex-control-paging"><li><a class="">1</a></li><li><a class="">2</a></li><li><a class="">3</a></li><li><a class="flex-active">4</a></li></ol><ul class="flex-direction-nav"><li><a class="flex-prev" href="#"></a></li><li><a class="flex-next" href="#"></a></li></ul></div>

                        </div>
                        <section>
                            <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div>
                                    <h1>Title</h1>
                                    <p>Some Contents</p>
                                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                                </div>
                            </Modal>
                        </section>

                        <main1>
                            <Tabs class="hot house "
                                defaultTab={1}
                                onChange={(tabId) => { console.log(tabId) }}
                            >
                                <div >
                                    <TabList style={{ backgroundColor: '#fafafa', paddingLeft: '100px', fontSize: '40px', marginTop: '-0px', lineHeight: '80px' }}>
                                        {coutrytap}

                                    </TabList>
                                    {coutrytpanel}
                                </div>
                            </Tabs>
                        </main1>

                    </div>
                    <div class="foot_popup_up foot_popup_up_small" style={{ display: 'block', opacity: '1', left: '0px' }}> </div>
                    <div class="foot_popup" style={{ display: 'block', opacity: '1', left: '-100%' }}>
                        <div class="foot_popup_bg" style={{ backgroundimage: 'url(http://www.shitonghk.com//public/pc/Picture/guanggao.png)' }}></div>
                        <div class="foot_popup_con">
                            <form class="foot_popup_huidian" method="post" action="/feedback/feedback_ajax.php">
                                <dl class="mfth" >
                                    <dd>
                                        <input class="text m_text1 placehold" type="text" placehold="输入您的手机号" name="mycall" value="输入您的手机号" />
                                        <input class="code_btn1" type="button" id="amaya2" value="点击免费通话" />
                                    </dd>
                                </dl>
                            </form>
                            <form class="foot_popup_form" method="post" action="/feedback/feedback_ajax.php">
                                <dl class="popup_form">
                                    <dt style={{ marginTop: '0', fontSize: '14px' }}>领取价值<em style={{ fontSize: '22px', color: '#F4C403' }}>6600</em>元的东南亚房产投资报告</dt>
                                    <dd style={{ marginTop: '5px' }}>
                                        <label>姓名：</label>
                                        <input class="text n_text placehold" type="text" placehold="输入姓名" name="title" value="输入姓名" />
                                        <div class="popup_error">请输入姓名</div>
                                    </dd>
                                    <dd>
                                        <label>手机：</label>
                                        <input class="text m_text placehold" type="text" placehold="输入手机号" name="mycall" value="输入手机号" />
                                        <div class="popup_error">请输入手机号</div>
                                    </dd>
                                    <dd>
                                        <label>邮箱：</label>
                                        <input class="text e_text placehold" type="text" placehold="输入邮箱" name="email" value="输入邮箱" />
                                        <div class="popup_error">输入邮箱</div>
                                    </dd>
                                    <dd class="no_bg" style={{ marginTop: '5px' }}>
                                        <input class="code_btn" type="button" id="amaya" value="确认发送" />
                                    </dd>
                                </dl>
                            </form>
                            <span class="foot_popup_close">关闭</span> </div>
                    </div>
                 
                    <Flooter />
               <Inquirey/>
              
                   </body>
               
                  
            </html>

        );

    }

}

export default homeid;

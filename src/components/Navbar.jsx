import React, {useEffect, useState} from "react";
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined  } from "@ant-design/icons";
import icon from '../images/cryptocurrency.png';

const Navbar = ()=>{

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resieze', handleResize)

    },[]);

    useEffect(() => {
        if(screenSize < 768){
            setActiveMenu(false);
        }else{
            setActiveMenu(true)
        }
    },[screenSize])

    const items=[
        {
            label:<Link to="/">Home</Link>,
            key:'1',
            icon:<HomeOutlined/>
        },
        {
            label:<Link to="/cryptocurrencies">Cryptocurrencies</Link>,
            key:'2',
            icon:<FundOutlined/>
        },
        {
            label:<Link to="/exchanges">Exchanges</Link>,
            key:'3',
            icon:<MoneyCollectOutlined/>
        },
        {
            label:<Link to="/news">News</Link>,
            key:'4',
            icon:<BulbOutlined/>
        }
    ]
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large'/>
                <Typography.Title level={2} className='logo' >
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>

            {activeMenu &&(
                <Menu theme="dark" items={items}>
                </Menu>
            )}

        </div>
    )
};
export default Navbar; 
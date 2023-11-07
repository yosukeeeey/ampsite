import React from "react";
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import AppBar from './Components/Header/AppBar';
import BackImage from './Components/background_green.jpg';
import Map from './Components/Maps/Maps';
import { Tab } from "@mui/base";

const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'warning.main',
    mr: 1
};

function Jeberry() {
    return(
        <React.Fragment>
            <AppBar />
            <div style={{ height: "55px" }}></div>
            {/* タイトルを記載 */}
            <Typography sx={{display:{xs:"none", sm:"flex"}}}>
                <h1>REVIVE</h1>
                <p>数年ぶりのジュビリー✨コロナ禍で制限されていた分の交わりを</p>
                <p>この3日間で取り戻す以上の濃密な交わりが待っている…Go Next↓</p>
            </Typography>
            <div style={{backgroundImage:`url(${BackImage})`, backgroundSize:'100%'}}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{display:{xs:"flex", sm:"none"}}}
                >
                    <Typography variant="h2">
                        REVIVE
                    </Typography>
                    
                </Grid>
                <Grid container  direction="column" justifyContent="center" alignItems="center" >
                    <Typography variant="body1" sx={{margin: 2}}></Typography>
                    <Typography variant="body1" sx={{margin: 0}}>数年ぶりのジュビリー!!</Typography>
                    <Typography variant="body1" sx={{margin: 0}}>コロナ禍で制限されていた分の交わりを</Typography>
                    <Typography variant="body1" sx={{margin: 0}}>存分に楽しみましょう!</Typography>
                    <Typography variant="body1" sx={{margin: 1}}></Typography>
                    <Typography variant="body1" sx={{margin: 0}}>↓ Go Next ↓</Typography>
                </Grid>
            </div>
            
            {/* イメージ御殿場、場所 */}
            <div style={{backgroundColor:'darkseagreen', backgroundSize:'100%'}}>

                <div style={{width: '80%', height: '80%', margin:'0px auto', padding:'10%'}}>
                <Typography variant="h5" textAlign='center'>Location</Typography>
                <Typography variant='h6' textAlign='center'>国立中央青少年交流の家</Typography>
                <Typography variant='body1' textAlign='center'>〒412-0006　静岡県御殿場市中畑2092-5</Typography>
                <Typography variant="body1" sx={{margin: 2}}></Typography>
                <Map />
                <Typography variant='body1' textAlign='center'>
                    <br></br>詳細は
                    <a href="https://fujinosato.niye.go.jp/">こちら</a>
                    をクリック
                </Typography>
                
                </div>
            </div>

            {/* 日程(プログラム) */}
            <div style={{backgroundColor:'cornflowerblue', backgroundSize:'100%'}}>
            <Grid container  direction="column" justifyContent="center"  >
                <Typography variant="h5" textAlign='center'>Program</Typography>
                <Typography variant="body1" sx={{margin: 2}}></Typography>

                    <Typography variant="h6" textAlign='center'>Day 1</Typography>
                    <Typography variant="h6" textAlign='center'>2023/09/15 Sat </Typography>
                    <Typography variant="body1" sx={{margin: 1}}></Typography>
                        <div style={{width: '80%', height: '80%', margin:'0px auto', padding:'5%', border:'solid'}}>
                            <Typography variant="body1">09:00 新宿駅集合</Typography>
                            <Typography variant="body1">13:00 OPENING</Typography>
                        </div>
                    <Typography variant="body1" sx={{margin: 2}}></Typography>

                    <Typography variant="h6" textAlign='center'>Day 2</Typography>
                    <Typography variant="h6" textAlign='center'>2023/09/16 Sun </Typography>
                    <Typography variant="body1" sx={{margin: 1}}></Typography>
                        <div style={{width: '80%', height: '80%', margin:'0px auto', padding:'5%', border:'solid'}}>
                            <Typography variant="body1">08:00 朝食@食堂</Typography>
                            <Typography variant="body1">09:00 QT(各SG)</Typography>
                            <Typography variant="body1">10:30 特別礼拝@全体ホール</Typography>
                            <Typography variant="body1">12:00 ランチ＠食堂</Typography>
                        </div>
                    <Typography variant="body1" sx={{margin: 2}}></Typography>

                    <Typography variant="h6" textAlign='center'>Day 3</Typography>
                    <Typography variant="h6" textAlign='center'>2023/09/17 Mon </Typography>
                    <Typography variant="body1" sx={{margin: 1}}></Typography>
                        <div style={{width: '80%', height: '80%', margin:'0px auto', padding:'5%', border:'solid'}}>
                            <Typography variant="body1">08:00 朝食@食堂</Typography>
                            <Typography variant="body1">09:00 QT(各SG)</Typography>
                            <Typography variant="body1">10:30 特別クラス</Typography>
                            <Typography variant="body1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①聖書クラス</Typography>
                            <Typography variant="body1">      ②NDCクラス</Typography>
                            <Typography variant="body1">12:00 ランチ＠食堂</Typography>
                        </div>
                    <Typography variant="body1" sx={{margin: 2}}></Typography>

            </Grid>
            </div>
            {/* お知らせ */}
            <div style={{backgroundColor:'blueviolet', backgroundSize:'100%'}}>
            <Grid container  direction="column" justifyContent="center">
                <Typography variant="h5" textAlign='center'>Announcement</Typography>
                <Typography variant="body1" sx={{margin: 2}}></Typography>
            </Grid>
            </div>

            {/* 讃美歌集  Linkで飛ばす */}
            <div style={{backgroundColor:'cadetblue', backgroundSize:'100%'}}>
            <Grid container  direction="column" justifyContent="center">
                <Typography variant="h5" textAlign='center'>Worship lrycs</Typography>
                <Typography variant="body1" sx={{margin: 2}}></Typography>
            </Grid>
            </div>

            {/* その他 Footer Webページ、インスタ、Twitter */}
            <div style={{backgroundColor:'lightgray', backgroundSize:'100%'}}>
            <Grid container  direction="column" justifyContent="center">
                <Typography variant="h5" textAlign='center'>Others</Typography>
                <Typography variant="body1" sx={{margin: 2}}></Typography>
            
                <Box component="a" href="https://www.instagram.com/life2.0.tcc/" sx={iconStyle}>
                    <img
                        src={`${process.env.PUBLIC_URL}/instagram_icon.png`}
                        alt="Instagram"
                        width={48}
                        height={48}
                    />
                </Box>
            </Grid>

            </div>

        </React.Fragment>
    )
}

export default Jeberry;
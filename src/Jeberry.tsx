import React from "react";
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

import AppBar from './Components/Header/AppBar';
import BackImage from './Components/background_green.jpg';
import Map from './Components/Maps/Maps';

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
            <div style={{backgroundImage:`url(${BackImage})`, backgroundSize:'100%'}}>
                <Map />
            </div>
            

            {/* 日程(プログラム) */}

            {/* お知らせ */}

            {/* 讃美歌集  Linkで飛ばす */}

            {/* その他 Footer Webページ、インスタ、Twitter */}


        </React.Fragment>
    )
}

export default Jeberry;
import React from 'react';
import Roll from 'react-reveal/Roll';

const styles = {
    img: {
        width: 'auto',       
        height: 'auto',
        border: '2px solid lightseagreen',
        
    },
    hello: {
        background:'#22222B',
        padding:'2em'
    },
    welcome: {
        display:'flex',        
        fontSize: '2.5em',
        letterSpacing: '.5em',
        color:'lightseagreen'
    }
}

export default function Home() {

  return (
    <div style={{background:'#22222B', height:'100vh'}}>
        <div style={{paddingTop:'12%'}}class="container text-center">
            <div  style={{ padding:'2em'}}class="row">
                 <div style={styles.welcome}class="col-sm-8" >
                        <Roll left cascade>
                            Welcome
                        </Roll>
                 </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div style={styles.hello}>
                        <h5 style={{color:'lightseagreen',fontSize:'2em', lineHeight:'1.3em'}}>
                            H E L L O, 
                        </h5>
                        <h2 style={{color:'white',lineHeight:'2em'}}>
                        I'm Kristin De Salme 
                        </h2>
                        <h5 style={{color:'lightseagreen',lineHeight:'1.8em'}}>
                        |  FullStack Web Developer |
                        </h5>
                        <p style={{color:'white',lineHeight:'2em'}}>
                        Just Trying To Squash One Bug At A Time
                        </p>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="col-4" style={{padding: '10% 0 0 10%', background:'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1'}}>
                        <img src='./assets/photo.png' alt='picture' style={styles.img}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

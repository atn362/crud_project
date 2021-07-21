import React from 'react'
import { Card, CardTitle, CardActions, CardText, CardMenu } from 'react-mdl';

function Home() {

    return(
        <div>
            <h1>Travel Blog Homepage</h1>
      <Card shadow={0} style={{width: '512px', margin: 'auto', boxShadow: "5px 10px 15px black"}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Travel Blog with all necessary information
    </CardText>
    <CardActions border>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    </CardMenu>
</Card>
<hr/>
<Card shadow={0} style={{width: '512px', margin: 'auto', boxShadow: "5px 10px 15px black"}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Travel Blog with all necessary information
    </CardText>
    <CardActions border>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    </CardMenu>
</Card>
<hr/>
<Card shadow={0} style={{width: '512px', margin: 'auto', boxShadow: "5px 10px 15px black"}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Travel Blog with all necessary information
    </CardText>
    <CardActions border>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    </CardMenu>
</Card>
        </div>
    );
};

export default Home;
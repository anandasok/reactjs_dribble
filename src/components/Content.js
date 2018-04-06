import React, {Component} from 'react';

// Custom components
import '../Content.css';
import SlatHeader from './SlatHeader';
import MainShot from './MainShot';

class Content extends Component {

	constructor() {
		super();
		this.state = {
			comments: [
				{		
					name: "Grey", 
					photo: "https://cdn.dribbble.com/users/1256118/avatars/small/2c8e4297c8b557a67df3e57e2c908d8c.jpg?1505983286",
					body: "Well done! Come to check my works if you want"
				},
				{		
					name: "Taras Migulko", 
					photo: "https://cdn.dribbble.com/users/1998175/avatars/small/60949d14e713cce13f445e4e94432c47.jpg?1512579655",
					body: "Great colors and idea on your dashboard. Really love it! Thanks for publishing it"
				},
				{		
					name: "Ramotion", 
					photo: "https://cdn.dribbble.com/users/25514/avatars/small/070810be04e642201206c8fbdffcbf8a.png?1455536235",
					body: "Looks cool, love how clean it is, prototype overall is also nicely done and executed. Good job "
				},
				{		
					name: "Epic Coders", 
					photo: "https://cdn.dribbble.com/users/32742/avatars/small/1442487eec674feb1b3ca30a8984eb4e.png?1446548820",
					body: "well executed. Is this being developed by someone or is it just a concept?"
				},
				{		
					name: "Med Badr Chemmaoui", 
					photo: "https://cdn.dribbble.com/users/589030/avatars/small/f28e9ceb03843b534035380076a24107.png?1515390876",
					body: "amazing work my friend!"
				},
				{		
					name: "Rasika Warnasuriya", 
					photo: "https://cdn.dribbble.com/users/1751027/avatars/small/adc62518b5f62703e4971fcff15a0eb4.jpg?1506574140",
					body: "Nice work.!"
				},
				{		
					name: "Dimitris Chronopoulos", 
					photo: "https://cdn.dribbble.com/users/1333064/avatars/small/7660c95c80ce9f341df7f7db574bb24c.png?1488144609",
					body: "Love it!"
				}

			],

			colors: ["#F1F3F8", "#DDE2F0", "#4864F3", "#CAE8D4", "#889FF6", "#9199A1"],
			designs: [
				"https://cdn.dribbble.com/users/834691/screenshots/4194551/workflow5_16_teaser.gif",
				"https://cdn.dribbble.com/users/834691/screenshots/4133607/_3_teaser.gif",
				"https://cdn.dribbble.com/users/2081911/screenshots/4112088/architecture_dribbble_shot_03_01_18__12_teaser.gif",
				"https://cdn.dribbble.com/users/834691/screenshots/4078298/app_workflow_teaser.gif",
			]
		}
	}

    render() {
        return(
            <div id="crypto-content">
                <SlatHeader />
                <MainShot comments={this.state.comments} 
            		      colors={this.state.colors} 
        		      	  designs={this.state.designs} />
                <br /><br />

            </div>
        )
    }
}

export default Content;
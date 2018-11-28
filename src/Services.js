import React, {Component} from 'react';
import './Services.css';

class Services extends Component{
    render(){
        return(
            <div className="services">
                <h3>Services</h3>
                <h2>what I offer</h2>
                <div className="row">
               {/*  // =============================================================
                // DYNAMIC STYLING
                // =============================================================
                 */}
                <Icons myIcons={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description}/>
                <Icons myIcons={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description}/>
                <Icons myIcons={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description}/>
                <Icons myIcons={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description}/>

               {/*  // =============================================================
                // JSX METHOD THAT IS SMILAR TO HTML IN REACT WE DO THINGS DYNAMICALLY :)
                // ============================================================= 
                */}
                    {/* <div>
                        <span>
                        <i class="fas fa-mobile"></i>
                        </span>
                        <h4>Mobile Responsive</h4>
                        <p>for all devices :)</p>
                    </div>
                    <div>
                        <span>
                        <i class="fas fa-pencil-alt"></i>
                        </span>
                        <h4>Design</h4>
                        <p>creativeness is what i Design</p>
                    </div>
                    <div>
                        <span>
                        <i class="fas fa-thumbs-up"></i>
                        </span>
                        <h4>Liked</h4>
                        <p>Millions of users <i class="fas fa-heart"></i> our work</p>
                    </div>
                    <div>
                        <span>
                        <i class="fas fa-comments"></i>
                        </span>
                        <h4>Let's Chat</h4>
                        <p>We value your feedback </p>
                    </div> */}
                </div>
            </div>
        );
    }
}
const iconObj =[
    {
        icon:<i class="fas fa-mobile"></i>,
        title:'Mobile Responsive',
        description:'for all devices'

    },
    {
        icon: <i class="fas fa-pencil-alt"></i>,
        title:'Design',
        description:'creativeness is what we Design'

    },
    {
        icon:<i class="fas fa-thumbs-up"></i>,
        title:'Liked',
        description:`Millions of users  love  our work`

    },
    {
        icon:<i class="fas fa-comments"></i>,
        title:'Let\'s Chat',
        description:'We value your feedback'

    }

];

class Icons extends Component{
    render(){
        return(
            <div>
                <span>
                    {this.props.myIcons}
                </span>
                <h4>
                    {this.props.myTitle}
                </h4>
                <p>
                    {this.props.myDescription}
                </p>
            </div>
        )
    }
}

export default Services;
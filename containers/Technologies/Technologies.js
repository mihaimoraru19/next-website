import React, { PureComponent } from 'react';
import './Technologies.scss';

export default class Technologies extends PureComponent {
  render () {
    const mainTechnologies = [
      {title: 'ReactJS & React Native', img: require('./assets/react.svg')},
      {title: 'Java', img: require('./assets/java.svg')},
      {title: 'Spring Framework', img: require('./assets/spring.svg')},
      {title: 'NodeJS', img: require('./assets/node.svg')},
      {title: 'MySQL', img: require('./assets/mysql.svg')},
      {title: 'Mongo DB', img: require('./assets/mongo.svg')}
    ];

    const renderMainTechnologies = mainTechnologies.map((item, i) =>
        <img className="Technology" key={i} src={item.img} alt={item.title}/>
    );

    return (
      <div className='Tech_Container'>
        <div className='Tech_Title'>
          Main Technologies
        </div>
        <div className='Tech_Technologies'>
          {renderMainTechnologies}
        </div>
      </div>
    )
  }
}

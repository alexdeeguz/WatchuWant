import React, { PureComponent } from 'react'
import './team.scss';
import Person from './person';

export default class Team extends PureComponent {

  render() {
    return (
      <div className='fadeMe' id="team-page">
        <Person
          name={"John Chau"}
          github={"https://github.com/jwchau"}
          linkedin={"https://linkedin.com/in/jwchau"}
          angelco={"https://angel.co/john-chau-4"}
          photo={"/people/john.jpg"}
        />

        <Person
          name={"Try Khov"}
          github={"#"}
          linkedin={"#"}
          angelco={"#"}
          photo={"/people/man.jpg"}
        />

        <Person
          name={"Alex De Guzman"}
          github={"https://github.com/alexdeeguz"}
          linkedin={"https://www.linkedin.com/in/alex-de-guzman/"}
          angelco={"https://angel.co/alexdeeguz"}
          photo={"/people/man.jpg"}
        />

        <Person
          name={"Kendra Odrunia"}
          github={"#"}
          linkedin={"#"}
          angelco={"#"}
          photo={"/people/man.jpg"}
        />
      </div>
    )
  }
}

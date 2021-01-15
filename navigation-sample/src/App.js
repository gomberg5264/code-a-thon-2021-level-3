import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <strong>This is page content that doesn't change when I switch pages</strong>
        <hr />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <br /><hr />
        <strong>And this is also page content that doesn't change when I switch pages</strong>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Bacon ipsum dolor amet alcatra salami drumstick swine shank meatball. Sausage picanha shoulder pork ham hock bresaola short ribs ball tip. Pork chop chislic pastrami cow. Strip steak buffalo pork loin t-bone kevin cow. Short loin chuck turducken burgdoggen brisket swine, jowl alcatra. Meatloaf chuck rump cow andouille bacon strip steak ball tip boudin pig meatball kielbasa biltong. Prosciutto ham cupim pastrami buffalo.</p>
      <p>Pork tail ham burgdoggen chislic, boudin meatloaf hamburger turkey pork chop kevin doner spare ribs meatball andouille. Capicola turducken biltong chicken filet mignon, spare ribs beef ribs chuck. Tri-tip pancetta meatloaf tenderloin tail ribeye. Pork loin filet mignon ham pig pancetta. Jowl corned beef pig shank tenderloin, doner buffalo pork chop kielbasa shoulder jerky tri-tip kevin fatback.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>Fatback spare ribs pancetta, tail jerky boudin pork loin drumstick rump ham. Alcatra beef bresaola, ground round ham hock tongue drumstick meatloaf salami bacon kevin jerky brisket chislic meatball. Filet mignon doner spare ribs ham andouille salami. Buffalo chuck kielbasa pig, tri-tip meatloaf tenderloin pancetta. Bacon spare ribs strip steak ground round porchetta corned beef salami tenderloin tail rump.</p>
      <p>Meatball short loin filet mignon porchetta burgdoggen cow cupim chislic boudin hamburger. Capicola rump alcatra sausage fatback hamburger salami cupim corned beef drumstick ball tip. Leberkas sausage pig, ribeye chuck sirloin venison jowl swine jerky drumstick flank shoulder. Sirloin brisket cupim, tenderloin fatback bresaola pork belly jowl ribeye bacon pancetta. Sausage tri-tip picanha turkey jowl. Short ribs pancetta spare ribs tail doner, tenderloin sausage fatback bresaola shankle.</p>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <p>Ham tongue meatloaf ground round, doner shank pork belly t-bone pork corned beef filet mignon alcatra bresaola strip steak. Pork chop cupim chicken turducken short ribs pork belly meatball chuck short loin bacon tongue. Short ribs jerky filet mignon brisket salami. Doner rump pork, ribeye swine chislic pork belly prosciutto tongue burgdoggen. Capicola filet mignon sausage, drumstick chislic t-bone flank. Porchetta landjaeger short loin cow tenderloin boudin t-bone chislic rump pork chop prosciutto drumstick frankfurter andouille.</p>
      <p>Andouille sirloin hamburger ball tip picanha chicken, filet mignon shankle pork capicola ham. Prosciutto biltong shoulder shankle tri-tip, burgdoggen meatball pork belly landjaeger leberkas hamburger short ribs beef ribs. Salami tongue drumstick filet mignon, burgdoggen sausage beef spare ribs tri-tip shankle pork loin turducken. Strip steak turkey flank brisket short ribs burgdoggen hamburger bacon chuck porchetta pork andouille.</p>
    </div>
  );
}
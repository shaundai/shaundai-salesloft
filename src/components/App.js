import React from 'react';
import styled from 'styled-components';
import './App.css';
import getSalesLoftApi from './util/salesloftApi'
import salesloftlogo from '../images/salesloftlogo.png'
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

function App() {
  // const getMyName = async () => {
  //   try {
  //     const myName = await getSalesLoftApi('7278d0df3e6175f5900d67986ab4a639f38d80339d6692bc6d29ecb4a5e8d3ef', 'shaundai-salesloft.surge.sh').data.name
  //     return myName
  //   }
  //   catch(err){
  //     console.log('sum happened')
  //   }
  // }

  return (
    <div style={{fontFamily: 'Montserrat', color: '#4F5359'}}>
        <Header>
          <img alt="SalesLoft Logo" src={salesloftlogo} style={{height: '2em', marginLeft: '1em'}}/>
        </Header>
        <div style={{paddingTop: '.3em'}}>
        <Welcome>
        Welcome, <b>User</b>!
        </Welcome>
        <Welcome>How will you hit your quota this quarter?</Welcome>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
        <TierBlock>
          <TierTitle>Tier 1</TierTitle>
          <ListAccount>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div><b>Account</b></div>
              <div style={{fontSize: '.7em'}}># Employees</div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1em'}}>
              <div style={{fontSize: '.7em'}}>Account Owner </div>
              <div style={{fontSize: '.7em'}}>Last Contacted: </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <img alt="Salesforce" src={salesforce} style={{margin: '0 .4em', height: '1.2em'}} />
              <img alt="LinkedIn" src={linkedin} style={{margin: '0 .4em', height: '1.2em'}} />
              <img alt="Company Website"  src={website} style={{margin: '0 .4em', height: '1.2em'}}/>
              </div>
          </ListAccount>
        </TierBlock>
        <TierBlock>
          <TierTitle>Tier 2</TierTitle>
        </TierBlock>
        <TierBlock>
          <TierTitle>Tier 3</TierTitle>
        </TierBlock>
        </div>
    </div>
  );
}

export default App;

const Header = styled.div`
  color: white;
  background-color: #0d163a;
  padding: .7em 0;
`

const Welcome = styled.div`
  padding-left: 1.5em;
  padding-top: .7em;
`

const TierBlock = styled.div`
  border: 1px solid #e5e5e5;
  width: calc(75%/3);
  margin: 0 2em;
  height: 60vh;
  border-right: 2px solid rgba(0,0,0,.1);
`
const TierTitle = styled.div`
  border-bottom: 2px solid rgba(0,0,0,.1);
  background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),#fff;
  text-align: center;
  font-weight: bold;
  padding: .5em 0;
`
const ListAccount = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding: .5em;
`
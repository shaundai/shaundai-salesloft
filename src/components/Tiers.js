import React from 'react'
import styled from 'styled-components'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

const Tiers = ({list}) => {
        return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <TierBlock>
                <TierTitle>Tier 1</TierTitle>
                <ul style={{listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden'}}>
                {list.slice(0,4).map(item => (
                <ListAccount key={item.id}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{fontSize: '.8em'}}><b>{item.name}</b></div>
                    {item.size ? <div style={{fontSize: '.7em'}}>{item.size} employees</div> : null}
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1em'}}>
                    <div style={{fontSize: '.7em'}}>Account Owner </div>
                    <div style={{fontSize: '.7em'}}>Last Contacted: {item.last_contacted_at}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a href={item.crm_url}><img alt="Salesforce" src={salesforce} style={{margin: '0 .4em', height: '1.2em'}} /></a>
                    <a href={item.linkedin_url}><img alt="LinkedIn" src={linkedin} style={{margin: '0 .4em', height: '1.2em'}} /></a>
                    <a href={item.website}><img alt="Company Website"  src={website} style={{margin: '0 .4em', height: '1.2em'}}/></a>
                    </div>
                </ListAccount>
                ))}
                </ul>
                </TierBlock>
            <TierBlock>
                <TierTitle>Tier 2</TierTitle>
            </TierBlock>
            <TierBlock>
                <TierTitle>Tier 3</TierTitle>
            </TierBlock>
        </div>
        )
    }

export default Tiers 

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
const ListAccount = styled.li`
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding: .5em;
`
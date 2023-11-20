import React, { useEffect, useState } from "react"
import StakeholdersPage5 from "./StakeholdersPage5"
import StakeholdersEdit from "./StakeholdersEdit"

const StakeholdersManager = () => {

    const [comps, setComps] = useState(0)

    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem('components'))
        if(savedState !== 0){
            setComps(savedState)
        }
    })
    
    const addStakeholder = (event) => {
        event.preventDefault()
        const newComps = comps + 1
        setComps(newComps)
        localStorage.setItem('components', JSON.stringify(newComps))
    }

    const removeStakeholder = (event) => {
        event.preventDefault()
        if (comps > 0){
            const newComps = comps - 1
            setComps(newComps)
            localStorage.setItem('components', JSON.stringify(newComps))
        }
        else{
            window.alert('There are no stakeholders to remove')
        }
    }

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    const components = []
    for (let i = 0; i < comps; i++){
        components.push(<StakeholdersPage5 key={makeid(5)}/>)
        components.push(<hr key={makeid(5)}/>)
    }

    return(
        <div>
            {components.map((component) => (
                <div key={makeid(5)}>{component}</div>
                )
            )}
        {/* <StakeholdersPage5 /> */}
        <div className='button-container'>
            <StakeholdersEdit onClick={addStakeholder} text={'Add Stakeholder'}/>
            <StakeholdersEdit onClick={removeStakeholder} text={'Remove Stakeholder'}/>
        </div>
        <div style={{marginBottom:'15px'}}></div>
        </div>
    )

}
export default StakeholdersManager
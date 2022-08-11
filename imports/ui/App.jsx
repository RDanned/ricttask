import React, {useState} from 'react';
import Table from './Table';
import StepSwitcher from './StepSwitcher';
import StepContext from './context/StepContext'

export const App = () => {
    const [step, setStep] = useState(1);

    /**
     * @function updateStep changes step value in StepContext
     * @param {Number} val New step value
     */
    function updateStep(val){
        setStep(Number(val))
    }

    return (<div>
        <StepContext.Provider value={{step, setStep: updateStep}}>
            <StepSwitcher />
            <Table/>
        </StepContext.Provider>
    </div>)
}

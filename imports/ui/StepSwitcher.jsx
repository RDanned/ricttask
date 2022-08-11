import React, {useContext} from 'react';
import StepContext from './context/StepContext';

const StepSwitcher = () => {

    const {step, setStep} = useContext(StepContext);

    /**
     * @function onChange
     * Event handler when step in input is updated
     * @param e React.ChangeEvent
     */
    function onChange(e){
        const regex= /^[+-]?\d*(?:[.,]\d*)?$/;

        if(regex.test(e.target.value)) {
            if(e.target.value && e.target.value != 0) setStep(Number(e.target.value))
            else setStep(1)
        }
    }

    return (
        <div className="step-switcher-wrapper">
            <div className="step-switcher-label">
                <label htmlFor="stepSwitcher">Loop step</label>
                <span className="step-switcher-sublabel">Changes loop iteration step</span>
            </div>
            <input className="step-switcher-input" id="stepSwitcher" type="number" step="0.01" onChange={onChange} value={step}/>
        </div>
    )
}

export default StepSwitcher
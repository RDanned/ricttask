import React from 'react';
import StepContext from './context/StepContext'

const Table = () => {
    const {step} = React.useContext(StepContext);

    let rows = [];

    const items = []

    //Here will be generated values for rows to be output from the table
    for(let i = 1; i <= 100; i += step) {
        let text = i;
        if(i % 3 === 0) text = "Robot";
        if(i % 5 === 0) text = "ICT";
        if(i % 3 === 0 && i% 5 === 0) text = "RobotICT";
        items.push(text)
    }

    //Here will be generated table rows
    rows = items.map((item, i) => {
        i += 1
        return (
             <tr key={i}>
                 <td>{i}</td>
                 <td>{item}</td>
            </tr>
        )
    })

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Ordinal number</th>
                        <th>Result text</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.length > 0 ? rows : (
                            <tr>
                                <td colSpan="2">
                                    Not a single line was created &#x1F62D;
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
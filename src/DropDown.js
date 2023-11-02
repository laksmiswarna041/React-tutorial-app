import React, { useState } from 'react';

function DropDownList(props) {
    const [dataSelected, setSelectData] = useState('');

    const handleSelectChange = (e) => {
        setSelectData(e.target.value);
    };

    //console.log("From DropDown component: ", props.dataToBeSent)
    const types = props.dataToBeSent;
    console.log(types)

    return(
        <div>
            <select value={dataSelected} onChange={handleSelectChange}>
            <option value="">Select</option>
            {types?.map((data,index)=>{
                return(
                    <option value={data} key={index}>{data}</option>
                )
            })}
        </select>
        {dataSelected && <p>You selected: {dataSelected}</p>}
        </div>
    )
}

export default DropDownList;

import React, { useState } from 'react';
import './style.css';


var jsonData;
const today = new Date();
console.log(today)
console.log(`Now milliseconds: ${today.getUTCMilliseconds()}`)
var typeOfInstances=[], typesToDisplay=[];

const DataTable = () => {

  const [jsonparsedData,setData] = useState([])
  
  function calcAge(sentAge){
    var date = new Date(sentAge);

    var year = date.getFullYear();
    var y1 = today.getFullYear() - year;

    var month = String(date.getMonth()+1).padStart(2,'0');
    var mo1 = today.getMonth() - month;

    var day = String(date.getDate()).padStart(2,'0');
    var d1 = today.getDate() - day;

    var hours = String(date.getUTCHours()).padStart(2,'0');
    var h1 = today.getUTCHours() - hours;

    var minutes = String(date.getUTCHours()).padStart(2,'0');
    var m1 = today.getUTCMinutes() - minutes;

    var seconds = String(date.getUTCSeconds()).padStart(2,'0');
    var s1 = today.getUTCSeconds() - seconds;

    var milliseconds = String(date.getUTCMilliseconds()).padStart(3,'0');
    var ms1 = today.getUTCMilliseconds() - milliseconds;

    //var formattedDateAndTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    //console.log("Formatted Date and Time:", formattedDateAndTime)

    var diffDateAndTime = `${y1} years, ${mo1} months, ${d1} days, ${h1} hrs:${m1} mins:${s1} secs:${ms1} ms`;
    //console.log("Diff Date and Time:", diffDateAndTime)

    return diffDateAndTime;
  }

  function findTag(value){
    var res= "Name not found";
    for(const tag of value.Tags){
      if(tag.Key === "Name" || tag.Key === "name"){
        if(tag.Value==="") return res;
        else return tag.Value;
      }
    }
  }

  const [dataSelected, setSelectData] = useState('');

  const handleSelectChange = (e) => {
    setSelectData(e.target.value);
    for(const i of jsonparsedData){
      if(e.target.value === i["InstanceType"]){
        typesToDisplay.push(i)
      }
    }
    //console.log(e.target.value);
    displayResult(e.target.value);
  };
  
  
  function displayResult(type){
    console.log("Type selected: ", type)
    var filters=jsonparsedData.filter(instance => instance.InstanceType === type)
    setData(filters)
    console.log(filters)
    return jsonparsedData;
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/ec2Data');
      jsonData = await response.json();
      //console.log(jsonData)
      setData(jsonData)
      for(const i of jsonData){
        //console.log(i["InstanceType"])
        if(!typeOfInstances.includes(i["InstanceType"])){
          typeOfInstances.push(i["InstanceType"])
        }
      }
      //console.log("Types: ", typeOfInstances)
      // console.log(jsonData["Reservations"][0]["Instances"][0]["InstanceType"])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


  return (
    <div>
      <center><button onClick={fetchData}>Fetch</button></center>
      {jsonparsedData && (
        <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type 
              <br/>
                <select value={dataSelected} onChange={handleSelectChange}>
                  <option value="">Select</option>
                    {typeOfInstances.map((data,index)=>{
                      return(
                        <option value={data} key={index}>{data}</option>
                      )
                    })}
                </select> 
            </th>
            <th>Age</th>
          </tr>
        </thead>
        {jsonparsedData?.map((data,index)=>{
        return(
          <tbody>
            <tr>
              <td key={index}>{data.InstanceId}</td>
              <td>{findTag(data)}</td>
              <td>{data.InstanceType}</td>
              <td>{calcAge(data.LaunchTime)}</td>
            </tr>
          </tbody>
        )
      })}
      </table>
      )}
    </div>
  )
}

export default DataTable;

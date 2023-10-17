import InstanceTable from "./InstanceTable.js";
import ec2 from "./ec2.json"

function MyApp() {
  console.log(ec2)

  return (
    <div>
      <div className="header">
      <center><h1>EC2 instances in AWS</h1></center>
      <center><h3>Fetched from local</h3></center>
      <center><InstanceTable /></center>
      </div>
    </div>
  );
};



export default MyApp;
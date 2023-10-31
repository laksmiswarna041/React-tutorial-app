const AWS = require('aws-sdk');

const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const region = "us-east-1";

console.log(accessKeyId, secretAccessKey, region)

AWS.config.update({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
})
const ec2 = new AWS.EC2();

function instanceData(){
    
    const params={
        Filters:[
            {
                Name: 'instance-state-name',
                Values: ['running']
            },
        ],
    };
    ec2.describeInstances(params, (err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            data.Reservations.forEach(reservation => {
                reservation.Instances.forEach(instance => {
                    const launchTime = instance.LaunchTime;
                    const now = new Date();
                    const ms = now - launchTime;
                    const s = ms / 1000;
                    const m = s / 60;
                    const h = m / 60;
                    const d = h / 24;

                    console.log(`Instance ID: ${instance.InstanceId}`);
                    console.log(`Age: ${Math.floor(d)}d, ${Math.floor(h)}h, ${Math.floor(m)}m, ${Math.floor(s)}s, ${Math.floor(ms)}ms`);
                    console.log("-------------------------")
                })
            })
        }
    })
    return(
        <div>
            
        </div>
    )
}
export default instanceData;
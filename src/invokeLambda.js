import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

const lambdaClient = new LambdaClient({ region: "us-east-1" }); // Replace with your desired region
var res;
const invokeLambda = async () => {
  try {
    const command = new InvokeCommand({
      FunctionName: "getInstancesData", // Replace with your Lambda function name
      Payload: JSON.stringify({ key: "Count the number of characters" }), // Replace with your payload
    });

    const data = await lambdaClient.send(command);
    console.log("Lambda function response:", data.Payload);
  } catch (error) {
    console.error("Error invoking Lambda function:", error);
  } finally {
    lambdaClient.destroy();
  }
  return(
    <div></div>
  )
};

export default invokeLambda;

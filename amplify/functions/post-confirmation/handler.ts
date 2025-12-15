import { PostConfirmationTriggerHandler } from "aws-lambda";
import { CognitoIdentityProviderClient, AdminAddUserToGroupCommand } from "@aws-sdk/client-cognito-identity-provider";

export const handler: PostConfirmationTriggerHandler = async (event) => {
  // Get account type from custom attributes
  const accountType = event.request.userAttributes['custom:accountType'] || 'user';
  
  // Set group based on account type (convert to lowercase to match your groups)
  const groupName = accountType.toLowerCase();

  const command = new AdminAddUserToGroupCommand({
    UserPoolId: event.userPoolId,
    Username: event.userName,
    GroupName: groupName // This will be 'user', 'vendor', or 'corporate'
  });

  const client = new CognitoIdentityProviderClient({});

  try {
    const response = await client.send(command);
    console.log(`User ${event.userName} added to ${groupName} group:`, response);
    return event;
  } catch (error) {
    console.error("Error adding user to group:", error);
    return event;
  }
};
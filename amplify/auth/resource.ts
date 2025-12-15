import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from '../functions/post-confirmation/resource';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },  userAttributes: {
    fullname: {
      mutable: true,
      required: true
    },
        
    "custom:accountType": {
      dataType: "String",
      mutable: true,
      maxLen: 16,
      minLen: 1,
    },
  },
    triggers: {
    postConfirmation: postConfirmation
  },
  access: (allow) => [allow.resource(postConfirmation).to(['addUserToGroup'])],
  groups:["user","vendor","corporate"]
});








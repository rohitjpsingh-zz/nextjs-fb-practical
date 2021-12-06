const bizSdk = require('facebook-nodejs-business-sdk');

const accessToken = 'EAANEHShdcZAsBAPXrtdTZBQvHTsfj8AxDfDZCAod1mqv4mZA6B9U86SXmuVADInAnYkRCaXy9KndPMYCIbhZCYmeimfpueOyijkxE99GUvFZBcNSX9o43NdHwjfhPBPbYyUNT4ULZCiR3lxZANQNF03M2q8cKfZBzqLJZAC3ydjRDFucNlicIGQy3VRklNjIs8D74ZD';
const accountId = 'act_1032262200952117';

const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;

const account = new AdAccount(accountId);
var campaigns;
    
account.read([AdAccount.Fields.name])
  .then((account) =>{
    return account.getCampaigns([Campaign.Fields.name], { limit: 10 }) // fields array and params
  })
  .then((result) =>{
    campaigns = result
    campaigns.forEach((campaign) =>console.log(campaign.name))  
  }).catch(console.error);

const EMAILSUBJECT = "Weekly Followers Digest";
const RECIPIENTS = RECIPIENTS;
const USERNAMES = USERNAMES;
const APIENDPOINT = "https://api.twitter.com/2/users/";
const BEARER = API_BEARER;
const APICONFIG = {
  method: 'GET',
  headers: { 
   'Authorization': 'Bearer ' + BEARER + '', 
   }
};

function myFunction() {
  const makeUserLink = u => '<a href="https://twitter.com/' + u.username + '">' + u.name + '</a>';

  const emailHTML = USERNAMES.map(u => {
    const resUser = UrlFetchApp.fetch(APIENDPOINT + "by/username/" + u, APICONFIG);
    const user = JSON.parse(resUser.getContentText()).data;
    const resFollowing = UrlFetchApp.fetch(APIENDPOINT + user.id + '/following?max_results=10', APICONFIG);
    const following = JSON.parse(resFollowing.getContentText()).data;
    return {
      user,
      following
    }
  }).reduce((prev, cur) => {
    return prev + "<p>"
      + makeUserLink(cur.user)
      + " followed: <p/>"
      + cur.following.map(makeUserLink).join('<br/>')
      + "</p>"

  }, "");

  GmailApp.sendEmail(
      RECIPIENTS,
      EMAILSUBJECT,
      emailHTML,
      { htmlBody: emailHTML }   
  );
}


// SAMPLE DATA from REQUESTS
  //  return {
  //     user: 
  //  { id: '2024211',
  //    name: 'AustinGriffith',
  //    username: 'austingriffith' },
  // following: 
  //  [ { id: '713133', name: 'mjdouglas.eth', username: 'mikedouglas' },
  //    { id: '3193548918', name: 'Bruno', username: 'bdmartino' },
  //    { id: '1405944969630826501',
  //      name: 'izgnzlz.eth',
  //      username: 'izgnzlz' },
  //    { id: '8207832', name: 'Mark Otto', username: 'mdo' },
  //    { id: '1425993509262159881',
  //      name: 'Quantum Art',
  //      username: 'QuantumNFT' },
  //    { id: '26831481', name: 'lisa.eth', username: 'lisacuesta' },
  //    { id: '1310254259917778949',
  //      name: 'TiberiasMax',
  //      username: 'TiberiasMax' },
  //    { id: '1421087839354343424',
  //      name: 'Nuclear Nerds | NFT',
  //      username: 'nuclearnerds' },
  //    { id: '1479888836519890946',
  //      name: 'DappCamp',
  //      username: 'DappCamp_' },
  //    { id: '1450230906375966720', name: 'EthPDX', username: 'ethpdx' }
  //    ]
  //   };


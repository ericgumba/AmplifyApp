 
import React from 'react';
const { connect } = require('twilio-video');


function DebateRoom() {
   const [debateTitle, setDebateTitle] = React.useState("placeholder");

   connect('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzdjYWZjZTJiZTc1NzFhNWM3YzVlNWRmMzU4YzI2MmJkLTE2MzA2NDA1MjAiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJlcmljZ3VtYmEiLCJ2aWRlbyI6e319LCJpYXQiOjE2MzA2NDA1MjAsImV4cCI6MTYzMDY0NDEyMCwiaXNzIjoiU0s3Y2FmY2UyYmU3NTcxYTVjN2M1ZTVkZjM1OGMyNjJiZCIsInN1YiI6IkFDMDNhNjA0MmExNWZlOTNhYTM1YTg4MzZkYzRlMTVhYTgifQ.tuWrGRnHC767LmLMHE500H-M2bOf_TUp6i19NWSDQIE', { name:'my-new-room' }).then(room => {
      console.log(`Successfully joined a Room: ${room}`);
      room.on('participantConnected', participant => {
        console.log(`A remote Participant connected: ${participant}`);
      });
   }, error => {
      console.error(`Unable to connect to Room: ${error.message}`);
   });
 
   return (
      <div>
         <header>
            {debateTitle}
         </header>
             Debate me bro.
      </div>
   ) 
}

export default DebateRoom

 


import generateRowId from '../functions/GenerateDebateId';

async function createDebate(params) {
    function createToken(){
        
    }

    console.log("Creating Debate")
    
    var debateId = generateRowId(32).toString()
    let debateTitle = params.debateTitle
    let debateSummary = params.debateSummary
    let dateCreated = new Date()
    let token = await createToken()

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ debateId, debateTitle, debateSummary,dateCreated })
  };  

    fetch('https://25yefg2sbk.execute-api.us-west-2.amazonaws.com/default/create_debate', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
}  


export default createDebate
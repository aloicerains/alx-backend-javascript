export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
  }, (err) => { 
    console.log('Got a response from the API');
	  return err
  });
}

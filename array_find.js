if (Meteor.isServer) {

	Meteor.startup(() => {
  	console.log('Booted the server in ES2015. Can we run Array.prototype.find? ');
  	console.log(Array.prototype.find ? 'Yes':'No');
  	console.log('Double checking....');	
  	try {
  		console.log([1,2,3,4,5].find((num) => num === 1));  
  	}
  	catch(e) {
  		console.log(`You should see me if that didn't work`);
  	}
  });

}
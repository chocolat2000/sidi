var deepstream = require("deepstream.io-client-js");

var ds = deepstream("192.168.1.105:6021").login();
var record = ds.record.getRecord( 'SID1' );

record.subscribe( 'firstname', function( value ){
                console.log(value);
            });

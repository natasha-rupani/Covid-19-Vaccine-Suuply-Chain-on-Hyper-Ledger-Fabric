/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class SupplyChain extends Contract {

	async initLedger(ctx) {        
		console.info('=== END : Initialize Ledger ===');    
	}    
	async makeVaccine(ctx, vaccineData){
		console.info('============= START : Create Vaccine ===========');
        	vaccineData = JSON.parse(vaccineData);
		await ctx.stub.putState(JSON.parse(vaccineData).id.toString(), Buffer.from(vaccineData));
    		console.info('============= END : Create Vaccine ===========');
	    	return ctx.stub.getTxID();
	}
	async queryVaccine(ctx, vaccineId) {
    		console.info('============= START : Query vaccine ===========');
    		const vaccineAsBytes = await ctx.stub.getState(vaccineId); 
    		if (!vaccineAsBytes || vaccineAsBytes.length === 0) {
      			throw new Error(`${vaccineId} does not exist`);
   	 	}
    		console.log(vaccineAsBytes.toString());
    		console.info('============= END : Query vaccine ===========');
    		return vaccineAsBytes.toString();
  	}
	async helloWorld(ctx) {        
		return "Hello World, how are youd?";    
	}
}

module.exports = SupplyChain;


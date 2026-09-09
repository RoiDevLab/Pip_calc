const E=require('./engine.js');let pass=0,fail=0;function t(name,fn){try{fn();console.log('ok - '+name);pass++}catch(e){console.error('FAIL - '+name+' - '+e.message);fail++}}function near(a,b,tol=1e-9){if(Math.abs(a-b)>tol)throw Error(`${a} != ${b}`)}
t('GBPUSD $10/pip/lot',()=>near(E.pipValuePerLot('GBPUSD','USD').pipValuePerLot,10));
t('USDJPY conversion',()=>near(E.pipValuePerLot('USDJPY','USD',100).pipValuePerLot,10));
t('GBPJPY conversion',()=>near(E.pipValuePerLot('GBPJPY','USD',100).pipValuePerLot,10));
t('EURGBP conversion',()=>near(E.pipValuePerLot('EURGBP','USD',1.25).pipValuePerLot,12.5));
t('AUDCAD conversion',()=>near(E.pipValuePerLot('AUDCAD','USD',1.38).pipValuePerLot,10/1.38));
t('XAUUSD $1/tick/lot',()=>near(E.pipValuePerLot('XAUUSD','USD').pipValuePerLot,1));
t('GBPUSD 5000 / 0.5% / 25 = 0.10',()=>{const r=E.calculatePosition({symbol:'GBPUSD',accountCurrency:'USD',accountBalance:5000,riskPercent:.5,stopLossPips:25});near(r.recommendedLot,.1);near(r.potentialLoss,25)});
t('All requested pairs exist',()=>['EURUSD','GBPUSD','USDJPY','USDCHF','USDCAD','AUDUSD','NZDUSD','EURGBP','EURJPY','EURCHF','EURCAD','EURAUD','EURNZD','GBPJPY','GBPCHF','GBPCAD','GBPAUD','GBPNZD','AUDJPY','AUDCHF','AUDCAD','AUDNZD','NZDJPY','NZDCHF','NZDCAD','CADJPY','CADCHF','CHFJPY'].forEach(s=>E.getInstrument(s)));
console.log(`${pass} passed, ${fail} failed`);if(fail)process.exit(1);
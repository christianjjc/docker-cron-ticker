
let times=0;

const syncDb =()=>{
    times++;
    console.log('running a task every multiplo de 5 second: ', times);
    return times;
}

module.exports={
    syncDb
}
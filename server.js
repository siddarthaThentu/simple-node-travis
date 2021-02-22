const FAVORITE = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('{FAVORITE} rocks')
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();

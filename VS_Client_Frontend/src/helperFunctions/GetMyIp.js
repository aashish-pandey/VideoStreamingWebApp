

export default async function GetMyIp() {
  var ip = ""
  async function getip(){
    await fetch('https://api.ipify.org/?format=json').then(results=>results.json()).then(data => {ip = data.ip; console.log(data.ip);})
  }
  await getip()
  return ip
}

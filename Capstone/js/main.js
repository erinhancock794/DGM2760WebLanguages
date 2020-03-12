
document.querySelector("#websiteName").textContent = "The Yoga Studio"
document.querySelector("#slogan").textContent = "Learn Yoga"

async function getYogaData(){
    try {
        const response = await fetch('yoga.json')
        return await response.json() //returns JSON object

    } catch(error) {
        console.error(error)
    }
}
let yogaData = {}
getYogaData().then(data => (yogaData = data))
console.log(yogaData)


document.querySelector("#big_toe_pose").addEventListener('click', poseInfo)
document.querySelector("#chair_pose").addEventListener('click', poseInfo)
document.querySelector("#downward_facing_dog_pose").addEventListener('click', poseInfo)

function poseInfo(event) {
    let yogaChoice = yogaData.poses.find(poses => {
        return event.target.id === poses.name.toLowerCase()
    }) 
   
    console.log(yogaChoice)
document.querySelector("#yoga_name").textContent = `${yogaData.name} Poseee`
document.querySelector("#alternate").textContent = `${yogaData.alternate} `

} 

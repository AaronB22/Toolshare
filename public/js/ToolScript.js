const filters=async(event)=>{
    
    event.preventDefault();
    const distance = document.querySelector('#distance')
    console.log(distance.value)
    const sendDistance= await fetch('/api/searchRoutes/Distance',{
        method: 'POST',
        body: distance.value,
        headers: { 'Content-Type': 'application/json' },
    })

    if (sendDistance.ok){
        console.log('pass')
        const filterData
    }

}



document
    .querySelector('#apply_filters')
    .addEventListener('click', filters)















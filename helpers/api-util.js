import Axios from '../Axios/Axios'
export async function getAllEvents(){
    const response = await Axios('users')
    const data = await response.data
    let k = 0
    for ( const key in data){
        let imglist = ['images/img1.jpg', 'images/img2.jpg']
        let featurelist = [true, false]
        let datelist = ['2021-01-27','2021-04-01']
        if (k === 0) {
            data[key].image = imglist[k]
            data[key].isFeatured =featurelist[k]
            data[key].date = datelist[k]
            k = 1
        } else {
            data[key].isFeatured =featurelist[k]
            data[key].image = imglist[k]
            data[key].date = datelist[k]
            k = 0
        }
        
        
    }
    return data
}

export async function addData(name,phone,gender,password){
    try {
        const res = await Axios.post('users', {
            name,phone,gender,password
          });
          if(res.status === 200){
                console.log(res); 
                return {'status': true,result : res.data};
          }else if(res.status === 201){
            console.log(res.data);
            return {error: res.data ,status: false}
          }
    } catch (error) {
        return error;
    }
    return false; 
}



export async function loginData(phone, password){
    try {
        const res = await Axios.post('users/login', {
            phone,
            password
          });
          if(res.status === 200){
                console.log(res.data.token); 
                return {status: true,user:res.data.user ,token: res.data.token};
          }else if(res.status === 201){
            console.log(res.data);
            return {error: res.data ,status: false}
          }
    } catch (error) {
        return false;
    }

    return false;
    
}


export async function getFeaturedEvents(){
    const allevents = await getAllEvents();
    return allevents.filter((event) => event.isFeatured)
}

export async function getEventsById(id){
    const allevents = await getAllEvents();
    return allevents.find((event) => event.id.toString() === id)
}


export async function getFilteredEvents(dataFilter){
    const { year, month } = dataFilter;
    const allevents = await getAllEvents();
    let filterEvents = allevents.filter((event) => {
        const eventdate = new Date(event.date);
        return eventdate.getFullYear() === year && eventdate.getMonth() === month - 1;
    });
    return filterEvents;
}

const DUMMY_EVENTS = [
    {
        id: "e1",
        title: 'trending',
        des: 'Testing.com is a health information web resource designed to help patients and caregivers understand the many lab te',
        image: 'images/img1.jpg',
        locations: 'Dhaka erti',
        date: '2021-04-01',
        cid: 2,
        isFeatured: true
    },
    {
        id: "e2",
        title: 'romantic',
        des: 'Testing.com is a health information web resource designed to help patients and caregivers understand the many lab te',
        image: 'images/img2.jpg',
        locations: 'mirpur titi',
        date: '2021-01-27',
        cid: 3,
        isFeatured: false
    },
    {
        id: "e3",
        title: 'horror',
        des: 'Testing.com is a health information web resource designed to help patients and caregivers understand the many lab te',
        image: 'images/img1.jpg',
        locations: 'Dhaka erti',
        date: '2021-01-27',
        cid: 4,
        isFeatured: true
    },
    {
        id: "e4",
        title: 'action',
        des: 'Testing.com is a health information web resource designed to help patients and caregivers understand the many lab te',
        image: 'images/img2.jpg',
        locations: 'mirpur titi',
        date: '2021-01-27',
        cid: 5,
        isFeatured: false
    },
    {
        id: "e5",
        title: 'cartoon',
        des: 'Testing.com is a health information web resource designed to help patients and caregivers understand the many lab te',
        image: 'images/img1.jpg',
        locations: 'Dhaka erti',
        date: '2021-04-01',
        cid: 6,
        isFeatured: true
    }
];

export const getFeaturedEvents = () =>{
    return DUMMY_EVENTS.filter((event) => event.isFeatured)
}

export const getAllEvents = () =>{
    return DUMMY_EVENTS;
}

export const getFilteredEvents = (dataFilter) => {
    const { year, month } = dataFilter;
    let filterEvents = DUMMY_EVENTS.filter((event) => {
        const eventdate = new Date(event.date);
        return eventdate.getFullYear() === year && eventdate.getMonth() === month - 1;
    });
    return filterEvents;
}

export const getEventsById = (id) =>{
    return DUMMY_EVENTS.find((event) => event.id === id)
}

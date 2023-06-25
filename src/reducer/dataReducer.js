const roomData = [{
    id: 1,
    image: 'https://sbcdn1.superbolter.com/atom/themes/otlhHiPryHzjBhDcX7mJ2Q/medium_24F__1_.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
},
{
    id: 2,
    image: 'https://sbcdn1.superbolter.com/atom/themes/ppVgaTAdU-l_pbfZXHqw7w/medium_23F__1_.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
},
{
    id: 3,
    image: 'https://sbcdn1.superbolter.com/atom/themes/tohQXzghpooKZVMmmH04hA/medium_22F__1_.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
},
{
    id: 4,
    image: 'https://sbcdn1.superbolter.com/atom/themes/o5lohhrlxVzgf3emV7-kww/medium_20F__1_.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
},
{
    id: 5,
    image: 'https://sbcdn1.superbolter.com/atom/themes/Lcmp0ZVT6u2azKdavhMbBg/medium_21F__1_.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
},
{
    id: 6,
    image: 'https://sbcdn1.superbolter.com/atom/themes/qL7gPESavDrrRf6Ogdndmw/medium_19F__1_.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
},
{
    id: 7,
    image: 'https://sbcdn1.superbolter.com/atom/themes/8Yopql2EZmSztJBASV7WzA/medium_16F__1_.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
},
{
    id: 8,
    image: 'https://sbcdn1.superbolter.com/atom/themes/LRn9ZWt-G-N_UZjleYxNBQ/medium_15F1.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
},
{
    id: 9,
    image: 'https://sbcdn1.superbolter.com/atom/themes/knFzDSOK077cepRrTwdzmA/medium_14F1.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
},
{
    id: 10,
    image: 'https://sbcdn1.superbolter.com/atom/themes/hMAvyhIgshzPhtG0m2uwFQ/medium_13F1.jpg',
    roomName: 'House Design',
    like: false,
    comment: []
}]

const initalState = sessionStorage.getItem('roomData') ? JSON.parse(sessionStorage.getItem('roomData')) : roomData

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'Data_saver': {
            return action.payload
        }
        default: {
            return state;
        }
    }
}
export default userReducer
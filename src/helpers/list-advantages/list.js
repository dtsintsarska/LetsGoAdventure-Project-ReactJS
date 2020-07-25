import backpack from '../../images/backpack.png'
import smile from '../../images/smile.png'
import calendar from '../../images/calendar.png'

const listAdvantages = () => {
    return ([{
            title: 'Adventurous spirit',
            img: backpack,
            description: 'An adventure with us is never just another adventure. Let us show you the magic of this world!'
        }, {
            title: 'Friendships',
            img: smile,
            description: 'With us you will find new and interesting acquaintances with great people. Just smile and relax!'
        },
        {
            title: 'Quick reservation',
            img: calendar,
            description: 'Save and pay for your adventure with a few clicks. We guarantee the satisfaction of our customers and new friends.'
        }
    ])
}


export default listAdvantages
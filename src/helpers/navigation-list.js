const getNavigation = (loggedIn, user) => {

    const authLinks = [{
            title: "OUR ADVENTURES",
            link: "/adventures",
            dropdown: [{
                    title: "Mountain Adventures",
                    link: "/adventures/mountain"
                },
                {
                    title: "Sea Adventures",
                    link: "adventures/sea"
                },
                {
                    title: "Adventures Abroad",
                    link: "adventures/abroad"
                },
                {
                    title: "MTB Adventures",
                    link: "adventures/MTB"
                }
            ]
        },
        {
            title: "ABOUT US",
            link: "/aboutUs",
            dropdown: [{
                    title: 'Our Team',
                    link: "/aboutus/team"
                },
                {
                    title: "Contact us",
                    link: "/aboutus/contacts"
                }
            ]
        },
        {
            title: "MY PROFILE",
            link: `/profile/${user && user.id}`
        }
    ]

    const guestLinks = [{
            title: "OUR ADVENTURES",
            link: "/adventures",
            dropdown: [{
                    title: "Mountain Adventures",
                    link: "/adventures/mountain"
                },
                {
                    title: "Sea Adventures",
                    link: "adventures/sea"
                },
                {
                    title: "Adventures Abroad",
                    link: "adventures/abroad"
                },
                {
                    title: "MTB Adventures",
                    link: "adventures/MTB"
                }
            ]
        },
        {
            title: "ABOUT US",
            link: "/aboutus",
            dropdown: [{
                    title: 'Our Team',
                    link: "/aboutus/team"
                },
                {
                    title: "Contact us",
                    link: "/aboutus/contacts"
                }
            ]
        },

        {
            title: "REGISTER",
            link: "/register"
        },
        {
            title: "LOGIN",
            link: "/login"
        }
    ]

    return loggedIn ? authLinks : guestLinks
}

export default getNavigation
const getNavigation = (user, isAdmin) => {

    const authLinks = [{
            title: "OUR ADVENTURES",
            link: "/adventures",
            dropdown: [{
                    title: "Mountain Adventures",
                    link: "/adventures/search/Mountain"
                },
                {
                    title: "Sea Adventures",
                    link: "/adventures/search/Sea"
                },
                {
                    title: "MTB Adventures",
                    link: "/adventures/search/MTB"
                }
            ]
        },

        {
            title: "MY PROFILE",
            link: `/profile/${user && user.id}`
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
            title: "LOGOUT",
            link: '/logout'
        }
    ]

    const guestLinks = [{
            title: "OUR ADVENTURES",
            link: "/adventures",
            dropdown: [{
                    title: "Mountain Adventures",
                    link: "/adventures/search/Mountain"
                },
                {
                    title: "Sea Adventures",
                    link: "/adventures/search/Sea"
                },
                {
                    title: "MTB Adventures",
                    link: "/adventures/search/MTB"
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

    ]

    const adminLinks = [{
            title: "OUR ADVENTURES",
            link: "/adventures",
            dropdown: [{
                    title: "Mountain Adventures",
                    link: "/adventures/search/Mountain"
                },
                {
                    title: "Sea Adventures",
                    link: "/adventures/search/Sea"
                },
                {
                    title: "MTB Adventures",
                    link: "/adventures/search/MTB"
                }
            ]
        },

        {
            title: "MY PROFILE",
            link: `/profile/${user && user.id}`
        },
        {
            title: "CREATE NEW ADVENTURE",
            link: "/adventures/create-new"
        }, {
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
            title: "LOGOUT",
            link: '/logout'
        }
    ]
    const loggedIn = user && user.loggedIn
    if (loggedIn && isAdmin) {
        return adminLinks
    } else if (loggedIn) {
        return authLinks
    } else {
        return guestLinks
    }

}

export default getNavigation
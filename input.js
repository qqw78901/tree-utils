module.exports= {
    first: {
        key: 1,
        title: 'parent 1',
        children: [
            {
                key: 2,
                title: 'parent 1-1',
                children: [
                    {
                        key: 4,
                        title: 'leaf 1-1-1'
                    },
                    {
                        key: 5,
                        title: 'leaf 1-1-2'
                    }
                ]
            },
            {
                key: 3,
                title: 'parent 1-2',
                children: [
                    {
                        key: 6,
                        title: 'leaf 1-2-1'
                    },
                    {
                        key: 7,
                        title: 'leaf 1-2-1'
                    },
                    {
                        key: 8,
                        title: 'leaf 1-2-1'
                    },
                    {
                        key: 9,
                        title: 'leaf 1-2-1'
                    },
                    {
                        key: 10,
                        title: 'leaf 1-2-1'
                    },
                    {
                        key: 11,
                        title: 'leaf 1-2-1'
                    }, {
                        key: 12,
                        title: 'leaf 1-2-1'
                    },
                    {
                        key: 13,
                        title: 'leaf 1-2-1'
                    }
                ]
            }
        ]
    },
    second: {
            key: 1,
            title: 'parent 1',
            children: [
                {
                    key: 2,
                    title: 'parent 1-1'
                },
                {
                    key: 3,
                    title: 'parent 1-2',
                    children: [
                        {
                            key: 4,
                            title: 'leaf 1-2-1',
                            children: [
                                {
                                    key: 10,
                                    title: 'leaf 1-2-1-1'
                                },
                                {
                                    key: 11,
                                    title: 'leaf 1-2-1-2'
                                },
                            ]

                        },
                        {
                            key: 5,
                            title: 'leaf 1-2-2'
                        },
                        {
                            key: 6,
                            title: 'leaf 1-2-3'
                        },
                        {
                            key: 7,
                            title: 'leaf 1-2-4'
                        },
                        {
                            key: 8,
                            title: 'leaf 1-2-5'
                        },
                        {
                            key: 9,
                            title: 'leaf 1-2-6'
                        },
                    ]
                }
            ]
    }
};
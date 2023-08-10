export const blueprintData = {
    ASG: [
        {
            type: 'vpc',
            dimensions: {
                width: 1170,
                height: 482,
            },
            handleBounds: {},
            computedPosition: {
                x: 0.31950791077292706,
                y: 41.6640625,
                z: 0,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            data: {
                name: 'example-vpc',
                cidr: '10.0.0.0/16',
                publicsubnet: 2,
                privatesubnet: 3,
                azs: ['us-east-1c', 'us-east-1a'],
                nat_gateway: true,
            },
            events: {},
            id: '0',
            position: {
                x: 0.31950791077292706,
                y: 41.6640625,
            },
            label: 'vpc node',
            style: {
                width: '1170.228822720381px',
                height: '482px',
            },
        },
        {
            type: 'privatesubnet',
            dimensions: {
                width: 200,
                height: 300,
            },
            handleBounds: {},
            computedPosition: {
                x: 149.88787342763385,
                y: 168.60615664309148,
                z: 2,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            parentNode: '3',
            data: {},
            events: {},
            id: '1',
            position: {
                x: 82.56836551686092,
                y: 55.94209414309148,
            },
            label: 'privatesubnet node',
            expandParent: true,
            style: {
                width: '177px',
                height: '247px',
            },
        },
        {
            type: 'asg',
            dimensions: {
                width: 330,
                height: 375,
            },
            handleBounds: {},
            computedPosition: {
                x: 67.31950791077293,
                y: 112.6640625,
                z: 1,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            parentNode: '0',
            data: {
                min_size: 1,
                max_size: 3,
                desired_capacity: 2,
                image_id: 'ami-053b0d53c279acc90',
                instance_type: 't2.micro',
                user_data: 'echo test',
            },
            events: {},
            id: '3',
            position: {
                x: 67,
                y: 71,
            },
            label: 'asg node',
            expandParent: true,
            style: {
                width: '330px',
                height: '375px',
            },
        },
        {
            type: 'privatesubnet',
            dimensions: {
                width: 317,
                height: 376,
            },
            handleBounds: {},
            computedPosition: {
                x: 414.9831281936739,
                y: 112.59341219531507,
                z: 1,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            parentNode: '6',
            data: {},
            events: {},
            id: '4',
            position: {
                x: 414.663620282901,
                y: 70.92934969531507,
            },
            label: 'privatesubnet node',
            expandParent: true,
            style: {
                width: '317px',
                height: '376px',
            },
        },
        {
            type: 'publicsubnet',
            dimensions: {
                width: 307,
                height: 377,
            },
            handleBounds: {},
            computedPosition: {
                x: 770.7803164309155,
                y: 113.2201257861833,
                z: 1,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            parentNode: '6',
            data: {},
            events: {},
            id: '5',
            position: {
                x: 770.4608085201426,
                y: 71.5560632861833,
            },
            label: 'publicsubnet node',
            expandParent: true,
            style: {
                width: '307px',
                height: '377px',
            },
        },
        {
            type: 'alb',
            dimensions: {
                width: 200,
                height: 300,
            },
            handleBounds: {},
            computedPosition: {
                x: 852.0460458433295,
                y: 173.7761890723665,
                z: 2,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            parentNode: '0',
            data: {},
            events: {},
            id: '6',
            position: {
                x: 81.26572941241398,
                y: 60.55606328618319,
            },
            label: 'alb node',
            expandParent: true,
        },
    ],
};

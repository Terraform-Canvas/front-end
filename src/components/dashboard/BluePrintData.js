export const blueprintData = {
    ASG: [
        {
            type: 'vpc',
            dimensions: {
                width: 1090,
                height: 434,
            },
            handleBounds: {},
            computedPosition: {
                x: -60.11212657236615,
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
                x: -60.11212657236615,
                y: 41.6640625,
            },
            label: 'vpc node',
            style: {
                width: '1090px',
                height: '434px',
            },
            isParent: true,
        },
        {
            parentNode: '3',
            type: 'privatesubnet',
            dimensions: {
                width: 200,
                height: 300,
            },
            handleBounds: {},
            computedPosition: {
                x: 95.88787342763385,
                y: 122.60615664309148,
                z: 2,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            data: {},
            events: {},
            id: '1',
            position: {
                x: 88,
                y: 47.94209414309148,
            },
            label: 'privatesubnet node',
            expandParent: true,
            style: {
                width: '177px',
                height: '247px',
            },
        },
        {
            parentNode: '0',
            type: 'asg',
            dimensions: {
                width: 315,
                height: 371,
            },
            handleBounds: {},
            computedPosition: {
                x: 7.887873427633849,
                y: 74.6640625,
                z: 1,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
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
                x: 68,
                y: 33,
            },
            label: 'asg node',
            expandParent: true,
            style: {
                width: '315px',
                height: '371px',
            },
            isParent: true,
        },
        {
            parentNode: '6',
            type: 'privatesubnet',
            dimensions: {
                width: 200,
                height: 300,
            },
            handleBounds: {},
            computedPosition: {
                x: 417.8172231229487,
                y: 116.14947548149826,
                z: 2,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            data: {},
            events: {},
            id: '4',
            position: {
                x: 72.66362028290087,
                y: 42.92934969531507,
            },
            label: 'privatesubnet node',
            expandParent: true,
            style: {
                width: '132px',
                height: '246px',
            },
        },
        {
            parentNode: '6',
            type: 'publicsubnet',
            dimensions: {
                width: 200,
                height: 300,
            },
            handleBounds: {},
            computedPosition: {
                x: 653.6144113601904,
                y: 116.77618907236649,
                z: 1001,
            },
            selected: true,
            dragging: false,
            resizing: false,
            initialized: true,
            data: {},
            events: {},
            id: '5',
            position: {
                x: 308.46080852014256,
                y: 43.5560632861833,
            },
            label: 'publicsubnet node',
            expandParent: true,
            style: {
                width: '121px',
                height: '292px',
            },
        },
        {
            parentNode: '0',
            type: 'alb',
            dimensions: {
                width: 593,
                height: 373,
            },
            handleBounds: {},
            computedPosition: {
                x: 345.1536028400478,
                y: 73.22012578618319,
                z: 1,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            data: {},
            events: {},
            id: '6',
            position: {
                x: 405.265729412414,
                y: 31.55606328618319,
            },
            label: 'alb node',
            expandParent: true,
            isParent: true,
            style: {
                width: '593px',
                height: '373px',
            },
        },
    ],
};

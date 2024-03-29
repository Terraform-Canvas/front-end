export const blueprintData = {
    ASG: [
        {
            type: 'vpc',
            dimensions: {
                width: 1982,
                height: 615,
            },
            handleBounds: {},
            computedPosition: {
                x: -1855.6324619965342,
                y: 80.46564188156685,
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
                privatesubnet: 2,
                azs: ['us-east-1a', 'us-east-1c'],
                nat_gateway: true,
            },
            events: {},
            id: '0',
            position: {
                x: -1855.6324619965342,
                y: 80.46564188156685,
            },
            label: 'vpc node',
            style: {
                width: '1982px',
                height: '615px',
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
                x: -1650.7081218903063,
                y: 232.25519569005633,
                z: 2,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            parentNode: '5',
            data: {},
            events: {},
            id: '1',
            position: {
                x: 115.14796253588065,
                y: 69.73612123228042,
            },
            label: 'privatesubnet node',
            expandParent: true,
        },
        {
            type: 'privatesubnet',
            dimensions: {
                width: 200,
                height: 300,
            },
            handleBounds: {},
            computedPosition: {
                x: -1356.0074042137308,
                y: 245.70949296239496,
                z: 2,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            parentNode: '5',
            data: {},
            events: {},
            id: '2',
            position: {
                x: 409.8486802124562,
                y: 83.19041850461906,
            },
            label: 'privatesubnet node',
            expandParent: true,
        },
        {
            type: 'publicsubnet',
            dimensions: {
                width: 200,
                height: 300,
            },
            handleBounds: {},
            computedPosition: {
                x: -785.3653308985199,
                y: 243.0665120464571,
                z: 2,
            },
            selected: false,
            dragging: false,
            resizing: false,
            initialized: true,
            parentNode: '6',
            data: {},
            events: {},
            id: '3',
            position: {
                x: 90.22475462421971,
                y: 92.34109641418354,
            },
            label: 'publicsubnet node',
            expandParent: true,
        },
        {
            type: 'publicsubnet',
            dimensions: {
                width: 200,
                height: 300,
            },
            handleBounds: {},
            computedPosition: {
                x: -540.5695418664354,
                y: 246.92741341081557,
                z: 2,
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
                x: 335.0205436563042,
                y: 96.20199777854202,
            },
            label: 'publicsubnet node',
            expandParent: true,
        },
        {
            type: 'asg',
            dimensions: {
                width: 765,
                height: 479,
            },
            handleBounds: {},
            computedPosition: {
                x: -1765.856084426187,
                y: 162.5190744577759,
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
                image_id: 'ami-0ab38cce86671f3f0',
                instance_type: 't2.nano',
                user_data: 'echo "test"',
            },
            events: {},
            id: '5',
            position: {
                x: 89.77637757034722,
                y: 82.05343257620905,
            },
            label: 'asg node',
            expandParent: true,
            style: {
                width: '765px',
                height: '479px',
            },
        },
        {
            type: 'alb',
            dimensions: {
                width: 654,
                height: 506,
            },
            handleBounds: {},
            computedPosition: {
                x: -875.5900855227396,
                y: 150.72541563227355,
                z: 1,
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
                x: 980.0423764737945,
                y: 70.2597737507067,
            },
            label: 'alb node',
            expandParent: true,
            style: {
                width: '654px',
                height: '506px',
            },
        },
    ],
};

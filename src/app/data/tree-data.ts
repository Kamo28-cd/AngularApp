import { NestedDataProps } from '../interfaces/interfaces';

export const TYPE_DATA: NestedDataProps[] = [
  {
    type: 'SCENEMANAGER',
    id: 'sceneManager',
    children: [
      {
        type: 'PRELOADERSCENE',
        id: 'PRELOADER',
        children: [
          {
            type: 'TEXT',
            text: 'Loading....',
            x: 200,
            y: 200,
            fillStyle: '#000000',
          },
        ],
      },
      {
        type: 'RACESCENE',
        id: 'SCENE0',
        children: [
          {
            type: 'TILEDIMAGE',
            src: 'Sky08.jpg',
            x: '0',
            y: '-60',
            width: '1',
            scale: '1',
            repeatX: 'true',
            children: [
              {
                type: 'MOVINGIMAGE',
                depth: 20,
                distance: 10,
              },
            ],
          },
          {
            type: 'TILEDIMAGE',
            src: 'SkyLineMountain.jpg',
            x: '0',
            y: '0',
            width: '1',
            scale: '1',
            repeatX: 'true',
            depth: 280,
            children: [
              {
                type: 'MOVINGIMAGE',
                depth: 18,
                distance: 20,
              },
            ],
          },
          {
            type: 'TILEDIMAGE',
            src: 'grass2.jpg',
            x: '0',
            y: '200',
            width: '1',
            scale: '1',
            repeatX: 'true',
            children: [
              {
                type: 'MOVINGIMAGE',
                depth: 2,
                distance: 1,
              },
            ],
          },
          {
            type: 'IMAGE',
            src: 'horse-brown.jpg',
            x: '0',
            y: '400',
            scale: '1',
            children: [
              {
                type: 'IMAGE',
                src: 'horse-no-1.jpg',
                children: [
                  {
                    type: 'KEYFRAME',
                    src: 'horse-no-1-1.jpg',
                    index: 0,
                  },
                  {
                    type: 'KEYFRAME',
                    src: 'horse-no-1-2.jpg',
                    index: 1,
                  },
                  {
                    type: 'KEYFRAME',
                    src: 'horse-no-1-3.jpg',
                    index: 2,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

import {
    IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import {
    OptionsWithUri,
} from 'request';

export class FriendGrid implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'FriendGrid',
        name: 'friendGrid',
        icon: 'file:friendGrid.svg',
        group: ['transform'],
        version: 1,
        description: 'Consume FriendGrid API',
        defaults: {
            name: 'FriendGrid',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
        ],
        properties: [
            {
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'List',
						value: 'list',
					},
					{
						name: 'Mail',
						value: 'mail',
					},
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return [[]];
    }
}

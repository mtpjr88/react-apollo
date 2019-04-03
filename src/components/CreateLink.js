import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const POST_MUTATION = gql`
	mutation PostMutation($description: String!, $url: String!) {
		post(description: $description, url: $url) {
			id
			createdAt
			url
			description
		}
	}
`;

export default class CreateLink extends Component {
	state = { description: '', url: '' };

	render() {
		const { description, url } = this.state;
		return (
			<div>
				<div>
					<input
						type='text'
						value={description}
						onChange={e => this.setState({ description: e.target.value })}
						placeholder='Description for link'
					/>
					<input
						type='text'
						value={url}
						onChange={e => this.setState({ url: e.target.value })}
						placeholder='Url for link'
					/>
				</div>
				<Mutation mutation={POST_MUTATION} variables={{ description, url }}>
					{postMutation => <button onClick={postMutation}>Submit</button>}
				</Mutation>
			</div>
		);
	}
}

import { describe, expect, test, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import IndividualPost from './IndividualPost';
import { BrowserRouter } from 'react-router-dom';

describe('Individual Post rendered with data already passed in. Only partially display.', function () {
	beforeEach(function () {
		render(
			<BrowserRouter>
				<IndividualPost
					displayType={'partial'}
					postData={{
						title: 'test title',
						content: 'test content',
					}}
				></IndividualPost>
			</BrowserRouter>
		);
	});
	test('IndividualPost recieves post data accurately', function () {
		const post = screen.getByTestId('dataTest');

		expect(post.innerHTML).toContain('test title');
	});
});

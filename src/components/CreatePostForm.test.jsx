import { describe, expect, test, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreatePostForm from './CreatePostForm';

describe('Verify buttons rendering', function () {
	beforeEach(function () {
		render(
			<BrowserRouter>
				<CreatePostForm />
			</BrowserRouter>
		);
	});
	test('Verify Save Button is being rendered', function () {
		const button = screen.getByText(/Save/i).closest('button');
		expect(button);
	});
	test('Verify Cancel Button is being rendered', function () {
		const button = screen.getByText(/Cancel/i).closest('button');
		expect(button);
	});
});

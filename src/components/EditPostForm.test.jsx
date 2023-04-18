import { describe, expect, test, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditPostForm from './EditPostForm';

describe('Verify buttons rendering', function () {
	beforeEach(
		async function () {
			render(
				<BrowserRouter>
					<EditPostForm testing={true} />
				</BrowserRouter>
			);
		},
		5,
		'retry'
	);
	test('Verify Save Button is being rendered', function () {
		const button = screen.getByText(/Save/i).closest('button');
		expect(button);
	});
	test('Verify Cancel Button is being rendered', function () {
		const button = screen.getByText(/Cancel/i).closest('button');
		expect(button);
	});
	test('Verify Delete Button is being rendered', function () {
		const button = screen.getByText(/Delete/i).closest('button');
		expect(button);
	});
});

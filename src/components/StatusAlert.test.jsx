import { describe, expect, test, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatusAlert from './StatusAlert';
import { BrowserRouter } from 'react-router-dom';

describe('Verify status alerts', function () {
	beforeEach(function () {
		render(
			<BrowserRouter>
				<StatusAlert statusType={'NoPosts'}></StatusAlert>
			</BrowserRouter>
		);
	});
	test('No Posts Alert', function () {
		const alert = screen.getByAltText(/No Posts/i).closest('div');

		expect(alert.innerHTML).toContain('Create a new post');
	});
});
describe('Verify status alerts', function () {
	beforeEach(function () {
		render(
			<BrowserRouter>
				<StatusAlert statusType={'404'}></StatusAlert>
			</BrowserRouter>
		);
	});
	test('404 Alert', function () {
		const alert = screen.getByAltText(/404 Error/i).closest('div');

		expect(alert.innerHTML).toContain('we cannot find');
	});
});
describe('Verify status alerts', function () {
	beforeEach(function () {
		render(
			<BrowserRouter>
				<StatusAlert statusType={'deletionError'}></StatusAlert>
			</BrowserRouter>
		);
	});
	test('Deletion Error Alert', function () {
		const alert = screen.getByAltText(/Deletion/i).closest('div');

		expect(alert.innerHTML).toContain('deleting');
	});
});
describe('Verify status alerts', function () {
	beforeEach(function () {
		render(
			<BrowserRouter>
				<StatusAlert statusType={'loading'}></StatusAlert>
			</BrowserRouter>
		);
	});
	test('Loading Alert', function () {
		const alert = screen.getByAltText(/Loading/i).closest('div');

		expect(alert.innerHTML).toContain('img');
	});
});
describe('Verify status alerts', function () {
	beforeEach(function () {
		render(
			<BrowserRouter>
				<StatusAlert></StatusAlert>
			</BrowserRouter>
		);
	});
	test('Error alert', function () {
		const alert = screen.getByAltText(/Error/i).closest('div');

		expect(alert.innerHTML).toContain('An error has occured');
	});
});

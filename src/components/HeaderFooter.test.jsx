import { describe, expect, test, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeaderFooter from './HeaderFooter';

describe('Header Rendered with values passed in', function () {
	beforeEach(function () {
		render(
			<HeaderFooter>
				<h3>Does this header work?</h3>
			</HeaderFooter>
		);
	});
	test('Header recieves children and said children are rendered', function () {
		const header = screen.getByText(/Does/i).closest('section');
		console.log(header.innerHTML);
		expect(header.innerHTML).toContain('h3');
	});
});

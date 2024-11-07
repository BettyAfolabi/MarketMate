// eslint-disable-next-line no-unused-vars
import React from "react";
import Search from "./Search";
import { render, screen } from "@testing-library/react";

describe('Search component', () => {
    it('Searches for something', () => {
        render(<Search />);

        // screen.getByText('Search:');

        // expect(screen.getByText('Search:')).toBeInTheDocument();

        // screen.getByRole('');
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
})
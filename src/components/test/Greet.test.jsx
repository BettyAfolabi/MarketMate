// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

describe('Greet', () => {
    it('render Greet component', () =>{
        render(<Greet />);
        screen.debug();
    })
})
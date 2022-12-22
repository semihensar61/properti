import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Roman Num calculator', () => {

    // test if each element renederd
    it('render project', () => {
        render(< Home/>)
        expect(screen.getByTestId("result")).toBeInTheDocument();
        expect(screen.getByTestId("input")).toBeInTheDocument();
    })

    it("calculation 11", () => {
        render(<Home />);
        // check if calculate properly
        const number = screen.getByTestId("input");
        const resultArea = screen.getByTestId("result");
        fireEvent.change(number, { target: { value: 11 } });
        expect(resultArea).toHaveTextContent("XI");
    });

    it("calculation 38", () => {
        render(<Home />);
        // check if calculate properly
        const number = screen.getByTestId("input");
        const resultArea = screen.getByTestId("result");
        fireEvent.change(number, { target: { value: 38 } });
        expect(resultArea).toHaveTextContent("XXXVIII");
    });

    it("calculation 146", () => {
        render(<Home />);
        // check if calculate properly
        const number = screen.getByTestId("input");
        const resultArea = screen.getByTestId("result");
        fireEvent.change(number, { target: { value: 146 } });
        expect(resultArea).toHaveTextContent("CXLVI");
    });

    it("check if string entered", () => {
        render(<Home />);
        // check if calculate properly
        const number = screen.getByTestId("input");
        const resultArea = screen.getByTestId("result");
        fireEvent.change(number, { target: { value: "1asd46" } });
        expect(resultArea).toHaveTextContent("");
    });
})

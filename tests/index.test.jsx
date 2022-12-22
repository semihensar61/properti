import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Roman Num calculator', () => {

    // test if each element renederd
    it('render project', () => {
        render(< Home/>)
        expect(screen.getByTestId("result")).toBeInTheDocument();
        expect(screen.getByTestId("input")).toBeInTheDocument();
    })
})

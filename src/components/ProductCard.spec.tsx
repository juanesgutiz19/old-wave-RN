import React from "react"
import renderer from "react-test-renderer"

import { ProductCard } from "./ProductCard"

jest.runAllTimers();

describe("<ProductCard/>", () => {

    const tree: any = renderer.create(<ProductCard
        key="jewew.ewe"
        product={{}}
        onClick={() => { }}
        onAddToCart={() => { }}
    />).toJSON();

    it("<ProductCard /> has 1 child", (done) => {
        expect(tree?.children?.length).toBe(1);
        done();
    });

    it("verify type of <ProductCard /> ", (done) => {
        expect(tree?.type).toBe("View");
        done();
    });

    
} )
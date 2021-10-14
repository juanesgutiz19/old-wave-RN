
import React from "react"
import renderer from "react-test-renderer"

import { CarouselImages } from "./CarouselImages";

jest.runAllTimers();

describe("<CarouselImages />", () => {

    const tree: any = renderer.create(<CarouselImages
        images={[]}
        height={100}
        width={100}
        activeSlide={2}
        setActiveSlide={() => { }}
    />).toJSON()
    it("verify has 1 child", async (done) => {
        expect(tree?.children?.length).toBe(1);
        done();
    });

    it("verify type of <CarouselImages /> ", (done) => {
        expect(tree?.type).toBe("View");
        console.log(tree.props)
        done();
    });

    it('snapshot', () => {
        expect(tree).toMatchSnapshot();
    });

    // it('renders correctly', async () => {
    //     renderer.create(<> <CarouselImages />  </>);
    // });

})
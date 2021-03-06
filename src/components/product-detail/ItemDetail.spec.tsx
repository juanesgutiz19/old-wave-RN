
import React from "react"
import renderer from "react-test-renderer"

import { ItemDetail } from "./ItemDetail";

jest.runAllTimers();



describe("<ItemDetail />", () => {

    const tree: any = renderer.create(<ItemDetail
        content="contenido del eso"
        title="titulo"
        key="12321.123"
        reseller={{ value: "reseller" }}
    />)


    it("has 2 child", (done) => {
        expect(tree.toJSON()?.children?.length).toBe(2);
        done();
    });

    it("verify type of <ItemDetail /> ", (done) => {
        expect(tree.toJSON()?.type).toBe("View");
        done();
    });

    it("verify style props of <ItemDetail /> ", (done) => {

        const expectedStyle = { marginHorizontal: 20, marginBottom: 15 };

        expect(tree.toJSON().props.style).toMatchObject(expectedStyle);

        done();
    });


    it('snapshot', () => {
        expect(tree.toJSON()).toMatchSnapshot();
    });
})
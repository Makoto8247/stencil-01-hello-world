import { Component, h } from "@stencil/core";

@Component({
    tag: "hello-component",
    styleUrl: "hello-component.css"
})
export class HelloComponent {

    render() {
        return (
            <div>
                <p>hello world</p>
            </div>
        )
    }
}


export const exampleRendercommand =  {
    name: "div",
    props: {
        value: "hello"
    }
}

export const exampleNestedRendercommand = {
    name: "Login",
    props: {
        name: "",
        password: ""
    },
    children: [exampleNestedRendercommand]
}

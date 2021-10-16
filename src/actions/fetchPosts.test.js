const rewire = require("rewire")
const fetchPosts = rewire("./fetchPosts")
const fetchPostsSuccess = fetchPosts.__get__("fetchPostsSuccess")
const fetchPostsError = fetchPosts.__get__("fetchPostsError")
// @ponicode
describe("fetchPostsSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            fetchPostsSuccess(9876, true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fetchPostsSuccess("bc23a9d531064583ace8f67dad60f6bb", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fetchPostsSuccess("bc23a9d531064583ace8f67dad60f6bb", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fetchPostsSuccess("c466a48309794261b64a4f02cfcc3d64", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fetchPostsSuccess("da7588892", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fetchPostsSuccess(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fetchPostsError", () => {
    test("0", () => {
        let callFunction = () => {
            fetchPostsError("bc23a9d531064583ace8f67dad60f6bb", "ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fetchPostsError("bc23a9d531064583ace8f67dad60f6bb", "invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fetchPostsError(9876, "error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fetchPostsError("c466a48309794261b64a4f02cfcc3d64", "too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fetchPostsError("da7588892", "too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fetchPostsError(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fetchPosts.default", () => {
    test("0", () => {
        let callFunction = () => {
            fetchPosts.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})

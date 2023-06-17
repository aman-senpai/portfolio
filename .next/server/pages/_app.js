"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3561:
/***/ ((module) => {


module.exports = {
    name: "Aman Senpai",
    version: "3.0.0",
    githubName: "aman-senpai",
    githubKey: "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",
    email: "jemscollin1@gmail.com",
    errors: {
        404: "This page could not be found.",
        500: "An error occurred while processing your request."
    }
};


/***/ }),

/***/ 8146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ Item),
  "Z": () => (/* binding */ Global_ContextMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/Global/Key.jsx

function Key({ keys , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-gray-600/5 text-zinc-400 transition-all px-2 py-1 flex items-center justify-center duration-200 gap-2 rounded-lg text-xs",
            children: keys.map((keya, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                    ...props,
                    children: keya
                }, index)).reduce((prev, curr)=>[
                    prev,
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "+"
                    }, 1),
                    curr
                ])
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Global/ContextMenu.jsx




const ContextMenu = ({ content , children  })=>{
    let [hasBack, setHasBack] = external_react_default().useState(false);
    let [hasForward, setHasForward] = external_react_default().useState(false);
    (0,external_react_.useEffect)(()=>{
        const contextListener = (e)=>{
            e.preventDefault();
            const menu = document.querySelector(".context-menu");
            const menuPosition = {
                x: e.pageX,
                y: e.pageY
            };
            const windowSize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            if (windowSize.width - menuPosition.x < menu.offsetWidth) {
                menu.style.left = `${windowSize.width - menu.offsetWidth - 24}px`;
            } else {
                menu.style.left = `${menuPosition.x}px`;
            }
            menu.style.top = `${menuPosition.y}px`;
            menu.style.display = "block";
        };
        const clickListener = (e)=>{
            const content = document.querySelector(".context-menu");
            content.style.display = "none";
        };
        document.addEventListener("contextmenu", contextListener);
        document.addEventListener("click", clickListener);
        return ()=>{
            document.removeEventListener("contextmenu", contextListener);
            document.removeEventListener("click", clickListener);
        };
    }, [
        content
    ]);
    (0,external_react_.useEffect)(()=>{
        setHasBack(window.history.length > 1);
        setHasForward(window.history.length > 1);
    }, []);
    const event = {
        hasForward: hasForward,
        hasBack: hasBack,
        goBack: ()=>{
            window.history.back();
        },
        goForward: ()=>{
            window.history.forward();
        },
        refreshPage: ()=>{
            window.location.reload();
        },
        viewSource: ()=>{
            window.open("https://github.com/clqu/clqu.live", "_blank");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    zIndex: 9999999,
                    display: "none"
                },
                className: "context-menu absolute bg-[#f8f8f8] dark:bg-[#080808] rounded-lg shadow-xl py-2 w-72 divide-y divide-gray-600/10 space-y-2",
                children: content(event)
            }),
            children
        ]
    });
};
/* harmony default export */ const Global_ContextMenu = (ContextMenu);
const Item = ({ icon , text , kbd , onClick , ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: onClick,
        className: "flex flex-col text-sm",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-2 w-full justify-between items-center hover:bg-gray-600/5 p-2 px-4 transition-all duration-200",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                        icon,
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm",
                            children: text
                        })
                    ]
                }),
                kbd && /*#__PURE__*/ jsx_runtime_.jsx(Key, {
                    keys: kbd
                })
            ]
        })
    });
};


/***/ }),

/***/ 3948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Global_Cursor)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/hooks/useMousePosition.js

const useMousePosition = ()=>{
    const { 0: mousePosition , 1: setMousePosition  } = (0,external_react_.useState)({
        x: null,
        y: null,
        delayX: null,
        delayY: null
    });
    (0,external_react_.useEffect)(()=>{
        const mouseMoveHandler = (event)=>{
            const { clientX , clientY  } = event;
            setMousePosition((options)=>({
                    ...options,
                    x: clientX,
                    y: clientY
                }));
            setTimeout(()=>{
                setMousePosition((options)=>({
                        ...options,
                        delayX: clientX,
                        delayY: clientY
                    }));
            }, 100);
        };
        document.addEventListener("mousemove", mouseMoveHandler);
        return ()=>{
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);
    return mousePosition;
};
/* harmony default export */ const hooks_useMousePosition = (useMousePosition);

;// CONCATENATED MODULE: ./src/components/Global/Cursor.jsx




const Cursor = ()=>{
    const { x , y , delayX , delayY  } = hooks_useMousePosition();
    let [isClicking, setIsClicking] = external_react_default().useState(false);
    let mouseRef = external_react_default().useRef(null);
    let dotRef = external_react_default().useRef(null);
    (0,external_react_.useEffect)(()=>{
        if (!mouseRef.current) return;
        if (!dotRef.current) return;
        let cursor = mouseRef.current;
        let cursorDot = dotRef.current;
        const mouseOut = (e)=>{
            cursor.style.opacity = 0;
        };
        const mouseOver = (e)=>{
            cursor.style.opacity = 1;
        };
        const onLink = (e)=>{
            cursorDot.style.transform = "scale(5)";
        };
        const offLink = (e)=>{
            cursorDot.style.transform = "scale(1)";
        };
        const click = (e)=>{
            setIsClicking(true);
            setTimeout(()=>{
                setIsClicking(false);
            }, 100);
        };
        document.addEventListener("mouseout", mouseOut);
        document.addEventListener("mouseover", mouseOver);
        document.addEventListener("click", click);
        return ()=>{
            window.removeEventListener("mouseout", mouseOut);
            window.removeEventListener("mouseover", mouseOver);
            window.removeEventListener("click", click);
        };
    }, [
        mouseRef
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `hidden lg:block fixed ring-2 ring-primary rounded-full w-10 h-10 bg-white/50 dark:bg-black/50 pointer-events-none`,
            style: {
                left: delayX - 16,
                top: delayY - 16,
                zIndex: 9999999999999,
                transition: "opacity 0.1s ease-in-out",
                opacity: 0
            },
            ref: mouseRef,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-primary rounded-full w-2 h-2 fixed pointer-events-none",
                    style: {
                        left: x,
                        top: y
                    },
                    ref: dotRef
                })
            })
        })
    });
};
/* harmony default export */ const Global_Cursor = (Cursor);


/***/ }),

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Global_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6137);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3561);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_clqu_config__WEBPACK_IMPORTED_MODULE_5__);






function Footer() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let { 0: heartColor , 1: setHeartColor  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("#4F3DFE");
    function randomColor() {
        let color = "#";
        let letters = "0123456789ABCDEF";
        for(let i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-7xl mx-auto py-12 border-t border-gray-500/10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col lg:flex-row items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-lg text-zinc-400",
                        children: [
                            "\xa9 2022 - ",
                            new Date().getFullYear(),
                            " ",
                            (_clqu_config__WEBPACK_IMPORTED_MODULE_5___default().name),
                            ". All rights reserved."
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-right",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-lg text-zinc-400 select-none",
                            children: [
                                "Made with ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>{
                                        setHeartColor(randomColor());
                                    },
                                    className: "fas fa-heart",
                                    style: {
                                        color: heartColor,
                                        cursor: "pointer"
                                    }
                                }),
                                " by ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "",
                                    className: "text-zinc-400 hover:text-primary hover:dark:text-white",
                                    children: "aman senpai"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 1595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var components_Global_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6137);
/* harmony import */ var context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1947);
/* harmony import */ var hooks_useSWR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1552);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3561);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_clqu_config__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, hooks_useSWR__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, hooks_useSWR__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Navbar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    let { 0: isOpen , 1: setMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { data: $socials  } = (0,hooks_useSWR__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("/api/socials");
    const socials = $socials?.data;
    const { isTheme , toggleTheme  } = (0,context_theme__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .F)();
    const pages = [
        {
            link: "/",
            label: "Home",
            icon: {
                default: "fal fa-home",
                active: "fas fa-home"
            },
            active: router.pathname === "/"
        },
        {
            link: "/about",
            label: "About",
            icon: {
                default: "fal fa-user",
                active: "fas fa-user"
            },
            active: router.pathname === "/about"
        },
        {
            link: "/projects",
            label: "Projects",
            icon: {
                default: "fal fa-project-diagram",
                active: "fas fa-project-diagram"
            },
            active: router.pathname === "/projects"
        },
        {
            link: "/posts",
            label: "Posts",
            icon: {
                default: "fal fa-newspaper",
                active: "fas fa-newspaper"
            },
            active: router.pathname === "/posts"
        }
    ];
    const setIsOpen = (value)=>{
        if (value === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        setMenu(value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-7xl mx-auto py-12 w-full px-6 lg:px-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center gap-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-2xl font-bold transition-all duration-200",
                                    children: (_clqu_config__WEBPACK_IMPORTED_MODULE_8___default().name)
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    onClick: ()=>setIsOpen(true),
                                    className: "fas fa-bars text-2xl text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>toggleTheme(),
                                    className: "text-2xl text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200",
                                    children: isTheme === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-moon"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-sun"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                show: isOpen,
                appear: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                        as: "div",
                        enter: "transition-all duration-200",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-all duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        className: "fixed right-0 top-0 w-full h-full bg-black/50 z-[999]",
                        onClick: ()=>setIsOpen(false)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                        enter: "transition-all duration-500",
                        enterFrom: "opacity-0 translate-x-full",
                        enterTo: "opacity-100 translate-x-0",
                        leave: "transition-all duration-200",
                        leaveFrom: "opacity-100 translate-x-0",
                        leaveTo: "opacity-0 translate-x-full",
                        className: "fixed right-0 top-0 w-full lg:w-[30rem] h-full bg-[#f5f5f5] dark:bg-[#050505] lg:rounded-l-2xl p-6 z-[1000]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                zIndex: 999
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between w-full items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-2xl font-semibold",
                                            children: (_clqu_config__WEBPACK_IMPORTED_MODULE_8___default().name)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            onClick: ()=>setIsOpen(false),
                                            className: "fa fa-times w-12 h-12 hover:bg-gray-500/5 text-xl flex items-center justify-center transition-all duration-200 rounded-lg "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-8 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs font-medium uppercase text-black/50 dark:text-white/10",
                                                    children: "Menu"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full h-0.5 bg-black/50 dark:bg-white/10"
                                                })
                                            ]
                                        }),
                                        pages.map((page, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                href: page.link,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    onClick: ()=>setIsOpen(false),
                                                    className: `flex items-center gap-4 text-xl transition-all duration-200 ${page.active ? "bg-gray-500/5 text-black dark:text-white font-semibold" : "hover:bg-gray-500/10 text-zinc-400 hover:text-black hover:dark:text-white"} px-4 py-3 rounded-lg`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: (page.active ? page.icon.active : page.icon.default) + " w-6"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: page.label
                                                        })
                                                    ]
                                                })
                                            }, index);
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-8 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs font-medium uppercase text-black/50 dark:text-white/10",
                                                    children: "Socials"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full h-0.5 bg-black/50 dark:bg-white/10"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                socials?.map((social, index)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: social.url,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `fab fa-${social.name} text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10`
                                                        })
                                                    }, index);
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "/contact",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        onClick: ()=>setIsOpen(false),
                                                        className: "flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-envelope text-2xl"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Contact"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
const ThemeProvider = ({ children  })=>{
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let { 0: inStorage , 1: setInStorage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dark");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inStorage === null) {
            let storedTheme = localStorage.getItem("theme");
            if (storedTheme) {
                setTheme(storedTheme);
            } else {
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    setTheme("dark");
                } else {
                    setTheme("light");
                }
            }
            setInStorage(true);
        }
    }, [
        inStorage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (theme === "dark") {
            document?.documentElement.classList.add("dark");
        } else {
            document?.documentElement.classList.remove("dark");
        }
    }, [
        theme
    ]);
    const toggleTheme = ()=>{
        let newTheme = theme === "light" ? "dark" : "light";
        if (newTheme === "dark") {
            document?.documentElement.classList.add("dark");
        } else {
            document?.documentElement.classList.remove("dark");
        }
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };
    const changeTheme = (theme)=>{
        if (theme === "dark") {
            document?.documentElement.classList.add("dark");
        } else {
            document?.documentElement.classList.remove("dark");
        }
        setTheme(theme);
        localStorage.setItem("theme", theme);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            isTheme: theme,
            toggleTheme,
            setTheme: changeTheme
        },
        children: children
    });
};


/***/ }),

/***/ 1552:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useSwr)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function useSwr(url, refreshInterval = 1000) {
    (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
    return (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(url, (href)=>axios__WEBPACK_IMPORTED_MODULE_0___default().get(href, {
            withCredentials: true
        }).then((res)=>res.data).catch((res)=>res?.response?.data), {
        refreshInterval
    });
};
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Static_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1595);
/* harmony import */ var context_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4778);
/* harmony import */ var context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1947);
/* harmony import */ var components_Static_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9653);
/* harmony import */ var components_Global_Cursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3948);
/* harmony import */ var components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8146);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Static_Navbar__WEBPACK_IMPORTED_MODULE_1__]);
components_Static_Navbar__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context_theme__WEBPACK_IMPORTED_MODULE_3__/* .ThemeProvider */ .f, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context_page__WEBPACK_IMPORTED_MODULE_2__/* .PageProvider */ .Ti, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: "Senpaism | Full-stack Developer"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Global_Cursor__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            content: (event)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            event.hasBack && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_6__/* .Item */ .c, {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-arrow-left"
                                                }),
                                                text: "Back",
                                                kbd: [
                                                    "Alt",
                                                    "◀"
                                                ],
                                                onClick: event.goBack
                                            }),
                                            event.hasForward && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_6__/* .Item */ .c, {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-arrow-right"
                                                }),
                                                text: "Forward",
                                                kbd: [
                                                    "Alt",
                                                    "▶"
                                                ],
                                                onClick: event.goForward
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Global_ContextMenu__WEBPACK_IMPORTED_MODULE_6__/* .Item */ .c, {
                                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-redo"
                                                }),
                                                text: "Refresh",
                                                kbd: [
                                                    "Ctrl",
                                                    "R"
                                                ],
                                                onClick: event.refreshPage
                                            })
                                        ]
                                    })
                                }),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Static_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                    className: "min-h-[67vh] px-6 lg:px-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Static_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "color-layout layout-purple position-right-top"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "color-layout layout-blue position-left-bottom"
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,967], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();
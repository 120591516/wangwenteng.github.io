(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{653:function(t,s,e){"use strict";e.r(s);var a=e(5),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),e("p",[t._v("React中组件也有生命周期，也就是说也有很多钩子函数供我们使用, 组件的生命周期，我们会分为四个阶段，初始化、运行中、销毁、错误处理(16.3之后)")])]),t._v(" "),e("h2",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),e("p",[t._v("在组件初始化阶段会执行")]),t._v(" "),e("ol",[e("li",[t._v("constructor")]),t._v(" "),e("li",[t._v("static getDerivedStateFromProps()")]),t._v(" "),e("li",[t._v("componentWillMount() / UNSAFE_componentWillMount()")]),t._v(" "),e("li",[t._v("render()")]),t._v(" "),e("li",[t._v("componentDidMount()")])]),t._v(" "),e("h2",{attrs:{id:"更新阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新阶段"}},[t._v("#")]),t._v(" 更新阶段")]),t._v(" "),e("p",[e("code",[t._v("props")]),t._v("或"),e("code",[t._v("state")]),t._v("的改变可能会引起组件的更新，组件重新渲染的过程中会调用以下方法：")]),t._v(" "),e("ol",[e("li",[t._v("componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()")]),t._v(" "),e("li",[t._v("static getDerivedStateFromProps()")]),t._v(" "),e("li",[t._v("shouldComponentUpdate()")]),t._v(" "),e("li",[t._v("componentWillUpdate() / UNSAFE_componentWillUpdate()")]),t._v(" "),e("li",[t._v("render()")]),t._v(" "),e("li",[t._v("getSnapshotBeforeUpdate()")]),t._v(" "),e("li",[t._v("componentDidUpdate()")])]),t._v(" "),e("h2",{attrs:{id:"卸载阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载阶段"}},[t._v("#")]),t._v(" 卸载阶段")]),t._v(" "),e("ol",[e("li",[t._v("componentWillUnmount()")])]),t._v(" "),e("h2",{attrs:{id:"错误处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),e("ol",[e("li",[t._v("componentDidCatch()")])]),t._v(" "),e("h2",{attrs:{id:"各生命周期详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#各生命周期详解"}},[t._v("#")]),t._v(" 各生命周期详解")]),t._v(" "),e("h3",{attrs:{id:"_1-constructor-props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-constructor-props"}},[t._v("#")]),t._v(" 1.constructor(props)")]),t._v(" "),e("p",[t._v("React组件的构造函数在挂载之前被调用。在实现"),e("code",[t._v("React.Component")]),t._v("构造函数时，需要先在添加其他内容前，调用"),e("code",[t._v("super(props)")]),t._v("，用来将父组件传来的"),e("code",[t._v("props")]),t._v("绑定到这个类中，使用"),e("code",[t._v("this.props")]),t._v("将会得到。")]),t._v(" "),e("p",[t._v("官方建议不要在"),e("code",[t._v("constructor")]),t._v("引入任何具有副作用和订阅功能的代码，这些应当使用"),e("code",[t._v("componentDidMount()")]),t._v("。")]),t._v(" "),e("p",[e("code",[t._v("constructor")]),t._v("中应当做些初始化的动作，如：初始化"),e("code",[t._v("state")]),t._v("，将事件处理函数绑定到类实例上，但也不要使用"),e("code",[t._v("setState()")]),t._v("。如果没有必要初始化state或绑定方法，则不需要构造"),e("code",[t._v("constructor")]),t._v("，或者把这个组件换成纯函数写法。")]),t._v(" "),e("p",[t._v("当然也可以利用"),e("code",[t._v("props")]),t._v("初始化"),e("code",[t._v("state")]),t._v("，在之后修改"),e("code",[t._v("state")]),t._v("不会对"),e("code",[t._v("props")]),t._v("造成任何修改，但仍然建议大家提升状态到父组件中，或使用"),e("code",[t._v("redux")]),t._v("统一进行状态管理。")]),t._v(" "),e("div",{staticClass:"language-jsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isLiked")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isLiked\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"_2-static-getderivedstatefromprops-nextprops-prevstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-static-getderivedstatefromprops-nextprops-prevstate"}},[t._v("#")]),t._v(" 2.static getDerivedStateFromProps(nextProps, prevState)")]),t._v(" "),e("p",[e("code",[t._v("getDerivedStateFromProps")]),t._v(" 是react16.3之后新增，在组件实例化后，和接受新的"),e("code",[t._v("props")]),t._v("后被调用。他必须返回一个对象来更新状态，或者返回null表示新的props不需要任何state的更新。")]),t._v(" "),e("p",[t._v("如果是由于父组件的"),e("code",[t._v("props")]),t._v("更改，所带来的重新渲染，也会触发此方法。")]),t._v(" "),e("p",[t._v("调用"),e("code",[t._v("steState()")]),t._v("不会触发"),e("code",[t._v("getDerivedStateFromProps()")]),t._v("。")]),t._v(" "),e("p",[t._v("之前这里都是使用"),e("code",[t._v("constructor")]),t._v("+"),e("code",[t._v("componentWillRecieveProps")]),t._v("完成相同的功能的")]),t._v(" "),e("h3",{attrs:{id:"_3-componentwillmount-unsafe-componentwillmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-componentwillmount-unsafe-componentwillmount"}},[t._v("#")]),t._v(" 3. componentWillMount() / UNSAFE_componentWillMount()")]),t._v(" "),e("p",[e("code",[t._v("componentWillMount()")]),t._v("将在React未来版本(官方说法 17.0)中被弃用。"),e("code",[t._v("UNSAFE_componentWillMount()")]),t._v("在组件挂载前被调用，在这个方法中调用"),e("code",[t._v("setState()")]),t._v("不会起作用，是由于他在"),e("code",[t._v("render()")]),t._v("前被调用。")]),t._v(" "),e("p",[t._v("为了避免副作用和其他的订阅，官方都建议使用"),e("code",[t._v("componentDidMount()")]),t._v("代替。这个方法是用于在服务器渲染上的唯一方法。这个方法因为是在渲染之前被调用，也是惟一一个可以直接同步修改state的地方。")]),t._v(" "),e("h3",{attrs:{id:"_4-render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-render"}},[t._v("#")]),t._v(" 4.render()")]),t._v(" "),e("p",[t._v("render()方法是必需的。当他被调用时，他将计算"),e("code",[t._v("this.props")]),t._v("和"),e("code",[t._v("this.state")]),t._v("，并返回以下一种类型：")]),t._v(" "),e("ol",[e("li",[t._v("React元素。通过jsx创建，既可以是dom元素，也可以是用户自定义的组件。")]),t._v(" "),e("li",[t._v("字符串或数字。他们将会以文本节点形式渲染到dom中。")]),t._v(" "),e("li",[t._v("Portals。react 16版本中提出的新的解决方案，可以使组件脱离父组件层级直接挂载在DOM树的任何位置。")]),t._v(" "),e("li",[t._v("null，什么也不渲染")]),t._v(" "),e("li",[t._v("布尔值。也是什么都不渲染。")])]),t._v(" "),e("p",[t._v("当返回"),e("code",[t._v("null")]),t._v(","),e("code",[t._v("false")]),t._v(","),e("code",[t._v("ReactDOM.findDOMNode(this)")]),t._v("将会返回null，什么都不会渲染。")]),t._v(" "),e("p",[e("code",[t._v("render()")]),t._v("方法必须是一个纯函数，他不应该改变"),e("code",[t._v("state")]),t._v("，也不能直接和浏览器进行交互，应该将事件放在其他生命周期函数中。\n如果"),e("code",[t._v("shouldComponentUpdate()")]),t._v("返回"),e("code",[t._v("false")]),t._v("，"),e("code",[t._v("render()")]),t._v("不会被调用。")]),t._v(" "),e("h3",{attrs:{id:"_5-componentdidmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-componentdidmount"}},[t._v("#")]),t._v(" 5. componentDidMount")]),t._v(" "),e("p",[e("code",[t._v("componentDidMount")]),t._v("在组件被装配后立即调用。初始化使得DOM节点应该进行到这里。")]),t._v(" "),e("p",[e("strong",[t._v("通常在这里进行ajax请求")])]),t._v(" "),e("p",[t._v("如果要初始化第三方的dom库，也在这里进行初始化。只有到这里才能获取到真实的dom.")]),t._v(" "),e("h3",{attrs:{id:"_6-componentwillreceiveprops-unsafe-componentwillreceiveprops-nextprops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-componentwillreceiveprops-unsafe-componentwillreceiveprops-nextprops"}},[t._v("#")]),t._v(" 6.componentWillReceiveProps()/UNSAFE_componentWillReceiveProps(nextProps)")]),t._v(" "),e("p",[t._v("官方建议使用"),e("code",[t._v("getDerivedStateFromProps")]),t._v("函数代替"),e("code",[t._v("componentWillReceiveProps")]),t._v("。当组件挂载后，接收到新的"),e("code",[t._v("props")]),t._v("后会被调用。如果需要更新"),e("code",[t._v("state")]),t._v("来响应"),e("code",[t._v("props")]),t._v("的更改，则可以进行"),e("code",[t._v("this.props")]),t._v("和"),e("code",[t._v("nextProps")]),t._v("的比较，并在此方法中使用"),e("code",[t._v("this.setState()")]),t._v("。")]),t._v(" "),e("p",[t._v("如果父组件会让这个组件重新渲染，即使"),e("code",[t._v("props")]),t._v("没有改变，也会调用这个方法。")]),t._v(" "),e("p",[t._v("React不会在组件初始化props时调用这个方法。调用"),e("code",[t._v("this.setState")]),t._v("也不会触发。")]),t._v(" "),e("h3",{attrs:{id:"_7-shouldcomponentupdate-nextprops-nextstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-shouldcomponentupdate-nextprops-nextstate"}},[t._v("#")]),t._v(" 7.shouldComponentUpdate(nextProps, nextState)")]),t._v(" "),e("p",[t._v("调用"),e("code",[t._v("shouldComponentUpdate")]),t._v("使React知道，组件的输出是否受"),e("code",[t._v("state")]),t._v("和"),e("code",[t._v("props")]),t._v("的影响。默认每个状态的更改都会重新渲染，大多数情况下应该保持这个默认行为。")]),t._v(" "),e("p",[t._v("在渲染新的"),e("code",[t._v("props")]),t._v("或"),e("code",[t._v("state")]),t._v("前，"),e("code",[t._v("shouldComponentUpdate")]),t._v("会被调用。默认为"),e("code",[t._v("true")]),t._v("。这个方法不会在初始化时被调用，也不会在"),e("code",[t._v("forceUpdate()")]),t._v("时被调用。返回"),e("code",[t._v("false")]),t._v("不会阻止子组件在"),e("code",[t._v("state")]),t._v("更改时重新渲染。")]),t._v(" "),e("p",[t._v("如果"),e("code",[t._v("shouldComponentUpdate()")]),t._v("返回"),e("code",[t._v("false")]),t._v("，"),e("code",[t._v("componentWillUpdate")]),t._v(","),e("code",[t._v("render")]),t._v("和"),e("code",[t._v("componentDidUpdate")]),t._v("不会被调用。")]),t._v(" "),e("blockquote",[e("p",[t._v("官方并不建议在"),e("code",[t._v("shouldComponentUpdate()")]),t._v("中进行深度查询或使用"),e("code",[t._v("JSON.stringify()")]),t._v("，他效率非常低，并且损伤性能。")])]),t._v(" "),e("h3",{attrs:{id:"_8-unsafe-componentwillupdate-nextprops-nextstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-unsafe-componentwillupdate-nextprops-nextstate"}},[t._v("#")]),t._v(" 8.UNSAFE_componentWillUpdate(nextProps, nextState)")]),t._v(" "),e("p",[t._v("在渲染新的"),e("code",[t._v("state")]),t._v("或"),e("code",[t._v("props")]),t._v("时，"),e("code",[t._v("UNSAFE_componentWillUpdate")]),t._v("会被调用，将此作为在更新发生之前进行准备的机会。这个方法不会在初始化时被调用。")]),t._v(" "),e("p",[e("em",[t._v("不能在这里使用this.setState()")]),t._v("，也不能做会触发视图更新的操作。如果需要更新"),e("code",[t._v("state")]),t._v("或"),e("code",[t._v("props")]),t._v("，调用"),e("code",[t._v("getDerivedStateFromProps")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_9-getsnapshotbeforeupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" 9.getSnapshotBeforeUpdate()")]),t._v(" "),e("p",[t._v("在react "),e("code",[t._v("render()")]),t._v("后的输出被渲染到DOM之前被调用。它使您的组件能够在它们被潜在更改之前捕获当前值（如滚动位置）。这个生命周期返回的任何值都将作为参数传递给componentDidUpdate（）。")]),t._v(" "),e("h3",{attrs:{id:"_10-componentdidupdate-prevprops-prevstate-snapshot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-componentdidupdate-prevprops-prevstate-snapshot"}},[t._v("#")]),t._v(" 10.componentDidUpdate(prevProps, prevState, snapshot)")]),t._v(" "),e("p",[t._v("在更新发生后立即调用"),e("code",[t._v("componentDidUpdate()")]),t._v("。此方法不用于初始渲染。当组件更新时，将此作为一个机会来操作DOM。只要您将当前的props与以前的props进行比较（例如，如果props没有改变，则可能不需要网络请求），这也是做网络请求的好地方。")]),t._v(" "),e("p",[t._v("如果组件实现"),e("code",[t._v("getSnapshotBeforeUpdate()")]),t._v("生命周期，则它返回的值将作为第三个“快照”参数传递给"),e("code",[t._v("componentDidUpdate()")]),t._v("。否则，这个参数是"),e("code",[t._v("undefined")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_11-componentwillunmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-componentwillunmount"}},[t._v("#")]),t._v(" 11.componentWillUnmount()")]),t._v(" "),e("p",[t._v("在组件被卸载并销毁之前立即被调用。在此方法中执行任何必要的清理，例如使定时器无效，取消网络请求或清理在"),e("code",[t._v("componentDidMount")]),t._v("中创建的任何监听。")]),t._v(" "),e("h3",{attrs:{id:"_12-componentdidcatch-error-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-componentdidcatch-error-info"}},[t._v("#")]),t._v(" 12.componentDidCatch(error, info)")]),t._v(" "),e("p",[t._v("错误边界是React组件，可以在其子组件树中的任何位置捕获JavaScript错误，记录这些错误并显示回退UI，而不是崩溃的组件树。错误边界在渲染期间，生命周期方法以及整个树下的构造函数中捕获错误。")]),t._v(" "),e("p",[t._v("如果类组件定义了此生命周期方法，则它将成错误边界。在它中调用"),e("code",[t._v("setState()")]),t._v("可以让你在下面的树中捕获未处理的JavaScript错误，并显示一个后备UI。只能使用错误边界从意外异常中恢复; 不要试图将它们用于控制流程。")]),t._v(" "),e("p",[t._v("错误边界只会捕获树中下面组件中的错误。错误边界本身不能捕获错误。")]),t._v(" "),e("h2",{attrs:{id:"purecomponent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purecomponent"}},[t._v("#")]),t._v(" PureComponent")]),t._v(" "),e("p",[e("code",[t._v("PureComponnet")]),t._v("里如果接收到的新属性或者是更改后的状态和原属性、原状态相同的话，就不会去重新render了\n在里面也可以使用"),e("code",[t._v("shouldComponentUpdate")]),t._v("，而且。是否重新渲染以"),e("code",[t._v("shouldComponentUpdate")]),t._v("的返回值为最终的决定因素。")]),t._v(" "),e("div",{staticClass:"language-jsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PureComponent "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("YourComponent")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PureComponent")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ……\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"ref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),e("p",[t._v("React提供的这个"),e("code",[t._v("ref")]),t._v("属性，表示为对组件真正实例的引用，其实就是"),e("code",[t._v("ReactDOM.render()")]),t._v("返回的组件实例,"),e("code",[t._v("ref")]),t._v("可以挂载到组件上也可以是dom元素上。")]),t._v(" "),e("ul",[e("li",[t._v("挂到组件("),e("code",[t._v("class")]),t._v("声明的组件)上的ref表示对组件实例的引用。"),e("strong",[t._v("不能")]),t._v("在函数式组件上使用 ref 属性，因为它们没有实例：")]),t._v(" "),e("li",[t._v("挂载到dom元素上时表示具体的dom元素节点。")])]),t._v(" "),e("p",[t._v("在React 最新的版本中，要使用"),e("code",[t._v("ref")]),t._v(", 需要使用"),e("code",[t._v("React.createRef")]),t._v("方法先生成一个"),e("code",[t._v("ref")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-jsx line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" createRef "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ReactDOM "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-dom'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建inputRef")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputRef"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputRef"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <input type="text">')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  \t\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 关联ref和dom */")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[e("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputRef"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nReactDOM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{729:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("NSQ是目前比较流行的一个分布式的消息队列，本文主要介绍了NSQ及Go语言如何操作NSQ。")])]),s._v(" "),a("h2",{attrs:{id:"nsq介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsq介绍"}},[s._v("#")]),s._v(" NSQ介绍")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nsq.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("NSQ"),a("OutboundLink")],1),s._v("是Go语言编写的一个开源的实时分布式内存消息队列，其性能十分优异。 NSQ的优势有以下优势：")]),s._v(" "),a("ol",[a("li",[s._v("NSQ提倡分布式和分散的拓扑，没有单点故障，支持容错和高可用性，并提供可靠的消息交付保证")]),s._v(" "),a("li",[s._v("NSQ支持横向扩展，没有任何集中式代理。")]),s._v(" "),a("li",[s._v("NSQ易于配置和部署，并且内置了管理界面。")])]),s._v(" "),a("h2",{attrs:{id:"nsq的应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsq的应用场景"}},[s._v("#")]),s._v(" NSQ的应用场景")]),s._v(" "),a("p",[s._v("通常来说，消息队列都适用以下场景。")]),s._v(" "),a("h3",{attrs:{id:"异步处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步处理"}},[s._v("#")]),s._v(" 异步处理")]),s._v(" "),a("p",[s._v("参照下图利用消息队列把业务流程中的非关键流程异步化，从而显著降低业务请求的响应时间。"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57g2erjj213e0u0422.jpg",alt:"nsq应用场景1"}})]),s._v(" "),a("h3",{attrs:{id:"应用解耦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用解耦"}},[s._v("#")]),s._v(" 应用解耦")]),s._v(" "),a("p",[s._v("通过使用消息队列将不同的业务逻辑解耦，降低系统间的耦合，提高系统的健壮性。后续有其他业务要使用订单数据可直接订阅消息队列，提高系统的灵活性。"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57foi9jj20wi0jgwg5.jpg",alt:"nsq应用场景1"}})]),s._v(" "),a("h3",{attrs:{id:"流量削峰"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量削峰"}},[s._v("#")]),s._v(" 流量削峰")]),s._v(" "),a("p",[s._v("类似秒杀（大秒）等场景下，某一时间可能会产生大量的请求，使用消息队列能够为后端处理请求提供一定的缓冲区，保证后端服务的稳定性。"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57f5x5vj20xc08umxu.jpg",alt:"nsq应用场景1"}})]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nsq.io/deployment/installing.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方下载页面"),a("OutboundLink")],1),s._v("根据自己的平台下载并解压即可。")]),s._v(" "),a("h2",{attrs:{id:"nsq组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsq组件"}},[s._v("#")]),s._v(" NSQ组件")]),s._v(" "),a("h3",{attrs:{id:"nsqd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsqd"}},[s._v("#")]),s._v(" nsqd")]),s._v(" "),a("p",[s._v("nsqd是一个守护进程，它接收、排队并向客户端发送消息。")]),s._v(" "),a("p",[s._v("启动"),a("code",[s._v("nsqd")]),s._v("，指定"),a("code",[s._v("-broadcast-address=127.0.0.1")]),s._v("来配置广播地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" ./nsqd -broadcast-address=127.0.0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果是在搭配"),a("code",[s._v("nsqlookupd")]),s._v("使用的模式下需要还指定"),a("code",[s._v("nsqlookupd")]),s._v("地址:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" ./nsqd -broadcast-address=127.0.0.1 -lookupd-tcp-address=127.0.0.1:4160\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果是部署了多个"),a("code",[s._v("nsqlookupd")]),s._v("节点的集群，那还可以指定多个"),a("code",[s._v("-lookupd-tcp-address")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("nsqdq")]),s._v("相关配置项如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' -auth-http-address value\n     <addr>:<port> to query auth server (may be given multiple times)\n -broadcast-address string\n     address that will be registered with lookupd (defaults to the OS hostname) (default "PROSNAKES.local")\n -config string\n     path to config file\n -data-path string\n     path to store disk-backed messages\n -deflate\n     enable deflate feature negotiation (client compression) (default true)\n -e2e-processing-latency-percentile value\n     message processing time percentiles (as float (0, 1.0]) to track (can be specified multiple times or comma separated \'1.0,0.99,0.95\', default none)\n -e2e-processing-latency-window-time duration\n     calculate end to end latency quantiles for this duration of time (ie: 60s would only show quantile calculations from the past 60 seconds) (default 10m0s)\n -http-address string\n     <addr>:<port> to listen on for HTTP clients (default "0.0.0.0:4151")\n -http-client-connect-timeout duration\n     timeout for HTTP connect (default 2s)\n -http-client-request-timeout duration\n     timeout for HTTP request (default 5s)\n -https-address string\n     <addr>:<port> to listen on for HTTPS clients (default "0.0.0.0:4152")\n -log-prefix string\n     log message prefix (default "[nsqd] ")\n -lookupd-tcp-address value\n     lookupd TCP address (may be given multiple times)\n -max-body-size int\n     maximum size of a single command body (default 5242880)\n -max-bytes-per-file int\n     number of bytes per diskqueue file before rolling (default 104857600)\n -max-deflate-level int\n     max deflate compression level a client can negotiate (> values == > nsqd CPU usage) (default 6)\n -max-heartbeat-interval duration\n     maximum client configurable duration of time between client heartbeats (default 1m0s)\n -max-msg-size int\n     maximum size of a single message in bytes (default 1048576)\n -max-msg-timeout duration\n     maximum duration before a message will timeout (default 15m0s)\n -max-output-buffer-size int\n     maximum client configurable size (in bytes) for a client output buffer (default 65536)\n -max-output-buffer-timeout duration\n     maximum client configurable duration of time between flushing to a client (default 1s)\n -max-rdy-count int\n     maximum RDY count for a client (default 2500)\n -max-req-timeout duration\n     maximum requeuing timeout for a message (default 1h0m0s)\n -mem-queue-size int\n     number of messages to keep in memory (per topic/channel) (default 10000)\n -msg-timeout string\n     duration to wait before auto-requeing a message (default "1m0s")\n -node-id int\n     unique part for message IDs, (int) in range [0,1024) (default is hash of hostname) (default 616)\n -snappy\n     enable snappy feature negotiation (client compression) (default true)\n -statsd-address string\n     UDP <addr>:<port> of a statsd daemon for pushing stats\n -statsd-interval string\n     duration between pushing to statsd (default "1m0s")\n -statsd-mem-stats\n     toggle sending memory and GC stats to statsd (default true)\n -statsd-prefix string\n     prefix used for keys sent to statsd (%s for host replacement) (default "nsq.%s")\n -sync-every int\n     number of messages per diskqueue fsync (default 2500)\n -sync-timeout duration\n     duration of time per diskqueue fsync (default 2s)\n -tcp-address string\n     <addr>:<port> to listen on for TCP clients (default "0.0.0.0:4150")\n -tls-cert string\n     path to certificate file\n -tls-client-auth-policy string\n     client certificate auth policy (\'require\' or \'require-verify\')\n -tls-key string\n     path to key file\n -tls-min-version value\n     minimum SSL/TLS version acceptable (\'ssl3.0\', \'tls1.0\', \'tls1.1\', or \'tls1.2\') (default 769)\n -tls-required\n     require TLS for client connections (true, false, tcp-https)\n -tls-root-ca-file string\n     path to certificate authority file\n -verbose\n     enable verbose logging\n -version\n     print version string\n -worker-id\n     do NOT use this, use --node-id\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br")])]),a("h3",{attrs:{id:"nsqlookupd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsqlookupd"}},[s._v("#")]),s._v(" nsqlookupd")]),s._v(" "),a("p",[s._v("nsqlookupd是维护所有nsqd状态、提供服务发现的守护进程。它能为消费者查找特定"),a("code",[s._v("topic")]),s._v("下的nsqd提供了运行时的自动发现服务。 它不维持持久状态，也不需要与任何其他nsqlookupd实例协调以满足查询。因此根据你系统的冗余要求尽可能多地部署"),a("code",[s._v("nsqlookupd")]),s._v("节点。它们小豪的资源很少，可以与其他服务共存。我们的建议是为每个数据中心运行至少3个集群。")]),s._v(" "),a("p",[a("code",[s._v("nsqlookupd")]),s._v("相关配置项如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' -broadcast-address string\n     address of this lookupd node, (default to the OS hostname) (default "PROSNAKES.local")\n -config string\n     path to config file\n -http-address string\n     <addr>:<port> to listen on for HTTP clients (default "0.0.0.0:4161")\n -inactive-producer-timeout duration\n     duration of time a producer will remain in the active list since its last ping (default 5m0s)\n -log-prefix string\n     log message prefix (default "[nsqlookupd] ")\n -tcp-address string\n     <addr>:<port> to listen on for TCP clients (default "0.0.0.0:4160")\n -tombstone-lifetime duration\n     duration of time a producer will remain tombstoned if registration remains (default 45s)\n -verbose\n     enable verbose logging\n -version\n     print version string\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"nsqadmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsqadmin"}},[s._v("#")]),s._v(" nsqadmin")]),s._v(" "),a("p",[s._v("一个实时监控集群状态、执行各种管理任务的Web管理平台。 启动"),a("code",[s._v("nsqadmin")]),s._v("，指定"),a("code",[s._v("nsqlookupd")]),s._v("地址:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" ./nsqadmin -lookupd-http-address=127.0.0.1:4161\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们可以使用浏览器打开"),a("code",[s._v("http://127.0.0.1:4171/")]),s._v("访问如下管理界面。"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57butfvj218a0u0dhd.jpg",alt:"nsqadmin管理界面"}})]),s._v(" "),a("p",[a("code",[s._v("nsqadmin")]),s._v("相关的配置项如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' -allow-config-from-cidr string\n     A CIDR from which to allow HTTP requests to the /config endpoint (default "127.0.0.1/8")\n -config string\n     path to config file\n -graphite-url string\n     graphite HTTP address\n -http-address string\n     <addr>:<port> to listen on for HTTP clients (default "0.0.0.0:4171")\n -http-client-connect-timeout duration\n     timeout for HTTP connect (default 2s)\n -http-client-request-timeout duration\n     timeout for HTTP request (default 5s)\n -http-client-tls-cert string\n     path to certificate file for the HTTP client\n -http-client-tls-insecure-skip-verify\n     configure the HTTP client to skip verification of TLS certificates\n -http-client-tls-key string\n     path to key file for the HTTP client\n -http-client-tls-root-ca-file string\n     path to CA file for the HTTP client\n -log-prefix string\n     log message prefix (default "[nsqadmin] ")\n -lookupd-http-address value\n     lookupd HTTP address (may be given multiple times)\n -notification-http-endpoint string\n     HTTP endpoint (fully qualified) to which POST notifications of admin actions will be sent\n -nsqd-http-address value\n     nsqd HTTP address (may be given multiple times)\n -proxy-graphite\n     proxy HTTP requests to graphite\n -statsd-counter-format string\n     The counter stats key formatting applied by the implementation of statsd. If no formatting is desired, set this to an empty string. (default "stats.counters.%s.count")\n -statsd-gauge-format string\n     The gauge stats key formatting applied by the implementation of statsd. If no formatting is desired, set this to an empty string. (default "stats.gauges.%s")\n -statsd-interval duration\n     time interval nsqd is configured to push to statsd (must match nsqd) (default 1m0s)\n -statsd-prefix string\n     prefix used for keys sent to statsd (%s for host replacement, must match nsqd) (default "nsq.%s")\n -version\n     print version string\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("h2",{attrs:{id:"nsq架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsq架构"}},[s._v("#")]),s._v(" NSQ架构")]),s._v(" "),a("h3",{attrs:{id:"nsq工作模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsq工作模式"}},[s._v("#")]),s._v(" NSQ工作模式")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57cfhrrj21480u0789.jpg",alt:"nsq架构设计"}})]),s._v(" "),a("h3",{attrs:{id:"topic和channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic和channel"}},[s._v("#")]),s._v(" Topic和Channel")]),s._v(" "),a("p",[s._v("每个nsqd实例旨在一次处理多个数据流。这些数据流称为"),a("code",[s._v("“topics”")]),s._v("，一个"),a("code",[s._v("topic")]),s._v("具有1个或多个"),a("code",[s._v("“channels”")]),s._v("。每个"),a("code",[s._v("channel")]),s._v("都会收到"),a("code",[s._v("topic")]),s._v("所有消息的副本，实际上下游的服务是通过对应的"),a("code",[s._v("channel")]),s._v("来消费"),a("code",[s._v("topic")]),s._v("消息。")]),s._v(" "),a("p",[a("code",[s._v("topic")]),s._v("和"),a("code",[s._v("channel")]),s._v("不是预先配置的。"),a("code",[s._v("topic")]),s._v("在首次使用时创建，方法是将其发布到指定"),a("code",[s._v("topic")]),s._v("，或者订阅指定"),a("code",[s._v("topic")]),s._v("上的"),a("code",[s._v("channel")]),s._v("。"),a("code",[s._v("channel")]),s._v("是通过订阅指定的"),a("code",[s._v("channel")]),s._v("在第一次使用时创建的。")]),s._v(" "),a("p",[a("code",[s._v("topic")]),s._v("和"),a("code",[s._v("channel")]),s._v("都相互独立地缓冲数据，防止缓慢的消费者导致其他"),a("code",[s._v("chennel")]),s._v("的积压（同样适用于"),a("code",[s._v("topic")]),s._v("级别）。")]),s._v(" "),a("p",[a("code",[s._v("channel")]),s._v("可以并且通常会连接多个客户端。假设所有连接的客户端都处于准备接收消息的状态，则每条消息将被传递到随机客户端。例如：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57akrjwg20bo07tjry.gif",alt:"nsq架构设计"}}),s._v("总而言之，消息是从"),a("code",[s._v("topic -> channel")]),s._v("（每个channel接收该topic的所有消息的副本）多播的，但是从"),a("code",[s._v("channel -> consumers")]),s._v("均匀分布（每个消费者接收该channel的一部分消息)。")]),s._v(" "),a("h3",{attrs:{id:"nsq接收和发送消息流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsq接收和发送消息流程"}},[s._v("#")]),s._v(" NSQ接收和发送消息流程")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57dav6mj20fc07p0sx.jpg",alt:"nsq架构设计"}})]),s._v(" "),a("h2",{attrs:{id:"nsq特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsq特性"}},[s._v("#")]),s._v(" NSQ特性")]),s._v(" "),a("ul",[a("li",[s._v("消息默认不持久化，可以配置成持久化模式。nsq采用的方式时内存+硬盘的模式，当内存到达一定程度时就会将数据持久化到硬盘。\n"),a("ul",[a("li",[s._v("如果将"),a("code",[s._v("--mem-queue-size")]),s._v("设置为0，所有的消息将会存储到磁盘。")]),s._v(" "),a("li",[s._v("服务器重启时也会将当时在内存中的消息持久化。")])])]),s._v(" "),a("li",[s._v("每条消息至少传递一次。")]),s._v(" "),a("li",[s._v("消息不保证有序。")])]),s._v(" "),a("h2",{attrs:{id:"go操作nsq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go操作nsq"}},[s._v("#")]),s._v(" Go操作NSQ")]),s._v(" "),a("p",[s._v("官方提供了Go语言版的客户端："),a("a",{attrs:{href:"https://github.com/nsqio/go-nsq",target:"_blank",rel:"noopener noreferrer"}},[s._v("go-nsq"),a("OutboundLink")],1),s._v("，更多客户端支持请查看"),a("a",{attrs:{href:"https://nsq.io/clients/client_libraries.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("CLIENT LIBRARIES"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"安装-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" go get -u github.com/nsqio/go-nsq\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"生产者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生产者"}},[s._v("#")]),s._v(" 生产者")]),s._v(" "),a("p",[s._v("一个简单的生产者示例代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' // nsq_producer/main.go\n package main\n \n import (\n   "bufio"\n   "fmt"\n   "os"\n   "strings"\n \n   "github.com/nsqio/go-nsq"\n )\n \n // NSQ Producer Demo\n \n var producer *nsq.Producer\n \n // 初始化生产者\n func initProducer(str string) (err error) {\n   config := nsq.NewConfig()\n   producer, err = nsq.NewProducer(str, config)\n   if err != nil {\n     fmt.Printf("create producer failed, err:%v\\n", err)\n     return err\n   }\n   return nil\n }\n \n func main() {\n   nsqAddress := "127.0.0.1:4150"\n   err := initProducer(nsqAddress)\n   if err != nil {\n     fmt.Printf("init producer failed, err:%v\\n", err)\n     return\n   }\n \n   reader := bufio.NewReader(os.Stdin) // 从标准输入读取\n   for {\n     data, err := reader.ReadString(\'\\n\')\n     if err != nil {\n       fmt.Printf("read string from stdin failed, err:%v\\n", err)\n       continue\n     }\n     data = strings.TrimSpace(data)\n     if strings.ToUpper(data) == "Q" { // 输入Q退出\n       break\n     }\n     // 向 \'topic_demo\' publish 数据\n     err = producer.Publish("topic_demo", []byte(data))\n     if err != nil {\n       fmt.Printf("publish msg to nsq failed, err:%v\\n", err)\n       continue\n     }\n   }\n }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br")])]),a("p",[s._v("将上面的代码编译执行，然后在终端输入两条数据"),a("code",[s._v("123")]),s._v("和"),a("code",[s._v("456")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" $ ./nsq_producer \n 123\n 2018/10/22 18:41:20 INF    1 (127.0.0.1:4150) connecting to nsqd\n 456\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用浏览器打开"),a("code",[s._v("http://127.0.0.1:4171/")]),s._v("可以查看到类似下面的页面： 在下面这个页面能看到当前的"),a("code",[s._v("topic")]),s._v("信息："),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57axzkrj21610u0aba.jpg",alt:"nsqadmin界面1"}})]),s._v(" "),a("p",[s._v("点击页面上的"),a("code",[s._v("topic_demo")]),s._v("就能进入一个展示更多详细信息的页面，在这个页面上我们可以查看和管理"),a("code",[s._v("topic")]),s._v("，同时能够看到目前在"),a("code",[s._v("LWZMBP:4151 (127.0.01:4151)")]),s._v("这个"),a("code",[s._v("nsqd")]),s._v("上有2条message。又因为没有消费者接入所以暂时没有创建"),a("code",[s._v("channel")]),s._v("。"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57epxjjj212r0u0tbj.jpg",alt:"nsqadmin界面2"}})]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("/nodes")]),s._v("这个页面我们能够很方便的查看当前接入"),a("code",[s._v("lookupd")]),s._v("的"),a("code",[s._v("nsqd")]),s._v("节点。"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57dsgjkj21610u0jt6.jpg",alt:"nsqadmin界面3"}})]),s._v(" "),a("p",[s._v("这个"),a("code",[s._v("/counter")]),s._v("页面显示了处理的消息数量，因为我们没有接入消费者，所以处理的消息数量为0。"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57bf70cj215c0u0jsl.jpg",alt:"nsqadmin界面4"}})]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("/lookup")]),s._v("界面支持创建"),a("code",[s._v("topic")]),s._v("和"),a("code",[s._v("channel")]),s._v("。"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57cu569j21610u00v9.jpg",alt:"nsqadmin界面5"}})]),s._v(" "),a("h3",{attrs:{id:"消费者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消费者"}},[s._v("#")]),s._v(" 消费者")]),s._v(" "),a("p",[s._v("一个简单的消费者示例代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' // nsq_consumer/main.go\n package main\n \n import (\n   "fmt"\n   "os"\n   "os/signal"\n   "syscall"\n   "time"\n \n   "github.com/nsqio/go-nsq"\n )\n \n // NSQ Consumer Demo\n \n // MyHandler 是一个消费者类型\n type MyHandler struct {\n   Title string\n }\n \n // HandleMessage 是需要实现的处理消息的方法\n func (m *MyHandler) HandleMessage(msg *nsq.Message) (err error) {\n   fmt.Printf("%s recv from %v, msg:%v\\n", m.Title, msg.NSQDAddress, string(msg.Body))\n   return\n }\n \n // 初始化消费者\n func initConsumer(topic string, channel string, address string) (err error) {\n   config := nsq.NewConfig()\n   config.LookupdPollInterval = 15 * time.Second\n   c, err := nsq.NewConsumer(topic, channel, config)\n   if err != nil {\n     fmt.Printf("create consumer failed, err:%v\\n", err)\n     return\n   }\n   consumer := &MyHandler{\n     Title: "沙河1号",\n   }\n   c.AddHandler(consumer)\n \n   // if err := c.ConnectToNSQD(address); err != nil { // 直接连NSQD\n   if err := c.ConnectToNSQLookupd(address); err != nil { // 通过lookupd查询\n     return err\n   }\n   return nil\n \n }\n \n func main() {\n   err := initConsumer("topic_demo", "first", "127.0.0.1:4161")\n   if err != nil {\n     fmt.Printf("init consumer failed, err:%v\\n", err)\n     return\n   }\n   c := make(chan os.Signal)        // 定义一个信号的通道\n   signal.Notify(c, syscall.SIGINT) // 转发键盘中断信号到c\n   <-c                              // 阻塞\n }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")])]),a("p",[s._v("将上面的代码保存之后编译执行，就能够获取之前我们publish的两条消息了：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" $ ./nsq_consumer \n 2018/10/22 18:49:06 INF    1 [topic_demo/first] querying nsqlookupd http://127.0.0.1:4161/lookup?topic=topic_demo\n 2018/10/22 18:49:06 INF    1 [topic_demo/first] (127.0.0.1:4150) connecting to nsqd\n 沙河1号 recv from 127.0.0.1:4150, msg:123\n 沙河1号 recv from 127.0.0.1:4150, msg:456\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("同时在nsqadmin的"),a("code",[s._v("/counter")]),s._v("页面查看到处理的数据数量为2。"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h3h57e82s6j21610u0myb.jpg",alt:"nsqadmin界面5"}})]),s._v(" "),a("p",[s._v("关于"),a("code",[s._v("go-nsq")]),s._v("的更多内容请阅读"),a("a",{attrs:{href:"https://godoc.org/github.com/nsqio/go-nsq",target:"_blank",rel:"noopener noreferrer"}},[s._v("go-nsq的官方文档"),a("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);n.default=t.exports}}]);
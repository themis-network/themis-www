const CN = {
    //header部分
    nav_home: "首页",
    nav_team: "团队",
    nav_language: "EN",
    nav_Whitepaper: "白皮书",
    change_to_lang: "/?lang=EN",
    nav_whitepaper_url: "https://themis.network/public/Themis_Whitepaper_CN.pdf",
    nav_whitepaper_url2:"https://themis.network/public/Themis_Whitepaper_EN.pdf",
    nav_whitepaper_url3:"https://themis.network/public/Themis_Whitepaper_JP.pdf",
    nav_whitepaper_url4:"https://themis.network/public/Themis_Whitepaper_KR.pdf",
    nav_github_url: "https://github.com/themisnetwork",
    law_to_lang: "?lang=CN",

    // banner 部分
    about_title: "Themis：数字货币世界去中心化的 ",
    about_title2: '"支付宝"',
    about_know: "从去中心化的数字货币到去中心化的数字商业",
    about_what:"THEMIS是什么？",
    about_answer1:"Themis是一个基于区块链的公平交换系统，",
    about_answer2:"提供去中心化的数字货币托管服务，",
    about_answer3:"解决以数字货币为媒介的公平交换问题，",
    about_answer4:"可应用于数字货币点对点托管支付、数字货币场外交易兑换等。",

    // 关键技术
    key_technology_title:"THEMIS的关键技术",
    key_technology1_title: "基于群托管的公平交换协议",
    key_technology1_content: "Themis能够保证互不信任的多个主体按照约定的规则完成资产互换：要么双方都获得了对方的商品，或者双方什么都得不到。一是保证乐观公平交换，即TTP只在发生争议时参与；二是创新性地提出群托管支付，解决TTP单点失效和拒绝服务等问题。",
    key_technology2_title: "基于可验证洗牌和关联环签名的匿名声誉机制",
    key_technology2_content: "Themis基于可验证洗牌和关联环签名技术，实现了区块链节点的匿名声誉计算。一是完成匿名声誉计算，隐藏了节点的身份和投票之间的关系；二是同时实现了奖励和惩罚机制，突破了利用密码学机制扣取作恶用户资金的难题。",
    key_technology3_title: "非交互式零知识证明",
    key_technology3_content: "Themis利用非交互式零知识证明解决隐私问题，一是在群托管服务协议中，保证交易双方提供给托管节点的密钥份额是真实的；二是在可验证洗牌协议中，验证者用来检查洗牌服务器是否正确地执行了它的随机操作；三是在声誉系统中生成匿名声誉预算的零知识证明。",
    key_technology4_title: "支持高并发验签的数字签名算法",
    key_technology4_content: "Themis引入全新的支持高并发验签的数字签名算法。支持基于哈希的一次性签名算法、具有特殊性质的椭圆曲线及验签算法等多种可选的数字签名方案，在算法实现上特别针对GPU和CPU的向量指令集进行优化，实现在典型计算平台上接近2个数量级的验签性能提升。",

    //应用场景
    application_title1: "THEMIS的应用场景",
    application_title2:"Themis构建的以数字货币为媒介的公平交换系统，采用链上资产托管促成公平交换机制，能有效解决数字货币交易兑换、电商平台托管支付、监管账户安全托管、多主体交易数字资产托管等应用场景问题，为数字世界中的公平交换提供了全新的解决方案。",
    application_section1_title: "点对点托管支付",
    application_section1_content1: "Themis能够为点对点网上市场（例如OpenBazaar）,提供去中心化数字货币托管支付，实现买卖双方的远程交易和付款；",
    application_section1_content2:"Themis连接电商平台数字货币支付系统，实现平台和系统中的数字货币交易行为进行去中心化托管。",
    application_section2_title: "数字货币交易兑换",
    application_section2_content: "Themis支持实现数字货币的场外交易，能够为比特币、以太币以及其它基于区块链的密码学数字货币提供安全托管服务，满足不同数字货币间交易兑换需求，为数字货币跨链交易提供公平交换保障；",
    application_section3_title: "监管账户安全托管",
    application_section3_content: "Themis能够为数字货币资金监管账户提供去中心化的托管服务，可实现对数字货币私募基金监管账户、数字货币借贷监管账户、数字货币交易所账户等进行安全托管，保障资金合规与安全。",
    application_section4_title: "多主体交易资产托管",
    application_section4_content: "针对交易主体多、交易环节长、交易依赖性强的应用场景，Themis将多主体交易中需要托管的资金，诸如订金、首款、佣金、尾款等以数字货币的形式托管在原有链上，建立基于多主体职责和权益触发条件指令的智能合约，并利用仲裁机制达成公平交换。",

    //合作伙伴
    cooperative_partner:"合作伙伴",
    cooperative_partner1_content:"该研究院在深圳市罗湖区政府支持下创建，由原牛津大学计算机系主任Bill Roscoe 教授领导，专注于区块链、大数据、人工智能等金融科技领域的技术研发和应用开发，其形式化验证技术在国际上处于领先地位，相关研究项目、方向均属于深圳市政府重点孵化的研究项目及产业化方向。Themis与研究院合作主要解决智能合约的安全性问题， 利用形式化验证技术检查并验证系统中智能合约，特别是托管合约和仲裁合约的正确性。",
    cooperative_partner2_content:"万维链是为不同区块链网络提供资产跨链转移通道的基础设施，可以与Themis 区块链互联互通，在数字货币借贷、数字货币交易兑换、数字资产投融资等方面发挥各自优势紧密合作，丰富区块链生态。",
    cooperative_partner3_content:"Oracle是仲裁服务中讨论和审阅交易双方提供的材料时所需要的机制。OracleChain在区块链内提供现实世界数据的 Oracle 服务，其生态系统提供一系列的服务和 API，Themis通过调用这些服务和API将现实世界数据引入区块链，来决定仲裁的结果并实现其后的操作。",

    //THEMIS的优势
    themis_advantage_title:"THEMIS的优势",
    themis_advantage1_title:"世界顶级科学家团队",
    themis_advantage1_content:"团队成员均来自牛津大学、耶鲁大学和北京大学，依托深圳市和信中欧金融科技研究院，联合世界顶级科学家在公平交换、智能合约形式化验证等方面的尖端学术研究和工程能力，保证了Themis项目的理论性和创新性达到国际领先水平。",
    themis_advantage2_title:"密码学和区块链深厚技术积累",
    themis_advantage2_content:"团队成员学术背景和研究方向均聚焦在密码学、网络与信息安全和区块链领域，在高效密码学工程实现、隐私保护、匿名声誉评价、高速区块链、智能合约应用等方面工程经验丰富，保证了Themis项目的顺利开发。",
    themis_advantage3_title:"支付领域多年实践",
    themis_advantage3_content:"区块链数字货币支付的理念和模式酝酿已久，团队成员在支付行业有多年工作经历和丰富的经验，在第三方支付和支付卡方面拥有扎实的技术基础和商业基础，保证了Themis项目落地实施。",

    //THEMIS的线路图
    circuit_title: "THEMIS的线路图",
    circuit_img: "/public/img/circuit.jpg",
    ciruit_route1:"开展基于群托管机制的公平交换协议设计",
    ciruit_route2:"完成具有完备功能的最小化可行版本（MVP）",
    ciruit_route3:"去中心化托管服务内测，OTC交易平台试运行",
    ciruit_route4:"Themis区块链测试网络发布",
    ciruit_route5:"Themis主网上线",

    //THEMIS的机构投资者
    investor_title: "THEMIS的机构投资者",

    news_title:"THEMIS的新闻",
    news_section1_title:"去中心化的“支付宝”：THEMIS要用区块链实现去中心化托管服务",
    news_section1_content:"‘THEMIS’定位于去中心化的支付宝，2016年12月开始设计交换协议，从托管服务入手，将使用数字货币的买方和卖方连接起来。",
    news_section1_time:"2018.1.11",
    news_section2_title:"去中心化的“支付宝”——Themis数字货币托管第一公链",
    news_section2_content:"Themis填补了数字货币托管信任服务基础设施的空缺，为数字货币商业化打下了更坚实的基础，作为首个基于群托管的公平交换协议也给未来数字货币的应用拓展提供了更多的遐想空间。",
    news_section2_time:"2018.1.12",



    //THEMIS的项目说明
    crowd_funding_title:"项目说明",
    crowd_funding_title_tip:"在使用网站服务和参与预售活动之前，请您务必仔细阅读并透彻理解法律条款和声明。本法律声明阐述之条款和条件适用于所有访问和使用网站的自然人、法人及组织。当您选择使用网站服务和参与项目后，您的使用行为将被视为对法律条款和声明全部内容的认可。",
    crowd_funding_section1_name1:"项目名称",
    crowd_funding_section1_item1:"Themis",
    crowd_funding_section1_name2:"开始时间",
    crowd_funding_section1_item2:"2018年1月12日",
    crowd_funding_section1_name3:"代币简称",
    crowd_funding_section1_item3:"GET",
    crowd_funding_section1_name4:"代币总量",
    crowd_funding_section1_item4:"10亿GET",
    crowd_funding_section1_name5:"筹集币种",
    crowd_funding_section1_item5:"ETH",
    crowd_funding_section1_name6:"兑换比例",
    crowd_funding_section1_item6:"1:10000",
    crowd_funding_section1_name7:"项目目标",
    crowd_funding_section1_item7:"4亿GET",
    crowd_funding_section1_name8:"上限模式",
    crowd_funding_section1_item8:"硬顶等值3600万美元ETH",

    //THEMIS的团队
    team_title: "THEMIS团队成员",

    team_section1_name: "Hongwei Meng",
    team_section1_place: "联合创始人/CEO",
    team_section1_desc: "北京大学理学博士，高级工程师。长期从事大型信息系统顶层设计，拥有大型系统研制和管理经验。未来互联网体系结构专家、密码学和区块链专家，对区块链架构、共识算法、智能合约有深刻理解。负责Themis总体架构和网络协议的设计。",

    team_section2_name: "Alex Khawaja ",
    team_section2_place: "联合创始人/CMO",
    team_section2_desc: "毕业于利兹大学，金融学硕士，Alex拥有皇家空军军官的军事背景，并拥有十年的金融服务经验。亚历克斯在纽约梅隆银行股票衍生品公司开始他的职业生涯。他与最大的公司机构的高级管理人员以及V.C.密切合作。和P.E.在海湾地区开发中东最大的投资者关系协会，旨在推广行业最佳实践，亚历克斯现在在普华永道工作。通过广泛的网络和多元化的工作背景，Alex在全球资本市场，创新和战略以及业务发展方面拥有广泛的专业知识和见解。他对颠覆性技术充满热情，将他在全球客户关系和金融服务方面的强大背景应用于区块链部门。Alex负责Themis的全球化商业和战略布局。",

    team_section3_name: "Ennan Zhai",
    team_section3_place: "研发总监",
    team_section3_desc: "耶鲁大学博士、博士后，耶鲁大学副研究员。主要研究方向为声誉系统和大规模分布式系统，研究重点是利用分布式系统，编程语言和密码学等领域的技术构建安全可靠的计算机系统。目前工作包括使用高效、准确和深入的审计技术来提高大型分布式系统的可靠性和安全性，以及PriFi：第一个低延迟和抗跟踪的匿名通信系统。他的博士论文工作着重于构建云计算的可靠性审计系统，该系统可以主动检测可能导致云规模相关故障的深层原因和异常依赖关系。负责Themis密码学算法和声誉系统研发。",

    team_section4_name: "Yuet Ning Chau",
    team_section4_place: "财务总监",
    team_section4_desc: "Yuet毕业于伦敦政治经济学院，获得商业硕士学位。他热衷于颠覆性金融科技，并深入参与了加密货币研究。Yuet是中英区块链协会的联合创始人，为一系列系统转型和战略执行项目提供咨询服务。Yuet与英国领先的金融科技企业家和加速器保持着密切的关系。Yuet目前在普华永道英国作为银行和资本市场团队的成员，在传统金融服务和突破性技术创新方面拥有具体的知识和经验。负责Themis预算体系建立和财务指标分析。",

    team_section5_name: "Wei Xin",
    team_section5_place: "安全顾问",
    team_section5_desc:"北京大学理学博士，中国信息安全测评中心高级工程师。专注安全漏洞检测和密码算法安全性分析，有丰富的区块链自动化漏洞检测经验。负责Themis系统及智能合约的安全检测。",

    team_section6_name: "Takuya Koide",
    team_section6_place: "市场经理",
    team_section6_desc:"Takuya就读于伦敦大学皇家霍洛威学院，现任Unicoin担任管理员。 他在市场营销，程序开发和数据分析领域拥有丰富的经验。 他掌握搜索引擎优化，内容营销，程序测试和数学建模等方面的技能，曾参与多个区块链项目。 Takuya是金融科技和区块链相关领域的复合型人才。负责Themis市场推广和品牌建设。",

    team_section7_name: "Amir Marat",
    team_section7_place: "运营经理",
    team_section7_desc:"Amir就读于伦敦皇家霍洛威大学，多年来一直从事加密货币领域的研究。他对密码学和分布式系统有着深刻的见解，活跃于许多开放社区中。他在市场研究和业务发展方面也有丰富的经验。他不断发展沟通技巧，掌握3种语言(俄语、英语和哈萨克语)，目前正在学习中文。负责Themis社区及内容运营。",

    team_section8_name: "James Johnson",
    team_section8_place: "产品经理",
    team_section8_desc:"在伦敦大学皇家霍洛威学习计算机科学理学士课程的同时，James也是App Society的联合创始人和联合主席，以及UNIcoin Private Limited Company的首席技术官和联合创始人，此外还具有自由网站开发人员和系统管理员的丰富经验。 他曾在思科系统公司工作过，其职能是为技术销售工程师向客户经理提供商业见解和产品主张建议。负责Themis产品设计和需求分析。",

    team_section9_name: "Evan Bian",
    team_section9_place: "项目经理",
    team_section9_desc:"毕业于哈尔滨工业大学电子信息工程专业。资深IT系统工程师，资深通信工程师。曾在Ericsson运营支撑部门工作，负责全球多家运营商的网络管理系统。后投身区块链行业，参与过多个联盟链产品的方案制定工作。具有丰富的通信系统设计、解决方案制定、运营指标分析的经验。负责Themis项目实施和质量管理。",

    team_section10_name: "Hubertas Trinkunas",
    team_section10_place: "商务经理",
    team_section10_desc:"Hubertas Trinkunas掌握多国语言。目前是他在伦敦皇家霍洛威大学攻读金融学士学位的最后一年。他担任皇家霍洛威(Royal Holloway)的投资与金融社副社长，皇家霍洛威学院(Royal Holloway) App Society财务经理，目前他还在UNIcoin担任财务总监一职。UNIcoin是一家为学生分享经济的科技初创企业，包括区块链技术和密码货币。Hubertas将在伦敦国王学院(Kings College London)开始他的硕士生涯，以获得更多的金融知识和经验。负责Themis商业拓展。",

    team_section11_name: "Emma Zhu",
    team_section11_place: "风控经理",
    team_section11_desc:"美国约翰霍普金斯大学企业风险管理学硕士，在校期间多次参与案例分析，以及为学校专利制定推广方案。她具有丰富的分析和咨询经验。现任资深区块链分析师，参与多个联盟链产品方案定制，以及金融产品设计经验，负责Themis产品风险控制和流程优化。",


    // team_title: "THEMIS的团队",
    // team_section1_desc: "Danish是UCL伦敦大学区块链技术中心的资深专家，是最早使用ERC23协议为区块链项目编写智能代币发的开创者之一。曾带领UCL TechSoc团队，致力于推广使用面部认证系统来增强简化大学进出安全性的方式。他曾在信息科技服务公司 Atos进行前沿研究项目研究。Hadoop和 Weka的在线大数据检索和存储服务的推广大使。",
    // team_section2_desc: "Jennifer是Agility Sciences Limited的首席市场官以及中英区块链协会的联合创始人。她拥有伦敦商学院的商科学位，并在毕业后致力于分布式技术带来的潜在的行业革命。她曾在波士顿咨询公司就职，负责私募和风险投资基金方向。 ",
    // team_section3_desc: "Takuya毕业于英国伦敦大学皇家霍洛威学院，目前在Unicoin担任增长黑客，在市场营销，工程研发，数据分析领域均具有丰富的经验。掌握SEM推广，内容营销，程序测试，数学建模等多种技能，并参与多个区块链项目的研发实施与运营推广，是一名在区块链和金融创新领域的复合型专家。",
    // team_section4_desc:"Yuet毕业于伦敦政治经济学院，获得商科硕士学位。Yuet热衷于颠覆性金融技术，深入参与加密货币的研究和并为多个区块链项目提供咨询。中英区块链协会（CUKBA）联合创始人之一，与英国领先的金融科技企业家有密切联系。前英国普华永道银行及资本市场团队中的一员，在传统金融服务方面拥有坚固的知识和丰富的经验，参与多个项目的尽职调查和并购工作。",
    // team_section5_desc:"Amir 毕业于英国伦敦大学皇家霍洛威学院，在加密数字货币领域拥有多年实际操作经验，他深入了解加密空间和去中心化系统知识，活跃于多个开源社区，同时在市场调查和商业案例开发方面有丰富经验。他有优秀的沟通能力，掌握三种语言（俄语，英语和哈萨克语），并正在学习汉语。",
    // team_section6_desc: "James是UNIcoin公司首席技术官和联合创始人，也是App Society的联合创始人和联合主席，毕业于伦敦大学皇家霍洛威学院计算机专业。James拥有深厚的Web开发人员和计算机系统管理工作经验。他曾在思科系统公司担任技术工程师，并负责向客户经理提供商业见解和产品主题建议。",
    // team_section7_desc: "Hubertas就读于英国伦敦大学皇家霍洛威学院金融管理专业，是皇家霍洛威学院投资与金融社副社长，目前在UNIcoin担任财务总监一职。UNIcoin是致力于学生社群分享经济的区块链技术和数字货币科技创业公司。",
    // team_section8_desc: "毕业于哈尔滨工业大学电子信息工程专业。资深IT系统工程师，资深通信工程师。曾在Ericsson运营支撑部门工作，负责全球多家运营商的网络管理系统。后投身区块链行业，参与过多个联盟链产品的方案制定工作。具有丰富的通信系统设计、解决方案制定、运营指标分析的经验。",
    // team_section9_desc: "耶鲁大学博士、博士后，耶鲁大学副研究员。主要研究方向为声誉系统和大规模分布式系统，研究重点是利用分布式系统，编程语言和密码学等领域的技术构建安全可靠的计算机系统。",
    // team_section10_desc: "北京大学理学博士，中国信息安全测评中心高级工程师。专注安全漏洞检测和密码算法安全性分析，有丰富的区块链自动化漏洞检测经验。",
    // team_section11_desc: "美国约翰霍普金斯大学企业风险管理学硕士，在校期间多次参与案例分析，以及为学校专利制定推广方案。她具有丰富的分析和咨询经验。现任资深区块链分析师，参与多个联盟链产品方案定制，以及金融产品设计经验。",
    // team_section12_desc: "北京大学理学博士，高级工程师。长期从事大型信息系统顶层设计，拥有大型系统研制和管理经验。未来互联网体系结构专家、密码学和区块链专家，对区块链架构、共识算法、智能合约有深刻理解。",

    // THEMIS顾问团队
    ourteam_title:"THEMIS顾问团队",
    ourteam_section1_name: "Donald Lawrence",
    ourteam_section1_desc: "伦敦大学学院客座教授，战略咨询公司创世纪公司合伙人，区块链技术中心项目负责，金融计算研究中心项目负责，阿兰图灵大数据研究中心项目负责，曾在花旗集团、美国银行和美国运通等均担任过总经理以上级别职位，在UCL期间，负责对接与央行，投行，对冲基金，清算中心和科技企业的项目研究和开发等。",
    ourteam_section2_name: "Daniele Bernardi",
    ourteam_section2_desc: "Diaman SCF的创办人兼首席执行官，投资者杂志（INVESTORS’ Magazine Italia）主席。致力于开发高回报的投资战略，是一位不断寻求创新的企业家。他的研究面向数学模型的开发，简化了投资者和家族企业的决策过程，以减少风险。",
    ourteam_section3_name: "Robert Ferguson",
    ourteam_section3_desc: "贝恩公司顾问/Bee-One销售总监 Robert Ferguson是Bee-One在英国的销售总监，他在零售和消费品销售方面拥有丰富的经验。 他是贝恩公司的顾问，他负责推动分类管理、商业优势、采购战略和制造网络优化等项目的分析和决策者管理。Robert拥有丰富的项目管理经验，其中包括设计和领导研讨会以推动决策,的制定。他还具有开发新一代数字化转型经验。通过印度，香港和中国的项目，他致力于寻找新兴市场的机遇与挑战。",
    ourteam_section4_name: "陈钟",
    ourteam_section4_desc: "陈教授是原北京大学软件与微电子学院院长，北京大学金融信息化研究中心主任，北京大学网络与信息安全实验室主任。CCF常务理事，CCF信息保密专委副主任，CCF网络与数据通信专委委员。",
    ourteam_section5_name: "余水",
    ourteam_section5_desc:"数字钱包Kcash联合创始人，区块链项目天使投资人、顾问。曾任和君咨询业务合伙人、北京惠远咨询创始合伙人之一。7年管理咨询经验，为多家A股上市公司提供战略规划及商业模式设计、组织变革等服务。",
    // ourteam_section5_name: "吕旭军",
    // ourteam_section5_desc:"网录科技创始人，吕旭军是区块链资深创业者及技术专家，万维链创始人。先后获得北京大学、俄亥俄州立大学多个学位，早年在中国、美国、欧洲均有丰富的商业经历。2012年进入区块链领域，2014年联合创立著名区块链项目Factom，被《经济学人》杂志以封面报道“信任的机器”引入公众的视野。2016年创立区块链商业应用企业网录科技，致力于推动区块链技术的更大范围应用。",
    ourteam_section6_name: "Gong Hui",
    ourteam_section6_desc:"伦敦大学学院金融数学博士，伦敦大学学院区块链研究中心研究员，中英区块链协会秘书长。研究项目包括联合国食品署数字身份计划、ICO监管及挑战等，拥有丰富的数字货币金融产品设计经验。",
    ourteam_section7_name: "关志",
    ourteam_section7_desc:"北京大学理学博士，北京大学副研究员，密码学和安全协议专家，著名国密算法开源项目GmSSL的主要开发者和社区领袖，培养了北大最早的三名区块链方向硕士研究生。",
    ourteam_section8_name: "辛伟",
    ourteam_section8_desc:"北京大学理学博士，中国信息安全测评中心高级工程师。专注安全漏洞检测和密码算法安全性分析，有丰富的区块链自动化漏洞检测经验。",
    ourteam_section9_name: "孙志勇",
    ourteam_section9_desc:"北京大学物理学学士、北京大学金融学硕士，中国国资国企产业创新战略联盟副理事长、金峰资本董事长、沃医妇产名医集团联合创始人执行总裁、北京神控科技有限公司副董事长、美国远景投资管理公司管理合伙人。",
    ourteam_section10_name: "唐聪",
    ourteam_section10_desc:"北京大学理学博士，纽约大学访问学者。原北信源产品总监，区块链和分布式账本技术专家，网络和信息安全领域专家。有丰富的区块链架构设计与系统开发落地经验。主持研发多个行业区块链产品和应用。",
    ourteam_section11_name: "Han Kao",
    ourteam_section11_desc:"Han Kao在纽约成长，本科毕业于哥伦比亚大学经济学专业，他是独立ICO评级和加密货币媒体公司Cryptobriefing.com的创始人和CEO。作为一名连续创业者，他在过去的15年里创立并成功退出了多家科技和媒体企业。同时他还是包括Wanchain和Jet8在内的多家区块链公司的早期投资人和顾问。",
    ourteam_section12_name:"Danish A.Alvi",
    ourteam_section12_desc:"Danish是UCL伦敦大学区块链技术中心的资深专家，是最早使用ERC23协议为区块链项目编写智能代币发的开创者之一。此前，他带领UCL TechSoc团队，致力于推广使用面部认证系统来增强简化大学进出安全性的方式。他曾在信息科技服务公司 Atos进行前沿研究项目研究。Danish是推广使用 Hadoop和 Weka的在线大数据检索和存储服务的推广大使，并实现了开发环境的虚拟机自动配置，前端服务器的虚拟机自动配置，以及前端服务CKAN / Drupal集成和数据审计。",
    ourteam_section13_name:"Genevieve Leveille",
    ourteam_section13_desc:"Genevieve是金融科技公司0TenTic8的创始人，旨在通过实现金融服务的民主化和提高供应链的透明度来赋予农业生产者权力。Genevieve担任techUK分布式账本技术（DLT）工作组的副主席。DLT工作组将为所有与区块链和DLT有关的techUK活动提供战略指导。",

    //THEMIS合作伙伴
    partners_title: "THEMIS的合作伙伴",

    //footer部分
    footer_title1:"添加群秘，加入官方微信群",
    footer_title2:"法律条款和声明",

    //法律结构
    law_structure_title1:"法律结构",
    law_structure_title2:"Legal structure",
    law_structure_content1:"Themis 团队通过定向及公开出售的方式，出售基于 Themis 平 台运行的 GET Token，GET 作为 Themis 平台的结算单位和服务费 用，一经售出后不承诺退回或回购。GET 是一种虚拟商品，可对应获 得 Themis 平台的服务权限，不是证券，也非投机工具。",
    law_structure_content2:"GET 作为虚拟商品，主要受众是对加密代币和区块链技术非常熟 悉专家、技术开发者、极客等，任何中国、美国、新加坡公民，该三国永久居民和注册机构将不被允许参加 GET 的公开出售。",
    law_structure_content3:"在 GET 销售中所获的收入，将由 Themis 团队使用，主要将用 于技术开发、市场营销、法律合规、财务审计、商务合作等用途。",
    law_structure_content4:"Themis 与任何国家或地区的地域和法币均没有任何关系。为了 满足和遵守不同国家和地区的法律法规，Themis 平台可能在部分地 区无法提供全部服务，Themis 团队会尽力争取“沙箱政策”(sandbox policy)或者安全港待遇，为用户提供尽可能友好的服务。",

    //免责声明
    law_section_title:"免责声明",
    law_section_content1:"本白皮书只用于传达信息之用途，并不构成任何形式的投资建议，投资意向或教唆投资。本文档不组成也不理解为提供任何买卖行为，或任何邀请买卖、任何形式证券的行为，也不是任何形式上的合约或者承诺，并不构成对用户参与结果的保证除本白皮书所明确载明的之外，Themis 团队不对 Themis 或 GET 作任何陈述或保证（尤其是对其适销性和特定功能）。Themis明确表示相关意向用户明确了解并接受该项目的风险，所有参与者将在 Themis 项目启动之后按现状接受 GET，无论其技术规格、参数、性能或功能等，并愿意个人为此承担一切相应结果或后果。",
    law_section_content2:"Themis 团队在此明确不予承认和拒绝承担下述责任：",
    law_section_content3:"1.任何人在购买 GET 时违反了任何国家或地区的反洗钱、反恐怖主义融资或其他监管要求；",
    law_section_content4:"2.任何人在购买 GET 时违反了本白皮书规定的任何陈述、保证、义务、承诺或其他要求，以及由此导致的无法付款或无法提取 GET；",
    law_section_content5:"3.GET 被任何政府、准政府机构、主管当局或公共机构禁止、监管或法律限制，或因监管因素导致无法提供正常服务；",
    law_section_content6:"4.Themis 开发失败、被放弃或开发推迟，以及因此导致的无法交付或延期交付GET；",
    law_section_content7:"5.Themis 源代码的错误、瑕疵、缺陷或其他问题，导致平台无法交付或延期交；",
    law_section_content8:"6.Themis 平台或以太坊区块链的故障、崩溃、瘫痪、回滚或硬分叉；",
    law_section_content9:"7.Themis平台对所募集数字资产的管理和使用；",
    law_section_content10:"8.任何机构或个人之间的约定内容与本白皮书内容存在差异、冲突或矛盾；",
    law_section_content11:"9.GET 在任何交易所的上市或退市；",
    law_section_content12:"10.本白皮书披露的任何风险因素，以及与该等风险因素有关、因此导致或伴随发生的损害、损失、索赔、责任、惩罚、成本或其他负面影响。",

    //风险声明
    risk_section_title:"风险声明",
    risk_section_abstract:"区块链技术是一项具有革新性潜力的技术，数字资产作为一种新的模式，在Themis项目的开发、运营、推广过程中，将不可避免地遇到诸如技术、市场认知、政策监管等多方面不可预知的风险。Themis 和 GET 均只存在于网络虚拟空间内，不具有任何有形存在，因此不属于或涉及任何特定国家。除本白皮书所述的其他内容外，每个 GET 购买者还均应细读、理解并仔细考虑下述风险，之后才决定是否参与本次公开售卖计划。参加本次公开售卖计划应当是一个深思熟虑后决策的行动，将视为购买者已充分知晓并同意接受了下述风险。",
    risk_section_title1:"1.Token销售市场风险",
    risk_section_content1:"由于Token销售市场环境与整个数字货币市场形势密不可分，如市场行情整体低靡，或存在其他不可控因素的影响，本次 GET 公开售卖计划可能会被提前终止，此时购买者可能由于比特币/以太币的价格波动以及 Themis 团队的支出而仅被部分退还其支付的金额。",
    risk_section_title2:"2.不充分的信息提供",
    risk_section_content2:"截止到本白皮书发布日，Themis 仍在开发阶段，其哲学理念、共识机制、算法、代码和其他技术细节和参数可能经常且频繁地更新和变化。尽管本白皮书包含了 Themis 最新的关键信息，其并不绝对完整，且仍会被 Themis 团队为了特定目的而不时进行调整和更新。因此，信息披露的不充分是不可避免且合乎清理的。",
    risk_section_title3:"3.监管风险",
    risk_section_content3:"由于区块链的发展尚处早期，目前尚未有成熟的关于代币众售过程中的前置要求、交易要求、信息披露要求、锁定要求等相关的法规文件，而区块链技术已经成为世界上一些国家和地区的监管对象，如果监管主体插手或施加影响，则有可能对Themis 项目和GET造成影响，例如法令限制使用、销售Token诸如GET有可能受到限制、阻碍甚至直接终止Themis应用和PST的发展。",
    risk_section_title4:"4.开发失败或放弃",
    risk_section_content4:"Themis 仍在开发阶段，而非已准备就绪随时发布的成品。由于Themis 系统的技术复杂性，Themis 团队可能不时会面临无法预测和/或无法克服的困难。因此，Themis 的开发可能会由于任何原因而在任何时候失败或放弃（例如由于缺乏资金）。开发失败或放弃将导致 GET 无法交付给本次售卖计划的任何购买者。",
    risk_section_title5:"5.众筹资金的失窃",
    risk_section_content5:"可能会有人企图盗窃 Themis 团队所收到的公开售卖所获资金（包括已转换成法币的部分）。该等盗窃或盗窃企图可能会影响 Themis 团队为 Themis 开发提供资金的能力。尽管 Themis 团队将会采取最尖端的技术方案保护众筹资金的安全，某些网络盗窃仍很难被彻底阻止。",
    risk_section_title6:" 6.源代码瑕疵",
    risk_section_content6:"由于区块链技术开发是一项具有挑战性的技术，无人能保证 Themis 的源代码完全无瑕疵。代码可能有某些瑕疵、错误、缺陷和漏洞，这可能使得用户无法使用特定功能，暴露用户的信息或产生其他问题。如果确有此类瑕疵，将损害 Themis 的可用性、稳定性、安全性，并因此对 GET 的价值造成负面影响。",
    risk_section_title7:"7.核心协议相关的风险",
    risk_section_content7:"Themis 项目基于区块链底层协议，GET基于以太坊代币标准ERC20进行开发，若区块链底层协议发生不可预期的功能问题或遭受攻击，均可能导致Themis平台和GET以难以预料的方式停止工作或功能缺失。",
    risk_section_title8:"8.系统性风险",
    risk_section_content8:"开源软件中被忽视的致命缺陷或全球网络基础设施大规模故障造成的风险。虽然其中部分风险将随着时间的推移大幅度减轻，比如修复漏洞和突破计算瓶颈，但其他部分风险依然不可预测，比如可能导致部分或全球互联网中断的政治因素或自然灾害。",
    risk_section_title9:"9.漏洞风险或密码学加速发展的风险",
    risk_section_content9:"密码学的加速发展或者科技的发展诸如量子计算机的发展，或将破解的风险带给Themis平台，这可能导致GET的丢失。",
    risk_section_title10:"10.应用存在的故障风险",
    risk_section_content10:"Themis平台可能因各方面可知或不可知的原因故障(如大规模节点宕机)，无法正常提供服务，严重时可能导致用户GET的丢失。",
    risk_section_title11:"11.应用或产品达不到自身或参与者预期的风险",
    risk_section_content11:"Themis项目当前正处于开发阶段，在发布正式版之前可能会进行比较大的改动，任何参与者对Themis应用或GET的功能或形式（包括参与者的行为）的期望或想象均有可能达不到预期，任何错误地分析，一个设计的改变等均有可能导致这种情况的发生。",
    risk_section_title12:"12.无法预料的其它风险",
    risk_section_content12:" 基于密码学的Token是一种全新且未经测试的技术，除了本白皮书内提及的风险外，还存在着一些创始团队尚未提及或尚未预料到的风险。此外，其它风险也有可能突然出现，或者以多种已经提及的风险的组合的方式出现。",

    mission_title1:"THEMIS的使命",
    mission_title2:'THEMIS:数字货币"支付宝"',
    mission_section1_content:"提供去中心化的第三方托管服务",
    mission_section2_content:"实现数字货币为媒介的公平交换",


    digital_currency:"数字货币安全托管",
    digital_currency1_content:"数字货币蓬勃发展，应用范围不断扩大，越来越多的国家和地区都能接受数字货币作为付款方式。",
    digital_currency2_content:"数字货币场外交易或在线购物中，面临公平交换难题:先付款?先发货?   支付和交付无法同时达成，需要托管服务保证资金安全。",
    digital_currency3_content:"依赖单个可信第三方被普遍任务存在安全风险，比如著名的Mt.Gox遭受黑客攻击，导致时值4.6亿美元的比特币被盗。",

    //基石
    cornerstone_title: "Themis的基石投资者",
    cornerstone_section1_p:"分布式资本是中国第一家也是最大的专注于区块链项目投资的风险基金",
    cornerstone_section1_name: "沈波",
    cornerstone_section1_desc1: "创始合伙人",
    cornerstone_section1_desc2:"分布式资本",
    cornerstone_section1_desc3:"Blockasset Fund",

    // 代币分配
    distribution_title: "代币分配计划",
    distribution_name1: "代币分配",
    distribution_img1: "/public/img/distribution_1.1.png",
    distribution_name2: "资金分配",
    distribution_img2: "/public/img/distribution_1.2.png",
    distribution_footer: "发行总量：10 亿枚",

};
window.CN = CN;

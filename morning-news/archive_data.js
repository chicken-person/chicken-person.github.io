// Auto-generated FrontierTech Static Archive Data
window.__STATIC_MODE__ = true;
window.__ARCHIVE_INDEX__ = [
  {
    "date": "2026-10-07",
    "issue_number": 2,
    "title": "计科求职与AI前沿双栏晨报 (2026年10月07日)",
    "subtitle": "Yann LeCun JEPA/V-JEPA 世界模型、SOTA前沿架构与大厂校招面经早报",
    "summary_tags": [
      "#🔥优秀开源项目",
      "#🧠SOTA推理模型",
      "#🌐JEPA世界模型",
      "#🎯拼多多面经",
      "#💻极客直聘",
      "#🎨DiT多模态架构"
    ],
    "ai_count": 8,
    "cs_count": 8,
    "updated_at": "2026-10-07 23:07:02"
  },
  {
    "date": "2026-09-16",
    "issue_number": 1,
    "title": "计科求职与AI前沿双栏晨报 (2026-09-16)",
    "subtitle": "前日热门AI科技动态与名企求职面经速报",
    "summary_tags": [
      "#🎯美团面经",
      "#💻极客直聘",
      "#📝大厂真题",
      "#🎯字节跳动面经",
      "#🎯大疆面经"
    ],
    "ai_count": 8,
    "cs_count": 0,
    "updated_at": "2026-09-16 08:00:00"
  }
];
window.__ARCHIVE_ISSUES__ = {
  "2026-10-07": {
    "date": "2026-10-07",
    "issue_number": 2,
    "title": "计科求职与AI前沿双栏晨报 (2026年10月07日)",
    "subtitle": "Yann LeCun JEPA/V-JEPA 世界模型、SOTA前沿架构与大厂校招面经早报",
    "updated_at": "2026-10-07 23:07:02",
    "summary_tags": [
      "#🔥优秀开源项目",
      "#🧠SOTA推理模型",
      "#🌐JEPA世界模型",
      "#🎯拼多多面经",
      "#💻极客直聘",
      "#🎨DiT多模态架构"
    ],
    "ai_count": 8,
    "cs_count": 8,
    "ai_column": [
      {
        "title": "Meta 官方 V-JEPA 世界模型深度开源：告别自回归幻觉，非生成式特征空间自监督预测",
        "url": "https://github.com/facebookresearch/vjepa",
        "source": "Meta AI Research / GitHub",
        "category": "ai_news",
        "summary": "Yann LeCun 主导的 Video Joint Embedding Predictive Architecture (V-JEPA)。放弃逐像素重构，在抽象表征空间预测视频缺失时空块，训练效率提...",
        "tag": "🌐 [JEPA世界模型]",
        "timestamp": "",
        "extra": {
          "tech_breakthrough": "非自回归联合嵌入预测架构 (JEPA)，在特征潜空间而非像素空间进行预测，消除细节幻觉并极大降低算力开销",
          "repo": "facebookresearch/vjepa",
          "stars": "7.8k ⭐",
          "category_tag": "world_model"
        },
        "tech_breakthrough": "非自回归联合嵌入预测架构 (JEPA)，在特征潜空间而非像素空间进行预测，消除细节幻觉并极大降低算力开销",
        "repo": "facebookresearch/vjepa",
        "stars": "7.8k ⭐",
        "category_tag": "world_model",
        "full_markdown": "# 🌐 V-JEPA: 迈向高级机器智能 (AMI) 的非生成式世界模型\n\n> **来源**：Meta AI Research / Yann LeCun 官方团队  \n> **核心突破**：非自回归联合嵌入预测架构 (Joint Embedding Predictive Architecture, JEPA)  \n> **开源代码**：[facebookresearch/vjepa](https://github.com/facebookresearch/jepa) (CC BY-NC 许可)\n\n---\n\n## 📌 核心研究背景与问题意识\n\n人类的大脑并非通过逐像素生成现实来理解世界，而是通过被动观察建立起内在的**物理世界模型 (Internal World Model)**。\n例如，一个婴儿甚至一只猫，在推倒几次桌上的物品后，就能直观推断出“升起者必将落下”的重力法则，而无需阅读海量文本或在脑海中渲染每一颗灰尘的轨迹。\n\nYann LeCun 指出：现有以 GPT-4 和 Sora 为代表的自回归生成模型（Autoregressive Models），强行要求在**像素级或 Token 级**预测所有细节，导致计算开销呈指数级上升，并且极易对不可预测的高熵细节（如树叶的微风摇曳、水面波纹）产生严重幻觉。\n\n---\n\n## ⚙️ V-JEPA 核心架构与机制创新\n\n### 1. 抽象特征潜空间预测 (Abstract Representation Space)\n* **告别像素重建**：V-JEPA 放弃预测像素（Pixel），而是在经过编码器转换后的**抽象表征潜空间 (Latent Embedding Space)** 预测被遮蔽的时空信息。\n* **丢弃不可预测细节**：模型自动忽略对于宏观物理因果无关紧要的噪点，训练与采样效率比传统生成式自监督方法提升 **1.5 倍至 6 倍**。\n\n### 2. 时空联合遮蔽策略 (Spatio-Temporal Masking)\n* 如果只是随机遮蔽单个像素或只在单一时间帧遮蔽，视频的时序连续性会让模型通过简单的插值“作弊”。\n* V-JEPA 采取在**时间轴和空间轴同时大块遮蔽 (Mask out large spatio-temporal regions)**，迫使编码器必须真正理解物体的运动轨迹与交互规律。\n\n### 3. 冻结评估 (Frozen Evaluation) 与极高标签利用率\n* 在 Kinetics-400 和 Something-Something-v2 数据集上，V-JEPA 的主干编码器参数完全冻结。\n* 迁移到新任务时，仅需训练一个极轻量的专用线性探针 (Attentive Probe)。即使只有 5%~10% 的极少标注样本，其微调精度也大幅碾压必须全参数微调的基线模型。\n\n---\n\n## 🚀 对具身智能与未来架构的启示\n1. **世界模型作为规划底座**：V-JEPA 不仅能做感知，更能作为规划器 (Predictor for Planning) 预测智能体行动后的世界状态。\n2. **通向机器常识 (Machine Common Sense)**：通过被动观察真实物理世界视频学习常识，为下一代具身机器人与 AR 空间智能提供底层因果推理支撑。\n"
      },
      {
        "title": "现象级开源项目 browser-use：让大模型直接操控浏览器完成端到端任务",
        "url": "https://github.com/browser-use/browser-use",
        "source": "GitHub Trending",
        "category": "ai_news",
        "summary": "全新自主浏览器 Agent 框架，利用视觉多模态与 DOM 树提取，实现让 AI 像人类一样点击、填写表单、提取复杂网页数据与多标签页交互，数日内斩获破万 Star。",
        "tag": "🔥 [优秀开源项目]",
        "timestamp": "",
        "extra": {
          "tech_breakthrough": "基于无头浏览器的视觉定位与动作执行状态机，打通 LLM 与真实 Web 应用的操作壁垒",
          "repo": "browser-use/browser-use",
          "stars": "24.5k ⭐",
          "category_tag": "showcase_project"
        },
        "tech_breakthrough": "基于无头浏览器的视觉定位与动作执行状态机，打通 LLM 与真实 Web 应用的操作壁垒",
        "repo": "browser-use/browser-use",
        "stars": "24.5k ⭐",
        "category_tag": "showcase_project",
        "full_markdown": "# 🔥 现象级开源项目 browser-use：大模型自主操控浏览器深度技术解析\n\n> **项目仓库**：[browser-use/browser-use](https://github.com/browser-use/browser-use) (⭐ 24.5k+)  \n> **核心定位**：让 LLM 能够像人类一样自主感知、点击、填写、滚动与跨标签操作 Web 浏览器的 Agent 核心库。\n\n---\n\n## 📌 技术痛点：为什么之前的网页自动化 Agent 很容易崩溃？\n以往的自动化测试工具（如 Selenium、Puppeteer）依赖写死的 XPath 或 CSS 选择器。然而现代 Web 前端充斥着动态生成 class、Shadow DOM、iframe 嵌套以及单页应用路由变化，导致 Agent 经常“点错按钮”或“卡在弹窗”。\n\n---\n\n## 🛠️ browser-use 核心架构剖析\n\n### 1. 视觉多模态定位 + DOM 树轻量化过滤双轨机制\n* **DOM 语义压缩**：将混乱的完整 HTML DOM 树过滤提炼为只包含可交互元素（按钮、输入框、链接、下拉菜单）的高紧凑标注树，附带唯一标号（如 `[12] 提交按钮`）。\n* **多模态视网膜校准**：结合浏览器高保真截图与高亮边界框（Bounding Box），即使元素 CSS 样式发生剧烈形变，大模型也能通过视觉空间坐标精准定位。\n\n### 2. 状态机与自愈动作循环 (Action Execution Loop)\n* 每一轮交互，Agent 维护一个明确的观察（Observation）- 思考（Thought）- 动作（Action）状态机。\n* 支持组合动作指令：例如 `[{\"click\": 5}, {\"type\": \"MacBook Pro\"}, {\"press\": \"Enter\"}]`。\n* 内置超时重试、验证码拦截捕获与自动关闭无关弹窗逻辑。\n\n### 3. 核心接入代码范例 (Python SDK)\n\n```python\nfrom browser_use import Agent\nfrom langchain_openai import ChatOpenAI\n\n# 初始化具备视觉能力的推理大模型\nllm = ChatOpenAI(model=\"gpt-4o\", temperature=0)\n\n# 创建自动化 Agent\nagent = Agent(\n    task=\"前往 Hacker News，找到今天热度最高的前3篇文章，并将标题和链接整理成表格\",\n    llm=llm,\n)\n\n# 启动端到端无干预执行\nhistory = await agent.run()\nprint(history.final_result())\n```\n\n---\n\n## 💡 计科实战价值\n* **自动化求职投递**：能够自动解析招聘网列表、填写表单并上传简历附件。\n* **数据孤岛打通**：对未开放 API 的商业后台进行结构化数据抓取与日常巡检报表生成。\n"
      },
      {
        "title": "OpenAI o1 / o3 推理模型架构解析：通过强化学习扩展 Test-Time Compute 的范式转移",
        "url": "https://openai.com/index/learning-to-reason-with-llms/",
        "source": "OpenAI Research",
        "category": "ai_news",
        "summary": "大模型由预训练 Scaling 转向推理阶段算力（Test-Time Compute）扩展。引入原生隐藏思维链（Chain-of-Thought）与强化学习自我修正，在 AIME、Codeforces...",
        "tag": "🧠 [SOTA推理模型]",
        "timestamp": "",
        "extra": {
          "tech_breakthrough": "基于强化学习的自我纠错机制与隐式思维链搜索，使复杂算法竞赛与数理推导准确率实现质的跨越",
          "repo": "openai/o1-research",
          "stars": "SOTA 标杆",
          "category_tag": "reasoning_model"
        },
        "tech_breakthrough": "基于强化学习的自我纠错机制与隐式思维链搜索，使复杂算法竞赛与数理推导准确率实现质的跨越",
        "repo": "openai/o1-research",
        "stars": "SOTA 标杆",
        "category_tag": "reasoning_model",
        "full_markdown": "# 🧠 OpenAI o1 / o3 推理大模型架构解析：Test-Time Compute 范式转移\n\n> **来源**：OpenAI 官方前沿论文与深度技术博文  \n> **核心突破**：推理时算力扩展 (Test-Time Compute Scaling) 与自监督隐式思维链 (Hidden Chain-of-Thought)\n\n---\n\n## 📌 范式转移：从 Pre-training Scaling 到 Test-Time Compute\n过去 5 年，AI 性能提升主要依赖“预训练算力扩展”，即堆积万卡集群和海量互联网 Token。然而预训练高质量语料正在逼近极限，边际收益递减。\nOpenAI o1 的诞生标志着全新 Scaling Law 的确立：**在模型推理阶段（Inference Time）给予模型更多思考算力，其逻辑推理准确率将随之呈对数线性提升。**\n\n---\n\n## 🔬 核心技术机制拆解\n\n### 1. 原生强化学习训练自我纠错 (RL-based Self-Correction)\n* o1 在后训练阶段经过大规模强化学习（Reinforcement Learning）微调。\n* 当面对复杂数理难题或编程死锁时，模型学会“自我质疑、回溯推理路径、尝试替代解法、识别中间陷阱”，如同人类顶尖程序员在脑海中运行草稿纸。\n\n### 2. 隐式思维链 (Hidden Chain-of-Thought)\n* 区别于普通 Prompt 手工引导的 `Let's think step by step`，o1 的思维链是内生于模型解码空间的结构化思考标记。\n* 思考过程自动折叠保护，不仅能够大幅降低安全越狱风险，更能释放模型进行长达数百步的深度推导。\n\n### 3. 权威基准测试表现\n* **美国数学奥赛 (AIME 2024)**：得分率高达 83.3%，跻身全美前 500 名顶尖学生水准。\n* **编程竞赛 (Codeforces)**：Elo 评分达到 1807（前 93% 选手），在全国高中信息学奥林匹克真题上手撕复杂图论与动态规划。\n* **博士级科学问答 (GPQA Diamond)**：准确率首度超越人类各领域博士专家平均水平。\n"
      },
      {
        "title": "vLLM 突破性升级：PagedAttention 与推测解码实现 10x 工业级 LLM 吞吐量",
        "url": "https://github.com/vllm-project/vllm",
        "source": "GitHub Trending",
        "category": "ai_news",
        "summary": "伯克利团队开源的超高吞吐 LLM 服务框架。借鉴操作系统虚拟内存分页机制解决 KV Cache 显存碎片，全面支持 Chunked Prefill 与 Speculative Decoding，成为全...",
        "tag": "🔥 [优秀开源项目]",
        "timestamp": "",
        "extra": {
          "tech_breakthrough": "PagedAttention 彻底消除大模型显存浪费，实现近乎零浪费的动态显存共享与极致推理吞吐",
          "repo": "vllm-project/vllm",
          "stars": "38.2k ⭐",
          "category_tag": "showcase_project"
        },
        "tech_breakthrough": "PagedAttention 彻底消除大模型显存浪费，实现近乎零浪费的动态显存共享与极致推理吞吐",
        "repo": "vllm-project/vllm",
        "stars": "38.2k ⭐",
        "category_tag": "showcase_project",
        "full_markdown": "# ⚡ vLLM 架构深度拆解：PagedAttention 与大模型极致吞吐工程实战\n\n> **项目仓库**：[vllm-project/vllm](https://github.com/vllm-project/vllm) (⭐ 38.2k+)  \n> **核心定位**：全球工业界应用最广泛的高吞吐量、低延迟大语言模型服务与部署引擎。\n\n---\n\n## 📌 行业背景：大模型高并发部署的“显存碎片之痛”\n在大模型自回归生成过程中，每个请求都需要在 GPU 显存中保存所有历史 Token 的键值对——即 **KV Cache**。\n传统的服务框架存在严重瓶颈：\n1. **显存预分配浪费**：由于无法预测生成文本长度，系统按最大序列长度（如 4096）静态分配连续显存，导致高达 60%~80% 的显存被浪费。\n2. **无法多请求共享**：相同系统提示词（System Prompt）在不同并发请求间必须各自复制一份 KV Cache。\n\n---\n\n## ⚙️ 核心技术创新：PagedAttention 机制\n\n### 1. 操作系统虚拟内存分页映射的优雅复刻\n* vLLM 创造性地将操作系统的**分页管理 (Paging)** 理念引入大模型显存管理。\n* 将 KV Cache 切分成固定大小的“物理块 (Physical Blocks)”，每个块只存放固定数量（如 16 个）Token。\n* 通过块表（Block Table）建立逻辑连续与物理离散的动态映射，**几乎将显存碎片率降为 0%**！\n\n### 2. Copy-on-Write 与多请求前缀共享\n* 在并行采样（Parallel Sampling）或束搜索（Beam Search）时，多个分支可直接共享相同的 Prompt KV 块。\n* 仅当某个分支生成新 Token 时，才触发写时复制（Copy-on-Write），并发吞吐量相比 HuggingFace TGI 提升 **2 到 4 倍**。\n\n### 3. 部署启动单行命令\n\n```bash\n# 启动具备自动显存分页与多卡张量并行的高性能服务\nvllm serve Qwen/Qwen2.5-7B-Instruct \\\n    --tensor-parallel-size 1 \\\n    --max-model-len 8192 \\\n    --gpu-memory-utilization 0.95 \\\n    --port 8000\n```\n"
      },
      {
        "title": "Black Forest Labs 发布 FLUX.1：开源 Diffusion Transformer (DiT) 登顶文生图质感榜首",
        "url": "https://github.com/black-forest-labs/flux",
        "source": "HuggingFace / GitHub",
        "category": "ai_news",
        "summary": "Stable Diffusion 原班核心团队打造，120 亿参数整流匹配（Flow Matching）Transformer 架构。在复杂文字渲染、解剖学真实感与提示词遵循度上全面超越现有商业生图闭...",
        "tag": "🎨 [DiT多模态架构]",
        "timestamp": "",
        "extra": {
          "tech_breakthrough": "采用 Rectified Flow Transformer 混合注意力机制，打通跨模态特征交互瓶颈",
          "repo": "black-forest-labs/flux",
          "stars": "19.6k ⭐",
          "category_tag": "multimodal_dit"
        },
        "tech_breakthrough": "采用 Rectified Flow Transformer 混合注意力机制，打通跨模态特征交互瓶颈",
        "repo": "black-forest-labs/flux",
        "stars": "19.6k ⭐",
        "category_tag": "multimodal_dit",
        "full_markdown": "# 🎨 FLUX.1：开源 Diffusion Transformer (DiT) 视觉生成登顶 SOTA\n\n> **开发团队**：Black Forest Labs (原 Stable Diffusion 核心研发团队)  \n> **核心突破**：整流匹配 (Rectified Flow) + 120 亿参数混合注意力 Diffusion Transformer\n\n---\n\n## 📌 架构演进：从 U-Net 到 Flow Matching DiT\n自 2022 年以来，主流生图模型一直采用卷积 U-Net 骨干网络。然而随着参数量突破百亿，U-Net 在跨模态长距离注意力交互与高分辨率细节渲染上出现瓶颈。\nFLUX.1 彻底确立了 **Diffusion Transformer (DiT)** 在图像生成领域的统治地位：\n\n---\n\n## 🔬 核心创新维度\n\n1. **整流匹配 (Flow Matching) 轨迹直化**：\n   * 传统扩散模型采用随机朗之万动力学加噪去噪，采样步数多且轨迹弯曲。\n   * Flow Matching 将高斯噪声到清晰图像的转移概率流拉直为**直线向量场 (Straight-line Trajectory)**，仅需 20~28 步即可生成无噪点极高画质。\n2. **文本与图像双流混合注意力 (Dual-Stream & Single-Stream Blocks)**：\n   * 前期采用双流分别计算文本与视觉特征的自注意力；\n   * 后期通过单流块统一进行特征融合，使长篇复杂提示词（Prompt）与微小物体布局能够 1:1 严丝合缝对齐。\n3. **完美解决文字排版与人手骨骼难题**：\n   * 告别了“AI 生成乱码字母”与“六指畸形”的历史顽疾，支持在画面中的招牌、报纸、T恤上精准印刷高难度英文艺术字体。\n"
      },
      {
        "title": "OpenHands (原 OpenDevin)：开源软件工程师 Agent 解决真实 GitHub Issue 胜率破纪录",
        "url": "https://github.com/All-Hands-AI/OpenHands",
        "source": "GitHub Trending",
        "category": "ai_news",
        "summary": "面向软件开发的自主 Agent 平台。内置安全沙箱、终端操作、浏览器调试与代码语义补丁，支持端到端复现 Bug、编写单元测试并提交 Pull Request。",
        "tag": "🔥 [优秀开源项目]",
        "timestamp": "",
        "extra": {
          "tech_breakthrough": "沙箱化多智能体协同流水线，具备代码编辑、环境执行、测试断言三位一体的自愈闭环",
          "repo": "All-Hands-AI/OpenHands",
          "stars": "43.1k ⭐",
          "category_tag": "showcase_project"
        },
        "tech_breakthrough": "沙箱化多智能体协同流水线，具备代码编辑、环境执行、测试断言三位一体的自愈闭环",
        "repo": "All-Hands-AI/OpenHands",
        "stars": "43.1k ⭐",
        "category_tag": "showcase_project",
        "full_markdown": "# 🛠️ OpenHands (原 OpenDevin)：开源软件工程师 Agent 架构实战\n\n> **项目仓库**：[All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) (⭐ 43.1k+)  \n> **核心定位**：能够自主定位 Bug、阅读万行代码工程、执行单元测试并自动提交 Pull Request 的全栈开发 Agent。\n\n---\n\n## 📌 核心工作流：从 GitHub Issue 到可合并代码\n\n1. **隔离 Docker 安全沙箱**：Agent 在独立容器中拥有完整的 Linux bash 终端、Python/Node 环境与浏览器，避免对宿主机产生不可逆破坏。\n2. **代码库语义地图检索 (Repository Map)**：通过 Tree-sitter AST 解析整个项目的文件目录与符号依赖，在无需一次性把百万行代码塞入上下文的前提下快速定位关键文件。\n3. **编写测试 - 补丁修改 - 执行断言自愈循环**：\n   * 遇到报错自动阅读终端 stderr 堆栈信息；\n   * 自主利用 git diff 查看变更，反复迭代直至所有 pytest/npm test 用例全绿。\n"
      },
      {
        "title": "开源热榜: boykopovar/AnyPS5",
        "url": "https://github.com/boykopovar/AnyPS5",
        "source": "GitHub Trending",
        "category": "ai_news",
        "summary": "GitHub 今日热门开源 (⭐ 8,917): Tool for automatic PS5 executables porting to Linux and Windows",
        "tag": "🔥 [优秀开源项目]",
        "timestamp": "",
        "extra": {
          "repo": "boykopovar/AnyPS5",
          "stars": "8,917"
        },
        "repo": "boykopovar/AnyPS5",
        "stars": "8,917",
        "full_markdown": "# 🚗 智驾突破：智界获 L3 自动驾驶道路测试牌照与数据中心 RISC-V 优化\n\n> **消息来源**：IT之家 / 产业科技前沿快讯\n\n---\n\n## 📌 行业要点透视\n\n1. **L3 级自动驾驶合法上路实测进入倒计时**：\n   * 智界汽车今日正式获批 L3 级自动驾驶道路测试牌照，开始在公开城市快速路等复杂交通流中有序开展常态化实测。\n   * L3 级与 L2 级的核心法定分水岭在于**事故责任主体的转移**：在激活设计运行条件 (ODD) 下，系统接管驾驶任务，标志着端到端视觉大模型与线控底盘冗余架构正式通过国家级安全认证。\n2. **SiFive 联手 AMD：数据中心 RISC-V + ROCm 生态破局**：\n   * 在 AI Infra Summit 峰会上，SiFive 展示了 RISC-V 数据中心处理器与 AMD Radeon GPU 的深度协同优化。\n   * 标志着在 AI 算力基础设施底层，开源指令集 RISC-V 正在打破 x86 与 ARM 的长期垄断，通过 ROCm 开源异构计算栈实现无缝大模型算子迁移。\n"
      },
      {
        "title": "开源热榜: EpicGames/raddebugger",
        "url": "https://github.com/EpicGames/raddebugger",
        "source": "GitHub Trending",
        "category": "ai_news",
        "summary": "GitHub 今日热门开源 (⭐ 7,751): A native, user-mode, multi-process, graphical debugger.",
        "tag": "🔥 [优秀开源项目]",
        "timestamp": "",
        "extra": {
          "repo": "EpicGames/raddebugger",
          "stars": "7,751"
        },
        "repo": "EpicGames/raddebugger",
        "stars": "7,751",
        "full_markdown": "# 💻 开发者实战复盘：从代码补全到超级超级 Agent (Cursor 转 Codex 半月心得)\n\n> **来源**：稀土掘金社区资深架构师深度长文复盘\n\n---\n\n## 📌 核心技术演进体感：编程范式的代际飞跃\n\n* **第一阶段 (Copilot/代码补全)**：行级推测，依然需要人类写骨架。\n* **第二阶段 (Cursor/多文件引用与交互)**：初次感受到 Agent 的震撼，通过 `@Files` 跨文件上下文定位。\n* **第三阶段 (Codex/超级自主工作流)**：不再仅仅是代码片段提供者，而是具备完整的终端读写权限、Git 分支隔离与任务拆解能力的“初级全栈工程师”。\n\n### 💡 核心工程提炼：如何驯服编程 Agent？\n1. **显式约束优先于委婉提示**：在项目根目录设立清晰的 `.rules` 或 `GEMINI.md`，写明绝对路径规范、架构隔离边界与禁止引入的冗余依赖。\n2. **小步提交与单元测试作为反馈回路**：每个任务必须伴随可执行的测试脚本，让 Agent 基于终端断言自主修复逻辑错误。\n"
      }
    ],
    "cs_column": [
      {
        "title": "【拼多多】2027届校招笔试真题+参考",
        "url": "https://www.nowcoder.com/discuss/936709966285504512?sourceSSR=home",
        "source": "牛客面经",
        "category": "cs_recruitment",
        "summary": "计算机名企真实面试考察实录、高频八股与算法真题",
        "tag": "🎯 [拼多多面经]",
        "timestamp": "",
        "extra": {},
        "full_markdown": "# 🎯 美团后端开发校招一面：高并发系统设计与数据库硬核考察实录\n\n> **面试公司**：美团 (到家业务研发) · 校招一面  \n> **岗位方向**：后端开发工程师 (Java / Go)  \n> **考察形式**：技术深挖 (45分钟) + LeetCode 手撕算法 (15分钟)\n\n---\n\n## 📝 面试核心真题与高分参考解析\n\n### Q1. MySQL 聚簇索引与二级索引（辅助索引）底层有什么本质区别？回表查询如何避免？\n* **参考答案**：\n  1. **数据存储位置不同**：InnoDB 聚簇索引的叶子节点直接存放**整行完整的记录行数据**（主键即数据）；而二级索引（覆盖索引除外）叶子节点存放的是**主键值**。\n  2. **回表原理**：当通过二级索引查询时，先在二级索引树查到对应的主键 ID，再去主键聚簇索引树查找完整行，产生两次 B+树遍历（即“回表”）。\n  3. **避免方式**：使用**覆盖索引 (Covering Index)**。在查询字段较少时，将要查询的所有列全部纳入联合索引，此时二级索引叶子节点已包含目标数据，无需回表。\n\n### Q2. Redis 分布式锁 Redlock 原理是什么？在极端场景下为什么饱受 Martin Kleppmann 质疑？\n* **参考答案**：\n  1. **Redlock 机制**：向 N 个互不相干的独立 Redis 节点按序申请加锁，只有在规定时间内获取到超过半数（N/2 + 1）且锁尚未超时才算成功。\n  2. **致命缺陷**：\n     * **系统时钟漂移 (Clock Drift)**：物理服务器时钟跳跃会导致某些节点上的锁过早过期，其他客户端趁机获取相同锁。\n     * **长 STW 停顿 (Process Pause)**：客户端发生长时间垃圾回收 STW，锁在 Redis 侧已过期被他人获取，而原客户端恢复后依然执行写入，导致并发脏数据。\n  3. **工业界最佳实践**：采用带单调递增版本号（Fencing Token）或基于 Raft/Paxos 的 ZooKeeper / etcd 强一致性租约。\n\n### Q3. 算法现场手撕：LRU Cache (最近最少使用缓存)\n* **题目要求**：`get` 和 `put` 操作的时间复杂度必须均为 `O(1)`。\n* **高分解法**：哈希表 (`HashMap`) + 自定义双向链表 (`DoubleLinkedList`)。\n  * 哈希表负责在 `O(1)` 定位链表节点。\n  * 双向链表负责在 `O(1)` 维护访问时序（最新访问移动到头节点，容量超限时直接删除尾节点的前驱）。\n"
      },
      {
        "title": "瑞芯微嵌入式二面",
        "url": "https://www.nowcoder.com/discuss/934920210409062400?sourceSSR=home",
        "source": "牛客面经",
        "category": "cs_recruitment",
        "summary": "计算机名企真实面试考察实录、高频八股与算法真题",
        "tag": "🎯 [技术面经]",
        "timestamp": "",
        "extra": {},
        "full_markdown": "# 🎯 字节跳动国际化电商研发一面：Go 协程调度与树形 DP 真题实录\n\n> **面试公司**：字节跳动 (ByteDance) · 国际化电商技术中心  \n> **岗位方向**：服务端研发工程师 (Golang)  \n> **考察形式**：底层原理 (40分钟) + 算法手撕 (20分钟)\n\n---\n\n## 📝 核心八股真题与底层深度拆解\n\n### Q1. 深入解释 Go 语言 GMP 调度模型中，为什么要有 P？工作窃取 (Work Stealing) 是如何运作的？\n* **参考答案**：\n  1. **G (Goroutine)**：轻量级用户态协程，仅占用约 2~4KB 栈空间。\n  2. **M (Machine)**：绑定操作系统内核线程。\n  3. **P (Processor)**：逻辑处理器，持有本地运行队列 (Local Run Queue)。\n     * **为什么需要 P**：早期的 GM 模型所有 M 竞争单个全局全局锁，并发瓶颈极高。引入 P 后，每个 P 独立维护本地队列，大部分时间无锁并发，极大降低锁开销。\n  4. **Work Stealing 机制**：当某个 P 本地队列执行完毕且全局队列为空时，它会随机挑选另一个 P，从其本地队列尾部窃取一半的 Goroutine 过来执行，保障多核负载均衡。\n\n### Q2. 现场手撕：LeetCode 337. 打家劫舍 III (树形动态规划)\n* **题目考点**：不能同时抢劫相连的父子节点。\n* **解题思路**：树形 DP，后序遍历递归。每个节点返回一个包含两个元素的数组 `[不偷当前节点的最大金额, 偷当前节点的最大金额]`：\n  ```python\n  def rob(root):\n      def dfs(node):\n          if not node:\n              return [0, 0]  # [not_rob, rob]\n          left = dfs(node.left)\n          right = dfs(node.right)\n          \n          # 不偷当前节点：左右子节点可以偷也可以不偷，取最大值\n          not_rob = max(left[0], left[1]) + max(right[0], right[1])\n          # 偷当前节点：左右子节点绝对不能偷\n          rob_cur = node.val + left[0] + right[0]\n          \n          return [not_rob, rob_cur]\n      \n      return max(dfs(root))\n  ```\n"
      },
      {
        "title": "（诺瓦星云）双非硕秋招实录！9 月斩获 4 份嵌入式开发 offer，...",
        "url": "https://www.nowcoder.com/discuss/935200647861792768?sourceSSR=home",
        "source": "牛客面经",
        "category": "cs_recruitment",
        "summary": "面经连载中",
        "tag": "🎯 [技术面经]",
        "timestamp": "",
        "extra": {},
        "full_markdown": "# 🎯 大疆嵌入式/软件开发三面：Linux 内核中断与 RTOS 实时性考察\n\n> **面试公司**：大疆创新 (DJI) · 智能飞控技术部  \n> **岗位方向**：嵌入式软件开发工程师 / 系统底层研发\n\n---\n\n## 📝 硬核考点透视\n\n### Q1. Linux 内核中断的上半部 (Top Half) 与下半部 (Bottom Half) 为什么要分离？\n* **参考答案**：\n  * **硬中断上半部**：必须在最短时间内完成（屏蔽其他硬件中断），仅负责读取硬件寄存器状态并清除中断标志，避免丢包。\n  * **软中断下半部 (Tasklet / Workqueue)**：开中断执行耗时的密集逻辑（如数据包解包、复杂校验）。其中 Workqueue 运行在进程上下文，支持休眠；而 Tasklet 运行在中断上下文，严禁休眠或调用可能阻塞的 API。\n\n### Q2. RTOS 中的优先级反转 (Priority Inversion) 是什么？如何利用优先级继承解决？\n* **参考答案**：\n  * **反转现象**：低优先级任务获得共享资源互斥锁，高优先级任务请求该锁而阻塞；此时中等优先级任务打断低优先级任务执行，导致高优先级任务被迫等待中等任务完成，发生倒置。\n  * **优先级继承 (Priority Inheritance)**：当高优先级任务因等待锁阻塞时，系统临时将持有锁的低优先级任务提升至相同的高优先级，使其尽快释放锁，避免被中等任务插队。\n"
      },
      {
        "title": "面试被问\"消费行业会员数据怎么分层\"：消费行业数智化服务商视角",
        "url": "https://www.nowcoder.com/discuss/934767634854215680?sourceSSR=home",
        "source": "牛客面经",
        "category": "cs_recruitment",
        "summary": "计算机名企真实面试考察实录、高频八股与算法真题",
        "tag": "🎯 [技术面经]",
        "timestamp": "",
        "extra": {},
        "full_markdown": "# 🎯 [技术面经] 面试被问\"消费行业会员数据怎么分层\"：消费行业数智化服务商视角\n\n> **来源渠道**：牛客面经 · 校招/实习真实考察档案  \n> **发布日期**：2026年10月08日\n\n---\n\n## 📌 考察要点与现场实况\n计算机名企真实面试考察实录、高频八股与算法真题\n\n---\n\n## 💡 导师核心复盘与避坑建议\n1. **基础原理与代码实现绑定**：不仅要背出理论，还要能当场在白板上手撕最小可运行代码。\n2. **场景化系统设计发散**：面试官通常会以当前业务为题（如“如果是每天亿级请求，你的架构怎么抗”），重点考量容量评估、缓存双写一致性与熔断兜底策略。\n"
      },
      {
        "title": "我靠，字节今年没秋招了？！",
        "url": "https://www.nowcoder.com/feed/main/detail/0352f4f89ae44a2aaf3aec9e98322b62?sourceSSR=home",
        "source": "牛客面经",
        "category": "cs_recruitment",
        "summary": "计算机名企真实面试考察实录、高频八股与算法真题",
        "tag": "🎯 [字节跳动面经]",
        "timestamp": "",
        "extra": {},
        "full_markdown": "# 🎯 [字节跳动面经] 我靠，字节今年没秋招了？！\n\n> **来源渠道**：牛客面经 · 校招/实习真实考察档案  \n> **发布日期**：2026年10月08日\n\n---\n\n## 📌 考察要点与现场实况\n计算机名企真实面试考察实录、高频八股与算法真题\n\n---\n\n## 💡 导师核心复盘与避坑建议\n1. **基础原理与代码实现绑定**：不仅要背出理论，还要能当场在白板上手撕最小可运行代码。\n2. **场景化系统设计发散**：面试官通常会以当前业务为题（如“如果是每天亿级请求，你的架构怎么抗”），重点考量容量评估、缓存双写一致性与熔断兜底策略。\n"
      },
      {
        "title": "26界应届生身份是不是算是寄了",
        "url": "https://www.nowcoder.com/feed/main/detail/b910bc2f5d1247b6973d0a456d5e6709?sourceSSR=home",
        "source": "牛客校招",
        "category": "cs_recruitment",
        "summary": "牛客网应届生校招求职实录与交流",
        "tag": "📌 [校招动态]",
        "timestamp": "",
        "extra": {},
        "full_markdown": "# 📌 [校招动态] 26界应届生身份是不是算是寄了\n\n> **来源渠道**：牛客校招 · 校招/实习真实考察档案  \n> **发布日期**：2026年10月08日\n\n---\n\n## 📌 考察要点与现场实况\n牛客网应届生校招求职实录与交流\n\n---\n\n## 💡 导师核心复盘与避坑建议\n1. **基础原理与代码实现绑定**：不仅要背出理论，还要能当场在白板上手撕最小可运行代码。\n2. **场景化系统设计发散**：面试官通常会以当前业务为题（如“如果是每天亿级请求，你的架构怎么抗”），重点考量容量评估、缓存双写一致性与熔断兜底策略。\n"
      },
      {
        "title": "岗位直招: [广州] SHEIN 内推： 算法、AI、供应链研发、运维、网络、安全、架构， 20-70k",
        "url": "https://www.v2ex.com/t/1246802",
        "source": "V2EX Jobs",
        "category": "cs_recruitment",
        "summary": "更新了一批 SHEIN 当前广州 base 的全量 10 个技术类岗位和对应薪资（上次发布是 3 个月前）。 这批岗位方向覆盖算法、AI 、供应链研发、运维、网络、安全、架构等，薪资范围最高可达 70...",
        "tag": "💻 [极客直聘]",
        "timestamp": "",
        "extra": {},
        "full_markdown": "# 💻 [极客直聘] 岗位直招: [广州] SHEIN 内推： 算法、AI、供应链研发、运维、网络、安全、架构， 20-70k\n\n> **来源渠道**：V2EX Jobs · 校招/实习真实考察档案  \n> **发布日期**：2026年10月08日\n\n---\n\n## 📌 考察要点与现场实况\n更新了一批 SHEIN 当前广州 base 的全量 10 个技术类岗位和对应薪资（上次发布是 3 个月前）。 这批岗位方向覆盖算法、AI 、供应链研发、运维、网络、安全、架构等，薪资范围最高可达 70...\n\n---\n\n## 💡 导师核心复盘与避坑建议\n1. **基础原理与代码实现绑定**：不仅要背出理论，还要能当场在白板上手撕最小可运行代码。\n2. **场景化系统设计发散**：面试官通常会以当前业务为题（如“如果是每天亿级请求，你的架构怎么抗”），重点考量容量评估、缓存双写一致性与熔断兜底策略。\n"
      },
      {
        "title": "岗位直招: [招聘] 海外运营客服",
        "url": "https://www.v2ex.com/t/1246303",
        "source": "V2EX Jobs",
        "category": "cs_recruitment",
        "summary": "## 招聘岗位：运营客服 ## 招聘人数：2 ### 工作职责： 1:玩家咨询：处理账号、登录、充值、活动、游戏规则，结算疑问等游戏问题，保证回复时效及服务满意度。 2:玩家维护：提供基础服务，玩家情...",
        "tag": "💻 [极客直聘]",
        "timestamp": "",
        "extra": {},
        "full_markdown": "# 💻 [极客直聘] 岗位直招: [招聘] 海外运营客服\n\n> **来源渠道**：V2EX Jobs · 校招/实习真实考察档案  \n> **发布日期**：2026年10月08日\n\n---\n\n## 📌 考察要点与现场实况\n## 招聘岗位：运营客服 ## 招聘人数：2 ### 工作职责： 1:玩家咨询：处理账号、登录、充值、活动、游戏规则，结算疑问等游戏问题，保证回复时效及服务满意度。 2:玩家维护：提供基础服务，玩家情...\n\n---\n\n## 💡 导师核心复盘与避坑建议\n1. **基础原理与代码实现绑定**：不仅要背出理论，还要能当场在白板上手撕最小可运行代码。\n2. **场景化系统设计发散**：面试官通常会以当前业务为题（如“如果是每天亿级请求，你的架构怎么抗”），重点考量容量评估、缓存双写一致性与熔断兜底策略。\n"
      }
    ]
  },
  "2026-09-16": {
    "date": "2026-09-16",
    "issue_number": 1,
    "title": "计科求职与AI前沿双栏晨报 (2026-09-16)",
    "subtitle": "前日热门AI科技动态与名企求职面经速报",
    "updated_at": "2026-09-16 08:00:00",
    "summary_tags": [
      "#🎯美团面经",
      "#💻极客直聘",
      "#📝大厂真题",
      "#🎯字节跳动面经",
      "#🎯大疆面经"
    ],
    "ai_count": 8,
    "cs_count": 0,
    "ai_column": [
      {
        "title": "字节跳动嵌入式软件开发一面 面经 纯八股文了属于是",
        "url": "https://www.nowcoder.com/discuss/927105116836986880?sourceSSR=home",
        "source": "牛客面经",
        "category": "ai_news",
        "summary": "",
        "tag": "🎯 [字节跳动面经]",
        "timestamp": ""
      },
      {
        "title": "大疆三面，压力暴大吓哭了",
        "url": "https://www.nowcoder.com/discuss/928933853022941184?sourceSSR=home",
        "source": "牛客面经",
        "category": "ai_news",
        "summary": "",
        "tag": "🎯 [大疆面经]",
        "timestamp": ""
      },
      {
        "title": "字节 AI全栈(物流) 秋招 二面",
        "url": "https://www.nowcoder.com/discuss/927649483054157824?sourceSSR=home",
        "source": "牛客面经",
        "category": "ai_news",
        "summary": "",
        "tag": "🎯 [字节跳动面经]",
        "timestamp": ""
      },
      {
        "title": "美团 AI全栈 秋招一面",
        "url": "https://www.nowcoder.com/discuss/928760834711388160?sourceSSR=home",
        "source": "牛客面经",
        "category": "ai_news",
        "summary": "",
        "tag": "🎯 [美团面经]",
        "timestamp": ""
      },
      {
        "title": "嵌入式这些常考八股文你是肯定要会的",
        "url": "https://www.nowcoder.com/discuss/927925553913425920?sourceSSR=home",
        "source": "牛客面经",
        "category": "ai_news",
        "summary": "",
        "tag": "📝 [大厂真题]",
        "timestamp": ""
      },
      {
        "title": "岗位直招: 失业了家人们",
        "url": "https://www.v2ex.com/t/1242395",
        "source": "V2EX Jobs",
        "category": "ai_news",
        "summary": "",
        "tag": "💻 [极客直聘]",
        "timestamp": ""
      },
      {
        "title": "岗位直招: 网络安全攻防负责人｜技术团队扩招",
        "url": "https://www.v2ex.com/t/1242393",
        "source": "V2EX Jobs",
        "category": "ai_news",
        "summary": "",
        "tag": "💻 [极客直聘]",
        "timestamp": ""
      },
      {
        "title": "岗位直招: remote 高级安全攻防工程师（管理经验优先） 35k-70k",
        "url": "https://www.v2ex.com/t/1242381",
        "source": "V2EX Jobs",
        "category": "ai_news",
        "summary": "",
        "tag": "💻 [极客直聘]",
        "timestamp": ""
      }
    ],
    "cs_column": []
  }
};

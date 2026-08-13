# 启迪词元云管理

AI 大模型 API 管理平台 — 基于开源项目 [New API](https://github.com/QuantumNous/new-api) 二次开发，支持三级用户体系（运营/代理/用户）、折扣定价矩阵、人工充值工单流程。

## 项目结构

```
.
├── index.html                # 核心网页文件（网站入口）
├── css/
│   └── style.css             # 样式文件（页面外观）
├── js/
│   └── main.js               # 脚本文件（交互功能）
├── .trae/documents/          # 设计文档
│   ├── new-api二次开发-原型优化方案.md   # 整体架构与改造方案
│   └── 联系记录功能计划.md               # 开票/退款联系工单设计
├── new-api-full-linux-package-*/  # Linux 部署包
│   ├── config/               # Docker 配置
│   │   ├── docker-compose.yml
│   │   └── .env              # 环境变量（需自行配置，见 .env.example）
│   ├── scripts/
│   │   └── deploy-linux.sh   # 一键部署脚本
│   ├── images/               # Docker 镜像（.tar，已 gitignore）
│   └── volumes/              # 运行时数据（已 gitignore）
├── .env.example              # 环境变量模板
├── .gitignore
└── README.md                 # 项目说明
```

## 功能概览

### 三级用户体系

| 角色 | 说明 | 数据权限 |
|------|------|---------|
| 运营 | 系统管理员 | 全部数据 |
| 代理 | 合作商 | 仅名下用户数据 |
| 用户 | 普通用户 | 仅自己的数据 |

### 核心功能模块

- **数据看板** — 各角色独立的数据概览（消费趋势、用户排行、模型分析）
- **模型广场** — 模型列表展示、类型筛选、API 调用文档
- **使用日志** — API 调用记录查看（支持时间筛选、分页）
- **名下用户** — 代理管理名下用户、设置模型折扣
- **充值工单** — 银行转账充值 + 人工审核流程
- **联系工单** — 开票/退款联系工单管理
- **财务中心** — 充款设置、开票/退款说明配置
- **模型配置** — 模型管理、折扣阈值设置
- **消息通知** — 模型消息、工单消息、财务消息（按角色区分）
- **API Keys** — 用户自行管理 API 密钥
- **总排行榜** — 用户消费排行

## 快速开始

### 方式一：查看原型

直接在浏览器中打开 `index.html`，通过登录页面选择角色体验：

- 运营账号：`admin`
- 代理账号：`partner_lisi`
- 用户账号：`zhangsan`

### 方式二：部署 New API 服务

```bash
# 1. 进入部署包目录
cd new-api-full-linux-package-20260721-1720

# 2. 复制并编辑环境变量
cp config/.env .env
# 编辑 .env 修改密码

# 3. 执行部署脚本
chmod +x scripts/deploy-linux.sh
./scripts/deploy-linux.sh

# 4. 访问服务
# http://127.0.0.1:3000
```

## 技术栈

### 前端原型

- HTML / CSS / JavaScript（标准三文件分离结构）
- Tailwind CSS 风格的 CSS 变量主题
- SVG 图表（折线图、柱状图、饼图）
- 响应式布局

### New API 后端

- Docker Compose 部署（PostgreSQL 16 + Redis 7 + New API）
- 基于 [QuantumNous/new-api](https://github.com/QuantumNous/new-api)

## 部署到 GitHub

1. 在 GitHub 创建新仓库
2. 初始化 Git 并推送：

```bash
git init
git add .
git commit -m "Initial commit: 启迪词元云管理原型与部署配置"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

> 注意：Docker 镜像（.tar）、数据库导出（.dump/.sql）、日志文件、音频文件等大文件已通过 `.gitignore` 排除。

## 文档

- [New API 二次开发 — 原型/UI 层面优化方案](.trae/documents/new-api二次开发-原型优化方案.md)
- [开票/退款联系工单功能计划](.trae/documents/联系记录功能计划.md)

## License

基于 [QuantumNous/new-api](https://github.com/QuantumNous/new-api) 二次开发，遵循原项目开源协议。

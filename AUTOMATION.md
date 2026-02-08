# 自动化部署配置指南

本文档说明如何配置GitHub Actions实现自动化部署到Vercel。

---

## 🚀 自动化部署流程

```
Push to GitHub
    ↓
GitHub Actions触发
    ↓
├─ CI Check (lint + typecheck + build)
└─ Deploy to Vercel
    ├─ Preview Deployment (PR)
    └─ Production Deployment (main/master)
```

---

## 📋 GitHub Actions工作流

### 1. CI工作流 (`.github/workflows/ci.yml`)

**触发条件**：Push或PR到main/master分支

**执行步骤**：
1. Checkout代码
2. 安装Node.js 22 + pnpm
3. 安装依赖
4. Lint检查
5. 类型检查
6. 格式检查
7. 构建项目

**作用**：确保代码质量，阻止坏代码合并

---

### 2. Preview部署工作流 (`.github/workflows/deploy-preview.yml`)

**触发条件**：PR到main/master分支

**执行步骤**：
1. Checkout代码
2. 安装Node.js 22 + pnpm
3. 安装依赖
4. 构建项目
5. 部署到Vercel Preview环境

**作用**：每个PR自动部署预览版本

**输出**：在PR中自动评论预览URL

---

### 3. 生产部署工作流 (`.github/workflows/deploy-vercel.yml`)

**触发条件**：Push到main/master分支

**执行步骤**：
1. Checkout代码
2. 安装Node.js 22 + pnpm
3. 安装依赖
4. 构建项目
5. 部署到Vercel生产环境

**作用**：合并到主分支后自动部署生产版本

---

## 🔧 配置步骤

### 步骤1：获取Vercel Token

1. 登录Vercel: https://vercel.com/dashboard
2. 进入Settings → Tokens
3. 点击"Create Token"
4. 输入名称（如：GitHub Actions）
5. 复制token（只会显示一次）

### 步骤2：获取Organization ID和Project ID

**方法1：通过Vercel Dashboard**

1. 进入项目Settings → General
2. 找到"Project ID"并复制
3. 进入Organization Settings → General
4. 找到"Organization ID"并复制

**方法2：通过Vercel CLI**

```bash
# 登录Vercel
vercel login

# 获取项目信息
vercel ls

# 输出包含：
# - <org_id>/<project_name>
```

### 步骤3：配置GitHub Secrets

1. 进入GitHub仓库：https://github.com/clawdbothe/Orderly-vibe-creator/settings/secrets/actions
2. 点击"New repository secret"
3. 添加以下secrets：

| Secret名称 | 值 | 必需 |
|-----------|-----|-------|
| `VERCEL_TOKEN` | Vercel Token | ✅ |
| `VERCEL_ORG_ID` | Vercel Org ID | ✅ |
| `VERCEL_PROJECT_ID` | Vercel Project ID | ✅ |

### 步骤4：配置Vercel环境变量

**注意**：环境变量需要在Vercel Dashboard中单独配置，不在GitHub Secrets中。

1. 进入Vercel项目Settings → Environment Variables
2. 添加以下变量：

| Variable | 值 | 环境 |
|----------|-----|------|
| `LLM_PROVIDER` | `openai` | All |
| `OPENAI_API_KEY` | `sk-xxx` | Production |
| `GLM_API_KEY` | `xxx` | Production |
| `MINIMAX_API_KEY` | `xxx` | Production |

---

## 🔄 完整自动化流程

### 场景1：开发新功能

```
1. 创建feature分支
   git checkout -b feature/new-feature

2. 开发代码
   ...

3. 提交并push
   git add .
   git commit -m "Add new feature"
   git push -u origin feature/new-feature

4. 创建PR
   在GitHub上创建feature/main的PR

5. ✅ GitHub Actions自动触发
   - CI工作流检查代码质量
   - Preview部署工作流创建预览环境

6. 📝 PR中自动评论预览URL
   - Review预览版本
   - 确认无误后合并

7. 🚀 合并后自动部署生产
```

---

### 场景2：修复Bug

```
1. 从main创建hotfix分支
   git checkout -b hotfix/fix-bug

2. 修复代码并测试
   ...

3. Push并创建PR
   git push -u origin hotfix/fix-bug

4. ✅ 自动CI检查
   - 如果Lint或Typecheck失败，PR无法合并

5. ✅ 自动预览部署
   - Review预览版本

6. 🚀 合并后自动部署生产
```

---

### 场景3：Hotfix生产问题

```
1. 直接在main分支修复
   git checkout main
   ... 修改代码

2. Push到main
   git push origin main

3. ✅ 自动触发生产部署
   - 无需手动操作
   - 通常1-2分钟完成
```

---

## 📊 GitHub Actions状态

### 查看Actions

在GitHub仓库页面：
1. 点击"Actions"标签
2. 查看所有workflow运行记录
3. 点击任意workflow查看详细日志

### 状态图标

在PR和commit中会显示状态图标：

| 图标 | 含义 |
|------|------|
| ✅ | CI通过 / 部署成功 |
| ❌ | CI失败 / 部署失败 |
| 🟡 | CI运行中 / 部署中 |
| ⚪ | 待运行 |

---

## 🐛 故障排查

### CI失败怎么办？

1. **Lint错误**：
   ```bash
   # 本地运行
   pnpm run lint
   # 修复错误后重新提交
   ```

2. **Typecheck错误**：
   ```bash
   # 本地运行
   pnpm run typecheck
   # 修复类型错误
   ```

3. **Build失败**：
   ```bash
   # 本地构建
   pnpm run build:vercel
   # 检查构建日志
   ```

### 部署失败怎么办？

1. **检查Vercel Token**：
   - Token是否过期？
   - 在GitHub Secrets中重新配置

2. **检查Vercel Project ID**：
   - 项目名称是否匹配？
   - Org ID是否正确？

3. **查看部署日志**：
   - 进入Vercel Dashboard
   - 查看Deployments
   - 查看详细错误日志

### Preview部署失败但生产可以？

- 检查`.vercelignore`是否忽略必要文件
- 检查构建命令是否一致
- 查看GitHub Actions日志

---

## 🚀 快速开始

### 第一次设置（仅需一次）

```bash
# 1. 获取Vercel Token
# 访问: https://vercel.com/dashboard/tokens

# 2. 获取项目ID
# vercel ls

# 3. 配置GitHub Secrets
# 在: https://github.com/clawdbothe/Orderly-vibe-creator/settings/secrets/actions
```

### 日常使用

```bash
# 开发新功能
git checkout -b feature/xxx
# ... 开发 ...
git commit -am "Add xxx"
git push origin feature/xxx
# 创建PR，自动触发CI和预览部署

# 合并后自动部署生产
# 无需任何操作！
```

---

## 📝 自定义配置

### 修改触发条件

编辑`.github/workflows/*.yml`文件：

```yaml
on:
  push:
    branches:
      - main
      - staging  # 添加新分支
  pull_request:
    branches: [main]
```

### 修改Node.js版本

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'  # 修改为20
```

### 添加部署后通知

在workflow最后添加：

```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    text: 'Deployed to Vercel: ${{ steps.deploy.outputs.url }}'
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

---

## 📚 相关文档

- [GitHub Actions文档](https://docs.github.com/en/actions)
- [Vercel GitHub集成](https://vercel.com/docs/deployments/overview)
- [项目部署指南](./DEPLOYMENT.md)

---

**配置完成后，每次push都会自动部署！** 🚀
